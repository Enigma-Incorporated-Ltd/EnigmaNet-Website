import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
;

type Network = {
  name: string;
  handle: string;
  url: string;
  icon: string;
  btnClass: string;
};

const networks: Network[] = [
  {
    name: 'Facebook',
    handle: 'silicon',
    url: '#',
    icon: 'bxl:facebook',
    btnClass: 'btn-facebook',
  },
  {
    name: 'Instagram',
    handle: '@silicon',
    url: '#',
    icon: 'bxl:instagram',
    btnClass: 'btn-instagram',
  },
  {
    name: 'Twitter',
    handle: '@silicon',
    url: '#',
    icon: 'bxl:twitter',
    btnClass: 'btn-twitter',
  },
  {
    name: 'LinkedIn',
    handle: 'Silicon Inc.',
    url: '#',
    icon: 'bxl:linkedin',
    btnClass: 'btn-linkedin',
  },
  {
    name: 'YouTube',
    handle: 'Silicon',
    url: '#',
    icon: 'bxl:youtube',
    btnClass: 'btn-youtube',
  },
  {
    name: 'Dribbble',
    handle: 'Silicon',
    url: '#',
    icon: 'bxl:dribbble',
    btnClass: 'btn-dribbble',
  },
];

const Networks = () => {
  return (
    <section className="container text-center py-5 my-2 my-md-4 my-lg-5">
      <h2 className="h1 mb-4">We Have Social Networks</h2>
      <p className="fs-lg text-muted pb-2 mb-5">
        Follow us and keep up to date with the freshest news!
      </p>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={2}
        breakpoints={{
          500: { slidesPerView: 3 },
          650: { slidesPerView: 4 },
          900: { slidesPerView: 5 },
          1100: { slidesPerView: 6 },
        }}
      >
        {networks.map((network, index) => (
          <SwiperSlide key={index}>
            <div className="position-relative text-center border-end mx-n1">
              <Link
                to={network.url}
                className={`btn btn-icon btn-secondary ${network.btnClass} btn-lg stretched-link`}
                aria-label={network.name}
              >
                <IconifyIcon icon={network.icon} fontSize={23} />
              </Link>
              <div className="pt-4">
                <h6 className="mb-1">{network.name}</h6>
                <p className="fs-sm text-muted mb-0">{network.handle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Networks;
