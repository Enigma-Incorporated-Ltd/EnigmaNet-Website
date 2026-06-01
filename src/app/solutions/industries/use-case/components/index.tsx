import HeroBanner from './HeroBanner';
import PerformanceMetrics from './PerformanceMetrics';
import ConnectivityPromo from '@/components/ui/ConnectivityPromo';
import PilotOutcomes from './PilotOutcomes';
import OperationalImpact from './OperationalImpact';
import EnigmaNetCard from './EnigmaNetCard';

const IndustriesCasePage = () => {
  return (
    <div className="bg-white">
      <HeroBanner />
      <PilotOutcomes />
      <OperationalImpact />
      <PerformanceMetrics />
      <EnigmaNetCard />
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

export default IndustriesCasePage;
