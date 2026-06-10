import HeaderTitle from '@/components/ui/HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import { Container } from 'react-bootstrap';

const WorkStep = () => {
  const { theme } = useTheme();
 const steps = [
   {
     n: 1,
     title: (
       <>
         Install the client -{' '}
         <span className={theme === 'light' ? 'text-primary' : 'text-light-blue'}>Install</span>
       </>
     ),
     lead: 'Download the lightweight Connect client for desktop or mobile.',
     desc: 'Supports Windows, macOS, Linux, iOS and Android.',
   },
   {
     n: 2,
     title: (
       <>
         Connect securely -{' '}
         <span className={theme === 'light' ? 'text-primary' : 'text-light-blue'}>Connect</span>
       </>
     ),
     lead: 'Activate an encrypted APN tunnel to the nearest Enigma core.',
     desc: "Traffic is protected through Enigma's secure overlay.",
   },
   {
     n: 3,
     title: (
       <>
         Optimise automatically -{' '}
         <span className={theme === 'light' ? 'text-primary' : 'text-light-blue'}>Optimise</span>
       </>
     ),
     lead: 'ITM prioritises latency-sensitive traffic like calls, games, streaming and cloud apps.',
     desc: 'Advanced options are available, but not required.',
   },
   {
     n: 4,
     title: (
       <>
         Stabilise performance -{' '}
         <span className={theme === 'light' ? 'text-primary' : 'text-light-blue'}>Stabilise</span>
       </>
     ),
     lead: 'FEC, selective retransmit and optional resilience features help reduce loss, jitter and instability.',
     desc: 'Optional multi-link failover or bonding can support broadband plus mobile hotspot use cases.',
   },
   {
     n: 5,
     title: (
       <>
         Monitor and manage -{' '}
         <span className={theme === 'light' ? 'text-primary' : 'text-light-blue'}>Manage</span>
       </>
     ),
     lead: 'The portal shows latency, loss, jitter, MOS and usage tiles in real time.',
     desc: 'Users can manage plans, devices, add-ons and upgrades from one place.',
   },
 ];
  return (
    <Container className=" d-flex flex-column align-items-center justify-content-center">
      <div className="text-center pb-4 pb-md-0 mb-2 mb-md-5 mx-auto">
        <HeaderTitle
          key={theme === 'dark' ? 'dark' : 'light'}
          title={<>Simple for the user. Intelligent underneath </>}
          variant={theme === 'dark' ? 'gold' : 'blue'}
        />
      </div>

      <div
        className="steps steps-sm steps-center   pb-5 mb-md-2 mb-lg-3 "
        style={{ maxWidth: '530px' }}
      >
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <div className="step-number">
              <div className="step-number-inner">{step.n}</div>
            </div>
            <div className="step-body">
              <h3
                className="mb-3"
                style={{
                  fontSize: '20px',
                  fontWeight: 600,

                  marginBottom: '0.5rem',
                }}
              >
                {step.title}
              </h3>{' '}
              <p
                className="mb-0 text-muted"
                style={{
                  fontSize: '17px',

                  fontWeight: 500,
                  lineHeight: 1.6,
                  margin: '0 0 0.25rem',
                }}
              >
                {step.lead}
              </p>{' '}
              <p
                className="mb-0 text-muted-light"
                style={{
                  fontSize: '14px',

                  fontWeight: 500,
                  lineHeight: 1.6,
                  margin: '0 0 0.25rem',
                }}
              >
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WorkStep;
