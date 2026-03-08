import Landings from '@/assets/img/landings.jpg';
import Logo from '@/assets/img/logo.svg';

import { Link, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { Button, Collapse, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'react-bootstrap';
import IconifyIcon from '../IconifyIcon';
import ThemeToggle from '../ThemeToggle';
import { fetchHeader, type HeaderConfig, type NavItem, type NavLink, type NavSection } from '@/services/cmsApi';

type NavClass = {
  Headerclass?: string;
  headerSticky?: string;
  isNavDark?: boolean;
};

// ── Fallback hard-coded config (used while CMS loads or if fetch fails) ────────
const FALLBACK_CONFIG: HeaderConfig = {
  logo: { text: 'Silicon', href: '/index' },
  nav_items: [
    {
      label: 'Landings',
      type: 'mega-columns',
      columns: [
        [
          { label: 'Template Intro Page', href: '/index' },
          { label: 'Mobile App Showcase v.1', href: '/app-showcase-v1' },
          { label: 'Mobile App Showcase v.2', href: '/app-showcase-v2' },
          { label: 'Mobile App Showcase v.3', href: '/app-showcase-v3', badge: 'New' },
          { label: 'Product Landing', href: '/product' },
          { label: 'SaaS v.1', href: '/saas-v1' },
          { label: 'SaaS v.2', href: '/saas-v2' },
          { label: 'SaaS v.3', href: '/saas-v3' },
          { label: 'SaaS v.4', href: '/saas-v4' },
          { label: 'SaaS v.5', href: '/saas-v5', badge: 'New' },
        ],
        [
          { label: 'Startup', href: '/startup' },
          { label: 'Financial Consulting', href: '/financial' },
          { label: 'Online Courses', href: '/online-courses' },
          { label: 'Medical', href: '/medical' },
          { label: 'Software Dev Agency v.1', href: '/software-dev-agency-v1' },
          { label: 'Software Dev Agency v.2', href: '/software-dev-agency-v2' },
          { label: 'Software Dev Agency v.3', href: '/software-dev-agency-v3' },
          { label: 'Conference', href: '/conference' },
          { label: 'Digital Agency', href: '/digital-agency' },
          { label: 'Blog Homepage', href: '/blog' },
        ],
      ],
    },
    {
      label: 'Pages',
      type: 'mega-sections',
      sectioned_columns: [
        [
          {
            title: 'About',
            links: [
              { label: 'About v.1', href: '/about-v1' },
              { label: 'About v.2', href: '/about-v2' },
              { label: 'About v.3', href: '/about-v3' },
            ],
          },
          {
            title: 'Blog',
            links: [
              { label: 'List View with Sidebar', href: '/blog-list-with-sidebar' },
              { label: 'Grid View with Sidebar', href: '/blog-grid-with-sidebar' },
              { label: 'List View no Sidebar', href: '/blog-list-no-sidebar' },
              { label: 'Grid View no Sidebar', href: '/blog-grid-no-sidebar' },
              { label: 'Simple Feed', href: '/blog-simple-feed' },
              { label: 'Single Post', href: '/blog-single' },
              { label: 'Podcast', href: '/blog-podcast' },
            ],
          },
        ],
        [
          {
            title: 'Portfolio',
            links: [
              { label: 'Grid View', href: '/portfolio-grid' },
              { label: 'List View', href: '/portfolio-list' },
              { label: 'Slider View', href: '/portfolio-slider' },
              { label: 'Courses', href: '/portfolio-courses' },
              { label: 'Single Project', href: '/portfolio-single-project' },
              { label: 'Single Course', href: '/portfolio-single-course' },
            ],
          },
          {
            title: 'Services',
            links: [
              { label: 'Services v.1', href: '/services-v1' },
              { label: 'Services v.2', href: '/services-v2' },
              { label: 'Service Details v.1', href: '/services-single-v1' },
              { label: 'Service Details v.2', href: '/services-single-v2' },
            ],
          },
        ],
        [
          {
            title: 'Pricing',
            links: [{ label: 'Pricing Page', href: '/pricing' }],
          },
          {
            title: 'Contacts',
            links: [
              { label: 'Contacts v.1', href: '/contacts-v1' },
              { label: 'Contacts v.2', href: '/contacts-v2' },
              { label: 'Contacts v.3', href: '/contacts-v3' },
            ],
          },
          {
            title: 'Specialty',
            links: [
              { label: '404 Error v.1', href: '/404-v1' },
              { label: '404 Error v.2', href: '/404-v2' },
            ],
          },
        ],
      ],
    },
    {
      label: 'Account',
      type: 'dropdown',
      links: [
        { label: 'Account Details', href: '/account-details' },
        { label: 'Security', href: '/account-security' },
        { label: 'Notifications', href: '/account-notifications' },
        { label: 'Messages', href: '/account-messages' },
        { label: 'Saved Items', href: '/account-saved-items' },
        { label: 'My Collections', href: '/account-collections' },
        { label: 'Payment Details', href: '/account-payment' },
        { label: 'Sign In', href: '/account-signin' },
        { label: 'Sign Up', href: '/account-signup' },
      ],
    },
    { label: 'Contact', type: 'link', href: '/contacts-v2' },
  ],
  cta_button: { label: 'Buy now', href: '#', icon: 'bx:cart', variant: 'primary', size: 'sm' },
};

// ── Helpers ───────────────────────────────────────────────────────────────────
const isParentActive = (links: { href: string }[], pathname: string) =>
  links.some(link => pathname === link.href || pathname.startsWith(link.href + '/'));

const flatLinks = (item: NavItem): NavLink[] => {
  if (item.type === 'mega-columns') return (item.columns ?? []).flat();
  if (item.type === 'mega-sections')
    return (item.sectioned_columns ?? []).flat().flatMap((s: NavSection) => s.links);
  if (item.type === 'dropdown') return item.links ?? [];
  if (item.type === 'link' && item.href) return [{ label: item.label, href: item.href }];
  return [];
};

// ── Component ─────────────────────────────────────────────────────────────────
const Navbar = ({
  Headerclass = 'header navbar navbar-expand-lg bg-light shadow-sm',
  headerSticky,
  isNavDark,
}: NavClass) => {
  const [isSticky, setIsSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [config, setConfig] = useState<HeaderConfig>(FALLBACK_CONFIG);

  const location = useLocation();
  const pathname = location.pathname;

  // Fetch header config from CMS once on mount
  useEffect(() => {
    fetchHeader()
      .then((headerConfig) => {
        console.log('✅ Header config loaded from CMS:', headerConfig);
        setConfig(headerConfig);
      })
      .catch((error) => {
        console.warn('⚠️ Failed to load header from CMS, using fallback:', error);
        // Silently use fallback
      });
  }, []);

  useEffect(() => {
    if (!headerSticky) return;
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headerSticky]);

  const toggleMobileDropdown = (menu: string) =>
    setOpenMobileDropdown(openMobileDropdown === menu ? null : menu);

  const { logo, nav_items, cta_button } = config;

  return (
    <header className={`${Headerclass} ${isSticky && headerSticky ? headerSticky : ''}`}>
      <div className="container px-3">
        {/* Logo */}
        <Link to={logo.href} className="navbar-brand pe-3">
          <img src={Logo} width={47} alt={logo.text} />
          {logo.text}
        </Link>

        <Offcanvas
          id="navbarNav"
          placement="end"
          responsive="xl"
          show={showMenu}
          onHide={() => { setShowMenu(false); setOpenMobileDropdown(null); }}
        >
          <OffcanvasHeader closeButton className="border-bottom">
            <h5 className="offcanvas-title">Menu</h5>
          </OffcanvasHeader>

          <OffcanvasBody className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {nav_items.map((item) => {
                const allLinks = flatLinks(item);
                const isActive = isParentActive(allLinks, pathname);
                const key = item.label;

                // ── Plain link ──────────────────────────────────────────────
                if (item.type === 'link') {
                  return (
                    <li
                      key={key}
                      className={`nav-item dropdown ${pathname === item.href ? 'active' : ''}`}
                    >
                      <Link to={item.href!} className="nav-link">
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                // ── Mega-columns (e.g. Landings) ────────────────────────────
                if (item.type === 'mega-columns') {
                  return (
                    <li key={key} className={`nav-item dropdown ${isActive ? 'active' : ''}`}>
                      <button
                        type="button"
                        className="nav-link"
                        onClick={() => toggleMobileDropdown(key)}
                        aria-expanded={openMobileDropdown === key}
                      >
                        <span className="d-flex gap-1 align-items-center">
                          {item.label}
                          <IconifyIcon icon="bx:chevron-down" fontSize={18} />
                        </span>
                      </button>
                      <Collapse in={openMobileDropdown === key}>
                        <div className="dropdown-menu p-0">
                          <div className="d-lg-flex">
                            <div
                              className="mega-dropdown-column d-flex justify-content-center align-items-center rounded-3 rounded-end-0 px-0"
                              style={{ margin: '-1px', backgroundColor: '#f3f6ff' }}
                            >
                              <img src={Landings} alt="Landings" />
                            </div>
                            {(item.columns ?? []).map((column, colIndex) => (
                              <div
                                key={colIndex}
                                className="mega-dropdown-column pt-lg-3 pb-lg-4"
                                style={
                                  colIndex === 0
                                    ? { ['--si-mega-dropdown-column-width' as string]: '15rem' }
                                    : {}
                                }
                              >
                                <ul className="list-unstyled mb-0">
                                  {column.map((link, idx) => (
                                    <li key={idx}>
                                      <Link
                                        to={link.href}
                                        className={`dropdown-item d-flex align-items-center ${pathname === link.href ? 'active' : ''}`}
                                        onClick={() => setShowMenu(false)}
                                      >
                                        {link.label}
                                        {link.badge && (
                                          <span className="badge bg-success ms-2">{link.badge}</span>
                                        )}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Collapse>
                    </li>
                  );
                }

                // ── Mega-sections (e.g. Pages) ──────────────────────────────
                if (item.type === 'mega-sections') {
                  return (
                    <li key={key} className={`nav-item dropdown ${isActive ? 'active' : ''}`}>
                      <button
                        type="button"
                        className="nav-link"
                        onClick={() => toggleMobileDropdown(key)}
                        aria-expanded={openMobileDropdown === key}
                      >
                        <span className="d-flex gap-1 align-items-center">
                          {item.label}
                          <IconifyIcon icon="bx:chevron-down" fontSize={18} />
                        </span>
                      </button>
                      <Collapse in={openMobileDropdown === key}>
                        <div className="dropdown-menu">
                          <div className="d-lg-flex pt-lg-3">
                            {(item.sectioned_columns ?? []).map((column, colIndex) => (
                              <div key={colIndex} className="mega-dropdown-column">
                                {column.map((section, secIndex) => (
                                  <div key={secIndex}>
                                    <h6 className="px-3 mb-2">{section.title}</h6>
                                    <ul className="list-unstyled mb-3">
                                      {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                          <Link
                                            to={link.href}
                                            className={`dropdown-item py-1 ${pathname === link.href ? 'active' : ''}`}
                                            onClick={() => setShowMenu(false)}
                                          >
                                            {link.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      </Collapse>
                    </li>
                  );
                }

                // ── Simple dropdown (e.g. Account) ──────────────────────────
                return (
                  <li key={key} className={`nav-item dropdown ${isActive ? 'active' : ''}`}>
                    <button
                      type="button"
                      className="nav-link"
                      onClick={() => toggleMobileDropdown(key)}
                      aria-expanded={openMobileDropdown === key}
                    >
                      <span className="d-flex gap-1 align-items-center">
                        {item.label}
                        <IconifyIcon icon="bx:chevron-down" fontSize={18} />
                      </span>
                    </button>
                    <Collapse in={openMobileDropdown === key}>
                      <ul className="dropdown-menu">
                        {(item.links ?? []).map((link, index) => (
                          <li key={index}>
                            <Link
                              to={link.href}
                              className={`dropdown-item ${pathname === link.href ? 'active' : ''}`}
                              onClick={() => setShowMenu(false)}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Collapse>
                  </li>
                );
              })}
            </ul>
          </OffcanvasBody>

          {/* Mobile CTA */}
          <div className="offcanvas-header border-top">
            <a
              href={cta_button.href}
              className={`btn btn-${cta_button.variant} w-100`}
              rel="noopener"
              onClick={() => setShowMenu(false)}
            >
              {cta_button.icon && (
                <IconifyIcon icon={cta_button.icon} className="fs-4 lh-1 me-1" />
              )}
              &nbsp;{cta_button.label}
            </a>
          </div>
        </Offcanvas>

        <ThemeToggle themeToggle={isNavDark ?? false} />
        <button
          type="button"
          className="navbar-toggler"
          aria-label="Toggle navigation"
          onClick={() => setShowMenu(true)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Desktop CTA */}
        <Button
          as="a"
          href={cta_button.href}
          className={`btn btn-${cta_button.variant} ${cta_button.size ? `btn-${cta_button.size}` : ''} fs-sm rounded d-none d-lg-inline-flex`}
          rel="noopener"
        >
          {cta_button.icon && (
            <IconifyIcon icon={cta_button.icon} className="fs-5 lh-1 me-1" />
          )}
          &nbsp;{cta_button.label}
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
