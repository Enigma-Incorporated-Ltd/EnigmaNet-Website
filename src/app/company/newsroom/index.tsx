import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import NewsroomPage from './components';

const Newsroom = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Newsroom - Company ',
    url: `${BASE_URL}/company/newsroom`,
    description:
      'Read official Enigma Net announcements, leadership updates, partnership news, press releases and media updates.',
  };
  return (
    <>
      <PageMeta
        title="Newsroom - Company "
        description="Read official Enigma Net announcements, leadership updates, partnership news, press releases and media updates."
        url={`${BASE_URL}/company/newsroom`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <NewsroomPage />

      <Footer />
    </>
  );
};

export default Newsroom;
