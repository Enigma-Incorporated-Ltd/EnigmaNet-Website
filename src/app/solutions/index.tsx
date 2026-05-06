import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import SolutionList from './components';
import { solutions } from '@/utils/solutions';


const Solutions = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Enigma Solutions',
    url: `${BASE_URL}/solutions`,
    description:
      'Explore Enigma solutions including Enterprise, AI & Data Infrastructure, Remote Work, Operational Technology, and more to improve performance, resilience, and visibility.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: solutions.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.title,
        url: `${BASE_URL}${item.href}`,
      })),
    },
  };

  return (
    <>
      <PageMeta
        title="Enigma Solutions | Enterprise, AI Infrastructure & More"
        description="Discover Enigma’s solutions for enterprises, AI infrastructure, remote work, startups, and more. Improve network performance, resilience, and visibility."
        keywords="enterprise networking, AI infrastructure, remote work solutions, startups networking, operational technology, service providers networking"
        url={`${BASE_URL}/solutions`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <SolutionList />
      <Footer />
    </>
  );
};

export default Solutions;
