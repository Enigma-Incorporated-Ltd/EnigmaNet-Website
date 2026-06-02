// import HeroBanner from './HeroBanner';
import PerformanceMetrics from './PerformanceMetrics';
import HealthcareSolutionShowcase from './HealthcareSolutionShowcase';
import ConnectivityPromo from '@/components/ui/Use-Case/ConnectivityPromo';
import Connectivity from './Connectivity';
import HeroBanner from '@/components/ui/Use-Case/HeroBanner';
import { UsecaseRemoteWork1 } from '@/assets/img';

const RemoteWorkUseCasePage = () => {
  return (
    <div className="bg-white">
      <HeroBanner
        title="Remote Work & Branch"
        usecase="Use Cases"
        subtitle="Designed for distributed operations"
        description="Enigma helps distributed teams maintain stable, high-performance connectivity across offices, branches and remote environments without replacing existing infrastructure.  The Accelerated Private Network overlay runs alongside existing networks, helping improve latency, session stability, failover and application performance across multi-site environments."
        buttons={[
          { label: 'Book a Pilot', variant: 'blue', href: '/get-in-touch' },
          { label: 'Talk to an Expert', variant: 'white', href: '/get-in-touch' },
        ]}
        heroImage={UsecaseRemoteWork1}
        sectionBackground="linear-gradient(180deg, #001135 0%, #00163F 49.02%, #0D1B29 100%)"
        imgBackground={{
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 80% at 55% 48%, black 35%, transparent 70%)',
          maskImage: 'radial-gradient(91% 83% at 54% 61%, black 43%, transparent 75%)',
        }}
      />
      <PerformanceMetrics />
      <HealthcareSolutionShowcase />
      <Connectivity />
      <ConnectivityPromo
        title="Ready to Improve Connectivity Across Your Teams?"
        description="See how Enigma can help your distributed teams work, communicate and perform – no matter where they are."
        buttons={[
          { label: 'Book a Pilot', variant: 'blue', href: '/get-in-touch' },
          { label: 'Talk to an Expert', variant: 'white', href: '/get-in-touch' },
        ]}
      />
    </div>
  );
};

export default RemoteWorkUseCasePage;
