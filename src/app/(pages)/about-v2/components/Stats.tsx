import headsetIcon from '@/assets/img/about/icons/headset-light.svg';
import chatIcon from '@/assets/img/about/icons/chat-light.svg';
import groupIcon from '@/assets/img/about/icons/add-group-light.svg';
import locationIcon from '@/assets/img/about/icons/location-light.svg';
import { Card, CardBody, Col, Row } from 'react-bootstrap';

type Stat = {
  id: number;
  value: string;
  title: string;
  description: string;
  icon: string;
};

const statsData: Stat[] = [
  {
    id: 1,
    value: '2,480',
    title: 'Remote',
    description: 'Professionals',
    icon: headsetIcon,
  },
  {
    id: 2,
    value: '1,200',
    title: 'Requests',
    description: 'per Week',
    icon: chatIcon,
  },
  {
    id: 3,
    value: '760',
    title: 'New Clients',
    description: 'per Month',
    icon: groupIcon,
  },
  {
    id: 4,
    value: '58',
    title: 'Countries',
    description: 'Using Our Product',
    icon: locationIcon,
  },
];

const Stats = () => {
  return (
    <section className="container pb-5 mb-2 mb-md-4 mb-lg-5">
      <div className="bg-secondary rounded-3 py-5 px-3 px-md-0">
        <Row className="justify-content-center mb-2 py-md-2 py-lg-4">
          <Col lg={10} md={11}>
            <h2 className="pb-3">Overpass by Numbers</h2>
            <Row className="row-cols-1 row-cols-md-2 g-4">
              {statsData.map(stat => (
                <Col key={stat.id}>
                  <Card className="h-100 border-0 shadow-sm p-md-2 p-lg-4">
                    <CardBody className="d-flex align-items-center">
                      <div className="bg-primary shadow-primary rounded-3 flex-shrink-0 p-3">
                        <img
                          src={stat.icon}
                          alt={stat.title}
                          width={40}
                          height={40}
                          className="d-block m-1"
                        />
                      </div>
                      <div className="ps-4 ms-lg-3">
                        <h3 className="display-5 mb-1">{stat.value}</h3>
                        <p className="mb-0">
                          <span className="fw-semibold">{stat.title}</span>
                          {stat.description}
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Stats;
