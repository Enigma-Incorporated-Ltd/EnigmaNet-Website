import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';
import QuoteForm from './Contact';

const RequestAQuotePage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Contact Us', href: '/contact-us' },
          { label: 'Request a quote', href: '/contact-us/request-a-quote' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Request a quote"
        style={{
          marginBottom: '-2.6rem',
          padding: '21px 0px ',
        }}
      />
      <QuoteForm />
    </div>
  );
};

export default RequestAQuotePage;
