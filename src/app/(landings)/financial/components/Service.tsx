import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import service01 from '@/assets/img/landing/financial/services/01.jpg';
import service02 from '@/assets/img/landing/financial/services/02.jpg';
import service03 from '@/assets/img/landing/financial/services/03.jpg';

import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';

type ServiceItem = {
  id: number;
  image: string;
  title: string;
  points: string[];
  link: string;
};

const services: ServiceItem[] = [
  {
    id: 1,
    image: service01,
    title: 'Consulting Services',
    points: [
      'Ut auctor egestas leo arcu',
      'Adipiscing velit enim nec id etiam',
      'Imperdiet quis suspendisse imperdiet',
    ],
    link: '#',
  },
  {
    id: 2,
    image: service02,
    title: 'Banking Expertise',
    points: [
      'Quis euismod lacus, at consectetur porta',
      'Dictumst enim lectus dis eget non metus cras',
      'Risus volutpat tellus hendrerit nibh',
    ],
    link: '#',
  },
  {
    id: 3,
    image: service03,
    title: 'Product Solutions',
    points: [
      'Sit scelerisque venenatis, at orci',
      'Felis nascetur tempus nibh dictum tristique mus',
      'Consectetur neque vestibulum, vel ut fermentum',
    ],
    link: '#',
  },
];

const Service = () => {
  return (
    <section className="container py-5 mt-md-3 my-lg-5">
      <h2 className="h1 pt-xl-2 pb-4 mb-2 mb-lg-3">Our Services</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          500: { slidesPerView: 2 },
          991: { slidesPerView: 3 },
        }}
        className="pb-5"
      >
        {services.map(service => (
          <SwiperSlide key={service.id}>
            <Link to={service.link}>
              <img src={service.image} className="rounded-3" alt={service.title} />
            </Link>
            <div className="pt-4">
              <h3 className="h4">{service.title}</h3>
              <ul className="list-unstyled">
                {service.points.map((point, i) => (
                  <li key={i} className="d-flex align-items-center fs-sm mb-2">
                    <IconifyIcon icon="bx:check" className="fs-xl text-primary me-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <Link to={service.link} className="btn btn-link px-0">
              Learn more
              <IconifyIcon icon="bx:right-arrow-alt" className="fs-xl ms-2" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Service;
