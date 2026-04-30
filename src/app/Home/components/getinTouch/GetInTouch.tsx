import IconifyIcon from '@/components/IconifyIcon';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import './contact.css';
import StraightLine from '../StraightLine';
import PremiumButton from '@/components/ui/PremiumButton';
const GetInTouch = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    firstname: '',
    lastname: '',
    jobtitle: '',
    message: '',
  });
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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const portalId = '145144803';
    const formId = '0d6ff619-5312-47aa-a346-7deb6981cd24';

    const hutk = document.cookie
      .split('; ')
      .find(row => row.startsWith('hubspotutk='))
      ?.split('=')[1];

    const context: any = {
      pageUri: window.location.href,
      pageName: document.title,
    };
    if (hutk) {
      context.hutk = hutk;
    }
    const payload = {
      fields: [
        { name: 'company', value: formData.company || '' },
        { name: 'email', value: formData.email || '' },
        { name: 'firstname', value: formData.firstname || '' },
        { name: 'lastname', value: formData.lastname || '' },
        { name: 'jobtitle', value: formData.jobtitle || '' },
        { name: 'comments', value: formData.message || '' },
      ],
      context,
    };

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        console.log('Success:', data);
      } else {
        console.error('HubSpot error:', data);
      }
    } catch (err) {
      console.error('Network error:', err);
    } finally {
      setSending(false);
    }
  };
  return (
    <>
      <section className="contact-section" ref={sectionRef}>
        <Container>
          {/* Heading */}
          <div className={`text-center fade-in ${visible ? 'visible' : ''}`}>
            <h1 className=" text-warning text-uppercase mb-5">Get in touch</h1>
          </div>

          <Row className="justify-content-center align-items-start g-4">
            {/* ── Left column: info ── */}
            <Col xl={6} lg={5}   className={`fade-in delay-1 ${visible ? 'visible' : ''}`}>
              <h2 className="mb-3">See how EnigmaNet fits your infrastructure</h2>
              <StraightLine />
              <p className="mb-4">
                Whether you’re scaling AI workloads, improving connectivity across distributed
                sites, or looking for a differentiated partner offering, book a short call and we’ll
                show you what’s possible.
              </p>
              <div className="d-flex flex-column gap-3">
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
              </div>
            </Col>

            {/* ── Right column: form ── */}
            <Col xl={6} lg={7}  className={`fade-in delay-2 ${visible ? 'visible' : ''}`}>
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
                        />
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
                        />
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
                        />
                      </Col>

                      <Col xs={12} sm={6} className={`fade-in delay-3 ${visible ? 'visible' : ''}`}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          name="lastname"
                          type="text"
                          placeholder="Last name"
                          value={formData.lastname}
                          onChange={handleChange}
                        />
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
                        />
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
                        />
                      </Col>

                      {/* Submit */}
                      <Col xs={12} className={`mt-1 fade-in delay-4 ${visible ? 'visible' : ''}`}>
                        {/* <Button type="submit" className="submit-btn" disabled={sending}>
                          {sending && <span className="btn-spinner" />}
                          {sending ? 'Sending…' : 'Call me Back'}
                        </Button> */}
                        <PremiumButton
                          variant="blue"
                          type="submit"
                          label="Call Me Back"
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

export default GetInTouch;
