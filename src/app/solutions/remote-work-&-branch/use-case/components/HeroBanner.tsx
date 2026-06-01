import { UsecaseRemoteWork1 } from '@/assets/img';

import UseCaseButton from '@/components/ui/useCaseButton';

const HeroBanner = () => {
  return (
    <section
      className="py-5"
      style={{
        background: 'linear-gradient(180deg, #001135 0%, #00163F 49.02%, #0D1B29 100%)',
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
          <div className="col-lg-7">
            <span
              className="px-3 py-2 d-inline-block mb-4"
              style={{
                borderRadius: '12px',
                background: 'rgba(20, 123, 201, 0.40)',
                color: '#1F9EFF',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              Use Cases
            </span>

            <h1
              className="fw-semibold text-white mb-3"
              style={{
                fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                lineHeight: '1.1',
              }}
            >
              Remote Work & Branch
            </h1>

            <h3
              className="mb-4"
              style={{
                color: '#0091FF',
                fontWeight: 500,
                fontSize: 'clamp(1.4rem, 2vw, 2.2rem)',
              }}
            >
              Designed for distributed operations
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
              Enigma helps distributed teams maintain stable, high-performance connectivity across
              offices, branches and remote environments without replacing existing infrastructure.
              The Accelerated Private Network overlay runs alongside existing networks, helping
              improve latency, session stability, failover and application performance across
              multi-site environments.
            </p>

            <div className="d-flex flex-column justify-content-start flex-sm-row gap-3 w-100 w-lg-auto">
              <UseCaseButton text="Book a Pilot" variant="blue" href="/get-in-touch" />
              <UseCaseButton text="Talk to an Expert" variant="white" href="/get-in-touch" />
           
            </div>
          </div>

          {/* Right Image */}
          <div
            className="col-lg-5 text-center"
            style={{
              WebkitMaskImage:
                'radial-gradient(ellipse 80% 80% at 55% 48%, black 35%, transparent 70%)',
              maskImage: 'radial-gradient(91% 83% at 54% 61%, black 43%, transparent 75%)',
            }}
          >
            <img
              src={UsecaseRemoteWork1}
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
