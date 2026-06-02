import UseCaseButton from '@/components/ui/useCase/UseCaseButton';
import UseCaseStatCard from '@/components/ui/useCase/UseCaseStatCard';

const PilotOutcomes = () => {
  return (
    <section
      style={{
        background: '#0B1622',
        padding: '4rem 2rem 5rem',
        position: 'relative',
      }}
    >
      {/* Free trial badge */}
      <div
        className="d-flex container  justify-content-lg-end justify-content-center"
        style={{
          margin: '0 auto 2rem',
        }}
      >
        <UseCaseButton text="FREE TRIAL 7 DAYS" variant="blue" />
      </div>

      <div className="container">
        <h2
          style={{
            fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
            fontWeight: 700,
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
            color: '#FFF',
          }}
        >
          Target pilot outcomes include
        </h2>

        <p
          style={{
            color: '#0091FF',
            fontSize: 'clamp(1.05rem, 1.9vw, 2rem)',
            fontWeight: 400,
            lineHeight: 1.5,

            marginBottom: '2.5rem',
          }}
        >
          Measured improvements across latency, resilience and session stability within existing
          enterprise infrastructure.
        </p>
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="d-flex gap-5 flex-wrap">
              <UseCaseStatCard
                value="20-60%"
                label={
                  <>
                    Latency <br /> Improvement
                  </>
                }
              />
              <UseCaseStatCard value="<0.1%" label="Packet Loss" />
              <UseCaseStatCard value="<500ms" label="Failover" />
            </div>
          </div>

          <div className="col-lg-7 mt-4 mt-lg-0">
            <p
              style={{
                color: '#fff',
                fontSize: '16px',
                lineHeight: 1.8,
                paddingLeft: '1.5rem',
                borderLeft: '2px solid #2ADEFF',
                alignSelf: 'center',
              }}
            >
              The same capability applies wherever critical systems depend on stable connectivity —
              from remote healthcare and industrial field operations to emergency response,
              public-sector networks and multi-site enterprise environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotOutcomes;
