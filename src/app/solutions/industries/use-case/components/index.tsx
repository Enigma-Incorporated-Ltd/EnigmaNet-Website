
import PerformanceMetrics from './PerformanceMetrics';
import ConnectivityPromo from '@/components/ui/useCase/ConnectivityPromo';
import PilotOutcomes from './PilotOutcomes';
import OperationalImpact from './OperationalImpact';
import EnigmaNetCard from './EnigmaNetCard';
import HeroBanner from '@/components/ui/useCase/HeroBanner';
import { industriesUsecase } from '@/assets/img';

const IndustriesCasePage = () => {
  return (
    <div className="bg-white">
      <HeroBanner
        title="Industries"
        subtitle="Proven in relevant environments"
        description="Enigma is designed for demanding sectors where poor connectivity directly affects revenue, service quality and operational continuity. "
        buttons={[
          { label: 'Book a Pilot', variant: 'blue', href: '/get-in-touch' },
          { label: 'Talk to an Expert', variant: 'white', href: '/get-in-touch' },
        ]}
        heroImage={industriesUsecase}
        sectionBackground="radial-gradient(283.6% 74.28% at 0% 0%, rgba(0, 86, 245, 0.20) 0%, rgba(13, 27, 41, 0.20) 100%), #0D1B29"
        imgBackground={{
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 80% at 55% 48%, black 35%, transparent 70%)',
          maskImage: 'radial-gradient(83% 88% at 55% 78%, #0D1B29 45%, transparent 75%)',
        }}
        leftCol="col-lg-6"
        rightCol="col-lg-6"
      />
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
