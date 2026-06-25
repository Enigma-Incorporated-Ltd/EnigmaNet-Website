import inactiveBadgeIcon from '@/assets/img/profile/icons/inactive-badge.svg';
import inactiveXIcon from '@/assets/img/profile/icons/inactive-x.svg';
import activeStatusIcon from '@/assets/img/profile/icons/active-status.svg';
import inactiveStatusIcon from '@/assets/img/profile/icons/inactive-status.svg';
import activeBadgeIcon from '@/assets/img/profile/icons/active-badge.svg';
import activeCheckIcon from '@/assets/img/profile/icons/active-check.svg';
import bookIcon from '@/assets/img/profile/icons/book.svg';
import checkCircleIcon from '@/assets/img/profile/icons/check-circle.svg';
import chevronDownIcon from '@/assets/img/profile/icons/chevron-down.svg';
import startDateIcon from '@/assets/img/profile/icons/clock.svg';
import closeIcon from '@/assets/img/profile/icons/close.svg';
import computeIcon from '@/assets/img/profile/icons/compute.svg';
import creditCardIcon from '@/assets/img/profile/icons/credit-card.svg';
import darkThemeIcon from '@/assets/img/profile/icons/dark-theme.svg';
import doneDarkIcon from '@/assets/img/profile/icons/done-dark.svg';
import editIcon from '@/assets/img/profile/icons/edit.svg';
import hashIcon from '@/assets/img/profile/icons/hash.svg';
import headsetWhiteIcon from '@/assets/img/profile/icons/headset-white.svg';
import headsetIcon from '@/assets/img/profile/icons/headset.svg';
import mailIcon from '@/assets/img/profile/icons/mail.svg';
import monitorSmIcon from '@/assets/img/profile/icons/monitor-sm.svg';
import notificationIcon from '@/assets/img/profile/icons/notification.svg';
import packageIcon from '@/assets/img/profile/icons/package.svg';
import paymentCheckIcon from '@/assets/img/profile/icons/payment-check.svg';
import policyDocumentIcon from '@/assets/img/profile/icons/policy-document.svg';
import profileIcon from '@/assets/img/profile/icons/profile.svg';
import renewalClockIcon from '@/assets/img/profile/icons/renewal-clock.svg';
import settingsIcon from '@/assets/img/profile/icons/settings.svg';
import successCheckIcon from '@/assets/img/profile/icons/success-check.svg';
import manageCloseIcon from '@/assets/img/profile/icons/manage-close.svg';
import manageCalendarIcon from '@/assets/img/profile/icons/manage-calendar.svg';
import manageMonitorIcon from '@/assets/img/profile/icons/manage-monitor.svg';
import planRadioSelectedIcon from '@/assets/img/profile/icons/plan-radio-selected.svg';
import statusDotActiveIcon from '@/assets/img/profile/icons/status-dot-active.svg';
import connectedDotIcon from '@/assets/img/profile/icons/connected-dot.svg';

/** Figma light-mode page — node 79:785 / icon pack 88:10820 */
const PROFILE_ICON_SRC = {
  activeBadge: activeBadgeIcon,
  activeCheck: activeCheckIcon,
  activeStatus: activeStatusIcon,
  inactiveStatus: inactiveStatusIcon,
  book: bookIcon,
  checkCircle: checkCircleIcon,
  chevronDown: chevronDownIcon,
  close: closeIcon,
  connectedDot: connectedDotIcon,
  compute: computeIcon,
  creditCard: creditCardIcon,
  darkTheme: darkThemeIcon,
  doneDark: doneDarkIcon,
  edit: editIcon,
  hash: hashIcon,
  headset: headsetIcon,
  inactiveBadge: inactiveBadgeIcon,
  inactiveX: inactiveXIcon,
  headsetWhite: headsetWhiteIcon,
  mail: mailIcon,
  manageCalendar: manageCalendarIcon,
  manageClose: manageCloseIcon,
  manageMonitor: manageMonitorIcon,
  monitorSm: monitorSmIcon,
  notification: notificationIcon,
  package: packageIcon,
  paymentCheck: paymentCheckIcon,
  planRadioSelected: planRadioSelectedIcon,
  policyDocument: policyDocumentIcon,
  profile: profileIcon,
  renewalClock: renewalClockIcon,
  settings: settingsIcon,
  startDate: startDateIcon,
  statusDotActive: statusDotActiveIcon,
  successCheck: successCheckIcon,
} as const;

type ProfileIconName = keyof typeof PROFILE_ICON_SRC;

type ProfileIconProps = {
  name: ProfileIconName;
  size?: number;
  className?: string;
  alt?: string;
};

export const ProfileIcon = ({
  name,
  size = 14,
  className = '',
  alt = '',
}: ProfileIconProps) => (
  <img
    src={PROFILE_ICON_SRC[name]}
    alt={alt}
    width={size}
    height={size}
    className={`profile-icon${className ? ` ${className}` : ''}`}
    draggable={false}
  />
);

const icon = (name: ProfileIconName, size = 14, className?: string) => () => (
  <ProfileIcon name={name} size={size} className={className} alt="" />
);

/** Shared icon set for profile page components */
export const Icon = {
  User: icon('profile', 16),
  UserTitle: icon('profile', 16),
  Mail: icon('mail', 14),
  Book: icon('book', 16),
  Hash: icon('hash', 14),
  Edit: icon('edit', 14),
  Settings: icon('settings', 14),
  Calendar: icon('startDate', 14),
  Refresh: icon('renewalClock', 14),
  Devices: icon('monitorSm', 14),
  Check: icon('checkCircle', 14),
  Bell: icon('notification', 16),
  Package: icon('package', 16),
  Receipt: icon('creditCard', 16),
  Sun: icon('darkTheme', 16),
  CreditCard: icon('creditCard', 16),
  Headset: icon('headset', 22),
  HeadsetCard: icon('headsetWhite', 24, 'profile-icon--on-brand'),
  HeadsetTitle: icon('headset', 24),
  CreditCardTitle: icon('creditCard', 24),
  Server: icon('compute', 24),
  Monitor16: icon('monitorSm', 16),
  PolicyDocument: icon('policyDocument', 14),
  CheckCircle: icon('paymentCheck', 16),
  ChevronDown: icon('chevronDown', 14),
};

export const ActiveStatusIcon = () => (
  <ProfileIcon name="activeStatus" size={12} className="active-status-icon" alt="" />
);

export const InactiveStatusIcon = () => (
  <ProfileIcon name="inactiveStatus" size={12} className="active-status-icon" alt="" />
);

export type AccountStatus = 'Active' | 'Inactive' | 'Suspended';

/** Figma Active / Inactive indicator — nodes 79:9361 / 79:9364 */
export const AccountStatusBadge = ({ status }: { status: AccountStatus }) => {
  const isActive = status === 'Active';

  return (
    <span className={`status-badge${isActive ? ' status-badge--active' : ' status-badge--inactive'}`}>
      {isActive ? <ActiveStatusIcon /> : <InactiveStatusIcon />}
      {status}
    </span>
  );
};

export const CloseIcon = () => (
  <ProfileIcon name="close" size={24} alt="Close" />
);

export const ManageModalCloseIcon = () => (
  <ProfileIcon name="manageClose" size={24} alt="Close" />
);
