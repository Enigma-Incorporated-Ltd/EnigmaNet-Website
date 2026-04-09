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
    title: 'Scaling AI without hyperscaler lock-in',
    description:
      'GPU hosting, scalable storage, and advisory support for a compute-intensive video intelligence platform.',
    Tags: ['AI', 'DEEP TECH'],
    bg: 'https://cdn.prod.website-files.com/69c2bfbd6a9dea083b5a3306/69c3986a40e90480ac0fe985_AdobeStock_930716590.jpeg',
  },
  {
    id: '02',
    icon: 'solar:shield-network-linear',
    title: 'Loopli x EnigmaNet',
    description:
      'Modular cybersecurity and infrastructure engagement — SIEM, SD-WAN, encrypted storage, and dark web monitoring.',
    Tags: ['ENTERPRISE SECURITY'],
    bg: 'https://cdn.prod.website-files.com/69c2bfbd6a9dea083b5a3306/69c3986a2cffd22fa9e2c121_AdobeStock_599930736.jpeg',
  },
];

const CustomerResults = () => {
  return (
    <section className="container pt-5 my-5">
      <h5 className="h3 text-center text-uppercase text-warning">
        Case studies and customer results
      </h5>

      <h2 className="h1 text-center mb-4">Trusted by teams building what's next</h2>
      <ul className="list-unstyled d-flex flex-wrap text-center justify-content-center mb-5">
        <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3">
          <span>
            From AI startups scaling GPU workloads to enterprise partners delivering <br /> managed
            infrastructure — Enigma Net works alongside organisations as a <br /> technical partner,
            not just a provider.
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
                        className="badge p-3 bg-warning text-black me-1"
                        style={{
                          

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
                  <Link to="#" className="cs-link fs-lg py-3 d-inline-block">
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
