import IconifyIcon from '@/components/IconifyIcon';
import CustomButton from '@/components/ui/CustomButton';
import { Card } from 'react-bootstrap';
import { Pagination } from 'swiper/modules';
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
    icon: 'solar:cpu-bolt-bold',
    title: 'AI & GPU Compute',
    description: `Move training datasets, model checkpoints, and inference outputs across GPU clusters and cloud regions without bottlenecks or unpredictable costs.  `,
    Tags: ['GPU Cloud', 'HPC', 'ML Piplines'],
  },
  {
    id: '02',
    icon: 'solar:buildings-2-linear',
    title: 'Enterprise Connectivity',
    description: `Resilient, secure networking across branches, sites, remote operations, and cloud environments. MPLS-like reliability without private network infrastructure.`,
    Tags: ['Multi-Site', 'Remote Ops', 'Hybrid Cloud'],
  },
  {
    id: '03',
    icon: 'solar:videocamera-record-broken',
    title: 'Media & Rendering',
    description: `Large media file transfers completed in minutes instead of hours. Accelerated pipelines for post-production, VFX, and distributed rendering teams.`,
    Tags: ['Large File Transfer', 'Broadcast'],
  },
  {
    id: '04',
    icon: 'solar:scale-linear',
    title: 'Venues & Events',
    description: `High-capacity, resilient connectivity for stadiums, conferences, and live events. Bond multiple links for production-grade uptime when it matters most.`,
    Tags: ['Live Events', 'ESports'],
  },
  {
    id: '05',
    icon: 'solar:folder-security-broken',
    title: 'Defence & Regulated',
    description: `Zero-trust encrypted networking with multi-path resilience for critical infrastructure. Compliant with NIS2, aligned to zero-trust architecture mandates.`,
    Tags: ['Zero-Trust', 'NIS2'],
  },
  {
    id: '06',
    icon: 'solar:remote-controller-minimalistic-linear',
    title: 'Energy & Remote Ops',
    description: `Reliable connectivity for oil rigs, pipelines, wind farms, and mining — bonding satellite, microwave, and cellular into a single resilient path`,
    Tags: ['Oil & Gas', 'Remote Sites'],
  },
];

const UseCase = () => {
  return (
    <section className="container pt-5 my-5">
      <h5 className="h3 text-center text-warning">Industries / Use Cases</h5>

      <h2 className="h1 text-center mb-4">Where Enigma Net fits</h2>
      <ul className="list-unstyled d-flex flex-wrap text-center justify-content-center mb-5">
        <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3">
          <span>
            Current internet infrastructure creates real bottlenecks for AI workloads, distributed
            teams, and data-heavy
            <br /> operations.
          </span>
        </li>
      </ul>
      {/* ✅ Desktop Grid (2x2) */}
      <div className="row d-none  d-lg-flex">
        {features.map(feature => (
          <div className="col-lg-4 mb-4" key={feature.id}>
            <Card className="h-100 card-body card-hover mx-2">
              <IconifyIcon
                icon={`${feature.icon}`}
                className="display-5 text-warning fw-normal card-icon "
                style={{ color: '#b4b7c9' }}
              />
              <h3 className="h5 text-primary pt-3 pb-1 mb-2">{feature.title}</h3>
              <p className="mb-0">{feature.description}</p>

              <div className="py-4 gap-1 d-flex flex-wrap">
                {feature.Tags?.map(tag => (
                  <p
                    key={tag}
                    className="badge p-2  border border-primary bg-transparent text-primary  me-1"
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
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {features.map(feature => (
            <SwiperSlide key={feature.id}>
              <Card className="feature-card">
                <IconifyIcon icon={feature.icon} className="display-5 text-warning mb-3" />
                <h3 className="h5 text-primary">{feature.title}</h3>
                <p className="mb-0 text-black">{feature.description}</p>
                <div className="py-4 gap-1 d-flex flex-wrap">
                  {feature.Tags?.map(tag => (
                    <p
                      key={tag}
                      className="badge p-2  border border-primary bg-transparent text-primary  me-1"
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
       
        <CustomButton label="INDUSTRIES" bgColor="warning" href="/" className="btn-lg" />
      </div>
    </section>
  );
};

export default UseCase;
