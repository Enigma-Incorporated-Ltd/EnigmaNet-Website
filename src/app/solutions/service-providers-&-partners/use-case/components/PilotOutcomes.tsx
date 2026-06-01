import UseCaseButton from '@/components/ui/useCaseButton';

interface StatCardProps {
  value?: string;
  label: string | React.ReactNode;
}

export const StatCard = ({ value, label }: StatCardProps) => (
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
    {value && (
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
    )}

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
export const RevenueStatCard = ({ label }: StatCardProps) => (
  <div
    style={{
      borderRadius: '12px',
      background:
        'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(102, 102, 102, 0.20) 100%), #FFF',
      boxShadow:
        '0 21px 6px 0 rgba(0, 0, 0, 0.00), 0 13px 5px 0 rgba(0, 0, 0, 0.01), 0 8px 5px 0 rgba(0, 0, 0, 0.05), 0 3px 3px 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.10)',
      padding: '15px 15px',
      minWidth: '120px',
      textAlign: 'center',
      color: '#0D1B29',
      fontSize: '16px',
      fontWeight: 700,
      letterSpacing: '0.08em',
      width: '100%',
    }}
  >
    {label}
  </div>
);
const PilotOutcomes = () => {
  return (
    <section
      style={{
        background: '#0B1622',
        padding: 'clamp(3rem, 5vw, 4rem) 1rem 5rem',
        position: 'relative',
      }}
    >
      {/* Free trial badge */}
      <div
        className="container d-flex justify-content-center justify-content-lg-end"
        style={{ margin: '0 auto 0.5rem' }}
      >
        <UseCaseButton text="FREE TRIAL 7 DAYS" variant="blue" />
      </div>

      <div className="container">
        <h2
          className="text-center text-lg-start"
          style={{
            fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
            fontWeight: 700,
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em',
            color: '#FFF',
          }}
        >
          Built for Modern Connectivity Providers
        </h2>

        <p
          className="text-center text-lg-start"
          style={{
            color: '#0091FF',
            fontSize: 'clamp(1.05rem, 1.9vw, 2rem)',
            fontWeight: 400,
            lineHeight: 1.5,
            marginBottom: '2rem',
          }}
        >
          Why Providers Choose Enigma
        </p>

        <p
          className="text-center mx-auto"
          style={{
            color: '#fff',
            fontSize: 'clamp(16px, 2vw, 20px)',
            lineHeight: 1.8,
            fontWeight: 700,
            
            paddingInline: '12px',
          }}
        >
          Explore the capabilities that help service providers deliver stronger performance,
          operational visibility and higher-value connectivity services.
        </p>

        <div className="row g-3 pt-4">
          {[
            'PREMIUM SERVICE PACKAGING',
            'OPERATIONAL VISIBILITY',
            'OVERLAY DEPLOYMENT',
            'REVENUE EXPANSION',
          ].map(label => (
            <div key={label} className="col-12 col-sm-6 col-lg-3 d-flex">
              <RevenueStatCard label={label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PilotOutcomes;
