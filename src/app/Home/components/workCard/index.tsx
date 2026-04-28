import IconifyIcon from '@/components/IconifyIcon';
import { Card } from 'react-bootstrap';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './workcard.css';
import PremiumButton from '@/components/ui/PremiumButton';
import router from '@/assets/svgs/router.svg';
import pvtNet from '@/assets/svgs/susceptibility.svg';
import laptop from '@/assets/svgs/project creation.svg';
import GPu from '@/assets/svgs/gpu storage ai.svg';
import bg1 from '@/assets/img/home/How Enigma Net works - Plugin.png';
import bg2 from '@/assets/img/home/How Enigma Net works - Private network activates.png';
import bg3 from '@/assets/img/home/How Enigma Net works - AI monitors and adapts.png';
import bg4 from '@/assets/img/home/How Enigma Net works - Extend into infrastructure.png';
type FeatureItem = {
  id: number | string;
  icon: string;
  title: string;
  description: string;
  bg: string;
};

const features: FeatureItem[] = [
  {
    id: '01',
    icon: router,
    title: 'Plugin',
    description: `A physical appliance connects to your existing broadband, fibre, 5G, satellite, whatever you have. No new circuits, no provider changes.`,
    bg: bg1,
  },
  {
    id: '02',
    icon: pvtNet,
    title: 'Private network activates',
    description: `An encrypted overlay builds automatically across your links. Traffic is optimised, bonded, and failover-protected from the start.`,
    bg: bg2,
  },
  {
    id: '03',
    icon: laptop,
    title: 'AI monitors and adapts',
    description: `Machine learning continuously monitors traffic conditions and adjusts routing, prioritisation, and redundancy in real time.`,
    bg: bg3,
  },
  {
    id: '04',
    icon: GPu,
    title: 'Extend into infrastructure',
    description: `Add compute, GPU, and storage when you’re ready. Same secure layer, same predictable performance. No separate platform to manage.`,
    bg: bg4,
  },
];

const WorkCard = () => {
  return (
    <section className="container pt-5 my-5">
      <h5 className="h3 text-center text-uppercase text-warning">How Enigma Net works</h5>

      <h2 className="h1 text-center mb-4">Deploys in minutes. Works <br/> on what you already have</h2>
      <ul className="list-unstyled d-flex flex-wrap text-center justify-content-center mb-5">
        <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3">
          <span>
            Enigma Net sits on top of your existing internet infrastructure. <br /> No rip-and
            replace. No re-architecting. A physical appliance or software <br /> client that creates
            a private, accelerated network layer, <br />
            and extends it into compute, storage, and GPU.
          </span>
        </li>
      </ul>
      {/* ✅ Desktop Grid (2x2) */}
      <div className="row d-none px-5  d-lg-flex">
        {features.map(feature => (
          <div
            className="col-lg-6 mb-4"
            key={feature.id}
            style={{
              height: '300px',
            }}
          >
            <Card
              className="feature-card h-100"
              style={{
                backgroundImage: `url(${feature.bg})`,
              }}
            >
              <div className="overlay"></div>

              {typeof feature.icon === 'string' && feature.icon.startsWith('solar:') ? (
                <IconifyIcon
                  icon={feature.icon}
                  className="display-5 text-warning fw-normal card-icon"
                  style={{ color: '#b4b7c9' }}
                />
              ) : (
                <img src={feature.icon} width={100} height={100} alt={feature.title} className="" />
              )}
              <h2 className="h2 text-secondary">{feature.title}</h2>
              <p
                className="h5 text-secondary"
                style={{
                  fontWeight: '400',
                }}
              >
                {feature.description}
              </p>
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
              <Card
                className="feature-card "
                style={{
                  backgroundImage: `url(${feature.bg})`,
                }}
              >
                <div className="overlay"></div>

                <IconifyIcon icon={feature.icon} className="display-5 text-warning mb-3" />
                <h3 className="h5 text-secondary">{feature.title}</h3>
                <p className="text-secondary">{feature.description}</p>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="d-flex gap-4 flex-column flex-sm-row justify-content-center pt-3 pt-sm-4">
        <PremiumButton label="Explore More" variant="gold" className="btn-lg" href="/solutions" />
      </div>
    </section>
  );
};

export default WorkCard;
