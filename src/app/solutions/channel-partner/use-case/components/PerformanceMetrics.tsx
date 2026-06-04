import HeaderTitle from '@/components/ui/HeaderTitle';
import ListCard from '@/components/ui/Use-Case/ListCard';

const PerformanceMetrics = () => {
  const data = [
    'Managed Overlay Services',
    'white-label deployment',
    'SLA VISIBILITY',
    'LOWER OPERATIONAL COMPLEXITY',
    ' MULTI-LINK BONDING',
    'COMMERCIAL DIFFERENTIATION',
  ];

  return (
    <section
      style={{
        background: '#FFFFFF',
        padding: '80px 0',
        position: 'relative',
      }}
    >
      <div className="container  ">
        <HeaderTitle
          title="Why Technology Partners Choose Enigma"
          variant="gold"
          className=" fw-bold text-center"
        />
        <h5
          className=" px-5"
          style={{
            color: '#000',
            fontWeight: 400,
            fontSize: '20px',
            textAlign: 'center',
            lineHeight: '1.9',
            fontFeatureSettings: "'liga' off, 'clig' off",
          }}
        >
          Select a capability to explore how Enigma helps partners create differentiated
          connectivity services <br /> with stronger operational and commercial value.
        </h5>
        <div className="col-12">
          <div className="row g-4 ">
            {data.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-12">
                <ListCard text={item} fontWeight={500} fontSize="16px" isListItem={false} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;
