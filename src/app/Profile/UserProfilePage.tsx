// import { useState } from 'react';
import CustomerProfile from './components/CustomerProfile';
import ProfileHeaderLogo from './components/ProfileHeaderLogo';
// import PaymentsBilling from './components/PaymentsBilling';
// import ProductServices from './components/ProductServices';
// import { ContactSupportModal } from './components/SupportHelp';
// import SupportHelp from './components/SupportHelp';
import './userprofile.css';

/**
 * UserProfilePage assembles all profile sections.
 * Each section manages its own data via its own hook.
 * contactModalOpen is lifted here so PaymentsBilling's
 * "Contact for support" link can trigger the same modal.
 */
const UserProfilePage = () => {
  // const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="profile-page">
      {/* Global contact modal — also triggered from PaymentsBilling */}
      {/* {contactModalOpen && (
        <ContactSupportModal onClose={() => setContactModalOpen(false)} />
      )} */}

      <div className="profile-page__inner">
        {/* ── Page Header ──────────────────────────────────────── */}
        <div className="profile-header">
          <div className="profile-header__text">
            <h1 className="profile-header__title">My Account</h1>
            <p className="profile-header__subtitle">
              Manage your profile, subscription, and account preferences
            </p>
          </div>
          <ProfileHeaderLogo />
        </div>

        {/* ── Customer Profile ─────────────────────────────────── */}
        <CustomerProfile />

        {/* ── Product & Active Services ─────────────────────────── */}
        {/* <ProductServices /> */}

        {/* ── Bottom two-column grid ────────────────────────────── */}
        {/* <div className="profile-bottom-grid">
          <SupportHelp />
          <PaymentsBilling onContactSupport={() => setContactModalOpen(true)} />
        </div> */}
      </div>
    </div>
  );
};

export default UserProfilePage;
