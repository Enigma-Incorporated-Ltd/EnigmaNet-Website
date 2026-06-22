import { useRef, useState } from 'react';
import { CloseIcon, Icon, SuccessScreen } from '../icons';
import { useCustomerProfile } from './useCustomerProfile';

/* ── Edit Profile Modal ──────────────────────────────────────────── */
const EditProfileModal = ({
  initialName,
  initialInitials,
  onClose,
  onSave,
  saving,
}: {
  initialName: string;
  initialInitials: string;
  onClose: () => void;
  onSave: (name: string, file: File | null) => Promise<void>;
  saving: boolean;
}) => {
  const [name, setName] = useState(initialName);
  const [avatarSrc, setAvatarSrc] = useState<string | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [saved, setSaved] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || file.size > 5 * 1024 * 1024) return;
    setAvatarFile(file);
    const reader = new FileReader();
    reader.onload = ev => setAvatarSrc(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    await onSave(name, avatarFile);
    setSaved(true);
  };

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="manage-modal" style={{ maxWidth: '480px' }}>
        <div className="manage-modal__header">
          {!saved && (
            <h2 className="manage-modal__title" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#187bc9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
              Edit Profile
            </h2>
          )}
          {saved && <span />}
          <button className="manage-modal__close" onClick={onClose} aria-label="Close"><CloseIcon /></button>
        </div>

        {saved ? (
          <SuccessScreen title="Changes saved!" desc="Your profile has been updated successfully." />
        ) : (
          <>
            <p className="edit-modal__subtitle">Update your display name and profile picture.</p>
            <div className="edit-modal__avatar-section">
              <div
                className="edit-modal__avatar"
                onClick={() => fileInputRef.current?.click()}
                role="button" tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && fileInputRef.current?.click()}
              >
                {avatarSrc ? <img src={avatarSrc} alt="Profile" /> : initialInitials}
              </div>
              <input ref={fileInputRef} type="file" accept="image/jpeg,image/png,image/gif" style={{ display: 'none' }} onChange={handleImageChange} />
              <label className="edit-modal__upload-label" onClick={() => fileInputRef.current?.click()}>Upload picture</label>
              <p className="edit-modal__upload-hint">JPG, PNG or GIF · max 5 MB</p>
            </div>

            <p className="edit-modal__field-label">Full Name</p>
            <div className="edit-modal__input-wrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
              <input className="edit-modal__input" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your full name" />
            </div>

            <div className="manage-modal__footer">
              <button className="btn-cancel" onClick={onClose}>Cancel</button>
              <button className="btn-save" onClick={handleSave} disabled={saving}>
                {saving ? 'Saving…' : 'Save changes'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

/* ── Customer Profile Section ────────────────────────────────────── */
const CustomerProfile = () => {
  const { data, loading, error, updateProfile, saving } = useCustomerProfile();
  const [editOpen, setEditOpen] = useState(false);

  if (loading) return (
    <div className="customer-profile-section">
      <div style={{ padding: '32px', textAlign: 'center', color: '#9ca3af' }}>Loading profile…</div>
    </div>
  );

  if (error) return (
    <div className="customer-profile-section">
      <div style={{ padding: '32px', textAlign: 'center', color: '#ef4444' }}>Failed to load profile.</div>
    </div>
  );

  if (!data) return null;

  return (
    <div className="customer-profile-section">
      {editOpen && (
        <EditProfileModal
          initialName={data.fullName}
          initialInitials={data.avatarInitials}
          onClose={() => setEditOpen(false)}
          onSave={async (name, file) => updateProfile({ fullName: name }, file)}
          saving={saving}
        />
      )}

      <div className="customer-profile-section__header">
        <h2 className="profile-section-title"><Icon.User /> Customer Profile</h2>
        <button className="edit-profile-btn" onClick={() => setEditOpen(true)}>
          <Icon.Edit /> Edit profile
        </button>
      </div>

      <div className="profile-card profile-card--customer">
        <div className="profile-avatar">{data.avatarInitials}</div>
        <div className="profile-fields">
          <div>
            <p className="profile-field__label">Full Name</p>
            <p className="profile-field__value"><Icon.User />{data.fullName}</p>
          </div>
          <div>
            <p className="profile-field__label">Email Address</p>
            <p className="profile-field__value"><Icon.Mail />{data.email}</p>
          </div>
          <div>
            <p className="profile-field__label">Current Plan</p>
            <p className="profile-field__value"><Icon.Monitor />{data.currentPlan}</p>
          </div>
          <div>
            <p className="profile-field__label">Account Status</p>
            <p className="profile-field__value">
              <span className="status-badge status-badge--active">{data.accountStatus}</span>
            </p>
          </div>
          <div>
            <p className="profile-field__label">User ID</p>
            <p className="profile-field__value"><Icon.Hash />{data.userId}</p>
          </div>
          <div />
          <div>
            <p className="profile-field__label">User Company Information</p>
            <p className="profile-field__value"><Icon.Building />{data.companyName}</p>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
