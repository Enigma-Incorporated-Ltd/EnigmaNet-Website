import { useRef, useState } from 'react';
import SuccessModal, { SUCCESS_COPY } from '@/components/ui/SuccessModal';
import { AccountSettingsModal } from '../AccountSettings';
import { AccountStatusBadge } from '../Badges';
import { CloseIcon, Icon } from '../icons';
import { useCustomerProfile } from './useCustomerProfile';

/* ── Edit Profile Modal ──────────────────────────────────────────── */
const EditProfileModal = ({
  initialName,
  initialInitials,
  initialImageUrl,
  onClose,
  onSave,
  saving,
}: {
  initialName: string;
  initialInitials: string;
  initialImageUrl?: string;
  onClose: () => void;
  onSave: (name: string, file: File | null) => Promise<void>;
  saving: boolean;
}) => {
  const [name, setName] = useState(initialName);
  const [avatarSrc, setAvatarSrc] = useState<string | null>(initialImageUrl || null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [saved, setSaved] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [previewError, setPreviewError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || file.size > 5 * 1024 * 1024) return;
    setAvatarFile(file);
    setPreviewError(false);
    const reader = new FileReader();
    reader.onload = ev => setAvatarSrc(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    try {
      await onSave(name, avatarFile);
      setSaved(true);
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : 'Failed to save. Please try again.');
    }
  };

  if (saved) {
    return <SuccessModal {...SUCCESS_COPY.profileSaved} onClose={onClose} />;
  }

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="edit-profile-modal" role="dialog" aria-labelledby="edit-profile-title">
            <div className="edit-profile-modal__header">
              <h2 id="edit-profile-title" className="edit-profile-modal__title">
                <Icon.Edit /> Edit Profile
              </h2>
              <button type="button" className="edit-profile-modal__close" onClick={onClose} aria-label="Close">
                <CloseIcon />
              </button>
            </div>

            <div className="edit-profile-modal__avatar-section">
              <div
                className="edit-profile-modal__avatar"
                onClick={() => fileInputRef.current?.click()}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && fileInputRef.current?.click()}
              >
                {avatarSrc && !previewError ? (
                  <img
                    src={avatarSrc}
                    alt="Profile"
                    onError={() => setPreviewError(true)}
                  />
                ) : (
                  initialInitials
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/gif"
                className="edit-profile-modal__file-input"
                onChange={handleImageChange}
              />
              <button
                type="button"
                className="edit-profile-modal__upload-btn"
                onClick={() => fileInputRef.current?.click()}
              >
                Upload picture
              </button>
              <p className="edit-profile-modal__upload-hint">JPG, PNG or GIF · max 5 MB</p>
            </div>

            <hr className="edit-profile-modal__divider" />

            <div className="edit-profile-modal__field">
              <p className="edit-profile-modal__field-label">Full name</p>
              <div className="edit-profile-modal__input-wrap">
                <Icon.User />
                <input
                  className="edit-profile-modal__input"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div className="edit-profile-modal__footer">
              <button type="button" className="profile-btn profile-btn--secondary edit-profile-modal__cancel" onClick={onClose}>
                Cancel
              </button>
              <button type="button" className="profile-btn edit-profile-modal__save" onClick={handleSave} disabled={saving}>
                {saving ? 'Saving…' : 'Save changes'}
              </button>
            </div>

            {saveError && <p className="edit-profile-modal__error">{saveError}</p>}
      </div>
    </div>
  );
};

/* ── Customer Profile Section ────────────────────────────────────── */
const CustomerProfile = () => {
  const { data, loading, error, updateProfile, saving } = useCustomerProfile();
  const [editOpen, setEditOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [imageLoadError, setImageLoadError] = useState(false);

  if (loading) return (
    <div className="customer-profile-section">
      <div className="profile-loading">Loading profile…</div>
    </div>
  );

  if (error) return (
    <div className="customer-profile-section">
      <div className="profile-error">Failed to load profile.</div>
    </div>
  );

  if (!data) return null;

  return (
    <div className="customer-profile-section">
      {editOpen && (
        <EditProfileModal
          initialName={data.fullName}
          initialInitials={data.avatarInitials}
          initialImageUrl={data.profileImageUrl}
          onClose={() => setEditOpen(false)}
          onSave={async (name, file) => updateProfile({ fullName: name }, file)}
          saving={saving}
        />
      )}

      {settingsOpen && (
        <AccountSettingsModal onClose={() => setSettingsOpen(false)} />
      )}

      <h2 className="profile-section-title"><Icon.UserTitle /> Customer Profile</h2>

      <div className="customer-profile-layout">
        <div className="customer-profile-sidebar">
          <div className="profile-avatar">
            {data.profileImageUrl && !imageLoadError
              ? <img
                  src={data.profileImageUrl}
                  alt={data.fullName}
                  onError={() => setImageLoadError(true)}
                />
              : data.avatarInitials
            }
          </div>
          <div className="profile-sidebar-actions">
            <button type="button" className="profile-action-link" onClick={() => setEditOpen(true)}>
              <Icon.Edit /> Edit profile
            </button>
            <button type="button" className="profile-action-link" onClick={() => setSettingsOpen(true)}>
              <Icon.Settings /> Account Settings
            </button>
          </div>
        </div>

        <div className="profile-info-box">
          <div className="profile-fields">
            <div className="profile-fields__col">
              <div>
                <p className="profile-field__label">Full Name</p>
                <p className="profile-field__value"><Icon.User />{data.fullName}</p>
              </div>
              <div>
                <p className="profile-field__label">Current Plan</p>
                <p className="profile-field__value"><Icon.Book />{data.currentPlan}</p>
              </div>
              <div>
                <p className="profile-field__label">User ID</p>
                <p className="profile-field__value"><Icon.Hash />{data.userId}</p>
              </div>
            </div>
            <div className="profile-fields__col">
              <div>
                <p className="profile-field__label">Email Address</p>
                <p className="profile-field__value"><Icon.Mail />{data.email}</p>
              </div>
              <div>
                <p className="profile-field__label">Account Status</p>
                <p className="profile-field__value">
                  <AccountStatusBadge status={data.accountStatus} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
