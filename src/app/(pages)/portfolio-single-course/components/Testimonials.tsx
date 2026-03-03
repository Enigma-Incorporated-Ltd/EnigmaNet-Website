import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import avatar01 from '@/assets/img/avatar/01.jpg';
import avatar02 from '@/assets/img/avatar/02.jpg';
import avatar03 from '@/assets/img/avatar/03.jpg';
import avatar04 from '@/assets/img/avatar/04.jpg';
import avatar05 from '@/assets/img/avatar/05.jpg';
import avatar06 from '@/assets/img/avatar/06.jpg';
import avatar07 from '@/assets/img/avatar/07.jpg';




import IconifyIcon from '@/components/IconifyIcon';
import { Card } from 'react-bootstrap';

type TestimonialType = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
};

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: 'Fannie Summers',
    role: 'Designer',
    avatar: avatar03,
    text: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    rating: 3,
  },
  {
    id: 2,
    name: 'Robert Fox',
    role: 'QA Engineer',
    avatar: avatar02,
    text: 'Phasellus luctus nisi id orci condimentum, at cursus nisl vestibulum. Orci varius natoque penatibus et magnis dis parturient montes.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Annette Black',
    role: 'Project Manager',
    avatar: avatar04,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum odio, bibendum ornare mi at, efficitur urna.',
    rating: 4,
  },
  {
    id: 4,
    name: 'Jerome Bell',
    role: 'Developer',
    avatar: avatar05,
    text: 'Etiam augue ante, imperdiet et nunc sed, bibendum faucibus est. Suspendisse egestas facilisis erat eu eleifend.',
    rating: 3,
  },
  {
    id: 5,
    name: 'Albert Flores',
    role: 'PR Director',
    avatar: avatar01,
    text: 'Pellentesque finibus congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    rating: 4,
  },
  {
    id: 6,
    name: 'Jenny Wilson',
    role: 'Marketing',
    avatar: avatar06,
    text: 'Nulla volutpat consectetur congue egestas egestas uni suspendisse blandit parturient.',
    rating: 5,
  },
  {
    id: 7,
    name: 'Cameron Williamson',
    role: 'Illustrator',
    avatar: avatar07,
    text: 'Vivamus iaculis facilisis pretium. Pellentesque vitae mi odio. Donec imperdiet pellentesque ipsum quis pharetra. Nullam dolor sem.',
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="pt-2 pb-lg-4 pb-xl-5 mb-5">
      <h2 className="h1 text-center pb-3 pb-md-4 pb-xl-5">Why students love this course</h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={8}
        slidesPerView={1}
        breakpoints={{
          500: { slidesPerView: 2, spaceBetween: 24 },
          1000: { slidesPerView: 4, spaceBetween: 24 },
          1500: { slidesPerView: 6, spaceBetween: 24 },
        }}
        className="px-2 px-sm-0 pb-5"
      >
        {testimonials.map(t => (
          <SwiperSlide key={t.id} className="h-auto pt-4">
            <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0">
              <Card className="h-100 position-relative border-0 shadow-sm pt-4">
                <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                  <IconifyIcon icon="bxs:quote-left" />
                </span>
                <blockquote className="card-body pb-3 mb-0">
                  <p className="mb-0">{t.text}</p>
                </blockquote>
                <div className="card-footer border-0 text-nowrap pt-0">
                  {[...Array(5)].map((_, i) => (
                    <IconifyIcon
                      key={i}
                      icon="bxs:star"
                      className={i < t.rating ? 'text-warning' : 'text-muted opacity-75'}
                    />
                  ))}
                </div>
              </Card>
              <figcaption className="d-flex align-items-center ps-4 pt-4">
                <img src={t.avatar} width="48" className="rounded-circle" alt={t.name} />
                <div className="ps-3">
                  <h6 className="fs-sm fw-semibold mb-0">{t.name}</h6>
                  <span className="fs-xs text-muted">{t.role}</span>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
