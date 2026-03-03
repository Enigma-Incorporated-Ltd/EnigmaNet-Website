import team01 from '@/assets/img/team/01.jpg';
import team02 from '@/assets/img/team/02.jpg';
import team03 from '@/assets/img/team/03.jpg';
import team04 from '@/assets/img/team/04.jpg';
import team05 from '@/assets/img/team/05.jpg';
import team06 from '@/assets/img/team/06.jpg';
import team07 from '@/assets/img/team/07.jpg';
import team08 from '@/assets/img/team/08.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';
import { Card, CardBody, Col, Row } from 'react-bootstrap';

type Social = {
  platform: string;
  url: string;
  icon: string;
};

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  socials: Social[];
};

const teamData: TeamMember[] = [
  {
    id: 1,
    name: 'Jenny Wilson',
    role: 'Co-Founder & CEO',
    image: team01,
    socials: [
      { platform: 'facebook', url: '', icon: 'bxl:facebook' },
      { platform: 'linkedin', url: '', icon: 'bxl:linkedin' },
      { platform: 'twitter', url: '', icon: 'bxl:twitter' },
    ],
  },
  {
    id: 2,
    name: 'Ralph Edwards',
    role: 'Co-Founder',
    image: team02,
    socials: [
      { platform: 'facebook', url: '', icon: 'bxl:facebook' },
      { platform: 'linkedin', url: '', icon: 'bxl:linkedin' },
      { platform: 'twitter', url: '', icon: 'bxl:twitter' },
    ],
  },
  {
    id: 3,
    name: 'Cameron Williamson',
    role: 'Creative Director',
    image: team03,
    socials: [
      { platform: 'facebook', url: '', icon: 'bxl:facebook' },
      { platform: 'dribbble', url: '', icon: 'bxl:dribbble' },
      { platform: 'linkedin', url: '', icon: 'bxl:linkedin' },
    ],
  },
  {
    id: 4,
    name: 'Jerome Bell',
    role: 'Marketing Director',
    image: team04,
    socials: [
      { platform: 'facebook', url: '', icon: 'bxl:facebook' },
      { platform: 'twitter', url: '', icon: 'bxl:twitter' },
      { platform: 'linkedin', url: '', icon: 'bxl:linkedin' },
    ],
  },
  {
    id: 5,
    name: 'Marvin McKinney',
    role: 'Lead Designer',
    image: team05,
    socials: [
      { platform: 'facebook', url: '', icon: 'bxl:facebook' },
      { platform: 'behance', url: '', icon: 'bxl:behance' },
      { platform: 'dribbble', url: '', icon: 'bxl:dribbble' },
    ],
  },
  {
    id: 6,
    name: 'Esther Howard',
    role: 'Motion Designer',
    image: team06,
    socials: [
      { platform: 'facebook', url: '', icon: 'bxl:facebook' },
      { platform: 'dribbble', url: '', icon: 'bxl:dribbble' },
      { platform: 'behance', url: '', icon: 'bxl:behance' },
    ],
  },
  {
    id: 7,
    name: 'Darrell Steward',
    role: 'Lead Developer',
    image: team07,
    socials: [
      { platform: 'facebook', url: '', icon: 'bxl:facebook' },
      { platform: 'stackoverflow', url: '', icon: 'bxl:stack-overflow' },
      { platform: 'github', url: '', icon: 'bxl:github' },
    ],
  },
  {
    id: 8,
    name: 'Jane Cooper',
    role: 'Senior Project Manager',
    image: team08,
    socials: [
      { platform: 'facebook', url: '', icon: 'bxl:facebook' },
      { platform: 'linkedin', url: '', icon: 'bxl:linkedin' },
      { platform: 'twitter', url: '', icon: 'bxl:twitter' },
    ],
  },
];
const Team = () => {
  return (
    <section className="container py-5 my-md-3 my-lg-5">
      <h2 className="h1 text-center pt-1 pb-3 mb-3 mb-lg-4">Our Leadership</h2>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {teamData.map(member => (
          <Col key={member.id}>
            <Card className="card-hover border-0 bg-transparent">
              <div className="position-relative">
                <img src={member.image} className="rounded-3" alt={member.name} />
                <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-3"></span>
                  <div className="position-relative d-flex zindex-2">
                    {member.socials.map((social, index) => (
                      <Link
                        key={index}
                        to={social.url}
                        className={`btn btn-icon btn-secondary btn-${social.platform} btn-sm bg-white me-2`}
                        aria-label={social.platform}
                      >
                        <IconifyIcon icon={social.icon} fontSize={20} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <CardBody className="card-body text-center p-3">
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
