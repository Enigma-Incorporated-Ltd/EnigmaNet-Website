import Navbar from '@/components/navbar/Navbar';
import { Container } from 'react-bootstrap';
import Calculator from './components/Calculator';

import PageMeta from '@/components/PageMeta';
import Footer from '@/components/footer/Footer';
import { BASE_URL } from '@/utils';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const TCOCalculator = () => {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'TCO Calculator',
      url: `${BASE_URL}/product-tco-calculator`,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      description:
        'Calculate Total Cost of Ownership for cloud storage and understand hidden costs like egress, API requests, and transport.',
      publisher: {
        '@type': 'Organization',
        name: 'Enigma Net',
        url: BASE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${BASE_URL}/logo.png`,
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: BASE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'TCO Calculator',
          item: `${BASE_URL}/product-tco-calculator`,
        },
      ],
    },
  ];
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a TCO calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A TCO calculator helps estimate the total cost of ownership including hidden costs like maintenance, usage, and operational fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is cloud storage cost unpredictable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Costs vary due to egress charges, API usage, and data transfer fees.',
        },
      },
    ],
  };
  return (
    <>
      <PageMeta
        title="TCO Calculator"
        description="Use our Total Cost of Ownership Calculator to estimate cloud storage costs, including hidden fees like egress and API requests."
        url={`${BASE_URL}/product-tco-calculator`}
        image={`${BASE_URL}/logo.png`}
        structuredData={[...structuredData, faqSchema]}
        keywords={
          'Enigma Net, TCO Calculator, Total Cost of Ownership, Cloud Storage Costs, Egress Fees, API Request Costs'
        }
      />
      <Navbar
        Headerclass="header navbar navbar-expand-lg navbar-dark bg-dark navbar-sticky"
        headerSticky="navbar-stuck"
        isNavDark={true}
      />
      <section className="bg-dark py-4" data-bs-theme="dark">
        <Container className="pb-2 ">
          <Breadcrumb
            items={[{ label: 'Hot Storage TCO Calculator', href: '/hot-storage-tco-calculator  ' }]}
            style={{
              paddingBottom: '10px',
            }}
          />
          <Header
            title="Total Cost of Ownership"
            style={{
              padding: '21px 0px ',
            }}
          />
          {/* <h1 className="text-center mb-2">Total Cost of Ownership Calculator</h1> */}
          <h5
            className="text-center text-light opacity-70 "
            style={{
              fontSize: '28px',
            }}
          >
            {' '}
            See for yourself how unpredictable fees for transport, <br />
            egress, and API requests can inflate your cloud storage budget.
          </h5>
          {/* <p className="text-center text-light opacity-70 fs-xl mt-2"></p> */}
        </Container>
        <div style={{ height: '100px' }}></div>
      </section>
      <Calculator />
      <Footer />
    </>
  );
};

export default TCOCalculator;
