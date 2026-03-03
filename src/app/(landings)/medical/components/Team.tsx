import { Button, Card, CardBody, Col, Row } from 'react-bootstrap';

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  reviews: number;
  rating: number;
  image: string;
  socials: {
    facebook?: string;
    linkedin?: string;
    twitter?: string;
  };
};

import doctor1 from '@/assets/img/team/16.jpg';
import doctor2 from '@/assets/img/team/17.jpg';
import doctor3 from '@/assets/img/team/18.jpg';
import doctor4 from '@/assets/img/team/19.jpg';
import doctor5 from '@/assets/img/team/20.jpg';
import doctor6 from '@/assets/img/team/21.jpg';
import doctor7 from '@/assets/img/team/22.jpg';
import doctor8 from '@/assets/img/team/23.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Ronald Richards',
    specialty: 'Neurosurgeon',
    reviews: 19,
    rating: 5,
    image: doctor1,
    socials: { facebook: '#', linkedin: '#', twitter: '#' },
  },
  {
    id: 2,
    name: 'Dr. Esther Howard',
    specialty: 'Therapist',
    reviews: 4,
    rating: 5,
    image: doctor2,
    socials: { facebook: '#', linkedin: '#', twitter: '#' },
  },
  {
    id: 3,
    name: 'Dr. Jerome Bell',
    specialty: 'Anesthesiologist',
    reviews: 12,
    rating: 4,
    image: doctor3,
    socials: { facebook: '#', linkedin: '#', twitter: '#' },
  },
  {
    id: 4,
    name: 'Dr. Ralph Edwards',
    specialty: 'Surgeon',
    reviews: 8,
    rating: 5,
    image: doctor4,
    socials: { facebook: '#', linkedin: '#', twitter: '#' },
  },
  {
    id: 5,
    name: 'Dr. Darrell Steward',
    specialty: 'Cardiologist',
    reviews: 14,
    rating: 4,
    image: doctor5,
    socials: { facebook: '#', linkedin: '#', twitter: '#' },
  },
  {
    id: 6,
    name: 'Dr. Annette Black',
    specialty: 'Pediatrician',
    reviews: 10,
    rating: 4,
    image: doctor6,
    socials: { facebook: '#', linkedin: '#', twitter: '#' },
  },
  {
    id: 7,
    name: 'Dr. Dianne Russell',
    specialty: 'Dentist',
    reviews: 5,
    rating: 5,
    image: doctor7,
    socials: { facebook: '#', linkedin: '#', twitter: '#' },
  },
  {
    id: 8,
    name: 'Dr. Courtney Henry',
    specialty: 'Gynecologist',
    reviews: 16,
    rating: 5,
    image: doctor8,
    socials: { facebook: '#', linkedin: '#', twitter: '#' },
  },
];

const Team = () => {
  return (
    <section className="container pt-xl-2 pb-5 mb-md-3 mb-lg-5">
      <div className="d-md-flex align-items-center justify-content-between text-center text-md-start pb-1 pb-lg-0 mb-4 mb-lg-5">
        <h2 className="h1 mb-md-0">Qualified Medical Specialists</h2>
        <Button variant="outline-primary">
          See all doctors <IconifyIcon icon="bx:right-arrow-alt" className="fs-xl ms-2 me-n1" />
        </Button>
      </div>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {doctors.map(doc => (
          <Col key={doc.id}>
            <Card className="card-hover border-0 bg-transparent">
              <div className="position-relative">
                <img src={doc.image} alt={doc.name} className="rounded-3"  />
                <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
                  <div className="position-relative d-flex zindex-2">
                    {doc.socials.facebook && (
                      <Link
                        to={doc.socials.facebook}
                        className="btn btn-icon btn-secondary btn-sm bg-white me-2"
                        aria-label="Facebook"
                      >
                        <IconifyIcon icon="bxl:facebook" fontSize={20} />
                      </Link>
                    )}
                    {doc.socials.linkedin && (
                      <Link
                        to={doc.socials.linkedin}
                        className="btn btn-icon btn-secondary btn-sm bg-white me-2"
                        aria-label="LinkedIn"
                      >
                        <IconifyIcon icon="bxl:linkedin" fontSize={20} />
                      </Link>
                    )}
                    {doc.socials.twitter && (
                      <Link
                        to={doc.socials.twitter}
                        className="btn btn-icon btn-secondary btn-sm bg-white"
                        aria-label="Twitter"
                      >
                        <IconifyIcon icon="bxl:twitter" fontSize={20} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              <CardBody className="text-center p-3">
                <h3 className="fs-lg fw-semibold pt-1 mb-2">{doc.name}</h3>
                <p className="fs-sm mb-2">{doc.specialty}</p>

                <div className="d-flex align-items-center justify-content-center">
                  <div className="text-nowrap me-1">
                    {Array.from({ length: 5 }).map((_, i) =>
                      i < doc.rating ? (
                        <IconifyIcon key={i} icon="bxs:star" className="text-warning fs-sm" />
                      ) : (
                        <IconifyIcon
                          key={i}
                          icon="bx:star"
                          className="text-muted fs-sm opacity-75"
                        />
                      )
                    )}
                  </div>
                  <span className="fs-xs text-muted">({doc.reviews} reviews)</span>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Team;
