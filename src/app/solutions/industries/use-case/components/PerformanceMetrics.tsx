import HeaderTitle from '@/components/ui/HeaderTitle';
import UseCaseCard from '@/components/ui/Use-Case/UseCaseCard';

const PerformanceMetrics = () => {
  const metrics = [
    {
      label: '001 <span style="font-weight: 200;">FINANCIAL SERVICES</span>',
      description:
        'Ultra-low-latency trading, FIX protocol optimisation, market-data delivery and resilient session handling.',
    },
    {
      label: '002 <span style="font-weight: 200;">DEFENCE</span>',
      description:
        'Secure, resilient networking for distributed operational infrastructure and mission-critical communications.',
    },
    {
      label: '003 <span style="font-weight: 200;"> HEALTHCARE</span>',
      description:
        'Stable connectivity for distributed clinics, remote diagnostics and critical communication systems.',
    },
    {
      label: '004 <span style="font-weight: 200;">LOGISTICT</span>',
      description:
        'Consistent performance across multi-site operations, cloud systems and globally distributed teams.',
    },
  ];

  return (
    <section
      style={{
        background: '#FFFFFF',
        padding: '80px 0',
        position: 'relative',
      }}
    >
      <div className="container">
        <HeaderTitle
          title="Proven in High-Demand Environments"
          variant="gold"
          className="text-center mb-5 fw-bold"
        />
        <h5
          className="mb-4 text-center"
          style={{
            color: '#001A94',
            fontWeight: 500,
            fontSize: '20px',
            maxWidth: '85%',
            margin: '0 auto',
            fontFeatureSettings: "'liga' off, 'clig' off",
          }}
        >
          The network ecosystem helps organisations improve performance, resilience and visibility
          across complex distributed environments.
        </h5>

        <UseCaseCard metrics={metrics} />
      </div>
    </section>
  );
};

export default PerformanceMetrics;
