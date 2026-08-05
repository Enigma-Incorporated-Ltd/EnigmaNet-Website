import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import ManagedFileTransferData from './components';


const DataAndFileServices = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Managed File Transfer - Data & File Services - Products',
    url: `${BASE_URL}/products/data-&-file-services/managed-file-transfer`,
    description:
      'Enigma Managed File Transfer automates recurring file movement between storage environments with scheduling, encryption, integrity checks, APN acceleration, monitoring and governance.  ',
  };
  return (
    <>
      <PageMeta
        title="Managed File Transfer - Data & File Services - Products"
        description="Enigma Managed File Transfer automates recurring file movement between storage   
environments with scheduling, encryption, integrity checks, APN acceleration, monitoring and   
governance.  "
        url={`${BASE_URL}/products/data-&-file-services/managed-file-transfer`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <ManagedFileTransferData />

      <Footer />
    </>
  );
};

export default DataAndFileServices;
