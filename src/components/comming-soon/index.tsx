import CustomButton from '../ui/CustomButton';

const CommingSoon = () => {
  return (
    <>
      <section className="container my-5 px-5 text-md-start text-center">
        <div
          style={{
            paddingTop: '200px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: 'calc(100vh - 200px)',
          }}
        >
          {/* Title */}
          <h1 className="display-1 mb-sm-4 mt-n4 mt-sm-n5">Coming Soon 🚀</h1>

          {/* Description */}
          <p className="mb-md-5 mb-4 mx-md-0 mx-auto pb-2 lead">
            We are working hard to launch something amazing. Stay tuned!
          </p>

          {/* Back to Home */}
          <CustomButton label="Back to Home" bgColor="light-blue" href="/" className="btn-lg" />
        </div>
      </section>
    </>
  );
};

export default CommingSoon;
