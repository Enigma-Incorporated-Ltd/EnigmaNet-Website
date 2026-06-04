import { AIRGAPPED, Encrypted, MultiPath, ResilientSession } from '@/assets/svgs/solutions/defense-dualtechnology/usecase';
import HeaderTitle from '@/components/ui/HeaderTitle';
import UseCaseButton from '@/components/ui/Use-Case/UseCaseButton';
import UseCaseCard from '@/components/ui/Use-Case/UseCaseCard';

const PilotOutcomes = () => {
  const metrics = [
    {
      icon: Encrypted,
      label: `Encrypted Overlay Connectivity`,
      description: 'Secure communications without replacing production infrastructure.',
    },
    {
      icon: MultiPath,
      label: `Multi-Path RAIN Routing`,
      description:
        'Intelligent traffic steering across fibre, LTE, satellite and mixed-network environments.',
    },
    {
      icon: ResilientSession,
      label: `RESILIENT SESSION HANDLING`,
      description:
        'Stable communications during degraded network conditions and directional interference.',
    },
    {
      icon: AIRGAPPED,
      label: `AIR-GAPPED DEPLOYMENT`,
      description: 'Fully self-contained infrastructure with no cloud dependency.',
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
          title="Why Enigma in Secure Environments"
          variant="gold"
          className="text-center mb-5 fw-bold"
        />
        <UseCaseCard metrics={metrics} />

        <div className="d-flex justify-content-center flex-column flex-sm-row mt-5 w-100 w-lg-auto">
          <UseCaseButton text="FREE TRIAL 7 DAYS" variant="blue" />
        </div>
      </div>
    </section>
  );
};

export default PilotOutcomes;
