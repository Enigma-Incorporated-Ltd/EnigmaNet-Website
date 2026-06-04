import PerformanceMetrics from './PerformanceMetrics';
import ConnectivityPromo from '@/components/ui/Use-Case/ConnectivityPromo';
import PilotOutcomes from './PilotOutcomes';
import HeroBanner from '@/components/ui/Use-Case/HeroBanner';
import { channelUseCase } from '@/assets/img';
import UseCaseStatCard from '@/components/ui/Use-Case/UseCaseStatCard';
import NetworkConditions from './NetworkConditions';

const TechnologyCasePage = () => {
  return (
    <div className="bg-white">
      <HeroBanner
        title="CHANNEL PARTNERS"
        subtitle="Built to Support Stronger Partner Propositions"
        subtitleColor="#187BC9"
        description="Enigma enables channel partners to deliver resilient, low-latency connectivity and managed performance services without requiring customers to replace existing infrastructure.
EDGE Max transforms standard connectivity into premium service offerings with measurable operational value and stronger commercial positioning."
        buttons={[
          { label: 'Book a Pilot', variant: 'blue', href: '/get-in-touch' },
          { label: 'Talk to an Expert', variant: 'white', href: '/get-in-touch' },
        ]}
        sectionBackground="#0D1B29"
        heroImage={channelUseCase}
        children={
          <>
            {' '}
            <div className="d-flex gap-lg-5 gap-md-3 flex-wrap container gap-4 justify-content-lg-end justify-content-center mt-5">
              <UseCaseStatCard
                value="15-25%"
                label={
                  <>
                    PREMIUM
                    <br /> SERVICE
                    <br /> POTENCIAL
                  </>
                }
                fontSize="14px"
                width={'160px'}
              />
              <UseCaseStatCard
                value="50-70%"
                label={
                  <>
                    COST SAVINGS <br />
                    vs <br /> MPLS
                  </>
                }
                fontSize="14px"
                width={'160px'}
              />
              <UseCaseStatCard
                value="UP TO 8"
                label={
                  <>
                    BONDED <br />
                    NETWORK <br /> LINKS
                  </>
                }
                fontSize="14px"
                width={'160px'}
              />
              <UseCaseStatCard
                value="SLA-GRADE"
                label={
                  <>
                    PERFORMANCE
                    <br /> VISIBILITY
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

      <PilotOutcomes />

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
