import { DB, Mobile_Security, Monitor, OSS } from '@/assets/svgs/solutions/channel-partner/usecase';
import HeaderTitle from '@/components/ui/HeaderTitle';
import FeatureCard from '@/components/ui/Use-Case/FeatureCard';
import UseCaseCard from '@/components/ui/Use-Case/UseCaseCard';

const NetworkConditions = () => {
  const metrics = [
    {
      icon: Mobile_Security,
      value: (
        <>
          <span style={{ color: '#000' }}>UP TO </span>
          <span style={{ color: '#2ADEFF' }}>8</span>
        </>
      ),
      label: (
        <>
          BONDED ACCESS
          <br /> LINKS
        </>
      ),
    },
    {
      icon: DB,
      value: (
        <>
          <span style={{ color: '#2ADEFF' }}>£</span>{' '}
          <span style={{ color: '#000' }}>{`500–`}</span>
          <span style={{ color: '#2ADEFF' }}>£</span>
          <span style={{ color: '#000' }}>{`2,500`}</span>
        </>
      ),
      label: (
        <>
          MONTHLY TIER <br /> POTENCIAL
        </>
      ),
    },
    {
      icon: Monitor,
      value: (
        <>
          {' '}
          <span style={{ color: '#2ADEFF' }}>SLA</span>
          <span style={{ color: '#000' }}>-GRADE</span>
        </>
      ),
      label: (
        <>
          PERFOMANCE <br /> MONITORING
        </>
      ),
    },
    {
      icon: OSS,
      value: (
        <>
          <span style={{ color: '#000' }}>
            OSS <span style={{ color: '#2ADEFF' }}>/</span> BSS
          </span>
        </>
      ),
      label: <>API INTEGRATION</>,
    },
  ];
  const data = [
    {
      label: `PREMIUM BONDED INTERNET`,
      description: 'High-availability connectivity across multiple links',
    },
    {
      label: `ASSURED BROADBAND`,
      description: 'SLA-backed broadband services with live performance visibility.',
    },
    {
      label: `MANAGED OVERLAY SERVICES`,
      description: 'Overlay-based acceleration and resilience without hardware replacement',
    },
    {
      label: `ENTERPRISE CONNECTIVITY TIERS`,
      description: 'Premium low-latency services for distributed enterprise environments.',
    },
    {
      label: `TENANT VISIBILITY PORTALS`,
      description: 'Customer-facing performance monitoring and SLA transparency.',
    },
    {
      label: `AUTOMATED PROVISIONING`,
      description: 'API-driven deployment and service management at scale.',
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
      <div className="container ">
        <HeaderTitle
          title={<>Carrier-Grade Broadband Across Existing Infrastructure</>}
          variant="gold"
          className="text-center mb-5 fw-bold"
        />
        <p
          className="text-center mx-auto px-lg-5 px-md-4 px-3"
          style={{
            color: '#000',
            fontSize: 'clamp(16px, 2vw, 20px)',
            lineHeight: 1.8,
            fontWeight: 400,

            paddingInline: '12px',
          }}
        >
          Alt-nets and regional ISPs can use Enigma EDGE appliances to bond multiple network links
          into a resilient SLA-grade service layer with automated provisioning and live performance
          monitoring. Partners can replace costly MPLS deployments with high-performance bonded
          connectivity while improving operational visibility and reducing infrastructure costs.
        </p>
        <div className="row align-items-center justify-content-center pt-2 g-4 w-lg-75 mx-auto">
          {metrics.map((metric, index) => (
            <div key={index} className="col-md-3 col-12 ">
              <FeatureCard
                icon={metric.icon}
                value={metric.value}
                label={metric.label}
                index={index}
              />
            </div>
          ))}
        </div>
        <p
          className="text-center mx-auto px-lg-5 px-md-4 px-3 mt-5"
          style={{
            color: '#000',
            fontSize: 'clamp(16px, 2vw, 20px)',
            lineHeight: 1.8,
            fontWeight: 400,

            paddingInline: '12px',
          }}
        >
          Supports fibre, DSL, 5G and LEO connectivity with in-order packet resequencing and
          intelligent traffic steering.
        </p>
        <HeaderTitle
          title={<>Built for Managed Connectivity Services</>}
          variant="gold"
          className="text-center mb-5 fw-bold"
        />{' '}
        <div className='w-lg-75 mx-auto'>
          <UseCaseCard metrics={data} cardShow={2} minHeight='' />
        </div>
      </div>
    </section>
  );
};

export default NetworkConditions;
