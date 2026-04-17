import PremiumButton from '@/components/ui/PremiumButton';
import { Card, CardBody } from 'react-bootstrap';

const CTA2 = () => {
  return (
    <section className="container pt-3 pb-4 pb-md-5">
      <div
        className="position-relative rounded-3 overflow-hidden px-3"
        style={{
          background: 'linear-gradient(135deg, rgb(0 0 0), rgb(2 3 6 / 95%))',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
        }}
      >
        {/* Glow layer */}
        <span
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              'radial-gradient(circle at 20% 30%, rgba(255,193,7,0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,123,255,0.15), transparent 40%)',
            pointerEvents: 'none',
          }}
        ></span>

        <Card className="border-0 bg-transparent position-relative">
          <CardBody className="p-md-5 p-4 text-center">
            <h3 className="h3 text-warning opacity-75">Get Started</h3>

            <h3 className="h4 text-light opacity-90 mb-3">Make your data movement predictable</h3>

            <p
              className="text-light opacity-75 mx-auto"
              style={{ maxWidth: '600px', fontWeight: 400 }}
            >
              Faster transfers, stable throughput, zero-trust security — deployed without replacing
              your existing infrastructure.
            </p>

            <div className="pt-md-5 pt-4 pb-md-2">
              <PremiumButton
                label="TALK TO OUR TEAM"
                variant="gold"
                className="btn-lg shadow-lg"
                href="/get-in-touch"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default CTA2;
