import { useEffect, useState } from 'react';

import Brand from './components/Brand';
import Feature from './components/Feature';
import FeatureApp from './components/FeatureApp';
import FeatureCrypto from './components/FeatureCrypto';
import Work from './components/Work';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import PageMeta from '@/components/PageMeta';
import Navbar from '@/components/navbar/Navbar';
import HeroSlider from '@/components/landing/HeroSlider';

import DataCard from './components/DataCard';
import NetworkingCard from './components/NetworkingCard';
import WorkCard from './components/workCard';
import UseCase from './components/UseCase';
import Brands from './components/brands';
import CustomerResults from './components/customerResults';
import GetStarted from './components/GetStarted';
import CTA2 from './components/CTA2';
import Partner from './components/Partner';
import Resources from './components/Resources';
import Faqs from './components/faq/Faqs';
import GetInTouch from './components/getinTouch/GetInTouch';
import { BASE_URL } from '@/utils';


const Index = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

 useEffect(() => {
   const getTheme = () => {
     const currentTheme = localStorage.getItem('theme') || 'light';
     setTheme(currentTheme as 'light' | 'dark');
   };

   // Initial load
   getTheme();

   // ✅ Listen to custom event (same tab)
   window.addEventListener('themeChange', getTheme);

    return () => {
      window.removeEventListener('themeChange', getTheme);
    };
  }, []);
  
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need to change my ISP or existing infrastructure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Enigma Net sits on top of your existing internet connections, fibre, 5G, satellite, whatever you have. No rip-and-replace, no dependency on a specific provider.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Enigma Net secure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All traffic through encrypted tunnels. Identity-based access control. No logs. Zero-trust architecture throughout.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can MSPs and channel partners resell Enigma Net?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. MSPs can package, provision and resell as a differentiated managed offering with new revenue streams.',
        },
      },
    ],
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
      email: 'info@enigmainc.co.uk',
      areaServed: 'GB',
      availableLanguage: 'en',
    },
    sameAs: ['hhttps://www.linkedin.com/company/enigmanet-ai/'],
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

      <Navbar
        Headerclass="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky"
        headerSticky="navbar-stuck"
        isNavDark={true}
      />

      <HeroSlider />
      <Brands />
      
      <Feature />
      <DataCard />
      <NetworkingCard />
      <WorkCard />
      <UseCase />
      <CustomerResults />

      {theme === 'dark' ? <CTA2 /> : <GetStarted />}

      <Partner />
      <Resources />
      <Faqs />
      <GetInTouch />
      <FeatureApp />
      <Brand />
      <FeatureCrypto />
      <Work />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
};

export default Index;
