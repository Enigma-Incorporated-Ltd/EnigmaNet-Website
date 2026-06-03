import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';

const Dashboard = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Dashboard - Enigma Net',
    url: `${BASE_URL}/dashboard`,
    description: 'Enigma Net dashboard.',
  };

  return (
    <>
      <PageMeta
        title="Dashboard"
        description="Enigma Net dashboard."
        url={`${BASE_URL}/dashboard`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" headerSticky="navbar-stuck" />

      <main className="container" style={{ paddingTop: '120px', paddingBottom: '4rem', minHeight: '60vh' }}>
        <h1 className="mb-3">Dashboard</h1>
        <p className="text-body-secondary">You have successfully signed in to Enigma Net.</p>
      </main>

      <Footer />
    </>
  );
};

export default Dashboard;
