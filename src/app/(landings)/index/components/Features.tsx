import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Lottie from 'lottie-react';
import feature1Light from '@/assets/json/animation-feature-1-light.json';
import feature1Dark from '@/assets/json/animation-feature-1-dark.json';
import feature2Light from '@/assets/json/animation-feature-2-light.json';
import feature2Dark from '@/assets/json/animation-feature-2-dark.json';
import feature3Light from '@/assets/json/animation-feature-3-light.json';
import feature3Dark from '@/assets/json/animation-feature-3-dark.json';
import feature4Light from '@/assets/json/animation-feature-4-light.json';
import feature4Dark from '@/assets/json/animation-feature-4-dark.json';
import { Card, CardBody, Container } from 'react-bootstrap';

const features = [
  {
    title: 'Light / Dark Mode',
    lightAnim: feature1Light,
    darkAnim: feature1Dark,
  },
  {
    title: 'Developer Friendly',
    lightAnim: feature2Light,
    darkAnim: feature2Dark,
  },
  {
    title: '50+ UI Flexible Components',
    lightAnim: feature3Light,
    darkAnim: feature3Dark,
  },
  {
    title: 'Free Lifetime Updates',
    lightAnim: feature4Light,
    darkAnim: feature4Dark,
  },
];

const Features = () => {
  return (
    <Container className="pt-5">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={8}
        pagination={{ clickable: true }}
        breakpoints={{
          500: { slidesPerView: 2 },
          700: { slidesPerView: 3 },
          1000: { slidesPerView: 4 },
        }}
        className="mt-n3 mt-md-0 pt-md-4 pt-lg-5 mx-n2"
      >
        {features.map((feature, idx) => (
          <SwiperSlide key={idx} className="h-auto pb-3">
            <Card className="card-hover bg-light border-0 animation-on-hover h-100 mx-2">
              <div className="d-dark-mode-none mx-auto mt-4 mb-2" style={{ width: 180 }}>
                <Lottie animationData={feature.lightAnim} loop />
              </div>
              <div className="d-none d-dark-mode-block mx-auto mt-4 mb-2" style={{ width: 180 }}>
                <Lottie animationData={feature.darkAnim} loop />
              </div>
              <CardBody className="fs-lg fw-semibold text-center">{feature.title}</CardBody>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination position-relative bottom-0 mt-2"></div>
    </Container>
  );
};

export default Features;
