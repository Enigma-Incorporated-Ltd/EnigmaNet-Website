import { ENIGMA_USE_CASES } from '@/assets/svgs/solutions/service-providers-&-partners/usecase';
import './style.css';
import UseCaseButton from '@/components/ui/Use-Case/UseCaseButton';
import UseCaseStatCard from '@/components/ui/Use-Case/UseCaseStatCard';

const HeroBanner = () => {
  return (
    <section
      className="py-5"
      style={{
        background:
          'linear-gradient(180deg, rgba(13, 30, 55, 0.20) 0%, rgba(13, 27, 41, 0.20) 100%), linear-gradient(300deg, rgba(13, 27, 41, 0.40) 33.2%, rgba(0, 35, 152, 0.40) 100%), #0D1B29',
      }}
    >
      <div
        className="container hero-padding "
        style={{
          position: 'relative',
          zIndex: 1,
          marginBottom: '4rem',
        }}
      >
        <div className="row align-items-center g-5 ">
          {/* Left Content */}
          <div className="col-lg-7  ">
            {/* <span
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
            </span> */}

            <h1
              className="fw-semibold text-white mb-3"
              style={{
                fontSize: 'clamp(2.5rem, 3.3vw, 3.3rem)',
                lineHeight: '1.1',
              }}
            >
              Service Providers & Partners
            </h1>

            <h3
              className="mb-4"
              style={{
                color: '#0091FF',
                fontWeight: 500,
                fontSize: 'clamp(1.4rem, 2vw, 2.2rem)',
              }}
            >
              Turn Existing Infrastructure into Premium Connectivity Services
            </h3>

            <p
              className="mb-5"
              style={{
                color: '#FFF',
                fontSize: '18px',
                lineHeight: '1.8',
              }}
            >
              Enigma helps service providers transform existing connectivity into measurable premium
              services with stronger performance, resilience and operational visibility. Designed
              for data-centre operators, carriers and edge-network providers seeking differentiated
              enterprise-grade offerings.
            </p>

            <div className="d-flex flex-column justify-content-lg-start justify-content-center flex-sm-row gap-3 w-100 w-lg-auto">
              <UseCaseButton text="Book a Pilot" variant="blue" href="/get-in-touch" />
              <UseCaseButton text="Talk to an Expert" variant="white" href="/get-in-touch" />
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-5 ">
            <div className="d-flex justify-content-center pt-5 justify-content-lg-end">
              <ENIGMA_USE_CASES />
            </div>
            <div className="d-flex hero-stats justify-content-center  gap-3 ">
              <UseCaseStatCard
                value="20-60%"
                label={
                  <>
                    LATENCY <br /> IMPROVEMENT
                  </>
                }
                fontSize="14px"
                width={'160px'}
              />
              <UseCaseStatCard value="<0,1%" label="PACKET LOSS" fontSize="14px" width={'160px'} />{' '}
              <UseCaseStatCard value="<500ms" label="FAILOVER" fontSize="14px" width={'160px'} />
              <UseCaseStatCard
                label={
                  <>
                    OVERLAY <br /> DEPLOYMENT
                    <br /> ARCHITECTURE
                  </>
                }
                fontSize="14px"
                width={'160px'}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
