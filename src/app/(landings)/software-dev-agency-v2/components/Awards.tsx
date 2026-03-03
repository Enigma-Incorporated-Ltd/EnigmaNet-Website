import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import clutch from '@/assets/img/landing/software-agency-2/awards/clutch.png';
import goodFirms from '@/assets/img/landing/software-agency-2/awards/good-firms.png';
import productHunt from '@/assets/img/landing/software-agency-2/awards/product-hunt.png';
import awwwards from '@/assets/img/landing/software-agency-2/awards/awwwards.png';
import IconifyIcon from '@/components/IconifyIcon';
import { Card, CardBody } from 'react-bootstrap';
import { Link } from 'react-router';

type Award = {
  image: string;
  alt: string;
  description: string;
  link: string;
};

const awards: Award[] = [
  {
    image: clutch,
    alt: 'Clutch',
    description: 'Phasellus eu ex ultrices, facilisis ex at aliquet felis rutrum ante.',
    link: '#',
  },
  {
    image: goodFirms,
    alt: 'Good Firms',
    description: 'Nulla pellentesque justo enim, in elementum turpis tincidunt.',
    link: '#',
  },
  {
    image: productHunt,
    alt: 'Product Hunt',
    description: 'Donec pulvinar iaculis ex laoreet vestibulum interdum viverra.',
    link: '#',
  },
  {
    image: awwwards,
    alt: 'Awwwards',
    description: 'Cras ullamcorper laoreet erat suscipit. Sed id lacus blandit.',
    link: '#',
  },
];

const Awards = () => {
  return (
    <section className="position-relative py-5 bg-dark">
      <span className="position-absolute top-0 start-0 d-dark-mode-block d-none w-100 h-100 bg-secondary"></span>

      <div
        className="position-relative container my-lg-5 my-md-4 my-3 py-xl-3"
        data-bs-theme="dark"
      >
        <h2 className="h1 mb-md-4 mb-3 text-center">Our Awards</h2>
        <p
          className="text-body mb-md-5 mb-4 pb-xl-3 pb-lg-2 pb-md-0 pb-sm-2 mx-auto text-center"
          style={{ maxWidth: '32.875rem' }}
        >
          In blandit luctus proin mauris a commodo, dolor diam tempus, aenean magna fusce eu. Id
          porttitor aliquam eget aliquet sagittis
        </p>

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
          className="mt-n1"
        >
          {awards.map((award, index) => (
            <SwiperSlide key={index} className="h-auto pt-1">
              <Card className="shadow-sm card-hover position-relative h-100 py-md-1 px-md-2">
                <CardBody className="text-center">
                  <img src={award.image} width={170} alt={award.alt} className="mx-auto" />
                  <div className="mt-5 pt-lg-5 pt-md-4 pt-sm-3">
                    <h3 className="h5 mt-xl-4 mb-2 pt-lg-2 pb-1 d-flex align-items-center justify-content-center text-nowrap">
                      <Link to={award.link} className="stretched-link">
                        Learn more
                      </Link>
                      <IconifyIcon
                        icon="bx:right-arrow-circle"
                        className="ms-2 fs-3 text-primary"
                      />
                    </h3>
                    <p className="mb-0">{award.description}</p>
                  </div>
                </CardBody>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Awards;
