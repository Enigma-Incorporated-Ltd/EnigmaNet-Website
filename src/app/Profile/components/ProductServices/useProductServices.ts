import { useCallback, useEffect, useState } from 'react';

export interface Plan {
  id: string;
  name: string;
  desc: string;
}

export interface Device {
  id: number;
  name: string;
  status: 'Connected' | 'Disconnected';
}

export interface ProductServicesData {
  productName: string;
  currentPlanId: string;
  plans: Plan[];
  devices: Device[];
  startDate: string;
  renewalDate: string;
  devicesUsed: number;
  devicesTotal: number;
  productStatus: string;
  productStatusText: 'Active' | 'Inactive';
}

interface UseProductServicesReturn {
  data: ProductServicesData | null;
  loading: boolean;
  error: string | null;
  updatePlan: (planId: string) => Promise<void>;
  saving: boolean;
}

const MOCK_PLANS: Plan[] = [
  { id: 'lite', name: 'EDGE Lite', desc: 'Entry-level connectivity for basic tools' },
  { id: 'max',  name: 'EDGE Max',  desc: 'Maximum capacity for high-density workloads' },
  { id: 'pro',  name: 'EDGE Pro',  desc: 'Advanced performance for small teams' },
];

const MOCK_DEVICES: Device[] = [
  { id: 1, name: 'Workstation Desktop - PDX', status: 'Connected' },
  { id: 2, name: 'Mobile Gateway 04',          status: 'Connected' },
];

const MOCK_DATA: ProductServicesData = {
  productName: 'Enigma EDGE',
  currentPlanId: 'pro',
  plans: MOCK_PLANS,
  devices: MOCK_DEVICES,
  startDate: '12 Jul 2025',
  renewalDate: '12 Jul 2026',
  devicesUsed: 4,
  devicesTotal: 5,
  productStatus: 'All systems active',
  productStatusText: 'Active',
};

export function useProductServices(): UseProductServicesReturn {
  const [data, setData] = useState<ProductServicesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, _setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  // GET /api/subscription
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    // TODO: replace with real fetch
    // fetch('/api/subscription', { signal: controller.signal })
    //   .then(r => r.json()).then(setData).catch(...).finally(...)

    const timer = setTimeout(() => { setData(MOCK_DATA); setLoading(false); }, 400);
    return () => { controller.abort(); clearTimeout(timer); };
  }, []);

  // PATCH /api/subscription
  const updatePlan = useCallback(async (planId: string) => {
    setSaving(true);
    try {
      // TODO: await fetch('/api/subscription', { method: 'PATCH', body: JSON.stringify({ planId }) })
      await new Promise(r => setTimeout(r, 500));
      setData(prev => prev ? { ...prev, currentPlanId: planId } : prev);
    } finally {
      setSaving(false);
    }
  }, []);

  return { data, loading, error, updatePlan, saving };
}
