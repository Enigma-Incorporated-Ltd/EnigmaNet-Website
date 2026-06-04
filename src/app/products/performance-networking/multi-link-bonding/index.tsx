import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import LinkBonding from './components';

const MultiLinkBonding = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Multi Link Bonding',
    url: `${BASE_URL}/products/performance-networking/multi-link-bonding`,
    description: `Multi-Link Bonding combines up to eight circuits per site into a single APN overlay, allowing   
applications to use one logical path while Enigma manages bandwidth aggregation, path   
scheduling, packet ordering and failover underneath.  `,
  };
  return (
    <>
      <PageMeta
        title="Multi Link Bonding | Performance Networking -Products"
        description="Multi-Link Bonding combines up to eight circuits per site into a single APN overlay, allowing   
applications to use one logical path while Enigma manages bandwidth aggregation, path   
scheduling, packet ordering and failover underneath.  "
        url={`${BASE_URL}/products/performance-networking/multi-link-bonding`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <LinkBonding />

      <Footer />
    </>
  );
};

export default MultiLinkBonding;
