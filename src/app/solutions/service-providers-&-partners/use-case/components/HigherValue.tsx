import HeaderTitle from '@/components/ui/HeaderTitle';
import UseCaseCard from '@/components/ui/Use-Case/UseCaseCard';
const metrics = [
  {
    value: 'Week 1',
    description:
      '<span style="font-size: 16px; font-weight: 500;">KPI definition and representative route selection </span>',
  },
  {
    value: 'Week 2',
    description:
      '<span style="font-size: 16px; font-weight: 500;">Sandbox and overlay deployment </span>',
  },
  {
    value: 'Week 3',
    description:
      '<span style="font-size: 16px; font-weight: 500;">Performance benchmarking and stress testing </span>',
  },
  {
    value: 'Week 4',
    description:
      '<span style="font-size: 16px; font-weight: 500;">Reporting, analysis and rollout planning</span>',
  },
];
const HigherValue = () => {
  return (
    <section
      style={{
        background: '#FFFFFF',
        position: 'relative',
        padding: '80px 0',
      }}
    >
      <div className="container">
        <HeaderTitle
          title={<>Build Higher-Value Connectivity Services with Enigma</>}
          variant="gold"
          className="text-center mb-5 fw-bold"
        />
        <p
          className="text-center mx-auto"
          style={{
            color: '#001A94',
            fontSize: 'clamp(16px, 2vw, 20px)',
            lineHeight: 1.8,
            fontWeight: 600,

            paddingInline: '12px',
          }}
        >
          Enigma helps providers transform existing infrastructure into measurable premium
          connectivity offerings without disruptive infrastructure replacement.
        </p>
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
          A structured 4-week pilot enables operators to evaluate performance directly within their
          own infrastructure. Baseline and accelerated paths operate side-by-side with KPIs jointly
          defined during week one and tracked throughout deployment.
        </p>
        <div className="text-center mt-5 px-lg-5 px-md-4 px-3 ">
          <UseCaseCard metrics={metrics} cardShow={4} />
        </div>
      </div>
    </section>
  );
};

export default HigherValue;
