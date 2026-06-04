import { PROTECT_ICON } from '@/assets/svgs/solutions/industries/usecase';
import { Globe, Path, Visibiliy, ZeroTOuch } from '@/assets/svgs/solutions/technology-partner/usecase';
import HeaderTitle from '@/components/ui/HeaderTitle';
import UseCaseCard from '@/components/ui/Use-Case/UseCaseCard';

const PilotOutcomes = () => {
  const metrics = [
    {
      icon: PROTECT_ICON,
      label: `Higher-Margin <br/> Services`,
    },
    {
      icon: Visibiliy,
      label: `SLA Differentiation`,
    },
    {
      icon: ZeroTOuch,
      label: `Faster Deployment`,
    },
    {
      icon: Globe,
      label: `Reduced <br /> Infrastructure Cost`,
    },
    {
      icon: Path,
      label: `Better Customer <br/> Retention`,
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
          title="Stronger Outcomes for Partners and Customers"
          variant="gold"
          className="text-center mb-5 fw-bold"
        />
        <UseCaseCard metrics={metrics} cardShow={5} />
      </div>
    </section>
  );
};

export default PilotOutcomes;
