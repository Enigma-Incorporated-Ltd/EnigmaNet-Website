import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import Footer from '@/components/footer/Footer';
import { useTheme } from '@/utils/useTheme';
import UserProfilePage from './UserProfilePage';

const ProfilePage = () => {
  const { theme } = useTheme();

  const navbarClass =
    theme === 'dark'
      ? 'header navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary shadow-sm fixed-top'
      : 'header navbar navbar-expand-lg bg-light border-bottom border-light shadow-sm fixed-top';

  return (
    <>
      <PageMeta
        title="My Account"
        description="Manage your profile, subscription, and account preferences."
      />
      <Navbar Headerclass={navbarClass} />
      <div className="profile-page-shell">
        <UserProfilePage />
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
