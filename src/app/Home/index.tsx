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

  return (
    <>
      <PageMeta title="Home" />

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

      {/* ✅ Conditional Rendering */}
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
