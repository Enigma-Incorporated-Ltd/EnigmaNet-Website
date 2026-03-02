import IconifyIcon from '@/components/IconifyIcon';
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';

const features = [
  {
    icon: 'bxl:bootstrap',
    title: 'Built with Bootstrap 5',
    desc: 'Silicon is the powerful front-end solution based on Bootstrap 5 — the world’s most popular responsive, mobile-first front-end component library.',
  },
  {
    icon: 'bx:file',
    title: 'Detailed Documentation',
    desc: 'Download package includes the documentation that covers all crucial information about how to get started, customize template and components usage.',
  },
  {
    icon: 'bx:mobile',
    title: 'Mobile Friendly Interface',
    desc: "It's not a surprise that nowadays over 80% of users surf the internet using their mobile devices. Silicon is 100% responsive and optimized for small touch screens.",
  },
  {
    icon: 'mdi:gesture-swipe-horizontal',
    title: 'Touch-Enabled Sliders',
    desc: "In the era of touch screens it's important to ensure great user experience on mobile, especially when it comes to such frequently used interface component as slider.",
  },
  {
    icon: 'bxl:html5',
    title: 'W3C Valid HTML Code',
    desc: 'All HTML files are checked via W3C validator to ensure 100% valid code. As you probably know invalid HTML limits innovation, but Silicon is innovative at its core.',
  },
  {
    icon: 'bxl:nodejs',
    title: 'Kick-Start Your Development',
    desc: 'Start your development process fast and easy with Node.js and Gulp setup. Configuration files are included in download package. Full tasks automation.',
  },
  {
    icon: 'bxl:sass',
    title: 'Easy to Customize with Sass',
    desc: 'Silicon is built using Sass. Easily change colors, typography and much more. It is the most mature, stable, and powerful CSS extension language in the world.',
  },
  {
    icon: 'bxl:javascript',
    title: 'Future Proof Java-Script',
    desc: 'Silicon core scripts as well as all dependencies are written in vanilla JS. And now with Bootstrap 5 we finally drop jQuery and use ES6 modules.',
  },
];

const SiliconFeatures = () => {
  return (
    <Container className="pt-4 pb-5 py-lg-5">
      <h2 className="h1 text-center pt-1 pt-md-3 pt-lg-4 pb-3 pb-md-4 mb-0 mb-lg-3">
        More Silicon Features
      </h2>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 g-lg-3 g-xl-4 pb-md-3 pb-lg-5">
        {features.map((feature, idx) => (
          <Col key={idx}>
            <Card className="h-100 bg-transparent border-0">
              <div className="bg-primary-subtle rounded-3 w-auto lh-1 p-2 mt-4 ms-4 me-auto" style={{ padding: '.375rem' }}>
                <IconifyIcon
                  icon={feature.icon}
                  className="fs-2 text-primary"
                />
              </div>
              <CardBody>
                <h3 className="h6">{feature.title}</h3>
                <p className="fs-sm mb-0">{feature.desc}</p>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SiliconFeatures;
