import Logo from '@/assets/img/EnigmaNet-logo.png';
import IconifyIcon from '@/components/IconifyIcon';
import { useEffect, useState } from 'react';
import { Col, Collapse, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import { fetchFooter, type FooterConfig } from '@/services/cmsApi';

// ── Fallback hard-coded config ────────────────────────────────────────────────
const FALLBACK: FooterConfig = {
  brand: { name: 'EnigmaNet', href: '/index' },
  description:
    'Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget eu vitae nullam proin turpis etiam mi sit.',
  email: 'email@example.com',
  emailLabel: 'Contact Us',
  newsletter: {
    enabled: true,
    label: 'Subscribe to our newsletter',
    placeholder: 'Your email',
    buttonText: 'Subscribe',
    buttonVariant: 'primary',
    icon: 'bx:envelope',
  },
  columns: [
    {
      title: 'Useful Links',
      links: [
        { title: 'Home', url: '#' },
        { title: 'Features', url: '#' },
        { title: 'Integrations', url: '#' },
        { title: 'Our Clients', url: '#' },
        { title: 'Blog', url: '#' },
        { title: 'Terms & Conditions', url: '#' },
        { title: 'Privacy Policy', url: '#' },
      ],
    },
  ],
  socials: [
    { title: 'Facebook', url: '#' },
    { title: 'LinkedIn', url: '#' },
    { title: 'Twitter', url: '#' },
    { title: 'Instagram', url: '#' },
  ],
  copyright: {
    text: 'All rights reserved. Made by',
    by: 'Coderthemes',
    url: 'https://coderthemes.com/',
  },
};

// ── Component ─────────────────────────────────────────────────────────────────
const Footer = () => {
  const [data, setData] = useState<FooterConfig>(FALLBACK);
  const [openColumns, setOpenColumns] = useState<Record<number, boolean>>({});
  const [openSocials, setOpenSocials] = useState(false);
  const [openLegal, setOpenLegal] = useState(false);
  useEffect(() => {
    fetchFooter()
      .then(setData)
      .catch(() => {
        /* silently use fallback */
      });
  }, []);

  const toggleColumn = (i: number) => setOpenColumns(prev => ({ ...prev, [i]: !prev[i] }));

  const {
    brand,
    description,
    descriptionStyle,
    email,
    emailLabel,
    contact,
    columns,
    socials,
    copyright,
    style,
  } = data;
 console.log('socials', socials);
  const footerStyle: React.CSSProperties = {
    ...(style?.backgroundColor && { backgroundColor: style.backgroundColor }),
    ...(style?.textColor && { color: style.textColor }),
    ...(style?.padding && { padding: style.padding }),
  };
const getSocialIcon = (title: string) => {
  switch (title.toLowerCase()) {
    case 'linkedin':
      return 'bxl:linkedin';
    case 'facebook':
      return 'bxl:facebook';
    case 'twitter':
      return 'bxl:twitter';
    case 'instagram':
      return 'bxl:instagram';
    case 'youtube':
      return 'bxl:youtube';
    default:
      return 'bx:link'; // fallback icon
  }
};
  const logoSrc = brand.logoUrl || Logo;
  const logoWidth = brand.logoWidth || 47;

  const brandTextStyle: React.CSSProperties = {
    ...(brand.style?.color && { color: brand.style.color }),
    ...(brand.style?.fontSize && { fontSize: brand.style.fontSize }),
    ...(brand.style?.fontWeight && { fontWeight: brand.style.fontWeight }),
    ...(brand.style?.fontFamily && { fontFamily: brand.style.fontFamily }),
  };

  const descStyle: React.CSSProperties = {
    ...(descriptionStyle?.color && { color: descriptionStyle.color }),
    ...(descriptionStyle?.fontSize && { fontSize: descriptionStyle.fontSize }),
  };

  return (
    <footer
      className={`footer pt-5 pb-4 pb-lg-5 ${style?.className || 'bg-dark'}`}
      data-bs-theme="dark"
      style={footerStyle}
    >
      <Container className="pt-lg-4">
        <Row className="pb-5">
          {/* Brand + Newsletter */}
          <Col lg={4} md={6}>
            <Link
              to={brand.href || '/index'}
              className="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-4 d-flex align-items-center gap-2"
              style={brandTextStyle}
            >
              <img src={logoSrc} alt={brand.name} />
              {/* {brand.name} */}
            </Link>

            {description && (
              <p className="fs-sm text-light opacity-70 pb-lg-3 mb-4" style={descStyle}>
                {description}
              </p>
            )}

            {/* {newsletter?.enabled && (
              <form className="needs-validation" noValidate>
                {newsletter.label && (
                  <label htmlFor="subscr-email" className="form-label">
                    {newsletter.label}
                  </label>
                )}
                <div className="input-group position-relative">
                  <input
                    type="email"
                    id="subscr-email"
                    className="form-control rounded-start ps-5"
                    placeholder={newsletter.placeholder || 'Your email'}
                    required
                  />
                  <IconifyIcon
                    icon={newsletter.icon || 'bx:envelope'}
                    className="fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"
                  />
                  <div className="invalid-tooltip position-absolute top-100 start-0">
                    Please provide a valid email address.
                  </div>
                  <button
                    type="submit"
                    className={`btn btn-${newsletter.buttonVariant || 'primary'}`}
                  >
                    {newsletter.buttonText || 'Subscribe'}
                  </button>
                </div>
              </form>
            )} */}
          </Col>

          {/* Link columns + socials + email */}
          <Col xl={6} lg={7} md={5} className="offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
            <Row id="footer-links">
              {/* Columns */}
              {(columns ?? []).map((col, i) => {
                const titleStyle: React.CSSProperties = {
                  ...(col.titleStyle?.color && { color: col.titleStyle.color }),
                  ...(col.titleStyle?.fontSize && { fontSize: col.titleStyle.fontSize }),
                  ...(col.titleStyle?.fontWeight && { fontWeight: col.titleStyle.fontWeight }),
                };
                return (
                  <Col key={i} lg={4}>
                    <h6 className="mb-2" style={titleStyle}>
                      <Link
                        to={`#col-${i}`}
                        className="d-block text-dark dropdown-toggle d-lg-none py-2"
                        onClick={() => toggleColumn(i)}
                      >
                        {col.title}
                        <IconifyIcon icon="bx:chevron-down" fontSize={24} className="ms-1" />
                      </Link>
                      <span className="d-none d-lg-block">{col.title}</span>
                    </h6>
                    <Collapse in={openColumns[i]}>
                      <div id={`col-${i}`} className="d-lg-block">
                        <ul className="nav flex-column pb-lg-1 mb-lg-3">
                          {col.links.map((link, j) => {
                            const linkStyle: React.CSSProperties = {
                              ...(link.style?.color && { color: link.style.color }),
                              ...(link.style?.fontSize && { fontSize: link.style.fontSize }),
                              ...(link.style?.fontWeight && { fontWeight: link.style.fontWeight }),
                            };
                            return (
                              <li key={j} className="nav-item">
                                <Link
                                  to={link.url}
                                  className={`nav-link d-inline-block px-0 pt-1 pb-2 ${link.style?.className || ''}`}
                                  style={linkStyle}
                                >
                                  {link.icon && <IconifyIcon icon={link.icon} className="me-2" />}
                                  {link.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </Collapse>
                  </Col>
                );
              })}
              {contact && (
                <Col xl={4} lg={5} className="pt-2 pt-lg-0">
                  <h6 className="mb-2">{emailLabel || 'Contact Us'}</h6>

                  {/* Phone */}
                  {contact.phone && (
                    <p className="mb-1">
                      <a
                        href={`tel:${contact.phone.replace(/\s/g, '')}`}
                        style={{
                          textDecoration: 'none',
                          fontWeight: 700,
                        }}
                      >
                        {contact.phone}
                      </a>
                    </p>
                  )}

                  {/* Email */}
                  {contact.email && (
                    <p className="mb-1">
                      <a
                        href={`mailto:${contact.email}`}
                        style={{
                          textDecoration: 'none',
                          fontWeight: 700,
                        }}
                      >
                        {contact.email}
                      </a>
                    </p>
                  )}

                  {/* Address */}
                  {contact.address && (
                    <p
                      className="mb-0 nav-link"
                      style={{
                        fontWeight: 700,
                      }}
                    >
                      {contact.address}
                    </p>
                  )}
                </Col>
              )}
              {/* Socials */}
              {socials && socials.length > 0 && (
                <Col  className="pt-2 gap-2 d-flex align-items-center justify-content-left pt-lg-2">
                  <h6 className="mb-2">
                    <Link
                      to="#social-links"
                      className="d-block text-dark dropdown-toggle d-lg-none py-2"
                      onClick={() => setOpenSocials(!openSocials)}
                    >
                      Follow Us:
                      <IconifyIcon icon="bx:chevron-down" fontSize={24} className="ms-1" />
                    </Link>

                    <span className="d-none d-lg-block">Follow Us:</span>
                  </h6>

                  <Collapse in={openSocials}>
                    <div id="social-links" className="d-lg-block">
                      <div className="d-flex flex-wrap gap-2 mt-2">
                        {socials.map((social, i) => {
                          const iconName = getSocialIcon(social.title);

                          return (
                            <Link
                              key={i}
                              to={social.url}
                              className="btn btn-icon btn-sm btn-secondary btn-linkedin me-2 mb-2  d-flex align-items-center justify-content-center"
                              target="_blank"
                              aria-label={social.title}
                            >
                              <IconifyIcon icon={iconName} fontSize={16} />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </Collapse>
                </Col>
              )}
            </Row>
          </Col>
        </Row>

        {/* Copyright */}
        <p
          className="nav d-block fs-xs mb-3 text-center text-md-start pb-2 pb-lg-0 mb-0"
          style={
            copyright.style
              ? { color: copyright.style.color, fontSize: copyright.style.fontSize }
              : {}
          }
        >
          &copy; {copyright.text}{' '}
          {copyright.by && (
            <Link
              className="nav-link d-inline-block p-0"
              to={copyright.url || '#'}
              target="_blank"
              rel="noopener"
            >
              {copyright.by}
            </Link>
          )}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
