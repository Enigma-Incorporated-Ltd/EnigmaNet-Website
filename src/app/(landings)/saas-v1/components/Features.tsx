import chatIcon from '@/assets/img/landing/saas-1/features/chat.svg';
import analyticsIcon from '@/assets/img/landing/saas-1/features/analytics.svg';
import bellIcon from '@/assets/img/landing/saas-1/features/bell.svg';
import tasksIcon from '@/assets/img/landing/saas-1/features/tasks.svg';
import calendarIcon from '@/assets/img/landing/saas-1/features/calendar.svg';
import addGroupIcon from '@/assets/img/landing/saas-1/features/add-group.svg';
import headsetIcon from '@/assets/img/landing/saas-1/features/headset.svg';
import shieldIcon from '@/assets/img/landing/saas-1/features/shield.svg';
import { Col, Container, Row } from 'react-bootstrap';

type FeaturesType = {
  icon: string;
  title: string;
  desc: string;
};
const features: FeaturesType[] = [
  {
    icon: chatIcon,
    title: 'Task Comments',
    desc: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.',
  },
  {
    icon: analyticsIcon,
    title: 'Tasks Analytics',
    desc: 'Augue pulvinar justo, fermentum fames aliquamant accumsan vestibulum.',
  },
  {
    icon: bellIcon,
    title: 'Notifications',
    desc: 'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.',
  },
  {
    icon: tasksIcon,
    title: 'Sections & Subtasks',
    desc: 'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.',
  },
  {
    icon: calendarIcon,
    title: 'Progress Tracking',
    desc: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.',
  },
  {
    icon: addGroupIcon,
    title: 'Multiple Assignees',
    desc: 'Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.',
  },
  {
    icon: headsetIcon,
    title: 'Support 24/7',
    desc: 'Sapien sed massa sit erat pellentesque pellentesque nisl, elementum.',
  },
  {
    icon: shieldIcon,
    title: 'Data Security',
    desc: 'Aliquet felis facilisi sem nunc. Sapien fermentum, fringilla molestie lorem nec.',
  },
];

const Features = () => {
  return (
    <Container>
      <h2 className="h1 text-center pb-4 pb-lg-5">Stay Organized &amp; Connected</h2>
      <Row>
        {features.map((feature, idx) => (
          <Col lg={3} md={4} sm={6} key={idx} className="text-center pb-md-2 mb-3 mb-lg-4">
            <div className="d-inline-block bg-secondary rounded-circle p-3 mb-4">
              <img src={feature.icon} width={32} height={32} alt={feature.title} />
            </div>
            <h3 className="h5 pb-1 mb-2">{feature.title}</h3>
            <p className="fs-sm">{feature.desc}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Features;
