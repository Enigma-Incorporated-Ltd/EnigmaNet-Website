import IconifyIcon from '@/components/IconifyIcon';
import PremiumButton from '@/components/ui/PremiumButton';
import cpu from '@/assets/svgs/gpu.svg';
import org from '@/assets/svgs/organisation.svg';
import media from '@/assets/svgs/video analysis.svg';
import phone from '@/assets/svgs/MFA phone and check.svg';
import globe from '@/assets/svgs/globe.svg';
import defense from '@/assets/svgs/role.svg';
import { Card } from 'react-bootstrap';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
type FeatureItem = {
  id: number | string;
  icon: string;
  title: string;
  description: string;
  Tags?: string[];
};

const features: FeatureItem[] = [
  {
    id: '01',
    icon: cpu,
    title: 'AI & GPU Compute',
    description: `Move training datasets, model checkpoints, and inference outputs across GPU clusters and cloud regions without bottlenecks or unpredictable costs. `,
    Tags: ['GPU Cloud', 'HPC', 'ML Piplines'],
  },
  {
    id: '02',
    icon: org,
    title: 'Enterprise Connectivity',
    description: `Resilient, secure networking across branches, sites, remote operations, and cloud environments. MPLS-like reliability without private network infrastructure.`,
    Tags: ['Multi-Site', 'Remote Ops', 'Hybrid Cloud'],
  },
  {
    id: '03',
    icon: media,
    title: 'Media & Rendering',
    description: `Large media file transfers completed in minutes instead of hours. Accelerated pipelines for post-production, VFX, and distributed rendering teams.`,
    Tags: ['Large File Transfer', 'Broadcast'],
  },
  {
    id: '04',
    icon: globe,
    title: 'Venues & Events',
    description: `High-capacity, resilient connectivity for stadiums, conferences, and live events. Bond multiple links for production-grade uptime when it matters most.`,
    Tags: ['Live Events', 'ESports'],
  },
  {
    id: '05',
    icon: defense,
    title: 'Defence & Regulated',
    description: `Zero-trust encrypted networking with multi-path resilience for critical infrastructure. Compliant with NIS2, aligned to zero-trust architecture mandates.`,
    Tags: ['Zero-Trust', 'NIS2'],
  },
  {
    id: '06',
    icon: phone,
    title: 'Energy & Remote Ops',
    description: `Reliable connectivity for oil rigs, pipelines, wind farms, and mining, bonding satellite, microwave, and cellular into a single resilient path.`,
    Tags: ['Oil & Gas', 'Remote Sites'],
  },
];

const UseCase = () => {
  return (
    <section className="container pt-5 my-5">
      <h5 className="h3 text-center text-uppercase text-warning">Industries / Use Cases</h5>

      <h2 className="h1 text-center mb-4">Where Enigma Net fits</h2>
      <ul className="list-unstyled d-flex flex-wrap text-center justify-content-center mb-5">
        <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3">
          <span>
            Current internet infrastructure creates real bottlenecks for AI workloads, <br />
            distributed teams, and data-heavy operations.
          </span>
        </li>
      </ul>
      {/* ✅ Desktop Grid (2x2) */}
      <div className="row d-none  d-lg-flex">
        {features.map(feature => (
          <div className="col-lg-4 mb-4" key={feature.id}>
            <Card className="h-100 card-body card-hover mx-2">
              {typeof feature.icon === 'string' && feature.icon.startsWith('solar:') ? (
                <IconifyIcon
                  icon={feature.icon}
                  className="display-5 text-warning fw-normal card-icon"
                  style={{ color: '#b4b7c9' }}
                />
              ) : (
                <img src={feature.icon} width={100} height={100} alt={feature.title} className="" />
              )}
              <h3
                className="h4 pt-3 pb-1 mb-2"
                style={{
                  background: 'linear-gradient(135deg, #3d5a9e 0%, #157bc9 55%, #2adeff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                }}
              >
                {feature.title}
              </h3>
              <p className="mb-0">{feature.description}</p>

              <div className="py-4 gap-1 d-flex flex-wrap">
                {feature.Tags?.map(tag => (
                  <p
                    key={tag}
                    className="badge p-2 text-uppercase  border border-warning bg-warning text-black  me-1"
                    style={{
                      fontWeight: '800',
                    }}
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* ✅ Mobile Slider */}
      <div className="d-lg-none">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {features.map(feature => (
            <SwiperSlide key={feature.id}>
              <Card className="feature-card">
                <img src={feature.icon} width={70} height={50} alt={feature.title} />
                <h3
                  className="h5 "
                  style={{
                    background: 'linear-gradient(135deg, #3d5a9e 0%, #157bc9 55%, #2adeff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    display: 'inline-block',
                  }}
                >
                  {feature.title}
                </h3>
                <p className="mb-0 ">{feature.description}</p>
                <div className="py-4 gap-1 d-flex flex-wrap">
                  {feature.Tags?.map(tag => (
                    <p
                      key={tag}
                      className="badge p-2  border border-warning bg-warning text-black   me-1"
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="d-flex gap-4 flex-column flex-sm-row justify-content-center pt-3 pt-sm-4">
        <PremiumButton label="Industries" variant="gold" className="btn-lg" href="/" />
      </div>
    </section>
  );
};

export default UseCase;
