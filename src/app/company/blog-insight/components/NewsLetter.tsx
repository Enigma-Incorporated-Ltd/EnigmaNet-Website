import { Card, Col, Container, Form, Dropdown, Row } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import './contact.css';
import PremiumButton from '@/components/ui/PremiumButton';
import { useNewsletterApi } from '@/services/newsletter';

const NewsLetter = () => {
  const { formData, setFormData, errors,successMessage, sending, submitted, subscribeNewsletter } =
    useNewsletterApi();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await subscribeNewsletter();
  };
const interestOptions = [
  { value: 'TrueCostWorkshops', label: 'TrueCost Workshops' },
  { value: 'AIInfrastructure', label: 'AI Infrastructure' },
  { value: 'DataMovement', label: 'Data Movement' },
  { value: 'CloudCostInsights', label: 'Cloud Cost Insights' },
  { value: 'SecureNetworking', label: 'Secure Networking' },
  { value: 'ProductUpdates', label: 'Product Updates' },
  { value: 'CompanyUpdates', label: 'Company Updates' },
];

const handleInterestChange = (value: string) => {
  setFormData(prev => {
    const exists = prev.interestAreas.includes(value);

    return {
      ...prev,
      interestAreas: exists
        ? prev.interestAreas.filter(v => v !== value)
        : [...prev.interestAreas, value],
    };
  });
};
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };


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
                       {successMessage}
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
                        <Form.Group>
                          <Form.Label>Interest Areas</Form.Label>

                          <Dropdown autoClose="outside">
                            <Dropdown.Toggle
                              as="div"
                              className="interest-dropdown"
                              id="interest-dropdown"
                            >
                              <span className="interest-placeholder">
                                {formData.interestAreas.length
                                  ? interestOptions
                                      .filter(item => formData.interestAreas.includes(item.value))
                                      .map(item => item.label)
                                      .join(', ')
                                  : 'Select Interest Areas'}
                              </span>

                              <span className="interest-icon">&#9662;</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="interest-menu">
                              {interestOptions.map(item => (
                                <Dropdown.Item
                                  key={item.value}
                                  as="div"
                                  onClick={e => e.stopPropagation()}
                                >
                                  <Form.Check
                                    type="checkbox"
                                    id={item.value}
                                    label={item.label}
                                    checked={formData.interestAreas.includes(item.value)}
                                    onChange={() => handleInterestChange(item.value)}
                                  />
                                </Dropdown.Item>
                              ))}
                            </Dropdown.Menu>
                          </Dropdown>
                        </Form.Group>
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
