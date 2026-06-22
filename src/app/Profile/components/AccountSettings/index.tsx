import { Icon } from '../icons';
import { useAccountSettings, type AccountSettingsData } from './useAccountSettings';

/* ── Toggle Switch ───────────────────────────────────────────────── */
const Toggle = ({
  id,
  checked,
  onChange,
}: {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) => (
  <label className="toggle-switch" htmlFor={id}>
    <input id={id} type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} />
    <span className="toggle-switch__track" />
  </label>
);

/* ── Account Settings Section ────────────────────────────────────── */
const AccountSettings = () => {
  const { data, loading, updateSetting } = useAccountSettings();

  const rows: {
    id: string;
    key: keyof AccountSettingsData;
    icon: JSX.Element;
    label: string;
    desc: string;
  }[] = [
    { id: 'toggle-email',   key: 'emailNotifications',   icon: <Icon.Bell />,    label: 'Email notifications',   desc: 'Receive updates and alerts by email' },
    { id: 'toggle-product', key: 'productUpdates',        icon: <Icon.Package />, label: 'Product updates',        desc: 'News about Enigma EDGE releases' },
    { id: 'toggle-billing', key: 'billingNotifications',  icon: <Icon.Receipt />, label: 'Billing notifications',  desc: 'Invoices and payment confirmations' },
    { id: 'toggle-theme',   key: 'lightTheme',            icon: <Icon.Sun />,     label: 'Theme',                  desc: 'Light mode' },
  ];

  return (
    <div className="settings-section">
      <h2 className="profile-section-title"><Icon.Settings /> Account Settings</h2>
      <div className="profile-card">
        {loading || !data
          ? <div style={{ padding: '16px', color: '#9ca3af', textAlign: 'center' }}>Loading…</div>
          : rows.map(row => (
              <div key={row.id} className="toggle-row">
                <div className="toggle-row__info">
                  <span className="toggle-row__icon">{row.icon}</span>
                  <div>
                    <p className="toggle-row__label">{row.label}</p>
                    <p className="toggle-row__desc">{row.desc}</p>
                  </div>
                </div>
                <Toggle
                  id={row.id}
                  checked={data[row.key]}
                  onChange={v => updateSetting(row.key, v)}
                />
              </div>
            ))}
      </div>
    </div>
  );
};

export default AccountSettings;
