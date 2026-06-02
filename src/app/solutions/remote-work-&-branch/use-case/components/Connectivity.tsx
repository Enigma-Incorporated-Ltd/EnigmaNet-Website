import HeaderTitle from '@/components/ui/HeaderTitle';
import UseCaseCard from '@/components/ui/Use-Case/UseCaseCard';
const metrics = [
  {
    label: 'APN Overlay',
    description: 'Runs alongside your existing infrastructure  – no rip and replace.',
  },
  {
    label: 'RAIN Technology',
    description: 'Multi-path routing with sub-second or zero-gap failover.',
  },
  {
    label: 'TCP Acceleration',
    description: 'Dramatically improves throughput over high-latency or lossy links.',
  },
  {
    label: 'Byte-Level QoS',
    description: 'Intelligent prioritisation ensures critical apps and calls always go first.',
  },
  {
    label: 'Secure & Private',
    description:
      'End-to-end encryption with metadata obfuscation and optional air-gapped deployment.',
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
          title={<>Built for Stable, High-Performance Connectivity</>}
          variant="gold"
          className="text-center mb-5 fw-bold"
        />
        <UseCaseCard metrics={metrics} cardShow={5} />
      </div>
    </section>
  );
};

export default Connectivity;
