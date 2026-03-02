import logo from '@/assets/img/logo.svg';
import IconifyIcon from '@/components/IconifyIcon';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router';

type LanguageOption = {
  value: string;
  label: string;
};

type Link = {
  label: string;
  href: string;
  target?: string;
  badge?: string;
};

type AIModel = {
  title: string;
  description: string;
  icon: string | React.ReactNode;
  bgColor: string;
  gradient?: boolean;
};

type Resource = {
  title: string;
  description: string;
  icon: string;
};

type Copyright = {
  text: string;
  link: Link;
};

const companyName: string = 'Silicon';
const logoWidth: number = 47;
const languageOptions: LanguageOption[] = [
  { value: 'English', label: 'English' },
  { value: 'Français', label: 'Français' },
  { value: 'Deutsch', label: 'Deutsch' },
  { value: 'Italiano', label: 'Italiano' },
];
const defaultLanguage: string = 'English';
const companyLinks: Link[] = [
  { label: 'About us', href: '#' },
  { label: 'Careers', href: '#', badge: 'Hiring' },
  { label: 'Contact us', href: '#' },
  { label: 'Terms of service', href: '#' },
];
const socialLinks: Link[] = [
  { label: 'GitHub', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Telegram', href: '#' },
];
const aiModels: AIModel[] = [
  {
    title: 'Generative model',
    description: 'Generation of texts and images',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 1.5C18.3442 1.5 18.6441 1.73422 18.7276 2.0681L18.9865 3.10356C19.2216 4.04406 19.9559 4.7784 20.8964 5.01353L21.9319 5.27239C22.2658 5.35586 22.5 5.65585 22.5 6C22.5 6.34415 22.2658 6.64414 21.9319 6.72761L20.8964 6.98647C19.9559 7.2216 19.2216 7.95594 18.9865 8.89644L18.7276 9.9319C18.6441 10.2658 18.3442 10.5 18 10.5C17.6558 10.5 17.3559 10.2658 17.2724 9.9319L17.0135 8.89644C16.7784 7.95594 16.0441 7.2216 15.1036 6.98647L14.0681 6.72761C13.7342 6.64414 13.5 6.34415 13.5 6C13.5 5.65585 13.7342 5.35586 14.0681 5.27239L15.1036 5.01353C16.0441 4.7784 16.7784 4.04406 17.0135 3.10356L17.2724 2.0681C17.3559 1.73422 17.6558 1.5 18 1.5ZM18 4.59616C17.6534 5.17111 17.1711 5.65342 16.5962 6C17.1711 6.34658 17.6534 6.82889 18 7.40384C18.3466 6.82889 18.8289 6.34658 19.4038 6C18.8289 5.65342 18.3466 5.17111 18 4.59616ZM9 4.5C9.33486 4.5 9.62915 4.72198 9.72114 5.04396L10.5343 7.89015C10.8903 9.13593 11.8641 10.1097 13.1099 10.4657L15.956 11.2789C16.278 11.3709 16.5 11.6651 16.5 12C16.5 12.3349 16.278 12.6291 15.956 12.7211L13.1098 13.5343C11.8641 13.8903 10.8903 14.8641 10.5343 16.1099L9.72114 18.956C9.62915 19.278 9.33486 19.5 9 19.5C8.66514 19.5 8.37085 19.278 8.27886 18.956L7.46566 16.1098C7.10972 14.8641 6.13593 13.8903 4.89015 13.5343L2.04396 12.7211C1.72198 12.6291 1.5 12.3349 1.5 12C1.5 11.6651 1.72198 11.3709 2.04396 11.2789L4.89015 10.4657C6.13593 10.1097 7.10972 9.13593 7.46566 7.89015L8.27886 5.04396C8.37085 4.72198 8.66514 4.5 9 4.5ZM9 7.98004L8.90795 8.30223C8.40963 10.0463 7.04632 11.4096 5.30223 11.9079L4.98004 12L5.30223 12.0921C7.04632 12.5904 8.40963 13.9537 8.90795 15.6978L9 16.02L9.09205 15.6978C9.59037 13.9537 10.9537 12.5904 12.6978 12.0921L13.02 12L12.6978 11.9079C10.9537 11.4096 9.59037 10.0463 9.09205 8.30223L9 7.98004ZM16.5 15C16.8228 15 17.1094 15.2066 17.2115 15.5128L17.6058 16.6956C17.7551 17.1435 18.1065 17.4949 18.5544 17.6442L19.7372 18.0385C20.0434 18.1406 20.25 18.4272 20.25 18.75C20.25 19.0728 20.0434 19.3594 19.7372 19.4615L18.5544 19.8558C18.1065 20.0051 17.7551 20.3565 17.6058 20.8044L17.2115 21.9872C17.1094 22.2934 16.8228 22.5 16.5 22.5C16.1772 22.5 15.8906 22.2934 15.7885 21.9872L15.3942 20.8044C15.2449 20.3565 14.8935 20.0051 14.4456 19.8558L13.2628 19.4615C12.9566 19.3594 12.75 19.0728 12.75 18.75C12.75 18.4272 12.9566 18.1406 13.2628 18.0385L14.4456 17.6442C14.8935 17.4949 15.2449 17.1435 15.3942 16.6956L15.7885 15.5128C15.8906 15.2066 16.1772 15 16.5 15ZM16.5 17.8354C16.2653 18.203 15.953 18.5153 15.5854 18.75C15.953 18.9847 16.2653 19.297 16.5 19.6646C16.7347 19.297 17.047 18.9847 17.4146 18.75C17.047 18.5153 16.2653 18.203 16.5 17.8354Z"
          fill="url(#paint0_linear_11_19620)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_11_19620"
            x1="1.5"
            y1="12.0502"
            x2="22.5"
            y2="12.0502"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6366F1" />
            <stop offset="0.5" stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#D946EF" />
          </linearGradient>
        </defs>
      </svg>
    ),
    bgColor: 'primary',
    gradient: true,
  },
  {
    title: 'Speech recognition',
    description: 'Transforms voice speech into text',
    icon: 'bx:message-dots',
    bgColor: 'warning',
  },
  {
    title: 'Files transcription',
    description: 'Converts different types of files',
    icon: 'bx:file-find',
    bgColor: 'success',
  },
  {
    title: 'Code generation',
    description: 'Autocompletion and generation',
    icon: 'bx:terminal',
    bgColor: 'info',
  },
  {
    title: 'Smart search',
    description: 'Responds to search queries',
    icon: 'bx:search',
    bgColor: 'danger',
  },
];
const integrations: Resource[] = [
  {
    title: 'Social networks',
    description: 'Facebook, Instagram, Twitter...',
    icon: 'bx:share-alt',
  },
  {
    title: 'E-commerce',
    description: 'Shopify, WordPress, Magento...',
    icon: 'bx:cart-alt',
  },
  {
    title: 'Task / time management',
    description: 'Trello, Notion, Asana, Teams...',
    icon: 'bx:calendar',
  },
  {
    title: 'Email / Chat apps',
    description: 'Gmail, MailChimp, Telegram...',
    icon: 'bx:envelope',
  },
  {
    title: 'Code editors',
    description: 'VS Code, Web Storm, Atom...',
    icon: 'bx:code-alt',
  },
];
const resources: Resource[] = [
  {
    title: 'Documentation',
    description: 'API, knowledge base, tutorials',
    icon: 'bx:file',
  },
  {
    title: 'Help center',
    description: 'FAQs, articles, community forum',
    icon: 'bx:info-circle',
  },
  {
    title: 'Blog articles',
    description: 'Recent news and updates',
    icon: 'bx:edit',
  },
  {
    title: 'GitHub projects',
    description: 'Use our open source projects',
    icon: 'bxl:github',
  },
];
const copyright: Copyright = {
  text: 'All rights reserved. Made by',
  link: {
    label: 'Coderthemes',
    href: 'https://coderthemes.com/',
    target: '_blank',
  },
};

const Footer = () => {
  return (
    <footer className="footer position-relative zindex-2 pb-3 pb-xl-0">
      <div className="d-none d-lg-block" style={{ marginTop: '-70px' }}></div>
      <div className="d-none d-md-block d-lg-none" style={{ marginTop: '-100px' }}></div>
      <div className="d-md-none" style={{ marginTop: '-130px' }}></div>
      <Container>
        <Row>
          <Col xs={12} xl={3} className="pb-sm-2 pb-md-3 mb-4 mb-lg-5 mb-xl-0">
            <div className="d-flex align-items-center mb-3 mb-xl-0">
              <div className="navbar-brand text-dark pb-xl-3 pe-2 pe-xl-0 mb-xl-2 me-4 me-xl-0">
                <img src={logo} width={logoWidth} alt={companyName} />
                {companyName}
              </div>
              <select
                className="form-select form-select-sm d-xl-none"
                style={{ maxWidth: '130px' }}
              >
                {languageOptions.map(option => (
                  <option
                    key={option.value}
                    value={option.value}
                    defaultChecked={option.value === defaultLanguage}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="d-flex flex-wrap flex-xl-column ps-xl-5 ms-n3 ms-xl-2">
              <ul className="nav flex-xl-column">
                {companyLinks.map((link, index) => (
                  <li key={index} className="nav-item mb-1">
                    <Link to={link.href} className="nav-link py-1 px-xl-0">
                      {link.label}
                      {link.badge && (
                        <span className="badge bg-primary bg-opacity-10 rounded-pill ms-2">
                          <span className="text-gradient-primary">{link.badge}</span>
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="nav flex-xl-column pt-xl-3">
                {socialLinks.map((link, index) => (
                  <li key={index} className="nav-item mb-1">
                    <Link to={link.href} className="nav-link py-1 px-xl-0">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="d-none d-xl-block pt-4 ps-5 ms-2">
              <select className="form-select form-select-sm" style={{ maxWidth: '130px' }}>
                {languageOptions.map(option => (
                  <option
                    key={option.value}
                    value={option.value}
                    defaultChecked={option.value === defaultLanguage}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </Col>

          <Col sm={6} md={4} xl={3} className="pb-1 mb-4">
            <h5 className="pb-md-1">AI models</h5>
            {aiModels.map((model, index) => (
              <div key={index} className="position-relative d-flex align-items-center py-2 my-1">
                <div
                  className={`position-relative flex-shrink-0 p-3 ${model.gradient ? '' : `bg-${model.bgColor} bg-opacity-10 rounded-circle lh-1`}`}
                >
                  {model.gradient ? (
                    <>
                      <span className="position-absolute top-0 start-0 w-100 h-100 rounded-circle bg-gradient-primary opacity-10"></span>
                      <span className="position-relative d-flex zindex-2">{model.icon}</span>
                    </>
                  ) : (
                    <IconifyIcon
                      icon={model.icon as string}
                      className={`text-${model.bgColor} fs-4 lh-1`}
                    />
                  )}
                </div>
                <div className="nav flex-column ps-3">
                  <Link to="#" className="nav-link fw-bold stretched-link p-0">
                    {model.title}
                  </Link>
                  <div className="fs-xs">{model.description}</div>
                </div>
              </div>
            ))}
          </Col>

          <Col sm={6} md={4} xl={3} className="pb-1 mb-4">
            <h5 className="pb-md-1">Integrations</h5>
            {integrations.map((integration, index) => (
              <div key={index} className="position-relative d-flex align-items-center py-2 my-1">
                <div className="bg-secondary rounded-circle lh-1 p-3">
                  <IconifyIcon icon={integration.icon} className="text-primary fs-4 lh-1" />
                </div>
                <div className="nav flex-column ps-3">
                  <a href="#" className="nav-link fw-bold stretched-link p-0">
                    {integration.title}
                  </a>
                  <div className="fs-xs">{integration.description}</div>
                </div>
              </div>
            ))}
          </Col>

          <Col md={4} xl={3} className="pb-1 mb-4">
            <h5 className="pb-md-1">Resources</h5>
            {resources.map((resource, index) => (
              <div key={index} className="position-relative d-flex align-items-center py-2 my-1">
                <div className="bg-secondary rounded-circle lh-1 p-3">
                  <IconifyIcon icon={resource.icon} className="text-primary fs-4 lh-1" />
                </div>
                <div className="nav flex-column ps-3">
                  <Link to="#" className="nav-link fw-bold stretched-link p-0">
                    {resource.title}
                  </Link>
                  <div className="fs-xs">{resource.description}</div>
                </div>
              </div>
            ))}
          </Col>
        </Row>

        <div className="text-sm-center pb-3 py-sm-3 py-md-4 py-xl-5">
          <p className="nav d-block fs-sm mb-0">
            <span className="text-body">&copy; {copyright.text} </span>
            <Link
              className="nav-link d-inline-block p-0"
              to={copyright.link.href}
              target={copyright.link.target}
              rel="noopener noreferrer"
            >
              {copyright.link.label}
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
