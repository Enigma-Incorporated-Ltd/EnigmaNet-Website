import IconifyIcon from '@/components/IconifyIcon';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
;

type FeatureItem = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    id: 1,
    icon: 'bx:rocket',
    title: 'Innovative Solutions',
    description:
      'Massa enim libero dictumst consectetur in convallis. Lobortis cursus mi a magna ullamcorper consectetur.',
  },
  {
    id: 2,
    icon: 'bx:like',
    title: 'Success Guarantee',
    description:
      'At ultricies id non quisque integer eget velit. Facilisis enim malesuada metus, risus amet ultricies. Magna aliquam id nunc.',
  },
  {
    id: 3,
    icon: 'bx:time-five',
    title: 'On Time Service',
    description:
      'Nisi augue at ridiculus odio ullamcorper in id. In bibendum diam nunc dignissim magna morbi mattis enim.',
  },
  {
    id: 4,
    icon: 'bx:group',
    title: 'Professional Team',
    description:
      'Pellentesque rhoncus viverra vestibulum, purus purus quisque quisque sed. Cras vestibulum facilisis dictumst consequat.',
  },
];

const Features = () => {
  return (
    <section className="container py-5 my-2 my-md-4 my-lg-5">
      <h2 className="h1 text-center pt-1 pt-xl-3 mb-lg-4">Why Us?</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={8}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          500: { slidesPerView: 2 },
          800: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        className="mx-n2 pb-4"
      >
        {features.map(feature => (
          <SwiperSlide key={feature.id} className="h-auto py-3">
            <Card className="h-100 card-body card-hover mx-2">
              <IconifyIcon
                icon={`${feature.icon}`}
                className="display-5 fw-normal card-icon"
                style={{ color: '#b4b7c9' }}
              />
              <h3 className="h5 pt-3 pb-1 mb-2">{feature.title}</h3>
              <p className="mb-0">{feature.description}</p>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="d-flex flex-column flex-sm-row justify-content-center pt-3 pt-sm-4">
        <Link to="#" className="btn btn-primary shadow-primary btn-lg">
          Request a price
        </Link>
      </div>
    </section>
  );
};

export default Features;
