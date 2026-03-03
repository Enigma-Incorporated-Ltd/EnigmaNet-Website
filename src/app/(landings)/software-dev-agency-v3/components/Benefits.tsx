import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


type Benefit = {
  id: number;
  title: string;
  description: string;
  image?: string;
};

const benefitsData: Benefit[] = [
  {
    id: 1,
    title: 'Prototype in 24 hrs',
    description:
      'Commodo senectus massa est urna mi. Mattis dis arcu aenean libero viverra gravida id. Imperdiet elit integer elit.',
  },
  {
    id: 2,
    title: 'MVP within two weeks',
    description:
      'Purus netus eget facilisis morbi pellentesque. Fermentum mi sit a mi ebentot pellentesque.',
  },
  {
    id: 3,
    title: 'Kickstart development',
    description:
      'Purus netus eget facilisis morbi pellentesque. Fermentum mi sit a mi ebentot pellentesque.',
  },
  {
    id: 4,
    title: '24/7 Tech support',
    description:
      'Commodo senectus massa est urna mi. Mattis dis arcu aenean libero viverra gravida id. Imperdiet elit integer elit.',
  },
];

const Benefits = () => {
  return (
    <section className="container mb-lg-5 mb-4 pb-3">
      <h2 className="h1 mb-lg-5 mb-4 pb-lg-0 pb-md-2 text-center">Our benefits</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          500: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        className="mb-xl-3 text-sm-start text-center"
      >
        {benefitsData.map(benefit => (
          <SwiperSlide key={benefit.id}>
            <div className="mx-sm-0 mx-auto" style={{ maxWidth: '19.125rem' }}>
              <h4 className="h5 mb-3">{benefit.title}</h4>
              <p className="mb-0">{benefit.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Benefits;
