
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';
import Contact from './Contact';

const ContactUsData = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Contact Us', href: '/contact-us' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Contact Us"
        style={{
          marginBottom: '-2.6rem',
          padding: '21px 0px ',
        }}
      />
      <Contact />
      {/* <CommingSoon /> */}
    </div>
  );
};

export default ContactUsData;
