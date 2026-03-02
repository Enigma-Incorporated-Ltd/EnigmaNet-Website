import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import team17 from '@/assets/img/team/17.jpg';
import team18 from '@/assets/img/team/18.jpg';
import team19 from '@/assets/img/team/19.jpg';
import team21 from '@/assets/img/team/21.jpg';

import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';
import { Card, CardBody } from 'react-bootstrap';

type TeamType = {
  id: number;
  name: string;
  role: string;
  image: string;
  reviews: number;
  totalReviews: number;
};

const teamMembers: TeamType[] = [
  {
    id: 1,
    name: 'Dr. Esther Howard',
    role: 'Dentist',
    image: team17,
    reviews: 4,
    totalReviews: 4,
  },
  {
    id: 2,
    name: 'Dr. Jerome Bell',
    role: 'Dentist',
    image: team18,
    reviews: 4,
    totalReviews: 12,
  },
  {
    id: 3,
    name: 'Dr. Ralph Edwards',
    role: 'Surgeon',
    image: team19,
    reviews: 5,
    totalReviews: 8,
  },
  {
    id: 4,
    name: 'Dr. Annette Black',
    role: 'Dentist',
    image: team21,
    reviews: 4,
    totalReviews: 10,
  },
];

const Team = () => {
  return (
    <section className="container pt-md-1 pb-3">
      <h2 className="h1 text-center pb-3 pb-lg-4">Our Dental Specialists</h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={24}
        breakpoints={{
          500: { slidesPerView: 2 },
          700: { slidesPerView: 3 },
          991: { slidesPerView: 4 },
        }}
        slidesPerView={1}
      >
        {teamMembers.map(member => (
          <SwiperSlide key={member.id}>
            <Card className="card-hover border-0 bg-transparent">
              <div className="position-relative">
                <img src={member.image} className="rounded-3" alt={member.name} />
                <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
                  <div className="position-relative d-flex zindex-2">
                    <Link
                      to="#"
                      className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                      aria-label="Facebook"
                    >
                      <IconifyIcon icon="bxl:facebook" fontSize={18} />
                    </Link>
                    <Link
                      to="#"
                      className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2"
                      aria-label="LinkedIn"
                    >
                      <IconifyIcon icon="bxl:linkedin" fontSize={18} />
                    </Link>
                    <Link
                      to="#"
                      className="btn btn-icon btn-secondary btn-twitter btn-sm bg-white"
                      aria-label="Twitter"
                    >
                      <IconifyIcon icon="bxl:twitter" fontSize={18} />
                    </Link>
                  </div>
                </div>
              </div>

              <CardBody className="text-center p-3">
                <h3 className="fs-lg fw-semibold pt-1 mb-2">{member.name}</h3>
                <p className="fs-sm mb-2">{member.role}</p>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="text-nowrap me-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <IconifyIcon
                        key={i}
                        icon={i < member.reviews ? 'bxs:star' : 'bx:star'}
                        className={i < member.reviews ? 'text-warning' : 'text-muted opacity-75'}
                      />
                    ))}
                  </div>
                  <span className="fs-xs text-muted">({member.totalReviews} reviews)</span>
                </div>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Team;
