import PerformanceMetrics from './PerformanceMetrics';
import ConnectivityPromo from '@/components/ui/Use-Case/ConnectivityPromo';
import PilotOutcomes from './PilotOutcomes';
import HeroBanner from '@/components/ui/Use-Case/HeroBanner';
import { technologyCase } from '@/assets/img';
import UseCaseStatCard from '@/components/ui/Use-Case/UseCaseStatCard';
import NetworkConditions from './NetworkConditions';
import NetworkSessions from './NetworkSessions';
import FeatureSection from './FeatureSection';

const TechnologyCasePage = () => {
  return (
    <div className="bg-white">
      <HeroBanner
        title="Technology Partner"
        subtitle="Built to Strengthen Real-Time Platform Performance"
        subtitleColor="#187BC9"
        description="Enigma helps technology partners improve the performance, reliability and resilience of platforms that depend on low-latency connectivity and uninterrupted user experience.
Designed for cloud platforms, SaaS environments, edge infrastructure and real-time applications operating across variable networks."
        buttons={[
          { label: 'Book a Pilot', variant: 'blue', href: '/get-in-touch' },
          { label: 'Talk to an Expert', variant: 'white', href: '/get-in-touch' },
        ]}
        sectionBackground="#0D1B29"
        heroImage={technologyCase}
        children={
          <>
            {' '}
            <div className="d-flex gap-lg-5 gap-md-3 flex-wrap container gap-4 justify-content-lg-end justify-content-center mt-5">
              <UseCaseStatCard
                value=">50ms"
                label={
                  <>
                    LATENCY <br /> TARGETS
                  </>
                }
                fontSize="14px"
                width={'160px'}
              />
              <UseCaseStatCard
                value="<0,1%"
                label={<>PACKET LOSS</>}
                fontSize="14px"
                width={'160px'}
              />
              <UseCaseStatCard
                value="<200ms"
                label={<>FAILOVER</>}
                fontSize="14px"
                width={'160px'}
              />
              <UseCaseStatCard
                value="30-40%"
                label={
                  <>
                    BANDWIDTH
                    <br /> RECLAIMED
                  </>
                }
                fontSize="14px"
                width={'160px'}
              />
            </div>
          </>
        }
      />
      <PerformanceMetrics />
      <NetworkConditions />
      <NetworkSessions/>
      <PilotOutcomes />
      <FeatureSection />
    

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

export default TechnologyCasePage;
