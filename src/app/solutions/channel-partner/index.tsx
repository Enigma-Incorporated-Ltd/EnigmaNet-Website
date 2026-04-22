import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import ChannelPage from './components';

const ChannelPartner = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Channel Partner',
    url: `${BASE_URL}/solutions/channel-partner`,
    description:
      ' Enigma helps channel partners strengthen customer environments with better performance, built-in resilience and clearer visibility creating a more distinctive offer without a heavy delivery burden. ',
  };
  return (
    <>
      <PageMeta
        title="Channel Partner"
        description=" Enigma helps channel partners strengthen customer environments with better performance, built-in resilience and clearer visibility creating a more distinctive offer without a heavy delivery burden. "
        url={`${BASE_URL}/solutions/channel-partner`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <ChannelPage />

      <Footer />
    </>
  );
};

export default ChannelPartner;
