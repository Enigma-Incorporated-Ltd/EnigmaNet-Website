import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';
import { Container, Row } from 'react-bootstrap';
import dashboardImg from '@/assets/img/landing/saas-1/dashboard.png';

const features = [
  'Powerful project management',
  'Transparent work management',
  'Manage work & focus on the most important tasks',
  'Track your progress with interactive charts',
  'Easiest way to track time spent on tasks',
];

const Dashboard = () => {
  return (
    <Container className="pt-3 pt-md-4 pt-lg-5 pb-2 mt-lg-2 mt-xl-4">
      <Row className="align-items-center">
        <div
          className="rellax col-md-7"
          data-rellax-percentage="0.5"
          data-rellax-speed="-0.6"
          data-disable-parallax-down="lg"
        >
          <img
            src={dashboardImg}
            className="d-block mx-auto"
            width={746}
            alt="Dashboard preview"
          />
        </div>

        <div
          className="rellax col-md-5 col-xl-4 offset-xl-1 d-flex d-sm-block flex-column"
          data-rellax-percentage="0.5"
          data-rellax-speed="0.8"
          data-disable-parallax-down="lg"
        >
          <h2 className="pb-3 pt-2 pt-md-0">Manage Your Work</h2>

          <ul className="list-unstyled pb-2">
            {features.map((item, idx) => (
              <li key={idx} className="d-flex align-items-center pb-1 mb-2">
                <IconifyIcon icon="bx:check-circle" className="text-primary fs-xl me-2" />
                {item}
              </li>
            ))}
          </ul>

          <Link to="#" className="btn btn-primary">
            Learn more
            <IconifyIcon icon="bx:right-arrow-alt" className="fs-xl ms-2" />
          </Link>
        </div>
      </Row>
    </Container>
  );
};

export default Dashboard;
