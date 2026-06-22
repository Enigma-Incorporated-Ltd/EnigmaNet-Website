import { useCallback, useEffect, useState } from 'react';

export interface CustomerProfileData {
  fullName: string;
  email: string;
  currentPlan: string;
  accountStatus: 'Active' | 'Inactive' | 'Suspended';
  userId: string;
  companyName: string;
  avatarInitials: string;
}

interface UseCustomerProfileReturn {
  data: CustomerProfileData | null;
  loading: boolean;
  error: string | null;
  updateProfile: (updates: Partial<Pick<CustomerProfileData, 'fullName'>>, avatarFile?: File | null) => Promise<void>;
  saving: boolean;
}

// Default mock data — replace with real API endpoint
const MOCK_DATA: CustomerProfileData = {
  fullName: 'Sarah Johnson',
  email: 's.johnson@acmecorp.com',
  currentPlan: 'EDGE Pro',
  accountStatus: 'Active',
  userId: 'USR-004821',
  companyName: 'Company name',
  avatarInitials: 'SJ',
};

export function useCustomerProfile(): UseCustomerProfileReturn {
  const [data, setData] = useState<CustomerProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  // GET /api/profile
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    // TODO: replace with real fetch
    // fetch('/api/profile', { signal: controller.signal })
    //   .then(r => r.json())
    //   .then(json => setData(json))
    //   .catch(err => { if (err.name !== 'AbortError') setError(err.message); })
    //   .finally(() => setLoading(false));

    // Mock: simulate network delay
    const timer = setTimeout(() => {
      setData(MOCK_DATA);
      setLoading(false);
    }, 400);

    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, []);

  // PATCH /api/profile
  const updateProfile = useCallback(
    async (updates: Partial<Pick<CustomerProfileData, 'fullName'>>, avatarFile?: File | null) => {
      setSaving(true);
      try {
        // TODO: replace with real fetch
        // const body = new FormData();
        // if (updates.fullName) body.append('fullName', updates.fullName);
        // if (avatarFile) body.append('avatar', avatarFile);
        // await fetch('/api/profile', { method: 'PATCH', body });

        // Mock: apply locally
        await new Promise(resolve => setTimeout(resolve, 500));
        setData(prev =>
          prev
            ? {
                ...prev,
                ...updates,
                avatarInitials: updates.fullName
                  ? updates.fullName
                      .split(' ')
                      .map(w => w[0])
                      .join('')
                      .toUpperCase()
                      .slice(0, 2)
                  : prev.avatarInitials,
              }
            : prev,
        );
      } finally {
        setSaving(false);
      }
    },
    [],
  );

  return { data, loading, error, updateProfile, saving };
}
