import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Location from './components/Location';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Sponsors from './components/Sponsors';
import Testimonials from './components/Testimonials';
import Tickets from './components/Tickets';

const Index = () => {
  return (
    <>
      <PageMeta title="Conference Landing" />
      <Navbar Headerclass="header navbar navbar-expand-lg bg-light shadow-sm fixed-top" />
      <Hero />
      <Sponsors />
      <Speakers />
      <Tickets />
      <Highlights />
      <Schedule />
      <Testimonials />
      <Location />
      <Cta />
      <Footer />
    </>
  );
};

export default Index;
