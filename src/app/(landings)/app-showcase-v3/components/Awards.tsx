import palmLeftLight from '@/assets/img/landing/app-showcase-3/palm-branch-left-light.svg';
import palmLeftDark from '@/assets/img/landing/app-showcase-3/palm-branch-left-dark.svg';
import palmRightLight from '@/assets/img/landing/app-showcase-3/palm-branch-right-light.svg';
import palmRightDark from '@/assets/img/landing/app-showcase-3/palm-branch-right-dark.svg';
import { Col, Container, Row } from 'react-bootstrap';

type CardType = {
  id: number;
  title: string;
  subtitle: string;
  year: string;
};

const awardsData: CardType[] = [
  {
    id: 1,
    title: 'Apple design',
    subtitle: 'Award winner',
    year: '2022',
  },
  {
    id: 2,
    title: 'Google Play',
    subtitle: "Editor's choice",
    year: '2023',
  },
  {
    id: 3,
    title: 'App Store',
    subtitle: 'App of the week',
    year: '2024',
  },
];

const Awards = () => {
  return (
    <Container className="position-relative zindex-2 py-5 mt-xl-3 mt-xxl-0">
      <Row className="g-4 py-2 py-sm-3 py-md-4 py-lg-5 mt-xxl-2">
        {awardsData.map(award => (
          <Col sm={6} md={4} key={award.id} className="d-flex justify-content-center">
            <div className="d-flex align-items-center">
              <img src={palmLeftLight} className="light-mode-img" alt="Palm branch" />
              <img src={palmLeftDark} className="dark-mode-img" alt="Palm branch" />

              <div className="text-center px-3">
                <div className="fs-xl opacity-80 mb-1">{award.title}</div>
                <h3 className="h4 text-body text-uppercase mb-1">{award.subtitle}</h3>
                <div className="fs-xl opacity-80">{award.year}</div>
              </div>

              <img src={palmRightLight} className="light-mode-img" alt="Palm branch" />
              <img src={palmRightDark} className="dark-mode-img" alt="Palm branch" />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Awards;
