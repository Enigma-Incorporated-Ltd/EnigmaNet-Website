import { Container, Card, CardBody } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import icon1 from '@/assets/img/landing/software-agency-3/icons/01.svg';
import icon2 from '@/assets/img/landing/software-agency-3/icons/02.svg';
import icon3 from '@/assets/img/landing/software-agency-3/icons/03.svg';
import icon4 from '@/assets/img/landing/software-agency-3/icons/04.svg';

type Solution = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

const solutionsData: Solution[] = [
  {
    id: 1,
    icon: icon1,
    title: 'Software Development',
    description:
      'Commodo senectus massa est urna mi. Mattis dis arcu aenean libero viverra gravida.',
  },
  {
    id: 2,
    icon: icon2,
    title: 'App Development',
    description: 'Enim vehicula integer mattis morbi risus. Hendrerit pharetra arcu quam viverra.',
  },
  {
    id: 3,
    icon: icon3,
    title: 'Support & Maintenance',
    description:
      'Turpis ultrices lacinia ut placerat dignissim morbi. Amet lectus sed tortor in elit adipiscing magnis.',
  },
  {
    id: 4,
    icon: icon4,
    title: 'Software QA & Testing',
    description: 'Amet felis viverra proin feugiat. Eget metus metus lorem dolor pellentesque.',
  },
];

const Solutions = () => {
  return (
    <section className="mb-5 pb-lg-5 pb-md-4 pb-3">
      <Container>
        <h2 className="h1 mb-lg-5 mb-4 pb-lg-0 pb-md-2 text-center">Сustom Software Solutions</h2>

        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="mb-xl-3"
        >
          {solutionsData.map(solution => (
            <SwiperSlide key={solution.id} className="h-auto">
              <Card className="h-100">
                <CardBody className="my-md-5 my-4 py-xl-2 py-md-0 py-sm-2 text-center">
                  <img
                    src={solution.icon}
                    alt={solution.title}
                    className="d-block mb-3 mx-auto"
                  />
                  <h3 className="h5 mb-3">{solution.title}</h3>
                  <p className="mb-0">{solution.description}</p>
                </CardBody>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Solutions;
