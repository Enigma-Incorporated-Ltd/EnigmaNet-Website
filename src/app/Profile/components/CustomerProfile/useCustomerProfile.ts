import { useAuth } from '@/hooks/useAuth';
import { getUserProfile, updateUserProfile } from '@/services/authApi';
import { useCallback, useEffect, useState } from 'react';

// Compress image to reduce base64 size (handles server truncation limit)
function compressImage(
  dataUrl: string,
  resolve: (value: string) => void,
  reject: (error: Error) => void,
): void {
  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement('canvas');
    const maxSize = 300; // Smaller size = smaller base64
    let width = img.width;
    let height = img.height;

    if (width > height) {
      if (width > maxSize) {
        height = Math.round((height * maxSize) / width);
        width = maxSize;
      }
    } else {
      if (height > maxSize) {
        width = Math.round((width * maxSize) / height);
        height = maxSize;
      }
    }

    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      reject(new Error('Failed to get canvas context'));
      return;
    }
    ctx.drawImage(img, 0, 0, width, height);
    // Ultra-compress to JPEG quality 0.6 for very small base64 (~1.5-2KB)
    resolve(canvas.toDataURL('image/jpeg', 0.6));
  };
  img.onerror = () => reject(new Error('Failed to load image'));
  img.src = dataUrl;
}

export interface CustomerProfileData {
  fullName: string;
  email: string;
  currentPlan: string;
  accountStatus: 'Active' | 'Inactive' | 'Suspended';
  userId: string;
  formattedUserId: string;
  companyName: string;
  avatarInitials: string;
  profileImageUrl: string;
  jobTitle: string;
  role: string;
}

interface UseCustomerProfileReturn {
  data: CustomerProfileData | null;
  loading: boolean;
  error: string | null;
  updateProfile: (
    updates: Partial<Pick<CustomerProfileData, 'fullName'>>,
    avatarFile?: File | null,
  ) => Promise<void>;
  saving: boolean;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .map(w => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function useCustomerProfile(): UseCustomerProfileReturn {
  const { session } = useAuth();
  const [data, setData] = useState<CustomerProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  // GET /Users/profile/:userId
  useEffect(() => {
    const userId = session?.user.profileUserId ?? session?.user.userId;
    if (!userId) {
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    setLoading(true);
    setError(null);

    getUserProfile(userId)
      .then(res => {
        const p = res.profile;
        const fullName = p.displayName || `${p.firstName} ${p.lastName}`.trim();
        setData({
          fullName,
          email: p.email,
          currentPlan: p.planName,
          accountStatus: p.isActive ? 'Active' : 'Inactive',
          userId: p.userId,
          formattedUserId: p.formattedUserId,
          companyName: p.workspaceContext?.organisation ?? '',
          avatarInitials: getInitials(fullName),
          // prefer API value; fall back to what was cached in session at login
          profileImageUrl: p.profileImageUrl || session?.user.profileImageUrl || '',
          jobTitle: p.jobTitle ?? '',
          role: p.role ?? '',
        });
      })
      .catch(err => {
        if (!controller.signal.aborted) {
          setError(err instanceof Error ? err.message : 'Failed to load profile.');
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [session?.user.profileUserId, session?.user.userId]);

  // PATCH /users/profile/:userId
  const updateProfile = useCallback(
    async (
      updates: Partial<Pick<CustomerProfileData, 'fullName'>>,
      avatarFile?: File | null,
    ) => {
      const userId = session?.user.profileUserId ?? session?.user.userId;
      if (!userId) return;

      setSaving(true);
      try {
        // Convert avatar file to base64 if provided (with compression for better compatibility)
        let profileImageUrl: string | undefined;
        if (avatarFile) {
          profileImageUrl = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = e => {
              const dataUrl = e.target?.result as string;
              // Compress image to reduce base64 size
              compressImage(dataUrl, resolve, reject);
            };
            reader.onerror = reject;
            reader.readAsDataURL(avatarFile);
          });
        }

        const res = await updateUserProfile(userId, {
          displayName: updates.fullName ?? data?.fullName ?? '',
          ...(profileImageUrl ? { profileImageUrl } : {}),
        });

        // Warn if image was truncated by server
        if (profileImageUrl && res.profile.profileImageUrl) {
          const sentLength = profileImageUrl.length;
          const receivedLength = res.profile.profileImageUrl.length;
          if (receivedLength < sentLength * 0.9) {
            console.warn(
              `⚠️ Server truncated image: sent ${sentLength} chars, got back ${receivedLength} chars.`,
              'Image may not display correctly. Consider uploading to a separate file storage endpoint.',
            );
          }
        }

        // Update local state from API response
        const p = res.profile;
        const newName = p.displayName || `${p.firstName} ${p.lastName}`.trim();
        setData(prev =>
          prev
            ? {
                ...prev,
                fullName: newName,
                avatarInitials: getInitials(newName),
                profileImageUrl: p.profileImageUrl ?? prev.profileImageUrl,
              }
            : prev,
        );
      } finally {
        setSaving(false);
      }
    },
    [session, data?.fullName],
  );

  return { data, loading, error, updateProfile, saving };
}
