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
};

const features: FeatureItem[] = [
  {
    id: '01',
    icon: 'solar:shield-network-linear',
    title: 'Secure Networking',
    description: `A private, resilient network overlay across your existing internet links. Bonding, failover, and optimisation — without ripping out infrastructure.`,
  },
  {
    id: '02',
    icon: 'solar:server-broken',
    title: 'Compute Hosting',
    description: `Performance-optimised hosting with predictable pricing. No egress surprises, no hyperscaler complexity.`,
  },
  {
    id: '03',
    icon: 'solar:cpu-bolt-bold',
    title: 'GPU Hosting',
    description:
      'Dedicated GPU infrastructure for AI training, inference, and data-heavy workloads — integrated into the same secure networking layer.',
  },
  {
    id: '04',
    icon: 'solar:cloud-bolt-minimalistic-outline',
    title: 'Secure Storage & Transfer',
    description:
      'Move large datasets fast and reliably. AI-optimised storage with no egress penalties and predictable economics.',
  },
];

const NetworkingCard = () => {
  return (
    <section className="container pt-5 my-2 my-md-4 my-lg-5">
      <h5 className="h3 text-center text-warning mx-auto mt-n2 mt-sm-0 pt-md-2">
        Secure infrastructure for data, compute, and AI
      </h5>
      <h2 className="h1 text-center mx-auto mt-n2 mt-sm-0 pt-md-2">We're more than networking</h2>

      <ul className="list-unstyled d-flex flex-wrap text-center justify-content-center mb-5">
        <li className="d-flex fs-xl mx-3 mt-2 mt-sm-3">
          <span>
            EnigmaNet isn't just a connectivity layer. It's secure infrastructure for data movement,
            compute, storage, and <br /> AI — deployed without replacing what you already have.
          </span>
        </li>
      </ul>
      <Swiper
        modules={[Pagination]}
        spaceBetween={8}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          500: { slidesPerView: 2 },
          800: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        className="mx-n2 pb-4"
      >
        {features.map(feature => (
          <SwiperSlide key={feature.id} className="h-auto py-3">
            <Card className="h-100 card-body card-hover mx-2">
              <IconifyIcon
                icon={`${feature.icon}`}
                className="display-5 text-warning fw-normal card-icon"
                style={{ color: '#b4b7c9' }}
              />
              <h3 className="h5 text-primary pt-3 pb-1 mb-2">{feature.title}</h3>
              <p className="mb-0">{feature.description}</p>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="d-flex gap-4 flex-column flex-sm-row justify-content-center pt-3 pt-sm-4">
        <CustomButton label=" OUR SOLUTION" bgColor="warning" href="/" className="btn-lg" />
      </div>
    </section>
  );
};

export default NetworkingCard;
