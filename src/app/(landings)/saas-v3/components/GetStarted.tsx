import { Button, Card, CardBody, Container } from 'react-bootstrap';
import contactBg from '@/assets/img/landing/digital-agency/contact-bg.png';
const GetStarted = () => {
  return (
    <Container
      className="pt-3 pb-4  pb-md-5"
      style={{
        marginTop: '-156px',
        marginBottom: '120px',
        transform: 'translateY(156px)',
      }}
    >
      <Card
        className="border-0 shadow"
        style={{
          background: 'linear-gradient(134deg, #000000 0%, #1a16165c 50%, #121314 100%)',
        }}
      >
        <CardBody
          className="p-md-5 p-4  text-center"
          style={{
            backgroundImage: `url(${contactBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            objectFit: 'cover',
            opacity: 0.8,
          }}
        >
          <h3 className="h4   text-left opacity-75">Get Started</h3>
          <h3 className="h4  text-light text-left opacity-75">
            Make your data movement predictable
          </h3>
          <p className="h6 " style={{ fontWeight: 400 }}>
            Faster transfers, stable throughput, zero-trust security — deployed without replacing
            your existing infrastructure.
          </p>
          <div className="pt-md-5 pt-4 pb-md-2">
            <Button variant="light" size="lg" style={{ fontWeight: 800 }}>
              TALK TO OUR TEAM
            </Button>
          </div>
        </CardBody>
      </Card>
    </Container>
  );
};

export default GetStarted;
