import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


type Testimonial = {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
};

import avatar1 from '@/assets/img/avatar/30.jpg';
import avatar2 from '@/assets/img/avatar/32.jpg';
import avatar3 from '@/assets/img/avatar/31.jpg';
import avatar4 from '@/assets/img/avatar/34.jpg';
import avatar5 from '@/assets/img/avatar/35.jpg';
import avatar6 from '@/assets/img/avatar/33.jpg';
import avatar7 from '@/assets/img/avatar/37.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import { Card, Container } from 'react-bootstrap';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Fannie Summers',
    role: 'Medical Center patient',
    text: 'Id mollis consectetur congue egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar.',
    rating: 3,
    image: avatar1,
  },
  {
    id: 2,
    name: 'Robert Fox',
    role: 'Medical Center patient',
    text: 'Phasellus luctus nisi id orci condimentum, at cursus nisl vestibulum. Orci varius natoque penatibus.',
    rating: 5,
    image: avatar2,
  },
  {
    id: 3,
    name: 'Annette Black',
    role: 'Medical Center patient',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum odio, bibendum ornare mi at, efficitur urna.',
    rating: 4,
    image: avatar3,
  },
  {
    id: 4,
    name: 'Jerome Bell',
    role: 'Medical Center patient',
    text: 'Etiam augue ante, imperdiet et nunc sed, bibendum faucibus est. Suspendisse egestas facilisis erat eu eleifend.',
    rating: 3,
    image: avatar4,
  },
  {
    id: 5,
    name: 'Albert Flores',
    role: 'Medical Center patient',
    text: 'Pellentesque finibus congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar.',
    rating: 4,
    image: avatar5,
  },
  {
    id: 6,
    name: 'Jenny Wilson',
    role: 'Medical Center patient',
    text: 'Nulla volutpat consectetur congue egestas egestas uni suspendisse blandit parturient.',
    rating: 5,
    image: avatar6,
  },
  {
    id: 7,
    name: 'Cameron Williamson',
    role: 'Medical Center patient',
    text: 'Vivamus iaculis facilisis pretium. Pellentesque vitae mi odio. Donec imperdiet pellentesque ipsum quis pharetra.',
    rating: 4,
    image: avatar7,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-secondary py-5 mb-2 mb-md-4 mb-lg-5">
      <Container className="pt-lg-4 mt-1">
        <h2 className="h1 text-center pb-3 pb-md-4 pb-xl-5">What Our Patients Say</h2>
      </Container>

      <div className="pb-lg-3">
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          loop={true}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
          }}
          breakpoints={{
            500: { slidesPerView: 2, spaceBetween: 24 },
            1000: { slidesPerView: 4, spaceBetween: 24 },
            1500: { slidesPerView: 6, spaceBetween: 24 },
          }}
        >
          {testimonials.map(t => (
            <SwiperSlide key={t.id} className="h-auto pt-4">
              <figure className="d-flex flex-column h-100 mb-0">
                <Card className="h-100 position-relative border-0 shadow-sm pt-4 px-3">
                  <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                    <IconifyIcon icon="bxs:quote-left" />
                  </span>
                  <blockquote className="card-body pb-3 mb-0">
                    <p className="mb-0">{t.text}</p>
                  </blockquote>

                  <div className="card-footer border-0 text-nowrap pt-0">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <IconifyIcon
                        key={i}
                        icon={i < t.rating ? 'bxs:star' : 'bx:star'}
                        className={i < t.rating ? 'text-warning' : 'text-muted opacity-75'}
                      />
                    ))}
                  </div>
                </Card>

                <figcaption className="d-flex align-items-center ps-4 pt-4">
                  <img src={t.image} alt={t.name} width={48} height={48} className="rounded" />
                  <div className="ps-3">
                    <h6 className="fs-sm fw-semibold mb-0">{t.name}</h6>
                    <span className="fs-xs text-muted">{t.role}</span>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination position-relative pt-4 mt-4"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
