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
import avatar48 from '@/assets/img/avatar/48.jpg';
import avatar49 from '@/assets/img/avatar/49.jpg';
import avatar50 from '@/assets/img/avatar/50.jpg';

import IconifyIcon from '@/components/IconifyIcon';

const Clients = () => {
  return (
    <section className="container mb-5 pb-lg-5 pb-md-4 pb-3">
      <div className="mb-xl-3">
        <h2 className="h1 mb-md-5 mb-4 pb-xl-3 pb-lg-2 pb-md-0 pb-sm-2">
          What Our Clients Say About Us
        </h2>

        <Row className="gy-4 gx-md-4 gx-3">
          <TabContainer defaultActiveKey="#testimonial-1">
            <div className="col-lg-4 col-sm-5 order-sm-1 order-2">
              <Nav className="nav nav-tabs flex-column" role="tablist">
                <NavItem className="mb-3">
                  <NavLink
                    eventKey="#testimonial-1"
                    className="flex-md-row flex-sm-column align-items-md-center align-items-sm-start align-items-center p-md-4 p-3 rounded-3 fw-normal"
                    data-bs-toggle="tab"
                    role="tab"
                  >
                    <img
                      src={avatar48}
                      width="56"
                      alt="Avatar"
                      className="rounded-circle me-md-3 me-sm-0 me-3 mb-md-0 mb-sm-2"
                    />
                    <div>
                      <span className="d-block mb-0 fs-lg fw-semibold">Jack Taylor</span>
                      Co-founder of Lorem Company
                    </div>
                  </NavLink>
                </NavItem>
                <NavItem className="mb-3">
                  <NavLink
                    eventKey="#testimonial-2"
                    className="flex-md-row flex-sm-column align-items-md-center align-items-sm-start align-items-center p-md-4 p-3 rounded-3 fw-normal"
                    data-bs-toggle="tab"
                    role="tab"
                  >
                    <img
                      src={avatar49}
                      width="56"
                      alt="Avatar"
                      className="rounded-circle me-md-3 me-sm-0 me-3 mb-md-0 mb-sm-2"
                    />
                    <div>
                      <span className="d-block mb-0 fs-lg fw-semibold">Annette Black</span>
                      VP of Strategy, Stretto Inc.
                    </div>
                  </NavLink>
                </NavItem>
                <NavItem className="mb-0">
                  <NavLink
                    eventKey="#testimonial-3"
                    className="flex-md-row flex-sm-column align-items-md-center align-items-sm-start align-items-center p-md-4 p-3 rounded-3 fw-normal"
                    data-bs-toggle="tab"
                    role="tab"
                  >
                    <img
                      src={avatar50}
                      width="56"
                      alt="Avatar"
                      className="rounded-circle me-md-3 me-sm-0 me-3 mb-md-0 mb-sm-2"
                    />
                    <div>
                      <span className="d-block mb-0 fs-lg fw-semibold">Mel Gibson</span>
                      Founder &amp; CEO, Uber
                    </div>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>

            <Col sm={7} className="offset-lg-1 order-sm-2 order-1">
              <TabContent className="ps-lg-0 ps-md-4">
                <TabPane className="fade show" eventKey="#testimonial-1" role="tabpanel">
                  <h4 className="mb-3" style={{ maxWidth: '22.875rem' }}>
                    “Cool and experienced team to develop your web application.”
                  </h4>
                  <div className="fs-sm text-nowrap">
                    <IconifyIcon icon="bxs:star" className="text-warning" />
                    <IconifyIcon icon="bxs:star" className="text-warning" />
                    <IconifyIcon icon="bxs:star" className="text-warning" />
                    <IconifyIcon icon="bxs:star" className="text-warning" />
                    <IconifyIcon icon="bxs:star" className="text-warning" />
                  </div>
                  <p className="mt-md-4 mt-3 pt-lg-3 pt-md-2 mb-0 fs-lg">
                    Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius
                    mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget.
                    Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam
                    integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at
                    mauris. Sagittis gravida vitae porta enim, nulla arcu fermentum massa volutpat
                    pretium.
                  </p>
                </TabPane>
                <TabPane className="fade" eventKey="#testimonial-2" role="tabpanel">
                  <h4 className="mb-3" style={{ maxWidth: '22.875rem' }}>
                    “Efficient and Innovative: Our Experience with Silicon.”
                  </h4>
                  <div className="fs-sm text-nowrap">
                    <IconifyIcon icon="bxs:star" className="text-warning" />
                    <IconifyIcon icon="bxs:star" className="text-warning" />
                    <IconifyIcon icon="bxs:star" className="text-warning" />
                    <IconifyIcon icon="bxs:star" className="text-warning" />
                    <IconifyIcon icon="bxs:star" className="text-warning" />
                  </div>
                  <p className="mt-md-4 mt-3 pt-lg-3 pt-md-2 mb-0 fs-lg">
                    Vero minima sequi adipisci architecto dolorum, error animi delectus dicta
                    perferendis! A, exercitationem soluta quam reprehenderit rem animi amet eligendi
                    voluptates consequatur ipsam pariatur necessitatibus laboriosam in illo eos
                    molestias ex explicabo eaque assumenda voluptatibus ducimus consectetur
                    perferendis! Architecto molestias, rerum reprehenderit amet sunt natus fuga
                    blanditiis suscipit.
                  </p>
                </TabPane>
                <TabPane className="fade" eventKey="#testimonial-3" role="tabpanel">
                  <h4 className="mb-3" style={{ maxWidth: '22.875rem' }}>
                    “Exceptional Service and Quality Results.”
                  </h4>
                  <div className="fs-sm text-nowrap">
                    <IconifyIcon icon="bxs:star" className="text-warning" />
                    <IconifyIcon icon="bxs:star" className="text-warning" />
                    <IconifyIcon icon="bxs:star" className="text-warning" />
                    <IconifyIcon icon="bxs:star" className="text-warning" />
                    <IconifyIcon icon="bxs:star" className="text-warning" />
                  </div>
                  <p className="mt-md-4 mt-3 pt-lg-3 pt-md-2 mb-0 fs-lg">
                    In quas adipisci assumenda voluptas eveniet obcaecati est quis sapiente
                    voluptatum iste porro blanditiis debitis ut beatae, fugit quidem fugiat eum
                    molestias? Dolore magni harum officia tempore eos sapiente. Voluptatibus
                    pariatur omnis libero unde quasi optio, tenetur reprehenderit tempore
                    necessitatibus harum mollitia qui. Maxime, quas tempore. Sunt quaerat porro
                    facere blanditiis voluptatibus.
                  </p>
                </TabPane>
              </TabContent>
            </Col>
          </TabContainer>
        </Row>
      </div>
    </section>
  );
};

export default Clients;
