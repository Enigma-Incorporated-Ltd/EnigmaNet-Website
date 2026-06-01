import HeroBanner from './HeroBanner';
import PerformanceMetrics from './PerformanceMetrics';
import HealthcareSolutionShowcase from './HealthcareSolutionShowcase';
import ConnectivityPromo from '@/components/ui/ConnectivityPromo';
import Connectivity from './Connectivity';

const RemoteWorkUseCasePage = () => {
  return (
    <div className="bg-white">
      <HeroBanner />
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
