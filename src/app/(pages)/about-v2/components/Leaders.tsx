import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import team09 from '@/assets/img/team/09.jpg';
import team10 from '@/assets/img/team/10.jpg';
import team11 from '@/assets/img/team/11.jpg';
import team12 from '@/assets/img/team/12.jpg';
import team13 from '@/assets/img/team/13.jpg';
import team14 from '@/assets/img/team/14.jpg';
import team15 from '@/assets/img/team/15.jpg';



import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';
import { Card } from 'react-bootstrap';

type SocialLink = {
  platform: string;
  url: string;
  iconClass: string;
};

type Leader = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  socials: SocialLink[];
};

const leaders: Leader[] = [
  {
    id: 1,
    name: 'Ralph Edwards',
    role: 'Co-Founder',
    avatar: team09,
    socials: [
      { platform: 'facebook', url: '#', iconClass: 'bxl:facebook' },
      { platform: 'linkedin', url: '#', iconClass: 'bxl:linkedin' },
      { platform: 'twitter', url: '#', iconClass: 'bxl:twitter' },
    ],
  },
  {
    id: 2,
    name: 'Darrell Steward',
    role: 'Lead Developer',
    avatar: team10,
    socials: [
      { platform: 'facebook', url: '#', iconClass: 'bxl:facebook' },
      { platform: 'stack-overflow', url: '#', iconClass: 'bxl:stack-overflow' },
      { platform: 'github', url: '#', iconClass: 'bxl:github' },
    ],
  },
  {
    id: 3,
    name: 'Cameron Williamson',
    role: 'Creative Director',
    avatar: team11,
    socials: [
      { platform: 'facebook', url: '#', iconClass: 'bxl:facebook' },
      { platform: 'dribbble', url: '#', iconClass: 'bxl:dribbble' },
      { platform: 'linkedin', url: '#', iconClass: 'bxl:linkedin' },
    ],
  },
  {
    id: 4,
    name: 'Jerome Bell',
    role: 'Marketing Director',
    avatar: team12,
    socials: [
      { platform: 'instagram', url: '#', iconClass: 'bxl:instagram' },
      { platform: 'linkedin', url: '#', iconClass: 'bxl:linkedin' },
    ],
  },
  {
    id: 5,
    name: 'Annette Black',
    role: 'Lead UI Designer',
    avatar: team13,
    socials: [
      { platform: 'facebook', url: '#', iconClass: 'bxl:facebook' },
      { platform: 'dribbble', url: '#', iconClass: 'bxl:dribbble' },
      { platform: 'behance', url: '#', iconClass: 'bxl:behance' },
    ],
  },
  {
    id: 6,
    name: 'Marvin McKinney',
    role: 'Senior Project Manager',
    avatar: team14,
    socials: [
      { platform: 'facebook', url: '#', iconClass: 'bxl:facebook' },
      { platform: 'linkedin', url: '#', iconClass: 'bxl:linkedin' },
    ],
  },
  {
    id: 7,
    name: 'Esther Howard',
    role: 'Motion Designer',
    avatar: team15,
    socials: [
      { platform: 'facebook', url: '#', iconClass: 'bxl:facebook' },
      { platform: 'dribbble', url: '#', iconClass: 'bxl:dribbble' },
      { platform: 'behance', url: '#', iconClass: 'bxl:behance' },
    ],
  },
];

const Leaders = () => {
  return (
    <section className="container-fluid pt-lg-2 pb-5 mb-2 mb-md-4 mb-lg-5">
      <h2 className="h1 text-center pb-md-1 mb-1 mb-sm-3">Our Leaders</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={8}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          480: { slidesPerView: 2 },
          700: { slidesPerView: 3 },
          900: { slidesPerView: 4 },
          1160: { slidesPerView: 5 },
          1500: { slidesPerView: 6 },
        }}
        slidesPerView={1}
        className="mx-0 mb-md-n2 mb-xxl-n3"
      >
        {leaders.map(leader => (
          <SwiperSlide key={leader.id} className="py-3">
            <Card className="card-body card-hover bg-light border-0 text-center mx-2">
              <img
                src={leader.avatar}
                alt={leader.name}
                width={162}
                height={162}
                className="d-block rounded-circle mx-auto mb-3"
              />
              <h5 className="fw-medium fs-lg mb-1">{leader.name}</h5>
              <p className="fs-sm mb-3">{leader.role}</p>
              <div className="d-flex justify-content-center">
                {leader.socials.map((s, idx) => (
                  <Link
                    key={idx}
                    to={s.url}
                    className={`btn btn-icon btn-outline-secondary btn-${s.platform} btn-sm me-2`}
                    aria-label={s.platform}
                  >
                    <IconifyIcon icon={s.iconClass} fontSize={18} />
                  </Link>
                ))}
              </div>
            </Card>
          </SwiperSlide>
        ))}

        <div className="swiper-pagination position-relative pt-3 mt-3"></div>
      </Swiper>
    </section>
  );
};

export default Leaders;
