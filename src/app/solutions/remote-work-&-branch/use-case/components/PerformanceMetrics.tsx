import {
  Pocket,
  Speed,
  SpeedMeter,
  Vector,
} from '@/assets/svgs/solutions/remote-work-&-branch/usecase';
import HeaderTitle from '@/components/ui/HeaderTitle';
import UseCaseButton from '@/components/ui/Use-Case/UseCaseButton';
import UseCaseCard from '@/components/ui/Use-Case/UseCaseCard';

const PerformanceMetrics = () => {
  const metrics = [
    {
      icon: SpeedMeter,
      value: '80%',
      label: 'Latency Reduction',
      description: 'Up to 80% improvement in real-world deployments',
    },
    {
      icon: Speed,
      value: '<500ms',
      label: 'Millisecond Failover',
      description: 'Sub-second or zero-gap failover with RAIN',
    },
    {
      icon: Vector,
      value: '160s → 2.5s',
      label: 'Session Interruption',
      description: 'Reduction from 160 seconds to 2.5 seconds at 2% loss',
    },
    {
      icon: Pocket,
      value: '<0.1%',
      label: 'Packet Loss',
      description: 'Effective loss maintained below 0.1% on protected flows',
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
          title="Proven Performance in Demanding Environments"
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

export default PerformanceMetrics;
