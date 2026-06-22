import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import Footer from '@/components/footer/Footer';
import UserProfilePage from './UserProfilePage';

const ProfilePage = () => {
  return (
    <>
      <PageMeta
        title="My Account"
        description="Manage your profile, subscription, and account preferences."
      />
      <Navbar Headerclass="header navbar navbar-expand-lg bg-light border-bottom border-light shadow-sm fixed-top" />
      <div style={{ paddingTop: '130px' }}>
        <UserProfilePage />
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
