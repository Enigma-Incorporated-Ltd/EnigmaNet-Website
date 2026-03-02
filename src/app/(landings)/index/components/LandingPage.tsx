import mobileAppV1 from '@/assets/img/landing/intro/landings/mobile-app-showcase-v1.jpg';
import mobileAppV2 from '@/assets/img/landing/intro/landings/mobile-app-showcase-v2.jpg';
import mobileAppV3 from '@/assets/img/landing/intro/landings/mobile-app-showcase-v3.jpg';
import productLanding from '@/assets/img/landing/intro/landings/product-landing.jpg';
import saasV1 from '@/assets/img/landing/intro/landings/saas-v1.jpg';
import saasV2 from '@/assets/img/landing/intro/landings/saas-v2.jpg';
import saasV3 from '@/assets/img/landing/intro/landings/saas-v3.jpg';
import saasV4 from '@/assets/img/landing/intro/landings/saas-v4.jpg';
import saasV5 from '@/assets/img/landing/intro/landings/saas-v5.jpg';
import startup from '@/assets/img/landing/intro/landings/startup.jpg';
import financial from '@/assets/img/landing/intro/landings/financial.jpg';
import courses from '@/assets/img/landing/intro/landings/online-courses.jpg';
import medical from '@/assets/img/landing/intro/landings/medical.jpg';
import digitalAgency from '@/assets/img/landing/intro/landings/digital-agency.jpg';
import softwareV1 from '@/assets/img/landing/intro/landings/software-agency-v1.jpg';
import softwareV2 from '@/assets/img/landing/intro/landings/software-agency-v2.jpg';
import softwareV3 from '@/assets/img/landing/intro/landings/software-agency-v3.jpg';
import conference from '@/assets/img/landing/intro/landings/conference.jpg';
import blog from '@/assets/img/landing/intro/landings/blog-homepage.jpg';
import placeholder from '@/assets/img/landing/intro/landings/placeholder.jpg';
import wireframe from '@/assets/img/landing/intro/landings/wireframe.svg';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';

type LandingItem = {
  title: string;
  url?: string;
  image: string;
  badge?: string;
  isComingSoon?: boolean;
};

const landingPages: LandingItem[] = [
  { title: 'Mobile App Showcase v.1', url: '/app-showcase-v1', image: mobileAppV1 },
  { title: 'Mobile App Showcase v.2', url: '/app-showcase-v2', image: mobileAppV2 },
  { title: 'Mobile App Showcase v.3', url: '/app-showcase-v3', image: mobileAppV3, badge: 'New' },
  { title: 'Product Landing', url: '/product', image: productLanding },
  { title: 'SaaS v.1', url: '/saas-v1', image: saasV1 },
  { title: 'SaaS v.2', url: '/saas-v2', image: saasV2 },
  { title: 'SaaS v.3', url: '/saas-v3', image: saasV3 },
  { title: 'SaaS v.4', url: '/saas-v4', image: saasV4 },
  { title: 'SaaS v.5', url: '/saas-v5', image: saasV5, badge: 'New' },
  { title: 'Startup', url: '/startup', image: startup },
  { title: 'Financial Consulting', url: '/financial', image: financial },
  { title: 'Online Courses', url: '/online-courses', image: courses },
  { title: 'Medical', url: '/medical', image: medical },
  { title: 'Digital Agency', url: '/digital-agency', image: digitalAgency },
  { title: 'Software Dev Agency v.1', url: '/software-dev-agency-v1', image: softwareV1 },
  { title: 'Software Dev Agency v.2', url: '/software-dev-agency-v2', image: softwareV2 },
  { title: 'Software Dev Agency v.3', url: '/software-dev-agency-v3', image: softwareV3 },
  { title: 'Conference', url: '/conference', image: conference },
  { title: 'Blog Homepage', url: '/blog', image: blog },
  { title: 'Coming Soon', image: placeholder, isComingSoon: true },
];

const LandingPage = () => {
  return (
    <Container id="landings" className="text-center pt-5 mt-2 mt-md-4 mt-lg-5">
      <h2 className="h1 pt-2 pt-lg-0">Landing Pages</h2>
      <p className="fs-lg pb-2 pb-md-3 pb-lg-0 mb-4 mb-lg-5">
        Choose from pre-built layouts of our unique landing pages
      </p>

      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3">
        {landingPages.map((page, index) => (
          <Col
            key={index}
            className="card-hover shadow-none bg-none position-relative mb-4 mb-lg-5"
          >
            <div className="position-relative">
              <img
                src={page.image}
                alt={page.title}
                className="b-block border rounded-3 shadow-sm"
              />
              {page.isComingSoon && (
                <div
                  className="position-absolute"
                  style={{ top: '38.4%', paddingLeft: '15.38%', paddingRight: '15.38%' }}
                >
                  <img
                    src={wireframe}
                    alt="Wireframe"
                    className="placeholder placeholder-wave bg-transparent opacity-80"
                  />
                </div>
              )}
            </div>
            <h3 className="h5 mt-4 mb-3 mb-lg-0">
              {page.isComingSoon || !page.url ? (
                <span className="nav-link justify-content-center fw-bold pe-none p-0">
                  Coming Soon
                </span>
              ) : (
                <Link to={page.url} className="stretched-link" target='_blank'>
                  {page.title}
                  {page.badge && <span className="badge bg-success fs-xs ms-2">{page.badge}</span>}
                </Link>
              )}
            </h3>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LandingPage;
