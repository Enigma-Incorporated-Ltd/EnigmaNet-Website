import { Shield } from '@/assets/svgs/solutions/technology-partner/usecase';
import HeaderTitle from '@/components/ui/HeaderTitle';
import ListCard from '@/components/ui/Use-Case/ListCard';
import UseCaseButton from '@/components/ui/Use-Case/UseCaseButton';

const PerformanceMetrics = () => {
  const data = [
    'Lightweight SDK Integration',
    'Predictive Routing',
    ' Zero-Loss Resilience',
    'API-Driven Scaling',
    ' Real-Time Optimisation',
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
          <div className="col-lg-7 ">
            <HeaderTitle
              title="Why Technology Partners Choose Enigma"
              variant="gold"
              className=" fw-bold"
            />
            <h5
              className=""
              style={{
                color: '#000',
                fontWeight: 400,
                fontSize: '16px',
                maxWidth: '636px',
                lineHeight: '1.9',
                fontFeatureSettings: "'liga' off, 'clig' off",
              }}
            >
              Select each capability to explore how Enigma improves performance, resilience and
              scalability across modern digital platforms.
            </h5>
            <div className="d-flex justify-content-center  align-items-center ">
              <Shield />
            </div>
            <div className="d-flex justify-content-lg-start justify-content-center flex-column flex-sm-row w-100 mt-5 mt-lg-0 ">
              <UseCaseButton text="FREE TRIAL 7 DAYS" variant="blue" />
            </div>
          </div>
          <div className="col-lg-5 ">
            <div className="row  g-4">
              <div className="col-12 pt-5">
                {data.map((item, index) => (
                  <ListCard
                    key={index}
                    text={item}
                    fontWeight={500}
                    fontSize="20px"
                    isListItem={false}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;
