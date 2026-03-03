import { Container, Row, Col, CardBody, Card } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import case1 from '@/assets/img/landing/software-agency-2/case-studies/01.jpg';
import case2 from '@/assets/img/landing/software-agency-2/case-studies/02.jpg';
import { Link } from 'react-router';

type CaseStudy = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const caseStudies: CaseStudy[] = [
  {
    image: case1,
    title: 'Travelers Portal with Smart Search',
    description:
      'Aenean sed mi ut erat venenatis imperdiet. Mauris sed turpis ac elit ultricies rhoncus id et magna donec euismod interdum risus.',
    link: '#',
  },
  {
    image: case2,
    title: 'Fintech App for Financial Management',
    description:
      'Nullam semper enim quis vulputate mollis. Donec ultrices elementum mauris, ac porttitor mi cursus eget vestibulum tellus sodales.',
    link: '#',
  },
];

const CaseStudies: React.FC = () => {
  return (
    <Container className="my-5 py-lg-5 py-md-4 py-3">
      <h2 className="h1 mb-md-4 mb-3 pt-xl-3">Our Services</h2>

      <Row className="gy-sm-4 gy-3 mb-md-5 mb-4 pb-xl-2 pb-md-0 pb-sm-2">
        <Col md={6} xs={12}>
          <p className="mb-0 fs-lg">
            We bring real solutions to each client&apos;s problems through a deep understanding of
            their market, solution, and vision.
          </p>
        </Col>
        <Col className="text-md-end">
          <Link to="#" className="btn btn-lg btn-outline-primary">
            See all case studies
          </Link>
        </Col>
      </Row>

      <Swiper
        modules={[Pagination]}
        spaceBetween={24}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        className="mb-xl-3"
      >
        {caseStudies.map((study, index) => (
          <SwiperSlide key={index} className="h-auto pt-1">
            <Card className="h-100">
              <img src={study.image} alt={study.title} className="card-img-top" />
              <CardBody>
                <h5 className="card-title mb-3">{study.title}</h5>
                <p className="card-text mb-4 pb-md-3 fs-lg">{study.description}</p>
                <Link to={study.link} className="btn btn-lg btn-outline-primary">
                  See all case studies
                </Link>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CaseStudies;
