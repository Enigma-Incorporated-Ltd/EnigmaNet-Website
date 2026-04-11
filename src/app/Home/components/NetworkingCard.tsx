import PremiumButton from '@/components/ui/PremiumButton';

type SubFeature = {
  title: string;
  description: string;
};

type PillarItem = {
  id: string;
  label: string;
  title: string;
  description: string;
  dark?: boolean;
  bulletPoints?: { title: string; description: string }[];
  subFeatures?: SubFeature[];
  buttonLabel: string;
  buttonHref: string;
  buttonColor: string;
};

const pillars: PillarItem[] = [
  {
    id: '01',
    label: 'PILLAR ONE',
    title: 'Secure Networking',
    description:
      'A private, resilient network overlay across your existing internet links. Bonding, failover, and optimisation, without ripping out infrastructure.',
    dark: false,
    bulletPoints: [
      {
        title: 'Multi-link bonding',
        description: 'Combine fibre, 5G, satellite into a single resilient path',
      },
      {
        title: 'Predictive failover',
        description: '20ms directional failover across links',
      },
      {
        title: 'Zero-trust encryption',
        description: 'All traffic through encrypted tunnels with identity-based access',
      },
      {
        title: 'Five-9s reliability',
        description: 'Using standard internet links, not dedicated circuits',
      },
    ],
    buttonLabel: 'Explore Enigma Connect',
    buttonHref: '/',
    buttonColor: 'blue',
  },
  {
    id: '02',
    label: 'PILLAR TWO',
    title: 'Secure Cloud',
    description:
      'On-demand compute, GPU, and storage infrastructure with predictable pricing, integrated into the same secure networking layer.',
    dark: true,
    subFeatures: [
      {
        title: 'Compute & GPU Hosting',
        description:
          'Dedicated GPU and compute infrastructure for AI training, inference, and data-heavy workloads. No egress surprises, no hyperscaler complexity.',
      },
      {
        title: 'Secure Storage',
        description:
          'AI-optimised storage with predictable pricing and no egress penalties. Designed for large sequential reads, checkpoint access, and dataset streaming.',
      },
      {
        title: 'Secure Transfer',
        description:
          'Move large datasets fast and reliably across distributed environments. Up to 39–64× faster large-file transfer over high-latency networks.',
      },
    ],
    buttonLabel: 'Explore Secure Cloud',
    buttonHref: '/',
    buttonColor: 'gold',
  },
];

const NetworkingPillars = () => {
  return (
    <section className="container pt-5 my-2 my-md-4 my-lg-5">
      <h5 className="h3 text-center text-warning mx-auto text-uppercase mt-n2 mt-sm-0 pt-md-2">
        Secure infrastructure for data, compute, and AI
      </h5>
      <h2 className="h1 text-center mx-auto mt-n2 mt-sm-0 pt-md-2">We're more than networking</h2>
      <ul className="list-unstyled d-flex flex-wrap text-center justify-content-center mb-5">
        <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3">
          <span>
            Affordable, accessible and scalable hosting alongside performant and
            <br /> secure networking, deployed without replacing what you already have.
          </span>
        </li>
      </ul>
      <div className="row g-4">
        {pillars.map(pillar => (
          <div key={pillar.id} className="col-12 col-md-6">
            <div
              className={`h-100 rounded-3 p-4 p-lg-5 d-flex flex-column ${
                pillar.dark ? 'bg-dark text-white' : ' border'
              }`}
              style={pillar.dark ? { backgroundColor: '#0d1117' } : {}}
            >
              {/* Pillar label */}
              <p
                className="text-warning fw-semibold text-uppercase mb-2"
                style={{ fontSize: '0.75rem', letterSpacing: '0.08em' }}
              >
                {pillar.label}
              </p>

              {/* Title */}
              <h2
                className={`fw-bold mb-3 ${pillar.dark ? 'text-white' : 'text-dark'}`}
                style={{ fontSize: '1.75rem' }}
              >
                {pillar.title}
              </h2>

              {/* Description */}
              <p className={`mb-4 ${pillar.dark ? 'text-white-50' : 'text-muted'}`}>
                {pillar.description}
              </p>

              {/* Bullet points (Pillar One) */}
              {pillar.bulletPoints && (
                <div className="d-flex flex-column gap-3 mb-4 flex-grow-1">
                  {pillar.bulletPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className={`rounded-3 p-3 border-${pillar.dark ? 'text-white-50' : 'text-muted'} border`}
                      style={{
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      <h6 className="text-light-blue fw-semibold mb-2">{point.title}</h6>
                      <p
                        className={` mb-0 ${pillar.dark ? 'text-white-50' : 'text-muted'}`}
                        style={{ fontSize: '0.875rem' }}
                      >
                        {point.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Sub-feature cards (Pillar Two) */}
              {pillar.subFeatures && (
                <div className="d-flex flex-column gap-3 mb-4 flex-grow-1">
                  {pillar.subFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="rounded-3 p-3"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.07)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      <h6 className="text-light-blue fw-semibold mb-2">{feature.title}</h6>
                      <p className=" mb-0" style={{ fontSize: '0.875rem' }}>
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA Button */}
              <div className="mt-auto pt-3">
                <PremiumButton
                  label={pillar.buttonLabel}
                  variant={pillar.buttonColor as 'blue' | 'gold'}
                  href={pillar.buttonHref}
                  className="btn-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NetworkingPillars;
