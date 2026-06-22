import { useEffect, useState } from 'react';

export interface Invoice {
  id: string;
  date: string;
  amount: string;
  status: 'Paid' | 'Unpaid' | 'Overdue';
}

export interface BillingData {
  recentInvoices: Invoice[];
  allInvoices: Invoice[];
  isUpToDate: boolean;
  currentPlan: string;
  nextBillingDate: string;
  paymentMethod: string;
  billingContact: string;
}

interface UsePaymentsBillingReturn {
  data: BillingData | null;
  loading: boolean;
  error: string | null;
}

const MOCK_RECENT: Invoice[] = [
  { id: '1', date: '12 Jun 2026', amount: '£499.00', status: 'Paid' },
  { id: '2', date: '12 May 2026', amount: '£499.00', status: 'Paid' },
  { id: '3', date: '12 Apr 2026', amount: '£499.00', status: 'Paid' },
];

const MOCK_ALL: Invoice[] = [
  { id: '1', date: '12 Jun 2026', amount: '£499.00', status: 'Paid' },
  { id: '2', date: '12 Jun 2025', amount: '£499.00', status: 'Paid' },
  { id: '3', date: '12 Jun 2024', amount: '£499.00', status: 'Paid' },
  { id: '4', date: '12 Jun 2023', amount: '£499.00', status: 'Paid' },
  { id: '5', date: '12 Jun 2022', amount: '£499.00', status: 'Paid' },
  { id: '6', date: '12 Jun 2021', amount: '£499.00', status: 'Paid' },
];

const MOCK_DATA: BillingData = {
  recentInvoices: MOCK_RECENT,
  allInvoices: MOCK_ALL,
  isUpToDate: true,
  currentPlan: 'Enigma EDGE — Pro',
  nextBillingDate: '12 July 2026',
  paymentMethod: 'Visa ending 2048',
  billingContact: 'billing@acmecorp.com',
};

export function usePaymentsBilling(): UsePaymentsBillingReturn {
  const [data, setData] = useState<BillingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // GET /api/billing
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    // TODO: replace with real fetch
    // fetch('/api/billing', { signal: controller.signal })
    //   .then(r => r.json()).then(setData).catch(...).finally(...)

    const timer = setTimeout(() => { setData(MOCK_DATA); setLoading(false); }, 400);
    return () => { controller.abort(); clearTimeout(timer); };
  }, []);

  return { data, loading, error };
}
