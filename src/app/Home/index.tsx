import Feature from './components/Feature';
import Footer from './components/Footer';
import PageMeta from '@/components/PageMeta';
import Navbar from '@/components/navbar/Navbar';
import HeroSlider from '@/components/landing/HeroSlider';

import DataCard from './components/DataCard';
import NetworkingCard from './components/NetworkingCard';
import WorkCard from './components/workCard';
import Brands from './components/brands';
import Partner from './components/Partner';

import GetInTouch from './components/getinTouch/GetInTouch';
import { BASE_URL } from '@/utils';
import { useTheme } from '@/utils/useTheme';
import CTA from '@/components/ui/CtaBand';
import Faqs from '@/components/ui/faq';
type FaqType = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FaqType[] = [
  {
    question: 'What does Enigma Net do?',
    answer:
      'Enigma Net provides infrastructure technologies across networking, cloud and data movement, helping organisations improve performance, resilience, security and control across their existing environments.',
  },
  {
    question: 'Do I need to replace my existing infrastructure?',
    answer:
      'No. Enigma Net is designed to work alongside existing connectivity, cloud and storage environments, helping improve performance without forcing unnecessary replacement.',
  },
  {
    question: 'Is Enigma Net storage S3 compatible?',
    answer:
      'Yes. Enigma Net’s cloud and storage capabilities include support for S3-compatible storage, allowing organisations to integrate object storage into wider data and cloud workflows.',
  },
  {
    question: 'Can Enigma Net connect with existing cloud and storage platforms?',
    answer:
      'Yes. Enigma Net is designed to work across existing environments, including cloud storage, NAS and S3-compatible platforms, helping organisations access and move data without managing each environment separately.',
  },
  {
    question: 'How does Enigma Net improve network performance and resilience?',
    answer:
      'Enigma Net uses technologies including intelligent traffic management, TCP acceleration, QoS, bonding, failover and RAIN to optimise data movement and maintain service when network conditions change.',
  },
  {
    question: 'How secure is Enigma Net?',
    answer:
      'Security is built into the Enigma Net architecture, with encrypted data transport and a zero-trust approach designed to protect data as it moves across the network and between environments.',
  },
];
const Index = () => {
  const { theme } = useTheme();
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Enigma Net',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+44 (0) 20 8050 4632',
        contactType: 'customer support',
        email: 'support@enigmanet.ai',
        areaServed: 'GB',
        availableLanguage: 'en',
      },
      sameAs: ['https://www.linkedin.com/company/enigmanet-ai/'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Enigma Net',
      url: BASE_URL,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${BASE_URL}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Enigma Net - Home',
      url: BASE_URL,
      description:
        'Enigma Net advanced networking services optimise your current internet connection. Our solutions deliver greater speed, reliability, and measurable superior performance.',
    },
    faqSchema,
  ];

  return (
    <>
      {/* ✅ META */}
      <PageMeta
        title="Home"
        description="Enigma Net advanced networking services optimise your current internet connection. Our solutions deliver greater speed, reliability, and measurable superior performance."
        url={BASE_URL}
        image={`${BASE_URL}/logo.png`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />

      <HeroSlider />
      <Brands />

      <Feature />
      <DataCard />
      <NetworkingCard />
      <WorkCard />
      {/* <UseCase /> */}
      {/* <CustomerResults /> */}

      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline="Make your data movement"
        headline2=" predictable"
        description=" Faster transfers, stable throughput, zero-trust security — deployed without
                replacing your existing infrastructure."
        primaryButton={{
          label: 'Talk to Our Team',
          href: '/get-in-touch',
          variant: 'gold',
        }}
      />
      <Partner />
      {/* <Resources /> */}
      <Faqs
        faqs={faqs}
        sectionTitle="Frequently Asked Questions"
        title="What you need to know before getting started"
      />
      {/* <Faqs /> */}
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Index;
