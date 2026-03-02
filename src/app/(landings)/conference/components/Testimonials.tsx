import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import avatar1 from '@/assets/img/avatar/14.jpg';
import avatar2 from '@/assets/img/avatar/11.jpg';
import avatar3 from '@/assets/img/avatar/13.jpg';
import IconifyIcon from '@/components/IconifyIcon';

type Testimonial = {
  id: number;
  text: string;
  name: string;
  role: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: 'Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim, nulla arcu fermentum massa lobortis facilisis.',
    name: 'Annette Black',
    role: 'QA Engineer in Company Name',
    image: avatar1,
  },
  {
    id: 2,
    text: 'Id nibh sed purus eu. Viverra eu sed quam pellentesque magna ac sit odio. Mi at interdum hendrerit neque vulputate semper vulputate. Et augue lacinia magna tempor blandit dui porttitor in senectus. Porttitor nulla in ac in quis. Et ultrices lacus, nunc at nulla eu sodales. At aliquam euismod est in praesent ornare etiam id.',
    name: 'Jerome Bell',
    role: 'Co-founder of Lorem Company',
    image: avatar2,
  },
  {
    id: 3,
    text: 'Nec iaculis fermentum interdum habitasse feugiat massa id pellentesque. Ut porta gravida lobortis facilisis dui augue. Fringilla nunc porttitor eget dictum tempus. Lorem erat eu congue curabitur est. Pulvinar morbi pulvinar venenatis rhoncus egestas euismod massa mauris. Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus.',
    name: 'Robert Fox',
    role: 'CEO of Ipsum Company',
    image: avatar3,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-secondary py-5">
      <div className="container py-2 py-md-4 py-lg-5">
        <h2 className="h1 text-center pb-3 pb-lg-0 mb-4 mb-lg-5">What Our Attendees Say</h2>

        <div className="position-relative px-sm-5 mx-auto" style={{ maxWidth: '976px' }}>
          <button
            type="button"
            id="prev"
            className="btn btn-prev btn-icon btn-sm position-absolute top-50 translate-middle-y start-0 d-none d-sm-inline-flex mt-n4"
            aria-label="Previous"
          >
            <IconifyIcon icon="bx:chevron-left" fontSize={20} />
          </button>

          <button
            type="button"
            id="next"
            className="btn btn-next btn-icon btn-sm position-absolute top-50 translate-middle-y end-0 d-none d-sm-inline-flex mt-n4"
            aria-label="Next"
          >
            <IconifyIcon icon="bx:chevron-right" fontSize={20} />
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={12}
            loop={true}
            navigation={{ prevEl: '#prev', nextEl: '#next' }}
            pagination={{ clickable: true }}
            className="swiper swiper-nav-onhover pt-1 mx-md-2"
          >
            {testimonials.map(item => (
              <SwiperSlide key={item.id} className="swiper-wrapper pt-4 pb-3">
                <figure className="card h-100 position-relative border-0 shadow-sm py-3 p-0 p-xxl-4 my-0">
                  <span className="btn btn-icon btn-primary btn-lg shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4 ms-xxl-5">
                    <IconifyIcon icon="bxs:quote-left" />
                  </span>
                  <blockquote className="card-body mt-2 mb-2">
                    <p className="fs-lg mb-0">{item.text}</p>
                  </blockquote>
                  <figcaption className="card-footer d-flex align-items-center border-0 pt-0 mt-n2 mt-lg-0">
                    <img
                      src={item.image}
                      width={60}
                      height={60}
                      className="rounded-circle"
                      alt={item.name}
                    />
                    <div className="ps-3">
                      <h6 className="fw-semibold lh-base mb-0">{item.name}</h6>
                      <span className="fs-sm text-muted">{item.role}</span>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
