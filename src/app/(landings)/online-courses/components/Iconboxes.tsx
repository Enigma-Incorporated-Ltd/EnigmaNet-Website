import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import icon01 from '@/assets/img/landing/online-courses/icons/01.svg';
import icon02 from '@/assets/img/landing/online-courses/icons/02.svg';
import icon03 from '@/assets/img/landing/online-courses/icons/03.svg';
import { Card, CardBody } from 'react-bootstrap';

const iconBoxes = [
  {
    id: 1,
    icon: icon01,
    title: '25K+ Online Video Courses',
    description:
      'Leo condimentum dignissim venenatis sit dignissim vel. Adipiscing tristique dictum vitae elementum neque.',
  },
  {
    id: 2,
    icon: icon02,
    title: 'Mentor-Based Learning',
    description:
      'Ac dapibus lacus, malesuada ridiculus donec condimentum nunc vestibulum. Mi feugiat tellus faucibus fermentum mattis ultrices.',
  },
  {
    id: 3,
    icon: icon03,
    title: 'Lifetime Access',
    description:
      'Donec interdum risus convallis tristique quis elit. Sapien turpis enim, viverra cursus facilisis dignissim condimentum.',
  },
];

const Iconboxes = () => {
  return (
    <section className="container pt-1 pt-xl-3 pb-5">
      <h2 className="h1 text-center pb-3 pb-md-0 mb-md-5">What You Get</h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={8}
        slidesPerView={1}
        breakpoints={{
          600: { slidesPerView: 2 },
          1000: { slidesPerView: 3 },
        }}
        className="mt-n3 mx-n2"
      >
        {iconBoxes.map(item => (
          <SwiperSlide key={item.id} className="h-auto py-3">
            <Card className="card-hover h-100 mx-2">
              <CardBody>
                <div className="d-table position-relative p-3 mb-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    width={32}
                    height={32}
                    className="position-relative zindex-2"
                  />
                  <span className="bg-primary position-absolute top-0 start-0 w-100 h-100 rounded-circle opacity-8"></span>
                </div>
                <h3 className="h5 pb-1 mb-2">{item.title}</h3>
                <p className="mb-0">{item.description}</p>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Iconboxes;
