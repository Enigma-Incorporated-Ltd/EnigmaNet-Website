import HeaderTitle from '@/components/ui/HeaderTitle';
import ListCard from '@/components/ui/Use-Case/ListCard';

const NetworkConditions = () => {
  const data = [
    'Stable communications under degraded conditions',
    ' Resilient session continuity without blackout',
    ' No cloud dependency',
    ' Lightweight deployment for low SWaP environments',
    ' Mixed-network compatibility across LTE, fibre and satellite',
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
              title="Operational Continuity in Degraded Network Conditions"
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
              During independent testing under reduced bandwidth and degraded network quality,
              Enigma maintained uninterrupted communications at nearly twice the call capacity of
              competing SD-WAN solutions.
              <br /> Direction-aware routing enables traffic diversion without full-link teardown,
              preserving operational continuity during partial uplink disruption or interference.
            </h5>
          </div>
          <div className="col-lg-6 ">
            <div className="row g-4">
              <div className="col-12">
                {data.map((item, index) => (
                  <ListCard key={index} text={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkConditions;
