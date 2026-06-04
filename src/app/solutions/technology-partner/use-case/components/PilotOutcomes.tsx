import { PROTECT_ICON } from '@/assets/svgs/solutions/industries/usecase';
import { Globe, Path, Visibiliy, ZeroTOuch } from '@/assets/svgs/solutions/technology-partner/usecase';
import HeaderTitle from '@/components/ui/HeaderTitle';
import UseCaseCard from '@/components/ui/Use-Case/UseCaseCard';

const PilotOutcomes = () => {
  const metrics = [
    {
      icon: PROTECT_ICON,
      label: `No Infrastructure <br/> Replacement`,
    },
    {
      icon: Visibiliy,
      label: `API-Controlled <br/> Provisioning`,
    },
    {
      icon: ZeroTOuch,
      label: `Zero-Touch <br/> Deployment`,
    },
    {
      icon: Globe,
      label: `SDK-Based Overlay`,
    },
    {
      icon: Path,
      label: `Production-Safe <br/>  Integration`,
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
          title="Built for Fast Integration and Global Scale"
          variant="gold"
          className="text-center mb-5 fw-bold"
        />
        <UseCaseCard metrics={metrics} cardShow={5} />
      </div>
    </section>
  );
};

export default PilotOutcomes;
