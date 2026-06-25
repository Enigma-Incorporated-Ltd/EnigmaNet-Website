import { AccountStatusBadge, type AccountStatus } from './icons';

/** Figma badge system — node 88:10954 */

export const PlanBadge = ({ label = 'Pro' }: { label?: string }) => (
  <span className="plan-badge">{label}</span>
);

export const PaidBadge = ({ label = 'Paid' }: { label?: string }) => (
  <span className="paid-badge">{label}</span>
);

export { AccountStatusBadge, type AccountStatus };
