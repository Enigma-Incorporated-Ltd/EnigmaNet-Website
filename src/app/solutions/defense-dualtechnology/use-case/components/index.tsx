import PerformanceMetrics from './PerformanceMetrics';
import ConnectivityPromo from '@/components/ui/Use-Case/ConnectivityPromo';
import PilotOutcomes from './PilotOutcomes';
import OperationalImpact from './OperationalImpact';
import HeroBanner from '@/components/ui/Use-Case/HeroBanner';
import { DefenseCase } from '@/assets/img';
import UseCaseStatCard from '@/components/ui/Use-Case/UseCaseStatCard';
import NetworkConditions from './NetworkConditions';

const DefenseDualTechnologyUseCasePage = () => {
  return (
    <div className="bg-white">
      <HeroBanner
        className="pt-5 pb-0"
        title="DEFENCE & DUAL-USE TECHNOLOGY"
        subtitle="Secure Connectivity for Mission-Critical Environments"
        subtitleColor="#187BC9"
        description="Enigma delivers secure, resilient overlay connectivity for environments where operational continuity, low latency and communications stability are critical.
Designed for dual-use infrastructure, field operations, emergency response and distributed secure networks."
        buttons={[
          { label: 'Book a Pilot', variant: 'blue', href: '/get-in-touch' },
          { label: 'Talk to an Expert', variant: 'white', href: '/get-in-touch' },
        ]}
        sectionBackground="linear-gradient(180deg, rgba(13, 27, 41, 0.20) 0%, rgba(21, 0, 253, 0.20) 100%), #0D1B29"
        leftCol="col-lg-12"
        rightCol=""
        children={
          <>
            {' '}
            <div className="d-flex gap-lg-5 gap-md-3 flex-wrap container gap-4 justify-content-lg-end justify-content-center mt-5">
              <UseCaseStatCard
                value="2x"
                label={
                  <>
                    HIGHER CALL <br /> Improvement
                  </>
                }
                width={'160px'}
                fontSize="14px"
              />
              <UseCaseStatCard
                value="MOS 4.0"
                label={
                  <>
                    UNDER <br /> DEGRADED <br /> CONDITIONS
                  </>
                }
                fontSize="14px"
                width={'160px'}
              />
              <UseCaseStatCard
                value="ZERO-GAP"
                label={
                  <>
                    FAILOVER & <br /> SESSION <br />
                    CONTINUITY
                  </>
                }
                fontSize="14px"
                width={'160px'}
              />
              <UseCaseStatCard
                value="AIR-GAPPED"
                label={
                  <>
                    DEPLOYMENT
                    <br /> SUPPORT
                  </>
                }
                fontSize="14px"
                width={'160px'}
              />
            </div>
            <img src={DefenseCase} alt="" className=" w-100 mt-5" />
          </>
        }
      />
      <PilotOutcomes />
      <PerformanceMetrics />
      <NetworkConditions />
      <OperationalImpact />

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

export default DefenseDualTechnologyUseCasePage;
