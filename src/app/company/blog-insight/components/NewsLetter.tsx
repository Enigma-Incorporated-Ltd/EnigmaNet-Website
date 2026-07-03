import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import './contact.css';
import PremiumButton from '@/components/ui/PremiumButton';

const NewsLetter = () => {
 const [formData, setFormData] = useState({
    email: '',
    name: '',
    company: '',
    interestArea: '',
    
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
const [errors, setErrors] = useState({
    email: '',
    name: '',
    company: '',
    interestArea: '',
});
    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setErrors({
      email: '',
      name: '',
      company: '',
      interestArea: '',
    });
    // Add your form submission logic here
    setSubmitted(true);
    setSending(false);
  };
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="newsletter container" ref={sectionRef}>
        <Container>
          <Row className="justify-content-center align-items-start g-4">
            {/* ── Right column: form ── */}
            <Col xl={8} className={`fade-in delay-2 ${visible ? 'visible' : ''}`}>
              <Card className="contact-card">
                <Card.Body>
                  {submitted ? (
                    <div className="success-state">
                      <div className="success-icon">✓</div>
                      <p className="success-title">You're subscribed!</p>
                      <p className="success-text">
                        Thanks for subscribing. You'll receive our latest news, insights, and
                        product updates.
                      </p>
                    </div>
                  ) : (
                    <Form className="row g-3" onSubmit={handleSubmit}>
                      {/* Email */}
                      <Col xs={12}>
                        <Form.Label>Email Address *</Form.Label>
                        <Form.Control
                          name="email"
                          type="email"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                          required
                        />
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                      </Col>

                      {/* Name */}
                      <Col xs={12}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          name="name"
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </Col>

                      {/* Company */}
                      <Col xs={12}>
                        <Form.Label>Company</Form.Label>
                        <Form.Control
                          name="company"
                          type="text"
                          placeholder="Company name"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </Col>

                      {/* Interest Area */}
                      <Col xs={12}>
                        <Form.Label>Interest Area</Form.Label>
                        <Form.Select
                          name="interestArea"
                          value={formData.interestArea}
                          onChange={handleChange}
                        >
                          <option value="">Select an interest</option>
                          <option value="TrueCost workshops">TrueCost workshops</option>
                          <option value="AI infrastructure">AI infrastructure</option>
                          <option value="Data movement">Data movement</option>
                          <option value="Cloud cost insights">Cloud cost insights</option>
                          <option value="Secure networking">Secure networking</option>
                          <option value="Product updates">Product updates</option>
                          <option value="Company updates">Company updates</option>
                        </Form.Select>
                      </Col>

                      {/* Submit */}
                      <Col xs={12} className="d-flex justify-content-center mt-3">
                        <PremiumButton
                          variant="blue"
                          type="submit"
                          label="Subscribe to updates"
                          isLoading={sending}
                          disabled={sending}
                          loadingLabel="Subscribing..."
                          className="my-3"
                        />
                      </Col>
                    </Form>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default NewsLetter;
