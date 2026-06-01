import { BASELINE_ICON, Lock_ICON, ROLLOUT_ICON, SECURITY_ICON } from '@/assets/svgs/solutions/service-providers-&-partners/usecase';
import CaseStudyHighlight from '@/components/ui/CaseStudyHighlight';
import HeaderTitle from '@/components/ui/HeaderTitle';
import UseCaseCard from '@/components/ui/useCaseCard';
const metrics = [
  {
    icon: BASELINE_ICON,
    label: `<span style="color: #000;font-weight: 500;font-size: 16px; "> BASELINE ROUTE </span>`,
  },
  {
    icon: ROLLOUT_ICON,
    label: `<span style="color: #000;font-weight: 500;font-size: 16px; ">ROLLOUT READY </span>`,
  },
  {
    icon: Lock_ICON,
    label: `<span style="color: #000;font-weight: 500;font-size: 16px; ">EDGE MAX OVERLAY </span>`,
  },
  {
    icon: SECURITY_ICON,
    label: `<span style="color: #000;font-weight: 500;font-size: 16px; ">LATENCY / FAILOVER / PACKET LOSS KPIs </span>`,
  },
];
const Connectivity = () => {
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
          title={<>Data-Centre Operator Deployment Model</>}
          variant="gold"
          className="text-center mb-5 fw-bold"
        />
        <CaseStudyHighlight
          data={[
            'Representative routes',
            'Baseline vs EDGE Max',
            'KPI monitoring',
            'Rollout readiness',
          ]}
          className="text-black"
          isbg
        />
        <div className="row g-4 align-items-center">
       

          {/* Right Content */}
          <div className="col-12 ">
            <div className="d-flex justify-content-center mt-3 mt-md-5 px-3 px-md-0  px-lg-0">
              <UseCaseCard metrics={metrics} cardShow={4} isbg />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connectivity;
