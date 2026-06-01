import { industriesUsecase } from '@/assets/img';

import UseCaseButton from '@/components/ui/useCaseButton';

const HeroBanner = () => {
  return (
    <section
      className="py-5"
      style={{
        background:
          'radial-gradient(283.6% 74.28% at 0% 0%, rgba(0, 86, 245, 0.20) 0%, rgba(13, 27, 41, 0.20) 100%), #0D1B29',
      }}
    >
      <div
        className="container px-3"
        style={{
          paddingTop: '12rem',
        }}
      >
        <div className="row align-items-center g-5">
          {/* Left Content */}
          <div className="col-lg-6">
          

            <h1
              className="fw-semibold text-white mb-3"
              style={{
                fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                lineHeight: '1.1',
              }}
            >
              Industries
            </h1>

            <h3
              className="mb-4"
              style={{
                color: '#0091FF',
                fontWeight: 500,
                fontSize: 'clamp(1.4rem, 2vw, 2.2rem)',
              }}
            >
              Proven in relevant environments
            </h3>

            <p
              className="mb-5"
              style={{
                color: '#FFF',
                fontSize: '18px',
                lineHeight: '1.8',
                maxWidth: '720px',
              }}
            >
              Enigma is designed for demanding sectors where poor connectivity directly affects
              revenue, service quality and operational continuity.
            </p>

            <div className="d-flex flex-column justify-content-start flex-sm-row gap-3 w-100 w-lg-auto">
            
              <UseCaseButton text="Book a Pilot" variant="blue" href="/get-in-touch" />
              <UseCaseButton text="Talk to an Expert" variant="white" href="/get-in-touch" />
            
            </div>
          </div>

          {/* Right Image */}
          <div
            className="col-lg-6 text-center"
            style={{
              WebkitMaskImage:
                'radial-gradient(ellipse 80% 80% at 55% 48%, black 35%, transparent 70%)',
              maskImage: 'radial-gradient(83% 88% at 55% 78%, #0D1B29 45%, transparent 75%)',
            }}
          >
            <img
              src={industriesUsecase}
              alt="Remote Work & Branch"
              width={650}
              height={550}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
