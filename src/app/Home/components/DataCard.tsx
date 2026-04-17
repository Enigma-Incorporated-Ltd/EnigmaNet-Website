import PremiumButton from '@/components/ui/PremiumButton';
import { Card } from 'react-bootstrap';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import network from '@/assets/svgs/networking hosting.svg';
import latency from '@/assets/svgs/lowlatency.svg';
import data from '@/assets/svgs/redundant nodes.svg';
import connect from '@/assets/svgs/bucket-folder-file in cloud.svg';
import IconifyIcon from '@/components/IconifyIcon';
import HeaderTitle from '@/components/ui/HeaderTitle';
type FeatureItem = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    id: 1,
    icon: network,
    title: 'Unpredictable network performance',
    description: `Bandwidth exists but throughput changes hour to hour. Planning around infrastructure that won't behave predictably is expensive and slow.`,
  },
  {
    id: 2,
    icon: latency,
    title: 'Latency spikes and packet loss',
    description: `Dropped packets, broken transfers, and performance that collapses under load. Teams spend more time firefighting than building.`,
  },
  {
    id: 3,
    icon: data,
    title: 'Slow transfer of large datasets',
    description:
      'Files that should move in minutes take hours. GPUs sit idle waiting for data. Training windows get missed.',
  },
  {
    id: 4,
    icon: connect,
    title: 'Unreliable connectivity across distributed environments',
    description:
      'Multi-cloud, hybrid, and remote sites held together by patchwork setups. One link fails and everything downstream breaks.',
  },
];

const DataCard = () => {
  return (
    <section className="container  my-2 my-md-4 my-lg-5">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
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
              {typeof feature.icon === 'string' && feature.icon.startsWith('solar:') ? (
                <IconifyIcon
                  icon={feature.icon}
                  className="display-5 text-warning fw-normal card-icon"
                  style={{ color: '#b4b7c9' }}
                />
              ) : (
                <img src={feature.icon} width={100} height={100} alt={feature.title} className="" />
              )}
              <HeaderTitle title={feature.title} className="h5 text-warning pt-3 pb-1 mb-2" />
              <p className="mb-0">{feature.description}</p>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="d-flex gap-4 flex-column flex-sm-row justify-content-center pt-3 pt-sm-4">
        <PremiumButton label="Our Solutions" variant="blue" href="/" className="btn-lg" />
        <PremiumButton label="Book A Call" variant="gold" className="btn-lg" href="/get-in-touch" />
      </div>
    </section>
  );
};

export default DataCard;
