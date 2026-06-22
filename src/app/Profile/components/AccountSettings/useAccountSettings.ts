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

const MOCK_DATA: AccountSettingsData = {
  emailNotifications: true,
  productUpdates: true,
  billingNotifications: false,
  lightTheme: true,
};

export function useAccountSettings(): UseAccountSettingsReturn {
  const [data, setData] = useState<AccountSettingsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // GET /api/settings/notifications
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    // TODO: replace with real fetch
    // fetch('/api/settings/notifications', { signal: controller.signal })
    //   .then(r => r.json()).then(setData).catch(...).finally(...)

    const timer = setTimeout(() => { setData(MOCK_DATA); setLoading(false); }, 300);
    return () => { controller.abort(); clearTimeout(timer); };
  }, []);

  // PATCH /api/settings/notifications
  const updateSetting = useCallback(async (key: keyof AccountSettingsData, value: boolean) => {
    // Optimistic update
    setData(prev => prev ? { ...prev, [key]: value } : prev);
    try {
      // TODO: await fetch('/api/settings/notifications', { method: 'PATCH', body: JSON.stringify({ [key]: value }) })
      await new Promise(r => setTimeout(r, 200));
    } catch {
      // Rollback on error
      setData(prev => prev ? { ...prev, [key]: !value } : prev);
    }
  }, []);

  return { data, loading, error, updateSetting };
}
