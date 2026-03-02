import IconifyIcon from '@/components/IconifyIcon';
import avatar51 from '@/assets/img/avatar/51.jpg';
import avatar52 from '@/assets/img/avatar/52.jpg';
import avatar53 from '@/assets/img/avatar/53.jpg';
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const testimonialsData = [
  {
    id: 1,
    avatar: avatar51,
    name: 'Jenny Wilson',
    rating: 5,
    review:
      "This app has completely transformed the way I approach my finances. It's packed with useful features and it's helped me stay on top of my finances and reach my financial goals.",
    alignClass: 'ps-xl-5 ms-xxl-4',
  },
  {
    id: 2,
    avatar: avatar52,
    name: 'Wade Warren',
    rating: 4,
    review:
      "I absolutely love using this app! It's user-friendly interface makes it incredibly easy to track my spending and budget accordingly. I highly recommend it to anyone looking to improve their financial management skills.",
    alignClass: 'pe-xl-5 me-xxl-4',
  },
  {
    id: 3,
    avatar: avatar53,
    name: 'Ralph Edwards',
    rating: 5,
    review:
      "I've tried many different apps, but this one stands out as the best. Its intuitive interface, helpful tools, and insightful reports have made it an essential tool for managing my money.",
    alignClass: 'ps-xl-5 ms-xxl-4',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-dark py-5" data-bs-theme="dark">
      <Container className="pt-2 pb-3 py-sm-3 py-md-4 py-lg-5">
        <Row className="align-items-center py-xl-3 my-xxl-3">
          <Col md={4} lg={5} className="text-center text-md-start pb-3 pb-md-0 mb-4 mb-md-0">
            <h2 className="h1 mb-4 mb-md-5">
              What our clients say about <span className="text-warning">their experience</span> with
              our application
            </h2>
            <Link to="#" className="btn btn-outline-secondary">
              View all reviews
            </Link>
          </Col>

          <Col
            md={8}
            lg={7}
            xl={6}
            className="offset-xl-1 d-flex flex-column align-items-end gap-4"
          >
            {testimonialsData.map(item => (
              <div
                key={item.id}
                className={`d-flex flex-column flex-sm-row align-items-start align-items-sm-center ${item.alignClass}`}
              >
                <div className="position-relative bg-dark rounded-circle flex-shrink-0 zindex-1 p-2 ms-4 ms-sm-0 mb-n5 mb-sm-0 me-sm-n5">
                  <img src={item.avatar} className="rounded-circle" width="80" alt={item.name} />
                </div>

                <Card className="border-0 bg-secondary pt-5 pb-1 px-1 ps-sm-5 pe-sm-3 py-sm-3">
                  <CardBody>
                    <div className="fs-lg text-nowrap mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <IconifyIcon
                          key={i}
                          icon={i < item.rating ? 'bxs:star' : 'bx:star'}
                          className={i < item.rating ? 'text-warning' : 'text-muted opacity-75'}
                        />
                      ))}
                    </div>

                    <p className="text-body fs-lg mb-3">{item.review}</p>
                    <h6 className="fs-lg mb-0">{item.name}</h6>
                  </CardBody>
                </Card>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
