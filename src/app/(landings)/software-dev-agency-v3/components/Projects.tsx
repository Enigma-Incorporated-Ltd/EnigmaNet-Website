import { Col, Row } from 'react-bootstrap';
import project1 from '@/assets/img/landing/software-agency-3/projects/01.png';
import project2 from '@/assets/img/landing/software-agency-3/projects/02.png';
import project3 from '@/assets/img/landing/software-agency-3/projects/03.png';
import { Link } from 'react-router';

type Project = {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  link: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    category: 'Mobile App',
    title: 'Task management app',
    description:
      'Odio mus adipiscing nunc sed viverra massa aliquam sit vestibulum maecenas arcu adipiscing tincidunt at velit pharetra varius sit.',
    image: project1,
    features: ['Product Strategy', 'Front end Development', 'Systems Design', 'Web Development'],
    link: '#',
  },
  {
    id: 2,
    category: 'Landing Page',
    title: 'Landing page for electric scooters',
    description:
      'Vitae non luctus rhoncus ipsum feugiat luctus ornare. Pretium nulla sed quis duis tristique orci. Odio in pellentesque urna sit facilisi convallis vel tempus.',
    image: project2,
    features: ['Product Strategy', 'Front end Development', 'Systems Design', 'Web Development'],
    link: '#',
  },
  {
    id: 3,
    category: 'Web App',
    title: 'Сrypto market dashboard',
    description:
      'Donec donec ultricies feugiat imperdiet enim cras eget enim elementum eget ultrices praesent pretium morbi.',
    image: project3,
    features: ['Front end Development', 'Systems Design', 'Web Development'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section className="container mb-5 pb-lg-5 pb-md-4 pb-3">
      <h2 className="h1 mb-lg-5 mb-4 pb-lg-0 pb-md-2 text-center">Explore Our Featured Projects</h2>

      {projectsData.map((project, index) => (
        <Row
          key={project.id}
          className={`gy-4 ${index !== projectsData.length - 1 ? 'mb-4 pb-md-3 pb-2' : 'mb-xl-3'}`}
        >
          <Col
            md={6}
            className="rellax"
            data-rellax-percentage="0.5"
            data-rellax-speed="0.5"
            data-disable-parallax-down="md"
          >
            <div className="bg-secondary rounded-3">
              <img src={project.image} alt={project.title} className="img-fluid rounded-3" />
            </div>
          </Col>

          <Col
            xl={4}
            lg={5}
            md={6}
            sm={8}
            className="offset-lg-1 d-flex rellax"
            data-rellax-percentage="0.5"
            data-rellax-speed="-0.5"
            data-disable-parallax-down="md"
          >
            <div className="align-self-center ps-lg-0 ps-md-4">
              <h4 className="mb-lg-4 mb-3 fs-base fw-normal text-body">{project.category}</h4>
              <h3 className="h2 mb-lg-4 mb-3">{project.title}</h3>
              <p className="mb-lg-4 mb-3">{project.description}</p>

              <ul
                className="mb-lg-4 mb-3 fs-sm text-muted list-inline"
                style={{ maxWidth: '19.125rem' }}
              >
                {project.features.map((feature, i) => (
                  <li key={i} className="list-inline-item me-1">
                    {feature}
                    {i < project.features.length - 1 && <span className="ms-1">/</span>}
                  </li>
                ))}
              </ul>

              <Link to={project.link} className="btn btn-lg btn-outline-primary">
                Read More
              </Link>
            </div>
          </Col>
        </Row>
      ))}
    </section>
  );
};

export default Projects;
