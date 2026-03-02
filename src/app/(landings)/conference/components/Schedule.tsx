import { Col, Nav, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import avatar41 from '@/assets/img/avatar/41.jpg';
import avatar1 from '@/assets/img/avatar/01.jpg';
import avatar2 from '@/assets/img/avatar/02.jpg';
import avatar3 from '@/assets/img/avatar/03.jpg';
import avatar5 from '@/assets/img/avatar/05.jpg';
import avatar6 from '@/assets/img/avatar/06.jpg';
import avatar7 from '@/assets/img/avatar/07.jpg';


const Schedule = () => {
  return (
    <section className="container py-5">
      <Row className="mt-xl-2 mb-xl-3 pb-3 py-md-4 py-lg-5">
        <Col xs={12}>
          <h2 className="h1 text-center text-sm-start pb-2 pb-lg-0 mb-4 mb-lg-5">Schedule</h2>
        </Col>
        <TabContainer defaultActiveKey="#day-1">
          <Col lg={3} className="mb-4">
            <Nav
              className="flex-nowrap flex-lg-column nav-tabs"
              role="tablist"
              aria-orientation="vertical"
            >
              <NavLink
                eventKey="#day-1"
                className="d-block w-100 rounded-3 p-4 p-xl-5 me-2 me-sm-3 me-lg-0 mb-lg-3   "
              >
                <div className="fs-xl">Day One</div>
                <div className="fs-3 fw-bold">Oct 14, 2023</div>
              </NavLink>
              <NavLink eventKey="#day-2" className="d-block w-100 rounded-3 p-4 p-xl-5">
                <div className="fs-xl">Day Two</div>
                <div className="fs-3 fw-bold">Oct 15, 2023</div>
              </NavLink>
            </Nav>
          </Col>

          <Col lg={8} className="offset-lg-1">
            <TabContent>
              <TabPane className="fade show" eventKey="#day-1">
                <div className="border-bottom pb-4">
                  <Row className="pb-1 pb-xl-3">
                    <Col sm={4} className="mb-3 mb-sm-0">
                      <div className="h5 mb-1">9:30 – 10:30 am</div>
                      <p className="text-muted mb-0">October 14th</p>
                    </Col>
                    <Col sm={8}>
                      <h5 className="mb-0">Opening party &amp; early registration</h5>
                    </Col>
                  </Row>
                </div>
                <div className="border-bottom py-4">
                  <Row className="py-1 py-xl-3">
                    <Col sm={4} className="mb-3 mb-sm-0">
                      <div className="h5 mb-1">10:30 – 11:30 am</div>
                      <p className="text-muted mb-2 mb-sm-4">October 14th</p>
                      <span className="badge bg-warning shadow-warning fs-sm">Lecture</span>
                    </Col>
                    <Col sm={8}>
                      <h5>
                        Product strategy: Defining your strategy, tactics, metrics &amp; roadmap
                      </h5>
                      <p className="mb-4">
                        Pellentesque rhoncus viverra vestibulum, purus purus quisque quisque sed.
                        Cras vestibulum facilisis dictumst consequat. In bibendum diam nunc
                        dignissim magna morbi mattis.
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          src={avatar41}
                          className="rounded-circle"
                          width="48"
                          alt="Marvin McKinney"
                        />
                        <div className="ps-3">
                          <h6 className="fw-semibold mb-1">Marvin McKinney</h6>
                          <p className="fs-sm text-muted mb-0">Product Manager, Google</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="border-bottom py-4">
                  <Row className="py-1 py-xl-3">
                    <Col sm={4} className="mb-3 mb-sm-0">
                      <div className="h5 mb-1">11:30 am – 13:00 pm</div>
                      <p className="text-muted mb-2 mb-sm-4">October 14th</p>
                      <span className="badge bg-success shadow-success fs-sm">Workshop</span>
                    </Col>
                    <Col sm={8}>
                      <h5>
                        Workshop: Top trends and predictions for content that will dominate next
                        year
                      </h5>
                      <p className="mb-4">
                        Nec, malesuada quisque lorem id amet posuere. Risus, elit, vel pharetra ac,
                        dictum lorem nisl morbi. Lorem dui id aliquam eu feugiat arcu diam.
                      </p>
                      <Row className="row-cols-1 row-cols-md-2 g-3">
                        <Col>
                          <div className="d-flex align-items-center">
                            <img
                              src={avatar1}
                              className="rounded-circle"
                              width="48"
                              alt="Jerome Bell"
                            />
                            <div className="ps-3">
                              <h6 className="fw-semibold mb-1">Jerome Bell</h6>
                              <p className="fs-sm text-muted mb-0">Strategic Advisor, Shopify</p>
                            </div>
                          </div>
                        </Col>
                        <Col>
                          <div className="d-flex align-items-center">
                            <img
                              src={avatar6}
                              className="rounded-circle"
                              width="48"
                              alt="Jenny Wilson"
                            />
                            <div className="ps-3">
                              <h6 className="fw-semibold mb-1">Jenny Wilson</h6>
                              <p className="fs-sm text-muted mb-0">UX Designer, Glassdoor</p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
                <div className="border-bottom py-4">
                  <Row className="py-1 py-xl-3">
                    <Col sm={4} className="mb-3 mb-sm-0">
                      <div className="h5 mb-1">13:00 – 14:00 pm</div>
                      <p className="text-muted mb-0">October 14th</p>
                    </Col>
                    <Col sm={8}>
                      <h5 className="mb-0">Interlude: attendee dinner</h5>
                    </Col>
                  </Row>
                </div>
                <div className="border-bottom py-4">
                  <Row className="py-1 py-xl-3">
                    <Col sm={4} className="mb-3 mb-sm-0">
                      <div className="h5 mb-1">14:00 – 16:00 pm</div>
                      <p className="text-muted mb-2 mb-sm-4">October 14th</p>
                      <span className="badge bg-warning shadow-warning fs-sm">Lecture</span>
                    </Col>
                    <Col sm={8}>
                      <h5>Group discussion: How to align and empower cross-team success</h5>
                      <p className="mb-4">
                        Pellentesque rhoncus viverra vestibulum, purus purus quisque quisque sed.
                        Cras vestibulum facilisis.
                      </p>
                      <Row className="row-cols-1 row-cols-md-2 g-3">
                        <Col>
                          <div className="d-flex align-items-center">
                            <img
                              src={avatar2}
                              className="rounded-circle"
                              width="48"
                              alt="Ralph Edwards"
                            />
                            <div className="ps-3">
                              <h6 className="fw-semibold mb-1">Ralph Edwards</h6>
                              <p className="fs-sm text-muted mb-0">Founder &amp; CEO, Uber</p>
                            </div>
                          </div>
                        </Col>
                        <Col>
                          <div className="d-flex align-items-center">
                            <img
                              src={avatar5}
                              className="rounded-circle"
                              width="48"
                              alt="Albert Flores"
                            />
                            <div className="ps-3">
                              <h6 className="fw-semibold mb-1">Albert Flores</h6>
                              <p className="fs-sm text-muted mb-0">Principal Consultant, Twitch</p>
                            </div>
                          </div>
                        </Col>
                        <Col>
                          <div className="d-flex align-items-center">
                            <img
                              src={avatar3}
                              className="rounded-circle"
                              width="48"
                              alt="Esther Howard"
                            />
                            <div className="ps-3">
                              <h6 className="fw-semibold mb-1">Esther Howard</h6>
                              <p className="fs-sm text-muted mb-0">VP of Strategy, Stretto Inc.</p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
                <div className="border-bottom py-4">
                  <Row className="py-1 py-xl-3">
                    <Col sm={4} className="mb-3 mb-sm-0">
                      <div className="h5 mb-1">16:00 – 17:00 pm</div>
                      <p className="text-muted mb-2 mb-sm-4">October 14th</p>
                      <span className="badge bg-info shadow-info fs-sm">Panel</span>
                    </Col>
                    <Col sm={8}>
                      <h5>Panel: State of speed tooling</h5>
                      <p className="mb-4">
                        Volutpat aliquam quam eget sit. Aliquam dui pellentesque egestas duis amet
                        malesuada eget. Ut faucibus dignissim maecenas dui tristique vestibulum
                        facilisis dictumst consequat.
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          src={avatar7}
                          className="rounded-circle"
                          width="48"
                          alt="Cameron Williamson"
                        />
                        <div className="ps-3">
                          <h6 className="fw-semibold mb-1">Cameron Williamson</h6>
                          <p className="fs-sm text-muted mb-0">Co-Founder, Invision LTD</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="pt-4">
                  <Row className="pt-1 pt-xl-3">
                    <Col sm={4} className="mb-3 mb-sm-0">
                      <div className="h5 mb-1">17:00 – 19:00 pm</div>
                      <p className="text-muted mb-0">October 14th</p>
                    </Col>
                    <Col sm={8}>
                      <h5 className="mb-0">Official mid-conference party after Day One</h5>
                    </Col>
                  </Row>
                </div>
              </TabPane>

              <TabPane
                className="fade"
                eventKey="#day-2"
                role="tabpanel"
                aria-labelledby="day-2-tab"
              >
                <div className="border-bottom pb-4">
                  <Row className="pb-1 pb-xl-3">
                    <div className="col-sm-4 mb-3 mb-sm-0">
                      <div className="h5 mb-1">9:30 – 10:30 am</div>
                      <p className="text-muted mb-0">October 15th</p>
                    </div>
                    <div className="col-sm-8">
                      <h5 className="mb-0">Day 2 registration</h5>
                    </div>
                  </Row>
                </div>
                <div className="border-bottom py-4">
                  <Row className="py-1 py-xl-3">
                    <div className="col-sm-4 mb-3 mb-sm-0">
                      <div className="h5 mb-1">10:30 – 11:30 am</div>
                      <p className="text-muted mb-2 mb-sm-4">October 15th</p>
                      <span className="badge bg-success shadow-success fs-sm">Workshop</span>
                    </div>
                    <div className="col-sm-8">
                      <h5>
                        Workshop: Top trends and predictions for content that will dominate next
                        year
                      </h5>
                      <p className="mb-4">
                        Nec, malesuada quisque lorem id amet posuere. Risus, elit, vel pharetra ac,
                        dictum lorem nisl morbi. Lorem dui id aliquam eu feugiat arcu diam.
                      </p>
                      <Row className="row-cols-1 row-cols-md-2 g-3">
                        <div className="col">
                          <div className="d-flex align-items-center">
                            <img
                              src={avatar1}
                              className="rounded-circle"
                              width="48"
                              alt="Jerome Bell"
                            />
                            <div className="ps-3">
                              <h6 className="fw-semibold mb-1">Jerome Bell</h6>
                              <p className="fs-sm text-muted mb-0">Strategic Advisor, Shopify</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center">
                            <img
                              src={avatar6}
                              className="rounded-circle"
                              width="48"
                              alt="Jenny Wilson"
                            />
                            <div className="ps-3">
                              <h6 className="fw-semibold mb-1">Jenny Wilson</h6>
                              <p className="fs-sm text-muted mb-0">UX Designer, Glassdoor</p>
                            </div>
                          </div>
                        </div>
                      </Row>
                    </div>
                  </Row>
                </div>
                <div className="border-bottom py-4">
                  <Row className="py-1 py-xl-3">
                    <div className="col-sm-4 mb-3 mb-sm-0">
                      <div className="h5 mb-1">11:30 am – 13:00 pm</div>
                      <p className="text-muted mb-2 mb-sm-4">October 15th</p>
                      <span className="badge bg-warning shadow-warning fs-sm">Lecture</span>
                    </div>
                    <div className="col-sm-8">
                      <h5>
                        Product strategy: Defining your strategy, tactics, metrics &amp; roadmap
                      </h5>
                      <p className="mb-4">
                        Pellentesque rhoncus viverra vestibulum, purus purus quisque quisque sed.
                        Cras vestibulum facilisis dictumst consequat. In bibendum diam nunc
                        dignissim magna morbi mattis.
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          src={avatar41}
                          className="rounded-circle"
                          width="48"
                          alt="Marvin McKinney"
                        />
                        <div className="ps-3">
                          <h6 className="fw-semibold mb-1">Marvin McKinney</h6>
                          <p className="fs-sm text-muted mb-0">Product Manager, Google</p>
                        </div>
                      </div>
                    </div>
                  </Row>
                </div>
                <div className="border-bottom py-4">
                  <Row className="py-1 py-xl-3">
                    <div className="col-sm-4 mb-3 mb-sm-0">
                      <div className="h5 mb-1">13:00 – 14:00 pm</div>
                      <p className="text-muted mb-0">October 15th</p>
                    </div>
                    <div className="col-sm-8">
                      <h5 className="mb-0">Interlude: attendee dinner</h5>
                    </div>
                  </Row>
                </div>
                <div className="border-bottom py-4">
                  <Row className="py-1 py-xl-3">
                    <div className="col-sm-4 mb-3 mb-sm-0">
                      <div className="h5 mb-1">14:00 – 16:00 pm</div>
                      <p className="text-muted mb-2 mb-sm-4">October 15th</p>
                      <span className="badge bg-info shadow-info fs-sm">Panel</span>
                    </div>
                    <div className="col-sm-8">
                      <h5>Panel: State of speed tooling</h5>
                      <p className="mb-4">
                        Volutpat aliquam quam eget sit. Aliquam dui pellentesque egestas duis amet
                        malesuada eget. Ut faucibus dignissim maecenas dui tristique vestibulum
                        facilisis dictumst consequat.
                      </p>
                      <div className="d-flex align-items-center">
                        <img
                          src={avatar7}
                          className="rounded-circle"
                          width="48"
                          alt="Cameron Williamson"
                        />
                        <div className="ps-3">
                          <h6 className="fw-semibold mb-1">Cameron Williamson</h6>
                          <p className="fs-sm text-muted mb-0">Co-Founder, Invision LTD</p>
                        </div>
                      </div>
                    </div>
                  </Row>
                </div>
                <div className="border-bottom py-4">
                  <Row className="py-1 py-xl-3">
                    <div className="col-sm-4 mb-3 mb-sm-0">
                      <div className="h5 mb-1">16:00 – 17:00 pm</div>
                      <p className="text-muted mb-2 mb-sm-4">October 15th</p>
                      <span className="badge bg-warning shadow-warning fs-sm">Lecture</span>
                    </div>
                    <div className="col-sm-8">
                      <h5>Group discussion: How to align and empower cross-team success</h5>
                      <p className="mb-4">
                        Pellentesque rhoncus viverra vestibulum, purus purus quisque quisque sed.
                        Cras vestibulum facilisis.
                      </p>
                      <Row className="row-cols-1 row-cols-md-2 g-3">
                        <div className="col">
                          <div className="d-flex align-items-center">
                            <img
                              src={avatar5}
                              className="rounded-circle"
                              width="48"
                              alt="Albert Flores"
                            />
                            <div className="ps-3">
                              <h6 className="fw-semibold mb-1">Albert Flores</h6>
                              <p className="fs-sm text-muted mb-0">Principal Consultant, Twitch</p>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center">
                            <img
                              src={avatar3}
                              className="rounded-circle"
                              width="48"
                              alt="Esther Howard"
                            />
                            <div className="ps-3">
                              <h6 className="fw-semibold mb-1">Esther Howard</h6>
                              <p className="fs-sm text-muted mb-0">VP of Strategy, Stretto Inc.</p>
                            </div>
                          </div>
                        </div>
                      </Row>
                    </div>
                  </Row>
                </div>
                <div className="pt-4">
                  <Row className="pt-1 pt-xl-3">
                    <div className="col-sm-4 mb-3 mb-sm-0">
                      <div className="h5 mb-1">17:00 – 19:00 pm</div>
                      <p className="text-muted mb-0">October 15th</p>
                    </div>
                    <div className="col-sm-8">
                      <h5 className="mb-0">Closing farewell party</h5>
                    </div>
                  </Row>
                </div>
              </TabPane>
            </TabContent>
          </Col>
        </TabContainer>
      </Row>
    </section>
  );
};

export default Schedule;
