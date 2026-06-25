import React, { Fragment, useEffect, useState } from 'react';
import SuccessModal, { SUCCESS_COPY } from '@/components/ui/SuccessModal';
import { CloseIcon, Icon, ProfileIcon } from '../icons';
import { useAccountSettings, type AccountSettingsData } from './useAccountSettings';

const SETTINGS_KEYS: (keyof AccountSettingsData)[] = [
  'emailNotifications',
  'productUpdates',
  'billingNotifications',
  'lightTheme',
];

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

const SETTINGS_ROWS: {
  id: string;
  key: keyof AccountSettingsData;
  icon: React.ReactNode;
  label: string;
  desc: string;
}[] = [
  {
    id: 'toggle-email',
    key: 'emailNotifications',
    icon: <ProfileIcon name="notification" size={14} />,
    label: 'Email notifications',
    desc: 'Receive updates and alerts by email',
  },
  {
    id: 'toggle-product',
    key: 'productUpdates',
    icon: <ProfileIcon name="package" size={14} />,
    label: 'Product updates',
    desc: 'News about Enigma EDGE releases',
  },
  {
    id: 'toggle-billing',
    key: 'billingNotifications',
    icon: <ProfileIcon name="creditCard" size={14} />,
    label: 'Billing notifications',
    desc: 'Invoices and payment confirmations',
  },
  {
    id: 'toggle-theme',
    key: 'lightTheme',
    icon: <ProfileIcon name="darkTheme" size={14} />,
    label: 'Theme',
    desc: 'Light mode',
  },
];

const INLINE_SETTINGS_ROWS: typeof SETTINGS_ROWS = [
  { ...SETTINGS_ROWS[0], icon: <Icon.Bell /> },
  { ...SETTINGS_ROWS[1], icon: <Icon.Package /> },
  { ...SETTINGS_ROWS[2], icon: <Icon.Receipt /> },
  { ...SETTINGS_ROWS[3], icon: <Icon.Sun /> },
];

const AccountSettingsBody = ({
  data,
  loading,
  onToggle,
  variant = 'inline',
}: {
  data: AccountSettingsData | null;
  loading: boolean;
  onToggle: (key: keyof AccountSettingsData, value: boolean) => void;
  variant?: 'inline' | 'modal';
}) => {
  const rows = variant === 'modal' ? SETTINGS_ROWS : INLINE_SETTINGS_ROWS;

  return (
    <div className={`account-settings-modal__body${variant === 'modal' ? ' account-settings-modal__body--modal' : ''}`}>
      {loading || !data
        ? <div className="account-settings-modal__loading">Loading…</div>
        : rows.map((row, index) => (
            <Fragment key={row.id}>
              {variant === 'modal' && index > 0 && (
                <div className="account-settings-modal__divider" aria-hidden="true" />
              )}
              <div className="toggle-row">
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
                  onChange={v => onToggle(row.key, v)}
                />
              </div>
            </Fragment>
          ))}
    </div>
  );
};

/* ── Account Settings Modal (Figma 79:1056 light / 79:9589 dark) ─── */
export const AccountSettingsModal = ({ onClose }: { onClose: () => void }) => {
  const { data, loading, updateSetting } = useAccountSettings();
  const [draft, setDraft] = useState<AccountSettingsData | null>(null);
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (data) setDraft(data);
  }, [data]);

  const handleToggle = (key: keyof AccountSettingsData, value: boolean) => {
    setDraft(prev => (prev ? { ...prev, [key]: value } : prev));
  };

  const handleSave = async () => {
    if (!draft || !data) return;
    const original = { ...data };
    setSaving(true);
    try {
      for (const key of SETTINGS_KEYS) {
        if (draft[key] !== original[key]) {
          await updateSetting(key, draft[key]);
        }
      }
      setSaved(true);
    } finally {
      setSaving(false);
    }
  };

  if (saved) {
    return <SuccessModal {...SUCCESS_COPY.settingsSaved} onClose={onClose} />;
  }

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="account-settings-modal" role="dialog" aria-labelledby="account-settings-title">
        <button
          type="button"
          className="account-settings-modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          <CloseIcon />
        </button>

        <div className="account-settings-modal__header">
          <h2 id="account-settings-title" className="account-settings-modal__title">
            <ProfileIcon name="settings" size={24} />
            Account Settings
          </h2>
        </div>

        <div className="account-settings-modal__settings">
          <AccountSettingsBody
            data={draft}
            loading={loading}
            onToggle={handleToggle}
            variant="modal"
          />
        </div>

        <div className="account-settings-modal__footer">
          <button
            type="button"
            className="profile-btn profile-btn--secondary account-settings-modal__cancel"
            onClick={onClose}
            disabled={saving}
          >
            Cancel
          </button>
          <button
            type="button"
            className="profile-btn account-settings-modal__save"
            onClick={handleSave}
            disabled={saving || loading || !draft}
          >
            {saving ? 'Saving…' : 'Save changes'}
          </button>
        </div>
      </div>
    </div>
  );
};

/* ── Account Settings Section (legacy inline) ────────────────────── */
const AccountSettings = () => {
  const { data, loading, updateSetting } = useAccountSettings();

  return (
    <div className="settings-section">
      <h2 className="profile-section-title"><Icon.Settings /> Account Settings</h2>
      <div className="profile-card">
        <AccountSettingsBody
          data={data}
          loading={loading}
          onToggle={(key, value) => updateSetting(key, value)}
        />
      </div>
    </div>
  );
};

export default AccountSettings;
