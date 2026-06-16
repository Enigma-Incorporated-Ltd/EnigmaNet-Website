import IconifyIcon from '@/components/IconifyIcon';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import './contact.css';
import Header from '@/components/ui/Header';
import Breadcrumb from '@/components/ui/Breadcrumb';
import PremiumButton from '@/components/ui/PremiumButton';
import { useGetInTouchApi } from '@/services/getInTouchApi';
const Contact = () => {
  const { handleSubmit, submitted, sending, errors, handleChange, formData } =
    useGetInTouchApi();
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
      <section className="contact-section container" ref={sectionRef}>
        {/* Decorative dots */}
        <div className="dot-grid dot-grid-tl" />
        <div className="dot-grid dot-grid-br" />

        <Container>
          {/* Heading */}
          <Breadcrumb
            items={[{ label: 'Contact Us' }]}
            style={{
              paddingTop: '3rem ',
            }}
          />
          <Header
            title="Contact Us"
            style={{
              padding: '2rem 0px ',
            }}
          />
          <Row className="justify-content-center align-items-start g-4">
            {/* ── Left column: info ── */}
            <Col xl={4} lg={5} className={`fade-in delay-1 ${visible ? 'visible' : ''}`}>
              {/* Call */}
              <div className="info-item">
                <div className="info-icon">
                  <IconifyIcon icon="bx:phone" style={{ fontSize: '20px' }} />
                </div>
                <div>
                  <p className="info-label mb-1">Phone</p>
                  <p className="info-title mb-1">Call us</p>
                  <a href="tel:+442080504632" className="info-link">
                    +44 (0) 20 8050 4632
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="info-item">
                <div className="info-icon">
                  <IconifyIcon icon="bx:envelope" style={{ fontSize: '20px' }} />
                </div>
                <div>
                  <p className="info-label mb-1">Email</p>
                  <p className="info-title mb-1">Email us</p>
                  <a href="mailto:info@enigmainc.co.uk" className="info-link">
                    info@enigmainc.co.uk
                  </a>
                </div>
              </div>

              {/* CTA blurb */}
              <div className="contact-cta">
                Get in touch for quotes, further support, and any other information — we&apos;re
                happy to help.
              </div>
            </Col>

            {/* ── Right column: form ── */}
            <Col xl={7} lg={8} md={11} className={`fade-in delay-2 ${visible ? 'visible' : ''}`}>
              <Card className="contact-card">
                <Card.Body>
                  {submitted ? (
                    <div className="success-state">
                      <div className="success-icon">✓</div>
                      <p className="success-title">Message Sent!</p>
                      <p className="success-text">
                        Thank you for reaching out. A member of our team will be in touch shortly.
                       
                      </p>
                    </div>
                  ) : (
                    <Form className="row g-3" onSubmit={handleSubmit}>
                      {/* Company */}
                      <Col xs={12} className={`fade-in delay-2 ${visible ? 'visible' : ''}`}>
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control
                          name="company"
                          type="text"
                          placeholder="Your company"
                          value={formData.company}
                          onChange={handleChange}
                          isInvalid={!!errors.company}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.company}
                        </Form.Control.Feedback>
                      </Col>

                      {/* Email */}
                      <Col xs={12} className={`fade-in delay-2 ${visible ? 'visible' : ''}`}>
                        <Form.Label>Email Address</Form.Label>
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

                      {/* First / Last */}
                      <Col xs={12} sm={6} className={`fade-in delay-3 ${visible ? 'visible' : ''}`}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          name="firstname"
                          type="text"
                          placeholder="First name"
                          value={formData.firstname}
                          onChange={handleChange}
                          isInvalid={!!errors.firstname}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.firstname}
                        </Form.Control.Feedback>
                      </Col>

                      <Col xs={12} sm={6} className={`fade-in delay-3 ${visible ? 'visible' : ''}`}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          name="lastname"
                          type="text"
                          placeholder="Last name"
                          value={formData.lastname}
                          onChange={handleChange}
                          isInvalid={!!errors.lastname}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.lastname}
                        </Form.Control.Feedback>
                      </Col>

                      {/* Job title */}
                      <Col xs={12} className={`fade-in delay-3 ${visible ? 'visible' : ''}`}>
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control
                          name="jobtitle"
                          type="text"
                          placeholder="Your role"
                          value={formData.jobtitle}
                          onChange={handleChange}
                          isInvalid={!!errors.jobtitle}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.jobtitle}
                        </Form.Control.Feedback>
                      </Col>

                      {/* Message */}
                      <Col xs={12} className={`fade-in delay-4 ${visible ? 'visible' : ''}`}>
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          name="message"
                          as="textarea"
                          rows={4}
                          placeholder="How can we help you?"
                          value={formData.message}
                          onChange={handleChange}
                          isInvalid={!!errors.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.message}
                        </Form.Control.Feedback>
                      </Col>

                      {/* Submit */}
                      <Col xs={12} className={`mt-1 fade-in delay-4 ${visible ? 'visible' : ''}`}>
                        {/* <Button type="submit" className="submit-btn" disabled={sending}>
                          {sending && <span className="btn-spinner" />}
                          {sending ? 'Sending…' : 'Send Message'}
                        </Button> */}
                        <PremiumButton
                          variant="blue"
                          type="submit"
                          label="Send a Request"
                          isLoading={sending}
                          disabled={sending}
                          loadingLabel="Sending…"
                          className="my-3"
                          fullWidth
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

export default Contact;
