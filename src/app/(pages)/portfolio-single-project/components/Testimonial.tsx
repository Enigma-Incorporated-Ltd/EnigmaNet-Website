import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import related01 from '@/assets/img/portfolio/single/related01.jpg';
import related02 from '@/assets/img/portfolio/single/related02.jpg';
import related03 from '@/assets/img/portfolio/single/related03.jpg';
import { Link } from 'react-router';


import { Card, CardBody } from 'react-bootstrap';

type ProjectType = {
  id: number;
  title: string;
  link: string;
  image: string;
  category: string;
};

const projects: ProjectType[] = [
  {
    id: 1,
    title: '3D Shape Illustration',
    link: '/portfolio-single-project',
    image: related01,
    category: '3D Design / Illustration / Art',
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    link: '/portfolio-single-project',
    image: related02,
    category: 'Mobile App Design / UI / UX',
  },
  {
    id: 3,
    title: 'Big Blue Whale Shape',
    link: '/portfolio-single-project',
    image: related03,
    category: '3D Polygonal Shape / Graphic Design / Art',
  },
];

const Testimonial = () => {
  return (
    <section className="container py-5 mt-2 mt-md-4 mt-lg-5 mb-xl-2">
      <h2 className="h1 text-center pt-2 pt-md-3 pb-4 mb-2 mb-lg-3">Explore More Projects</h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          560: { slidesPerView: 2 },
          1000: { slidesPerView: 3 },
        }}
        className="pb-4"
      >
        {projects.map(project => (
          <SwiperSlide key={project.id} className="h-auto">
            <Card className="card-portfolio">
              <div className="card-img">
                <img src={project.image} alt={project.title} />
              </div>
              <CardBody>
                <h3 className="h4 mb-2">
                  <Link to={project.link} className="stretched-link">
                    {project.title}
                  </Link>
                </h3>
                <div className="card-portfolio-meta">
                  <span className="text-muted">{project.category}</span>
                </div>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
