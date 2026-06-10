import {
  PROTECT_ICON,
  TCP_ICON,
  TRIFFIC_ICON,
  ZERO_TRUST_ICON,
} from '@/assets/svgs/solutions/industries/usecase';
import HeaderTitle from '@/components/ui/HeaderTitle';
import FeatureCard from '@/components/ui/Use-Case/FeatureCard';
import ListCard from '@/components/ui/Use-Case/ListCard';

const NetworkConditions = () => {
  const metrics = [
    {
      icon: TCP_ICON,
      value: (
        <>
          <span style={{ color: '#001A94' }}>64</span>
          <span style={{ color: '#2ADEFF' }}>x</span>
        </>
      ),
      label: (
        <>
          TPC UPLIFT ON <br /> LOSSY LINKS
        </>
      ),
    },
    {
      icon: TRIFFIC_ICON,
      value: (
        <>
          <span style={{ color: '#001A94' }}>{`<5`}</span>
          <span style={{ color: '#2ADEFF' }}>ms</span>
        </>
      ),
      label: (
        <>
          PROTECTED TRIFFIC <br /> JITTER
        </>
      ),
    },
    {
      icon: PROTECT_ICON,
      value: (
        <>
          <span style={{ color: '#001A94' }}>{`MOS<0.1`}</span>
          <span style={{ color: '#2ADEFF' }}>%</span>
        </>
      ),
      label: (
        <>
          VOICE & CHAT <br /> STABILITY
        </>
      ),
    },
    {
      icon: ZERO_TRUST_ICON,
      value: (
        <>
          <span style={{ color: '#001A94' }}>
            25 <span style={{ color: '#2ADEFF' }}>-</span>35
          </span>
          <span style={{ color: '#2ADEFF' }}>%</span>
        </>
      ),
      label: <>ENGAGEMENT <br/> INCREASE</>,
    },
  ];
  const data = [
    'AND/+ SDK',
    'PREDICTIVE ROUTING',
    'RAIN DUPLICATION',
    'ZERO-TOUCH PROVISIONING',
    'API-DRIVEN CONTROL',
    'WI-FI / 5G / SATELLITE',
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
          title={<>Intelligent Overlay Infrastructure for Real-Time Platforms</>}
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
          Integrated as a lightweight SDK overlay, Enigma improves application performance across
          unstable or mixed-network environments without requiring changes to production IPs,
          routing or firewalls. The architecture supports scalable deployment across cloud
          platforms, SaaS systems, gaming infrastructure and edge environments.
        </p>
        <div className="row align-items-center justify-content-center pt-2 g-4">
          <div className="col-lg-6 ">
            <div className="row g-4">
              <div className="col-12">
                {data.map((item, index) => (
                  <ListCard
                    key={index}
                    text={item}
                    fontSize="20px"
                    fontWeight={500}
                    isListItem={false}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
            {' '}
            <div className="row g-4">
              {metrics.map((metric, index) => (
                <div key={index} className="col-md-6 col-12 ">
                  <FeatureCard
                    icon={metric.icon}
                    value={metric.value}
                    label={metric.label}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkConditions;
