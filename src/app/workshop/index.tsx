import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import WorkshopPage from './components';

const Workshop = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: '60 minutes Workshop - TrueCost',
    url: `${BASE_URL}/60-minutes-workshop`,
    description: 'Build in the Cloud. Don’t Burn Cash.  ',
  };
  return (
    <>
      <PageMeta
        title="60 minutes Workshop - TrueCost"
        description="Build in the Cloud. Don’t Burn Cash.  "
        url={`${BASE_URL}/60-minutes-workshop`}
        structuredData={structuredData}
      />

      <Navbar
        Headerclass="header navbar navbar-expand-lg  bg-light fixed-top"
        darkenable={false}
        isNavDark={true}
      />
      <WorkshopPage />

      <Footer />
    </>
  );
};

export default Workshop;
