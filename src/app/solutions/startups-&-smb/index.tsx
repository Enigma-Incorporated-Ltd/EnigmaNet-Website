import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import Startups from './components';

const StartupsAndSMB = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Startups & SMB',
    url: `${BASE_URL}/solutions/startups-&-smb`,
    description:
      'Enigma helps startups and small businesses avoid post-credit bill shock, reduce fragile connectivity problems and build infrastructure that fits how they actually operate. ',
  };
  return (
    <>
      <PageMeta
        title="Startups & SMB"
        description="Enigma helps startups and small businesses avoid post-credit bill shock, reduce fragile connectivity problems and build infrastructure that fits how they actually operate. "
        url={`${BASE_URL}/solutions/startups-&-smb`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <Startups />

      <Footer />
    </>
  );
};

export default StartupsAndSMB;
