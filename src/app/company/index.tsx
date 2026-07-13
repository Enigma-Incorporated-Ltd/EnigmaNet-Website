import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import CompanyData from './components';

const Company = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Company',
    url: `${BASE_URL}/company`,
    description: 'Enigma Net helps organisations move, protect and manage large data sets across AI, cloud, edge and distributed environments. Our technology is designed for a world where network performance can no longer be the bottleneck. We help businesses move data faster, more reliably and more predictably across the infrastructure layer.',
  };
  return (
    <>
      <PageMeta
        title="Company"
        description="Enigma Net helps organisations move, protect and manage large data sets across AI, cloud, edge and distributed environments. Our technology is designed for a world where network performance can no longer be the bottleneck. We help businesses move data faster, more reliably and more predictably across the infrastructure layer."
        url={`${BASE_URL}/company`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <CompanyData />

      <Footer />
    </>
  );
};

export default Company;
