import { PROTECT_ICON, TCP_ICON, TRIFFIC_ICON, ZERO_TRUST_ICON } from '@/assets/svgs/solutions/industries/usecase';
import HeaderTitle from '@/components/ui/HeaderTitle';
import FeatureCard from '@/components/ui/Use-Case/FeatureCard';

const PerformanceMetrics = () => {
   const metrics = [
     {
       icon: TCP_ICON,
       value: <div style={{ fontWeight: 400, alignItems: 'center' , textAlign: 'center' }}>DIRECTION- <br/>AWARE</div>,
       label: <div style={{ fontWeight: 400, alignItems: 'center' }}>TRAFFIC DRAINING</div>,
     },
     {
       icon: TRIFFIC_ICON,
       value: 'MOS 4.0',
       label: (
         <div style={{ fontWeight: 400, alignItems: 'center' }}>
           AT 180 COUNCURRENT <br /> CALLS
         </div>
       ),
     },
     {
       icon: PROTECT_ICON,
       value: 'MULTI-PATH',
       label: (
         <div style={{ fontWeight: 400, alignItems: 'center' }}>
           SPLIT SECRECY <br /> ROUTING
         </div>
       ),
     },
     {
       icon: ZERO_TRUST_ICON,
       value: 'ZERO-GAP',
       label: (
         <div style={{ fontWeight: 400, alignItems: 'center' }}>
           DURING LINK <br /> DEGRADATION
         </div>
       ),
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
        <div className="row  justify-content-center g-4">
          <div className="col-lg-6 ">
            <HeaderTitle
              title="Designed for Communications Under Stress"
              variant="gold"
              className=" mb-5 fw-bold"
            />
            <h5
              className="mb-4 "
              style={{
                color: '#000',
                fontWeight: 400,
                fontSize: '16px',
                maxWidth: '636px',
                lineHeight: '1.9',
                fontFeatureSettings: "'liga' off, 'clig' off",
              }}
            >
              Enigma maintains stable low-latency communications across degraded, contested and
              mixed-network environments without requiring changes to existing routing, firewalls or
              production IP structures.
              <br />  The platform supports fibre, satellite, LTE/5G and variable-bandwidth
              infrastructure with intelligent directional traffic steering and resilient session
              continuity.
            </h5>
          </div>
          <div className="col-lg-6 ">
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

export default PerformanceMetrics;
