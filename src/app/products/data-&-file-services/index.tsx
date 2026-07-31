import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import DataAndFileServicesList from './components';
import { DataFilesServices } from '@/utils/products';

const DataAndFileServices = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Data & File Services - Products',
    url: `${BASE_URL}/products/data-&-file-services`,
    description:
      'Enigma Data & File Services combine SyncSphere, Hot Storage, Large File Transfer, Managed File Transfer and Multi-cloud Integration to deliver secure, scalable data storage, transfer and management.',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: DataFilesServices.length,
      itemListElement: DataFilesServices.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${BASE_URL}${product.href}`,
        item: {
          '@type': 'Service',
          name: product.title,
          description: product.description,
          url: `${BASE_URL}${product.href}`,
        },
      })),
    },
  };
  return (
    <>
      <PageMeta
        title="Data & File Services - Products"
        description="Enigma Data & File Services combine SyncSphere, Hot Storage, Large File Transfer, Managed File Transfer and Multi-cloud Integration to deliver secure, scalable data storage, transfer and management."
        url={`${BASE_URL}/products/data-&-file-services`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <DataAndFileServicesList />

      <Footer />
    </>
  );
};

export default DataAndFileServices;
