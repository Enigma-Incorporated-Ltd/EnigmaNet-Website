import Header from '../ui/Header';
import PremiumButton from '../ui/PremiumButton';

const CommingSoon = () => {

  
  return (
    <>
      <section className="container px-5 text-md-start text-center">
       
        <div
          style={{
            paddingTop: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: 'calc(100vh - 200px)',
          }}
        >
          {' '}
          <Header title="Coming Soon " />
          <p className="mb-md-5 mb-4 mx-md-0 mx-auto pb-2 lead">
            We are working hard to launch something amazing. Stay tuned!
          </p>
          <PremiumButton label="Back to Home" variant="blue" className="btn-lg" href="/" />
        </div>
      </section>
    </>
  );
};

export default CommingSoon;
