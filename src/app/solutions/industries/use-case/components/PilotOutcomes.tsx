import UseCaseButton from '@/components/ui/useCaseButton';

interface StatCardProps {
  value: string;
  label: string |React.ReactNode;
}
 
const StatCard = ({ value, label }: StatCardProps) => (
  <div
    style={{
      borderRadius: '12px',
      border: '1px solid #FFF',
      background: 'linear-gradient(180deg, rgba(64, 113, 163, 0.20) 0%, #182B3D 99.99%)',
      boxShadow:
        '0 21px 6px 0 rgba(0, 0, 0, 0), 0 13px 5px 0 rgba(0, 0, 0, 0.01), 0 8px 5px 0 rgba(0, 0, 0, 0.05), 0 3px 3px 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.10)',
      padding: '20px 24px',
      minWidth: '120px',
      textAlign: 'center',
    }}
  >
    <div
      style={{
        color: '#2ADEFF',
        fontSize: '22px',
        fontWeight: 500,
        marginBottom: '6px',
        letterSpacing: '-0.02em',
      }}
    >
      {value}
    </div>

    <div
      style={{
        color: '#FFF',
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      }}
    >
      {label}
    </div>
  </div>
);
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
     <div className="d-flex container  justify-content-lg-end justify-content-center"
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
              <StatCard
                value="20-60%"
                label={
                  <>
                    Latency <br /> Improvement
                  </>
                }
              />
              <StatCard value="<0.1%" label="Packet Loss" />
              <StatCard value="<500ms" label="Failover" />
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
}

export default PilotOutcomes