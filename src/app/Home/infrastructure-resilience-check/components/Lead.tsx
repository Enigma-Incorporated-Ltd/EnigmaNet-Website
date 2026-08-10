import React from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import '../../../company/blog-insight/components/contact.css';
import PremiumButton from '@/components/ui/PremiumButton';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import { useGetInTouchApi } from '@/services/getInTouchApi';
interface LeadProps {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
}
const Lead = ({ title, description }: LeadProps) => {
  const { theme } = useTheme();
  const { handleSubmit, submitted, sending, errors, handleChange, formData } = useGetInTouchApi();

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
    <section className=" newsletter container pb-5" ref={sectionRef}>
      <HeaderTitle
        key={theme}
        title={title}
        variant={theme === 'dark' ? 'gold' : 'blue'}
        className="text-center pb-5 "
      />

      {description && (
        <ul className="list-unstyled d-flex flex-wrap text-center justify-content-center mb-5">
          <li className="d-flex fs-xl mx-3 " style={{ maxWidth: '55rem' }}>
            <span>{description}</span>
          </li>
        </ul>
      )}
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
                  </div>
                ) : (
                  <Form className="row g-3" onSubmit={handleSubmit}>
                    {/* Email */}
                    <Col xs={12} md={6}>
                      <Form.Label>First Name *</Form.Label>
                      <Form.Control
                        name="firstname"
                        type="text"
                        placeholder="Your first name"
                        value={formData.firstname}
                        onChange={handleChange}
                        isInvalid={!!errors.firstname}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.firstname}
                      </Form.Control.Feedback>
                    </Col>{' '}
                    <Col xs={12} md={6}>
                      <Form.Label>Last Name *</Form.Label>
                      <Form.Control
                        name="lastname"
                        type="text"
                        placeholder="Your last name"
                        value={formData.lastname}
                        onChange={handleChange}
                        isInvalid={!!errors.lastname}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.lastname}
                      </Form.Control.Feedback>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Label>Work Email *</Form.Label>
                      <Form.Control
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </Col>
                    {/* Name */}
                    <Col xs={12} md={6}>
                      <Form.Label>Company</Form.Label>
                      <Form.Control
                        name="company"
                        type="text"
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={handleChange}
                        isInvalid={!!errors.company}
                      />
                      <Form.Control.Feedback type="invalid">{errors.company}</Form.Control.Feedback>
                    </Col>
                    {/* Company */}
                    <Col xs={12} md={6}>
                      <Form.Label>Job Role</Form.Label>
                      <Form.Control
                        name="jobtitle"
                        type="text"
                        placeholder="Your job role"
                        value={formData.jobtitle}
                        onChange={handleChange}
                        isInvalid={!!errors.jobtitle}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.jobtitle}
                      </Form.Control.Feedback>
                    </Col>
                    {/* <Col xs={12} md={6}>
                      <Form.Label>Number of sites </Form.Label>
                      <Form.Control
                        name="numberOfSites"
                        type="number"
                        placeholder="Number of sites"
                        value={formData.numberOfSites}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Label>Telephone number </Form.Label>
                      <Form.Control
                        name="telephoneNumber"
                        type="tel"
                        placeholder="Telephone number"
                        value={formData.telephoneNumber || ''}
                        onChange={handleChange}
                        isInvalid={!!errors.telephoneNumber}
                      />

                      <Form.Control.Feedback type="invalid">
                        {errors.telephoneNumber}
                      </Form.Control.Feedback>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Label>Main infrastructure priority </Form.Label>
                      <Form.Control
                        name="mainInfrastructurePriority"
                        type="text"
                        placeholder="Main infrastructure priority"
                        value={formData.mainInfrastructurePriority}
                        onChange={handleChange}
                      />
                    </Col> */}
                    <p className="fs-sm text-muted">
                      By submitting this form, you agree to receive your assessment results and
                      relevant Enigma Net information. You can unsubscribe at any time.{' '}
                    </p>
                    {/* Submit */}
                    <Col xs={12} className="d-flex justify-content-center mt-3">
                      <PremiumButton
                        variant="blue"
                        type="submit"
                        label="Send My Results  →"
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
  );
};

export default Lead;
