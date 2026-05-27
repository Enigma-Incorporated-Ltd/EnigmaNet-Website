import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import StartUpAgencyPage from './components';

const StartUpAgency = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Start Up Agency -Partnership',
    url: `${BASE_URL}/partners/start-up-agency`,
    description: `The partnership between Enigma Net and Start-Up Agency combines secure infrastructure,   
frictionless digital engagement, and commercial acceleration into a single integrated capability   
for connected operational environments.  
`,
  };
  return (
    <>
      <PageMeta
        title="Start Up Agency -Partnership"
        description="The partnership between Enigma Net and Start-Up Agency combines secure infrastructure,   
frictionless digital engagement, and commercial acceleration into a single integrated capability   
for connected operational environments.  
"
        url={`${BASE_URL}/partners/start-up-agency`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <StartUpAgencyPage />

      <Footer />
    </>
  );
};

export default StartUpAgency;
