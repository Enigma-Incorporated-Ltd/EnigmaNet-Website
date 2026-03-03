import img24 from '@/assets/img/team/24.jpg';
import img25 from '@/assets/img/team/25.jpg';
import img26 from '@/assets/img/team/26.jpg';
import img27 from '@/assets/img/team/27.jpg';
import img28 from '@/assets/img/team/28.jpg';
import img29 from '@/assets/img/team/29.jpg';
import img30 from '@/assets/img/team/30.jpg';
import img31 from '@/assets/img/team/31.jpg';

import { Link } from 'react-router';
import IconifyIcon from '@/components/IconifyIcon';
import { Card, CardBody, Col, Row } from 'react-bootstrap';

type SocialLink = {
  platform: 'facebook' | 'linkedin' | 'twitter';
  url: string;
};

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  socials: SocialLink[];
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Ralph Edwards',
    role: 'Founder & CEO',
    image: img24,
    socials: [
      { platform: 'facebook', url: '#' },
      { platform: 'linkedin', url: '#' },
      { platform: 'twitter', url: '#' },
    ],
  },
  {
    id: 2,
    name: 'Albert Flores',
    role: 'Principal Consultant',
    image: img25,
    socials: [
      { platform: 'facebook', url: '#' },
      { platform: 'linkedin', url: '#' },
      { platform: 'twitter', url: '#' },
    ],
  },
  {
    id: 3,
    name: 'Jenny Wilson',
    role: 'UX Designer',
    image: img26,
    socials: [
      { platform: 'facebook', url: '#' },
      { platform: 'linkedin', url: '#' },
      { platform: 'twitter', url: '#' },
    ],
  },
  {
    id: 4,
    name: 'Marvin McKinney',
    role: 'Product Manager',
    image: img27,
    socials: [
      { platform: 'facebook', url: '#' },
      { platform: 'linkedin', url: '#' },
      { platform: 'twitter', url: '#' },
    ],
  },
  {
    id: 5,
    name: 'Esther Howard',
    role: 'VP of Strategy',
    image: img28,
    socials: [
      { platform: 'facebook', url: '#' },
      { platform: 'linkedin', url: '#' },
      { platform: 'twitter', url: '#' },
    ],
  },
  {
    id: 6,
    name: 'Cameron Williamson',
    role: 'Co-Founder',
    image: img29,
    socials: [
      { platform: 'facebook', url: '#' },
      { platform: 'linkedin', url: '#' },
      { platform: 'twitter', url: '#' },
    ],
  },
  {
    id: 7,
    name: 'Jerome Bell',
    role: 'Strategic Advisor',
    image: img30,
    socials: [
      { platform: 'facebook', url: '#' },
      { platform: 'linkedin', url: '#' },
      { platform: 'twitter', url: '#' },
    ],
  },
  {
    id: 8,
    name: 'Darrell Steward',
    role: 'Senior Project Manager',
    image: img31,
    socials: [
      { platform: 'facebook', url: '#' },
      { platform: 'linkedin', url: '#' },
      { platform: 'twitter', url: '#' },
    ],
  },
];

const Team = () => {
  return (
    <section className="container mb-5 py-lg-3 py-xl-4 py-xxl-5">
      <div className="d-md-flex align-items-center justify-content-between text-md-start text-center pt-1 pt-sm-3 pt-md-4 mb-5">
        <h2 className="h1 mb-md-0">Our talented team</h2>
        <Link to="#" className="btn btn-primary">
          Join our team
          <IconifyIcon icon="bx:right-arrow-alt" className="lead ms-1" />
        </Link>
      </div>

      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 pb-lg-2 pb-xl-3">
        {teamMembers.map(member => (
          <Col key={member.id}>
            <Card className="card-hover border-0 bg-transparent">
              <div className="position-relative">
                <img src={member.image} className="rounded-3" alt={member.name} />
                <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
                  <div className="position-relative d-flex zindex-2">
                    {member.socials.map((social, idx) => (
                      <Link
                        key={idx}
                        to={social.url}
                        className={`btn btn-icon btn-secondary btn-${social.platform} btn-sm bg-white me-2`}
                        aria-label={social.platform}
                      >
                        <IconifyIcon icon={`bxl:${social.platform}`} fontSize={18} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <CardBody className="text-center p-3">
                <h3 className="fs-lg fw-semibold pt-1 mb-2">{member.name}</h3>
                <p className="fs-sm mb-0">{member.role}</p>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Team;
