import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import integration01Light from '@/assets/img/landing/saas-4/integrations/01-light.png';
import integration01Dark from '@/assets/img/landing/saas-4/integrations/01-dark.png';
import integration02Light from '@/assets/img/landing/saas-4/integrations/02-light.png';
import integration02Dark from '@/assets/img/landing/saas-4/integrations/02-dark.png';
import integration03Light from '@/assets/img/landing/saas-4/integrations/03-light.png';
import integration03Dark from '@/assets/img/landing/saas-4/integrations/03-dark.png';
import integration04Light from '@/assets/img/landing/saas-4/integrations/04-light.png';
import integration04Dark from '@/assets/img/landing/saas-4/integrations/04-dark.png';
import integration05Light from '@/assets/img/landing/saas-4/integrations/05-light.png';
import integration05Dark from '@/assets/img/landing/saas-4/integrations/05-dark.png';
import { Card } from 'react-bootstrap';

const integrationsData = [
  { light: integration01Light, dark: integration01Dark, width: 153 },
  { light: integration02Light, dark: integration02Dark, width: 121 },
  { light: integration03Light, dark: integration03Dark, width: 128 },
  { light: integration04Light, dark: integration04Dark, width: 138 },
  { light: integration05Light, dark: integration05Dark, width: 164 },
];

const Integration = () => {
  return (
    <section className="container mb-5 pb-lg-5 pb-md-4 pb-3">
      <h2 className="h1 mb-lg-4 mb-3 text-center">Simple Integration with Popular Tools</h2>
      <p
        className="mb-lg-5 mb-4 pb-lg-0 pb-md-2 mx-auto text-center"
        style={{ maxWidth: '40.75rem' }}
      >
        In blandit luctus proin mauris a commodo, dolor diam tempus, aenean magna fusce eu. Id
        porttitor aliquam eget aliquet sagittis eu aut diam ut phasellus sed convallis iaculis neque
        ultricies convallis sed enim.
      </p>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 4 },
          600: { slidesPerView: 3, spaceBetween: 16 },
          991: { slidesPerView: 4, spaceBetween: 24 },
          1200: { slidesPerView: 5, spaceBetween: 38 },
        }}
        className="mt-n2 mb-xl-2"
      >
        {integrationsData.map((integration, idx) => (
          <SwiperSlide key={idx} className="h-auto py-2">
            <Card
              as="a"
              className="card-body card-hover h-100 py-sm-4 py-3 px-3 mx-2 border-0 shadow-sm rounded-pill"
            >
              <div className="d-block d-dark-mode-none">
                <img
                  src={integration.light}
                  alt={`Integration ${idx + 1}`}
                  width={integration.width}
                  className="mx-auto my-1 my-sm-0"
                />
              </div>
              <div className="d-none d-dark-mode-block">
                <img
                  src={integration.dark}
                  alt={`Integration ${idx + 1} Dark`}
                  width={integration.width}
                  className="mx-auto my-1 my-sm-0"
                />
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Integration;
