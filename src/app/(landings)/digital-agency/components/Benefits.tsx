import award from '@/assets/img/landing/digital-agency/icons/award.svg';
import idea from '@/assets/img/landing/digital-agency/icons/idea.svg';
import team from '@/assets/img/landing/digital-agency/icons/team.svg';
import { Container } from 'react-bootstrap';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
;

type Benefit = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

const benefitsData: Benefit[] = [
  {
    id: 1,
    title: 'Creative Solutions',
    description: 'Sed morbi nulla pulvinar lectus tempor vel euismod accumsan.',
    icon: idea,
  },
  {
    id: 2,
    title: 'Award Winning',
    description: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet.',
    icon: award,
  },
  {
    id: 3,
    title: 'Team of Professionals',
    description: 'Nam venenatis urna aenean quis feugiat et senectus turpis.',
    icon: team,
  },
];

const Benefits = () => {
  return (
    <section className="mb-5 pt-lg-5" id="benefits">
      <Container>
        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          pagination={{ clickable: true }}
          breakpoints={{
            500: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
          }}
        >
          {benefitsData.map(benefit => (
            <SwiperSlide key={benefit.id}>
              <div className="text-center px-2">
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  width={48}
                  height={48}
                  className="d-block mb-4 mx-auto"
                />
                <h4 className="mb-2 pb-1">{benefit.title}</h4>
                <p className="mx-auto" style={{ maxWidth: '336px' }}>
                  {benefit.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Benefits;
