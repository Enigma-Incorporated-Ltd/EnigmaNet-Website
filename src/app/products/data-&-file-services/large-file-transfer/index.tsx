import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import { BASE_URL } from '@/utils';
import FileTransfer, { lftfaq } from './components';

const LargeFileTransfer = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Large File Transfer -Data & File Services - Products',
    url: `${BASE_URL}/products/data-&-file-services/large-file-transfer`,
    description:
      'Enigma Large File Transfer lets users send files to anyone through secure shareable links, with APN-accelerated transfer, portal-based upload and download, link controls, audit visibility and support for external collaborators.  ',
  };
   const faqSchema = {
     '@context': 'https://schema.org',
     '@type': 'FAQPage',
     mainEntity: lftfaq.map(faq => ({
       '@type': 'Question',
       name: faq.question.trim(),
       acceptedAnswer: {
         '@type': 'Answer',
         text: faq.answer.trim(),
       },
     })),
   };
  return (
    <>
      <PageMeta
        title="Large File Transfer - Data & File Services - Products"
        description="Enigma Large File Transfer lets users send files to anyone through secure shareable links, with   
APN-accelerated transfer, portal-based upload and download, link controls, audit visibility and   
support for external collaborators.  "
        url={`${BASE_URL}/products/data-&-file-services/large-file-transfer`}
        structuredData={[structuredData, faqSchema]}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <FileTransfer />

      <Footer />
    </>
  );
};

export default LargeFileTransfer;
