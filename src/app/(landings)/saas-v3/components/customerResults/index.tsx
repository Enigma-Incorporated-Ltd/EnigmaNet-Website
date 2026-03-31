import { Link } from 'react-router';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './customer.css';
type FeatureItem = {
  id: number | string;
  icon: string;
  title: string;
  description: string;
  Tags?: string[];
  bg: string;
};

const features: FeatureItem[] = [
  {
    id: '01',
    icon: 'solar:shield-network-linear',
    title: 'Loopli x EnigmaNet',
    description:
      'Modular cybersecurity and infrastructure engagement — SIEM, SD-WAN, encrypted storage, and dark web monitoring.',
    Tags: ['ENTERPRISE SECURITY'],
    bg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600',
  },
  {
    id: '02',
    icon: 'solar:server-broken',
    title: 'Enterprise Connectivity',
    description: 'Secure networking across branches, sites, and cloud environments.',
    Tags: ['NETWORK', 'CLOUD'],
    bg: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600',
  },
  {
    id: '03',
    icon: 'solar:cpu-bolt-bold',
    title: 'Media & Rendering',
    description: 'Accelerated pipelines for post-production and rendering teams.',
    Tags: ['MEDIA', 'VFX'],
    bg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600',
  },
];

const CustomerResults = () => {
  return (
    <section className="container pt-5 my-5">
      <h5 className="h3 text-center text-warning">Case studies and customer results</h5>

      <h2 className="h1 text-center mb-4">Trusted by teams building what's next</h2>
      <ul className="list-unstyled d-flex flex-wrap text-center justify-content-center mb-5">
        <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3">
          <span>
            From AI startups scaling GPU workloads to enterprise partners delivering managed
            infrastructure — Enigma
            <br />
            Net works alongside organisations as a technical partner, not just a provider.
          </span>
        </li>
      </ul>

      <div className="cs-swiper-wrapper">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.cs-btn-next',
            prevEl: '.cs-btn-prev',
          }}
          pagination={false}
          loop
        >
          {features.map(item => (
            <SwiperSlide key={item.id}>
              <div className="cs-card">
                {/* Background Image */}
                <div className="cs-card-bg" style={{ backgroundImage: `url(${item.bg})` }} />

                {/* Dark gradient overlay */}
                <div className="cs-card-gradient" />

                {/* Navigation arrows — top right */}
                <div className="cs-nav-arrows">
                  <button className="cs-btn-prev cs-arrow-btn" aria-label="Previous">
                    ‹
                  </button>
                  <button className="cs-btn-next cs-arrow-btn" aria-label="Next">
                    ›
                  </button>
                </div>

                {/* Content panel — bottom left */}
                <div className="cs-panel">
                  <div className="cs-tags">
                    {item.Tags?.map((tag, i) => (
                      <span
                        key={i}
                        className="badge p-3 bg-light-blue text-black me-1"
                        style={{
                          border: '1px solid white',

                          fontWeight: '800',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="h2 text-primary">{item.title}</h3>
                  <span
                    className="h6 text-black"
                    style={{
                      fontWeight: 400,
                    }}
                  >
                    {item.description}
                  </span>
                  <br />
                  <Link to="#" className="cs-link py-3 d-inline-block">
                    View Case Study Details
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerResults;
