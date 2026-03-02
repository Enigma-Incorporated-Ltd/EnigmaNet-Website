import team24 from '@/assets/img/team/24.jpg';
import team25 from '@/assets/img/team/25.jpg';
import team26 from '@/assets/img/team/26.jpg';
import team27 from '@/assets/img/team/27.jpg';
import team28 from '@/assets/img/team/28.jpg';
import team29 from '@/assets/img/team/29.jpg';
import team30 from '@/assets/img/team/30.jpg';
import team31 from '@/assets/img/team/31.jpg';

import { Card, CardBody, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';

type Speaker = {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  socials: {
    facebook?: string;
    linkedin?: string;
    twitter?: string;
  };
};

const speakers: Speaker[] = [
  {
    id: 1,
    name: 'Ralph Edwards',
    role: 'Founder & CEO',
    company: 'Uber',
    image: team24,
    socials: {
      facebook: '#',
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 2,
    name: 'Albert Flores',
    role: 'Principal Consultant',
    company: 'Twitch',
    image: team25,
    socials: {
      facebook: '#',
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 3,
    name: 'Jenny Wilson',
    role: 'UX Designer',
    company: 'Glassdoor',
    image: team26,
    socials: {
      facebook: '#',
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 4,
    name: 'Marvin McKinney',
    role: 'Product Manager',
    company: 'Google',
    image: team27,
    socials: {
      facebook: '#',
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 5,
    name: 'Esther Howard',
    role: 'VP of Strategy',
    company: 'Stretto Inc.',
    image: team28,
    socials: {
      facebook: '#',
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 6,
    name: 'Cameron Williamson',
    role: 'Co-Founder',
    company: 'Invision LTD',
    image: team29,
    socials: {
      facebook: '#',
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 7,
    name: 'Jerome Bell',
    role: 'Strategic Advisor',
    company: 'Shopify',
    image: team30,
    socials: {
      facebook: '#',
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 8,
    name: 'Darrell Steward',
    role: 'Senior Project Manager',
    company: 'Uber',
    image: team31,
    socials: {
      facebook: '#',
      linkedin: '#',
      twitter: '#',
    },
  },
];

const Speakers = () => {
  return (
    <section id="speakers" className="container py-5 my-2 my-md-4 my-lg-5">
      <div className="d-md-flex align-items-center justify-content-between text-center text-md-start pt-md-1 pt-lg-3">
        <h2 className="h1 mb-4 mb-md-0 me-md-3">World-Class Speakers</h2>
        <Link to="#" className="btn btn-primary btn-lg">
          Become a speaker
          <IconifyIcon icon="bx:right-arrow-alt" className="fs-4 lh-1 ms-2 me-n1" />
        </Link>
      </div>

      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-2 mt-lg-4">
        {speakers.map(speaker => (
          <Col key={speaker.id}>
            <Card className="card-hover border-0 bg-transparent">
              <div className="position-relative">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="rounded-3"
                  width={280}
                  height={280}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
                <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
                  <div className="position-relative d-flex zindex-2">
                    <Link
                      to=""
                      className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2"
                      aria-label="Facebook"
                    >
                      <IconifyIcon icon="bxl:facebook" fontSize={18} />
                    </Link>
                    <Link
                      to=""
                      className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2"
                      aria-label="LinkedIn"
                    >
                      <IconifyIcon icon="bxl:linkedin" fontSize={18} />
                    </Link>
                    <Link
                      to=""
                      className="btn btn-icon btn-secondary btn-twitter btn-sm bg-white"
                      aria-label="Twitter"
                    >
                      <IconifyIcon icon="bxl:twitter" fontSize={18} />
                    </Link>
                  </div>
                </div>
              </div>
              <CardBody className="text-center p-3">
                <h3 className="fs-lg fw-semibold pt-1 mb-2">{speaker.name}</h3>
                <p className="fs-sm mb-0">
                  {speaker.role}, {speaker.company}
                </p>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Speakers;
