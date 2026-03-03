import comments from '@/assets/img/landing/saas-2/features/comments.svg';
import analytics from '@/assets/img/landing/saas-2/features/analytics.svg';
import group from '@/assets/img/landing/saas-2/features/group.svg';
import notification from '@/assets/img/landing/saas-2/features/notifications.svg';
import tasks from '@/assets/img/landing/saas-2/features/tasks.svg';
import security from '@/assets/img/landing/saas-2/features/security.svg';
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';


type Feature = {
  title: string;
  description: string;
  icon: string;
};

const featuresData: Feature[] = [
  {
    title: 'Comments on Tasks',
    description: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.',
    icon: comments,
  },
  {
    title: 'Tasks Analytics',
    description:
      'Non imperdiet facilisis nulla tellus Morbi scelerisque eget adipiscing vulputate.',
    icon: analytics,
  },
  {
    title: 'Multiple Assignees',
    description: 'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.',
    icon: group,
  },
  {
    title: 'Notifications',
    description:
      'Diam, suspendisse velit cras ac. Lobortis diam volutpat, eget pellentesque viverra.',
    icon: notification,
  },
  {
    title: 'Sections & Subtasks',
    description: 'Mi feugiat hac id in. Sit elit placerat lacus nibh lorem ridiculus lectus.',
    icon: tasks,
  },
  {
    title: 'Data Security',
    description: 'Aliquam malesuada neque eget elit nulla vestibulum nunc cras.',
    icon: security,
  },
];

const Features = () => {
  return (
    <section className="position-relative py-5">
      <Container className="position-relative zindex-5 pb-md-4 pt-md-2 pt-lg-3 pb-lg-5">
        <Row className="justify-content-center text-center pb-3 mb-sm-2 mb-lg-3">
          <Col xl={6} lg={7} md={9}>
            <h2 className="h1 mb-lg-4">What Do You Get with Our Tool?</h2>
            <p className="fs-lg text-muted mb-0">
              Make sure all your tasks are organized so you can set the priorities and focus on
              important.
            </p>
          </Col>
        </Row>

        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-0 pb-xl-3">
          {featuresData.map((feature, index) => (
            <Col key={index} className="position-relative">
              <Card className="border-0 bg-transparent rounded-0 p-md-1 p-xl-3">
                <div className="d-table bg-secondary rounded-3 p-3 mx-auto mt-3 mt-md-4">
                  <img src={feature.icon} width="40" alt="image" />
                </div>
                <CardBody className="text-center">
                  <h3 className="h5 pb-1 mb-2">{feature.title}</h3>
                  <p className="mb-0">{feature.description}</p>
                </CardBody>
              </Card>

              {index < featuresData.length - 1 && (
                <>
                  <hr className="position-absolute top-0 end-0 w-1 h-100 d-none d-sm-block" />
                  <hr className="position-absolute top-100 start-0 w-100 d-none d-sm-block" />
                </>
              )}
            </Col>
          ))}
        </Row>
      </Container>

      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: 'rgba(255,255,255,.05)' }}
      ></div>
    </section>
  );
};

export default Features;
