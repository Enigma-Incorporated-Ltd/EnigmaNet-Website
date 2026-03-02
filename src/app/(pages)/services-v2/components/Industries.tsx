import educationImg from '@/assets/img/services/industries/education.jpg';
import ecommerceImg from '@/assets/img/services/industries/ecommerce.jpg';
import sportsImg from '@/assets/img/services/industries/sports.jpg';
import constructionImg from '@/assets/img/services/industries/construction.jpg';
import medicineImg from '@/assets/img/services/industries/medicine.jpg';
import realEstateImg from '@/assets/img/services/industries/real-estate.jpg';
import wellnessImg from '@/assets/img/services/industries/wellness.jpg';

import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';

const Industries = () => {
  return (
    <section className="container pt-2 pt-lg-0 pb-5 mb-md-4 mb-lg-5">
      <h2 className="h1 text-center pb-3 pb-lg-4">Industries We Serve</h2>

      <TabContainer defaultActiveKey="education">
        <Nav
          className="nav nav-tabs flex-nowrap justify-content-lg-center overflow-auto pb-2 mb-3 mb-lg-4"
          role="tablist"
        >
          <NavItem role="presentation">
            <NavLink
              className="nav-link text-nowrap"
              eventKey="education"
              data-bs-toggle="tab"
              data-bs-target="#education"
              type="button"
              role="tab"
              aria-controls="education"
              aria-selected="true"
            >
              <IconifyIcon icon="bxs:graduation" className="fs-xl opacity-60 me-2" />
              Education
            </NavLink>
          </NavItem>
          <NavItem role="presentation">
            <NavLink
              className="text-nowrap"
              eventKey="ecommerce"
              data-bs-toggle="tab"
              data-bs-target="#ecommerce"
              type="button"
              role="tab"
              aria-controls="ecommerce"
              aria-selected="false"
            >
              <IconifyIcon icon="bx:cart-alt" className="fs-lg opacity-60 me-2" />
              E-Commerce
            </NavLink>
          </NavItem>
          <NavItem role="presentation">
            <NavLink
              className="text-nowrap"
              eventKey="sports"
              data-bs-toggle="tab"
              data-bs-target="#sports"
              type="button"
              role="tab"
              aria-controls="sports"
              aria-selected="false"
            >
              <IconifyIcon icon="bx:run" className="fs-xl opacity-60 me-2" />
              Sports
            </NavLink>
          </NavItem>
          <NavItem role="presentation">
            <NavLink
              className="text-nowrap"
              eventKey="construction"
              data-bs-toggle="tab"
              data-bs-target="#construction"
              type="button"
              role="tab"
              aria-controls="construction"
              aria-selected="false"
            >
              <IconifyIcon icon="bx:paint-roll" className="fs-lg opacity-60 me-2" />
              Construstion
            </NavLink>
          </NavItem>
          <NavItem role="presentation">
            <NavLink
              className="text-nowrap"
              eventKey="medicine"
              data-bs-toggle="tab"
              data-bs-target="#medicine"
              type="button"
              role="tab"
              aria-controls="medicine"
              aria-selected="false"
            >
              <IconifyIcon icon="bx:plus-medical" className="fs-bse opacity-60 me-2" />
              Medicine
            </NavLink>
          </NavItem>
          <NavItem role="presentation">
            <NavLink
              className="text-nowrap"
              eventKey="real-estate"
              data-bs-toggle="tab"
              data-bs-target="#real-estate"
              type="button"
              role="tab"
              aria-controls="real-estate"
              aria-selected="false"
            >
              <IconifyIcon icon="bx:buildings" className="fs-lg opacity-60 me-2" />
              Real Estate
            </NavLink>
          </NavItem>
          <NavItem role="presentation">
            <NavLink
              className="text-nowrap"
              eventKey="wellness"
              data-bs-toggle="tab"
              data-bs-target="#wellness"
              type="button"
              role="tab"
              aria-controls="wellness"
              aria-selected="false"
            >
              <IconifyIcon icon="bx:spa" className="fs-lg opacity-60 me-2" />
              Wellness
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent className="bg-secondary rounded-3 py-4">
          <TabPane
            className="fade show"
            eventKey="education"
            role="tabpanel"
            aria-labelledby="education-tab"
          >
            <Row className="align-items-center pt-3 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0">
              <Col lg={4} md={5} className="offset-lg-1 text-center text-md-start">
                <h3 className="mb-lg-4">Education</h3>
                <p>
                  Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat
                  nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis
                  posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu
                  ullamcorper quis enim.
                </p>
              </Col>
              <Col lg={6} md={7} className="mt-2 mb-3 mt-md-3">
                <img
                  src={educationImg}
                  className="d-block rounded-3 my-lg-2 mx-auto me-md-0"
                  width="564"
                  alt="Image"
                />
              </Col>
            </Row>
          </TabPane>

          <TabPane
            className="fade"
            eventKey="ecommerce"
            role="tabpanel"
            aria-labelledby="ecommerce-tab"
          >
            <Row className="align-items-center pt-3 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0">
              <Col lg={4} md={5} className="offset-lg-1 text-center text-md-start">
                <h3 className="mb-lg-4">E-Commerce</h3>
                <p>
                  Curabitur auctor quam ut iaculis suscipit. Morbi ullamcorper tellus eu purus
                  dictum convallis. Duis posuere dui sit amet pellentesque malesuada. Morbi ultrices
                  tortor ut diam molestie, vel pharetra lectus lacinia. Lorem ipsum dolor sit amet.
                </p>
              </Col>
              <Col lg={6} md={7} className="mt-2 mb-3 mt-md-3">
                <img
                  src={ecommerceImg}
                  className="d-block rounded-3 my-lg-2 mx-auto me-md-0"
                  width="564"
                  alt="Image"
                />
              </Col>
            </Row>
          </TabPane>

          <TabPane className="fade" eventKey="sports" role="tabpanel" aria-labelledby="sports-tab">
            <Row className="align-items-center pt-3 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0">
              <Col lg={4} md={5} className="offset-lg-1 text-center text-md-start">
                <h3 className="mb-lg-4">Sports</h3>
                <p>
                  Etiam vehicula commodo nunc, ut tincidunt risus aliquam sit amet. Vivamus ut velit
                  ut odio malesuada tincidunt ut non eros. Curabitur vel quam varius, ullamcorper mi
                  quis, ultrices eros. Nam eget mi ut diam elementum facilisis vehicula eget augue.
                </p>
              </Col>
              <Col lg={6} md={7} className="mt-2 mb-3 mt-md-3">
                <img
                  src={sportsImg}
                  className="d-block rounded-3 my-lg-2 mx-auto me-md-0"
                  width="564"
                  alt="Image"
                />
              </Col>
            </Row>
          </TabPane>

          <TabPane
            className="tab-pane fade"
            eventKey="construction"
            role="tabpanel"
            aria-labelledby="construction-tab"
          >
            <Row className="align-items-center pt-3 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0">
              <Col lg={4} md={5} className="offset-lg-1 text-center text-md-start">
                <h3 className="mb-lg-4">Construction</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, nunc in
                  iaculis vestibulum, nunc ex convallis est, ut viverra velit sapien ac erat.
                  Vivamus aliquet mi tellus, vel viverra ex blandit sed. Sed blandit lobortis risus.
                  Aliquam blandit cursus ex sed iaculis.
                </p>
              </Col>
              <Col lg={6} md={7} className="mt-2 mb-3 mt-md-3">
                <img
                  src={constructionImg}
                  className="d-block rounded-3 my-lg-2 mx-auto me-md-0"
                  width="564"
                  alt="Image"
                />
              </Col>
            </Row>
          </TabPane>

          <TabPane
            className="tab-pane fade"
            eventKey="medicine"
            role="tabpanel"
            aria-labelledby="medicine-tab"
          >
            <Row className="align-items-center pt-3 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0">
              <Col lg={4} md={5} className="offset-lg-1 text-center text-md-start">
                <h3 className="mb-lg-4">Medicine</h3>
                <p>
                  In vel nulla ac enim pellentesque tristique vel non dui. Integer vulputate ex leo,
                  in accumsan purus consectetur quis. Cras scelerisque orci vel dapibus volutpat. In
                  et consectetur enim. Maecenas lobortis viverra tortor, quis fermentum sem volutpat
                  sit amet.
                </p>
              </Col>
              <Col lg={6} md={7} className="mt-2 mb-3 mt-md-3">
                <img
                  src={medicineImg}
                  className="d-block rounded-3 my-lg-2 mx-auto me-md-0"
                  width="564"
                  alt="Image"
                />
              </Col>
            </Row>
          </TabPane>

          <TabPane
            className="tab-pane fade"
            eventKey="real-estate"
            role="tabpanel"
            aria-labelledby="real-estate-tab"
          >
            <Row className="align-items-center pt-3 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0">
              <Col lg={4} md={5} className="offset-lg-1 text-center text-md-start">
                <h3 className="mb-lg-4">Real Estate</h3>
                <p>
                  Donec consequat nibh at urna tincidunt tempor. Integer quis lobortis felis. Nulla
                  id quam vestibulum, aliquam mauris vitae, auctor ex. Aliquam augue nulla, faucibus
                  sed lacus ac, placerat elementum nisi. Curabitur enim nunc, dictum et accumsan.
                </p>
              </Col>
              <Col lg={6} md={7} className="mt-2 mb-3 mt-md-3">
                <img
                  src={realEstateImg}
                  className="d-block rounded-3 my-lg-2 mx-auto me-md-0"
                  width="564"
                  alt="Image"
                />
              </Col>
            </Row>
          </TabPane>

          <TabPane
            className="fade"
            eventKey="wellness"
            role="tabpanel"
            aria-labelledby="wellness-tab"
          >
            <Row className="align-items-center pt-3 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0">
              <Col lg={4} md={5} className="offset-lg-1 text-center text-md-start">
                <h3 className="mb-lg-4">Wellness</h3>
                <p>
                  Morbi ullamcorper tellus eu purus dictum convallis. Duis posuere dui sit amet
                  pellentesque malesuada. Morbi ultrices tortor ut diam molestie, vel pharetra
                  lectus lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                  varius lectus lectus.
                </p>
              </Col>
              <Col lg={6} md={7} className="mt-2 mb-3 mt-md-3">
                <img
                  src={wellnessImg}
                  className="d-block rounded-3 my-lg-2 mx-auto me-md-0"
                  width="564"
                  alt="Image"
                />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </TabContainer>
    </section>
  );
};

export default Industries;
