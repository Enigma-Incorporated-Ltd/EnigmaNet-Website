import { useAuth } from '@/hooks/useAuth';
import { updateThemePreference } from '@/services/authApi';
import { useCallback, useEffect, useState } from 'react';

export interface AccountSettingsData {
  emailNotifications: boolean;
  productUpdates: boolean;
  billingNotifications: boolean;
  lightTheme: boolean;
}

interface UseAccountSettingsReturn {
  data: AccountSettingsData | null;
  loading: boolean;
  error: string | null;
  updateSetting: (key: keyof AccountSettingsData, value: boolean) => Promise<void>;
}

export function useAccountSettings(): UseAccountSettingsReturn {
  const { session } = useAuth();
  const [data, setData] = useState<AccountSettingsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error] = useState<string | null>(null);

  // Initialise from session theme + localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') ?? 'dark';
    setData({
      emailNotifications: true,
      productUpdates: true,
      billingNotifications: false,
      lightTheme: storedTheme === 'light',
    });
    setLoading(false);
  }, []);

  const updateSetting = useCallback(
    async (key: keyof AccountSettingsData, value: boolean) => {
      // Optimistic update
      setData(prev => (prev ? { ...prev, [key]: value } : prev));

      if (key === 'lightTheme') {
        const theme = value ? 'light' : 'dark';

        // Apply theme to the website immediately
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-bs-theme', theme);
        window.dispatchEvent(new Event('themeChange'));

        // Call API — PATCH /users/profile/:userId  { theme: "light" | "dark" }
        const userId = session?.user.profileUserId ?? session?.user.userId;
        if (userId) {
          try {
            await updateThemePreference(userId, theme);
          } catch {
            // Rollback on API error
            const prev = value ? 'dark' : 'light';
            localStorage.setItem('theme', prev);
            document.documentElement.setAttribute('data-bs-theme', prev);
            window.dispatchEvent(new Event('themeChange'));
            setData(p => (p ? { ...p, [key]: !value } : p));
          }
        }
      }
    },
    [session],
  );

  return { data, loading, error, updateSetting };
}
