import Logo from '@/assets/img/EnigmaNet-logo.png';
import LogoDark from '@/assets/img/EnigmaNet-dark.png';
import { Link, useLocation } from 'react-router';
import { useEffect, useState, useRef } from 'react';
import { Offcanvas, OffcanvasBody, OffcanvasHeader, Nav, Container } from 'react-bootstrap';
import './navbar-cta.css';
import IconifyIcon from '../IconifyIcon';
import ThemeToggle from '../ThemeToggle';
import {
  FALLBACK_CONFIG,
  type MegaMenuItem,
  type NavClass,
  type NavItem,
  type NavLink,
} from '@/utils/nav';
import { useTheme } from '@/utils/useTheme';

// ── Helper functions ─────────────────────────────────────────
const getItemLinks = (item: NavItem): NavLink[] => {
  if (item.type === 'link' && item.href) return [{ label: item.label, href: item.href }];
  if (item.type === 'dropdown') return item.links;
  if (item.type === 'mega') {
    const links: NavLink[] = [];
    Object.values(item.data.panels).forEach(sections => {
      sections.forEach(section => {
        links.push(...section.links);
      });
    });
    if (item.data.footerLink)
      links.push({ label: item.data.footerLink.label, href: item.data.footerLink.href });
    return links;
  }
  return [];
};

const isParentActive = (links: NavLink[], pathname: string) =>
  links.some(link => isNavLinkActive(link.href, pathname));

/** Match active tab styling (e.g. TrueCost cyan) including nested routes. */
const isNavLinkActive = (href: string, pathname: string) => {
  if (href === '/login') {
    return pathname === '/login' || pathname.startsWith('/login/');
  }
  if (href === '/') {
    return pathname === '/';
  }
  return pathname === href || pathname.startsWith(`${href}/`);
};

const MegaMenuDesktop = ({
  item,
  onLinkClick,
}: {
  item: MegaMenuItem;
  onLinkClick: () => void;
}) => {
  const [activeRail, setActiveRail] = useState(item.leftRail[0].id);
  const location = useLocation();
  const pathname = location.pathname;
  const currentSections = item.panels[activeRail] ?? [];
  const { theme } = useTheme();
  return (
    <div
      className="position-absolute top-100 start-0 end-0 p-3 shadow-lg rounded-1"
      style={{
        background: theme === 'dark' ? 'rgba(22, 27, 38, 0.75)' : 'white',
        backdropFilter: theme === 'dark' ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: theme === 'dark' ? 'blur(12px)' : 'none',
        border: theme === 'dark' ? '1px solid rgba(255,255,255,0.08)' : '1px solid #eee',
      }}
    >
      <Container className="px-3">
        <div className="d-flex">
          {/* Left Rail */}
          <div
            className="border-end"
            style={{ width: '260px', flexShrink: 0, borderColor: 'var(--bs-border-color)' }}
          >
            <div className="py-3">
              {item.leftRail.map(rail => (
                <button
                  key={rail.id}
                  className={`w-100 text-start d-flex align-items-center  justify-content-between border-0 px-3 py-2`}
                  onMouseEnter={() => setActiveRail(rail.id)}
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    transition: 'all 0.2s ease',
                    backgroundColor: activeRail === rail.id ? 'var(--bs-gray-100)' : 'transparent',
                    color: activeRail === rail.id ? '#3d5a9e' : 'var(--bs-body-color)',
                  }}
                >
                  {rail.label}
                  <IconifyIcon icon="bx:chevron-right" fontSize="0.875rem" className="opacity-50" />
                </button>
              ))}
              {item.footerLink && (
                <Link
                  to={item.footerLink.href}
                  className="d-block mt-3 pt-2 border-top px-3 py-2 small fw-semibold text-primary text-decoration-none"
                  style={{ borderColor: 'var(--bs-border-color)' }}
                  onClick={onLinkClick}
                >
                  {item.footerLink.label}
                </Link>
              )}
            </div>
          </div>

          {/* Content Columns */}
          <div className="flex-grow-1 p-4 d-flex gap-4 flex-wrap align-content-start">
            {currentSections.map((section, idx) => (
              <div key={idx} style={{ minWidth: '200px' }}>
                <h6 className=" small text-primary fw-bold mb-2 pb-1 border-bottom">
                  {section.title}
                </h6>
                <ul className="list-unstyled mb-0">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="mb-1">
                      <Link
                        to={link.href}
                        className={`d-inline-flex align-items-center gap-1 small text-decoration-none py-1`}
                        style={{
                          transition: 'color 0.2s ease',
                          color: pathname === link.href ? '#2adeff' : 'var(--bs-body-color)',
                          fontWeight: pathname === link.href ? 600 : 400,
                        }}
                        onClick={onLinkClick}
                      >
                        {link.label}
                        {link.badge && (
                          <span className="badge bg-success ms-1" style={{ fontSize: '0.65rem' }}>
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Promo Panel */}
          {item.promo && (
            <div
              className="border-start"
              style={{
                width: '300px',
                flexShrink: 0,
                borderColor: 'var(--bs-border-color)',
                // backgroundColor: 'var(--bs-gray-100)',
              }}
            >
              <div className="p-3">
                <div className="small fw-bold  mb-2" style={{ color: 'var(--bs-gray-600)' }}>
                  {item.promo.label}
                </div>
                <div
                  className="card border-0 shadow-sm overflow-hidden"
                  // style={{ backgroundColor: 'var(--bs-body-bg)' }}
                >
                  <div
                    className="bg-body"
                    style={{
                      height: '100px',
                      backgroundImage: `url(${theme === 'dark' ? LogoDark : item.promo.image})`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                     
                    }}
                  />
                  <div className="card-body bg-body p-3">
                    <p className="small mb-2" style={{ color: 'var(--bs-gray-500)' }}>
                      {item.promo.description}
                    </p>
                    <Link
                      to={item.promo.ctaHref}
                      className="small fw-semibold text-primary text-decoration-none"
                      onClick={onLinkClick}
                    >
                      {item.promo.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

// ── Main Navbar Component ─────────────────────────────────────
const Navbar = ({
  Headerclass = 'header navbar navbar-expand-lg bg-light shadow-sm',
  headerSticky,
  isNavDark = false,
  darkenable = true,
}: NavClass) => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (darkenable) return;

    const forcedTheme = isNavDark ? 'dark' : 'light';

    // Save current theme
    const previousTheme = theme;

    // Force theme
    setTheme(forcedTheme);
    document.documentElement.setAttribute('data-bs-theme', forcedTheme);

    return () => {
      // Restore previous theme when Navbar unmounts
      setTheme(previousTheme);
      document.documentElement.setAttribute('data-bs-theme', previousTheme);
    };
  }, [darkenable, isNavDark]);
  const [isSticky, setIsSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [openMobileMega, setOpenMobileMega] = useState<string | null>(null);
  const [openMobileRail, setOpenMobileRail] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const pathname = location.pathname;
  const currentTheme = darkenable ? theme : isNavDark ? 'dark' : 'light';
  const config = FALLBACK_CONFIG;
  const { logo, nav_items } = config;

  useEffect(() => {
    if (!headerSticky) return;
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headerSticky]);

  useEffect(() => {
    setShowMenu(false);
    setActiveMega(null);
    setOpenMobileMega(null);
    setOpenMobileRail(null);
  }, [pathname]);

  const handleMouseEnter = (label: string) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setActiveMega(label);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => setActiveMega(null), 150);
  };

  const toggleMobileMega = (label: string) => {
    setOpenMobileMega(openMobileMega === label ? null : label);
  };

  const toggleMobileRail = (key: string) => {
    setOpenMobileRail(openMobileRail === key ? null : key);
  };

  return (
    <header
      className={`${Headerclass} d-flex d-lg-block ${
        (isSticky || activeMega) && headerSticky ? headerSticky : ''
      }`}
    >
      {' '}
      {darkenable && (
        <div
          className="bg-dark d-none d-lg-block"
          style={{
            marginTop: '-12px',
            padding: '10px',
          }}
        >
          <div className="container ">
            <div className="d-flex justify-content-end gap-4  align-items-end py-2">
              {/* {utility_nav?.map(link => (
              <Link
                key={link.label}
                to={link.href}
                className="text-decoration-none  fs-sm small text-white-50 "
              >
                {link.label}
              </Link>
            ))} */}
              {darkenable && <ThemeToggle themeToggle={isNavDark} id="theme-mode-desktop" />}
            </div>
          </div>
        </div>
      )}
      <Container className="container px-3 d-flex align-items-center flex-nowrap">
        {/* Logo */}
        <Link to={logo.href} className="navbar-brand pe-3">
          <img
            src={currentTheme === 'dark' ? LogoDark : Logo}
            width={250}
            height={150}
            alt={logo.text}
            style={{
              objectFit: 'cover',
            }}
          />{' '}
        </Link>

        {/* Desktop Navigation */}
        <Nav className="navbar-nav me-auto mb-2 mb-lg-0 d-none d-xl-flex">
          {nav_items.map(item => {
            if (item.type === 'link') {
              return (
                <Link
                  key={item.label}
                  to={item.href!}
                  className={`nav-link nav-item dropdown ${isNavLinkActive(item.href!, pathname) ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              );
            }
            if (item.type === 'mega') {
              const isOpen = activeMega === item.label;
              const allLinks = getItemLinks(item);
              const isActive = isParentActive(allLinks, pathname);
              return (
                <div
                  key={item.label}
                  className="position-static"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`nav-link nav-item dropdown  btn btn-link ${isActive ? 'active' : ''}`}
                    style={{ textDecoration: 'none' }}
                  >
                    {item.label}
                  </button>

                  {isOpen && (
                    <MegaMenuDesktop item={item.data} onLinkClick={() => setActiveMega(null)} />
                  )}
                </div>
              );
            }
            return null;
          })}
        </Nav>

        <Link
          to={config.cta_button.href}
          className="navbar-cta-start-free d-none d-lg-inline-flex"
          style={{ marginLeft: 'auto' }}
        >
          {config.cta_button.label}
        </Link>
        {/* Mobile Toggle */}
        <div className="d-lg-none d-flex align-items-center gap-2 ms-auto">
          {darkenable && (
            <ThemeToggle themeToggle={isNavDark} isColor={true} id="theme-mode-mobile" />
          )}

          <button
            type="button"
            className="navbar-toggler border-0"
            aria-label="Toggle navigation"
            onClick={() => setShowMenu(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </Container>
      {/* Mobile Offcanvas Menu */}
      <Offcanvas show={showMenu} onHide={() => setShowMenu(false)} placement="end">
        <OffcanvasHeader closeButton className="border-bottom">
          <h5 className="offcanvas-title">Menu</h5>
        </OffcanvasHeader>
        <OffcanvasBody className="offcanvas-body">
          <div className="d-flex flex-column h-100">
            {nav_items.map(item => {
              if (item.type === 'link') {
                return (
                  <Link
                    key={item.label}
                    to={item.href!}
                    className={`d-block px-4 py-3 text-decoration-none border-bottom${isNavLinkActive(item.href!, pathname) ? ' active' : ''}`}
                    style={{
                      color: isNavLinkActive(item.href!, pathname)
                        ? '#2adeff'
                        : 'var(--bs-body-color)',
                    }}
                    onClick={() => setShowMenu(false)}
                  >
                    {item.label}
                  </Link>
                );
              }
              if (item.type === 'mega') {
                const isMegaOpen = openMobileMega === item.label;
                return (
                  <div key={item.label} className="border-bottom">
                    <button
                      className="d-flex justify-content-between align-items-center w-100 px-4 py-3 bg-body border-0"
                      onClick={() => toggleMobileMega(item.label)}
                      style={{ fontWeight: 500, color: 'var(--bs-body-color)' }}
                    >
                      <span>{item.label}</span>
                      <IconifyIcon
                        icon={isMegaOpen ? 'bx:chevron-up' : 'bx:chevron-down'}
                        fontSize="1.25rem"
                      />
                    </button>
                    {isMegaOpen && (
                      <div
                        className="px-4 py-2 bg-body"
                        style={{ backgroundColor: 'var(--bs-gray-100)' }}
                      >
                        {item.data.leftRail.map(rail => {
                          const railKey = `${item.label}-${rail.id}`;
                          const isRailOpen = openMobileRail === railKey;
                          const sections = item.data.panels[rail.id] ?? [];
                          return (
                            <div key={rail.id} className="mb-2">
                              <button
                                className="d-flex justify-content-between align-items-center w-100 py-2 bg-transparent border-0 small fw-semibold"
                                onClick={() => toggleMobileRail(railKey)}
                                style={{ color: 'var(--bs-body-color)' }}
                              >
                                {rail.label}
                                <IconifyIcon
                                  icon={isRailOpen ? 'bx:chevron-up' : 'bx:chevron-down'}
                                />
                              </button>
                              {isRailOpen && (
                                <div className="ps-3 pb-2">
                                  {sections.map((section, si) => (
                                    <div key={si} className="mb-2">
                                      <div className="small  fw-bold text-primary mt-2">
                                        {section.title}
                                      </div>
                                      {section.links.map(link => (
                                        <Link
                                          key={link.href}
                                          to={link.href}
                                          className="d-block py-1 small text-decoration-none"
                                          style={{ color: 'var(--bs-body-color)' }}
                                          onClick={() => setShowMenu(false)}
                                        >
                                          {link.label}
                                          {link.badge && (
                                            <span className="badge bg-success ms-1">
                                              {link.badge}
                                            </span>
                                          )}
                                        </Link>
                                      ))}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                        {item.data.footerLink && (
                          <Link
                            to={item.data.footerLink.href}
                            className="d-block mt-2 pt-2 border-top text-primary fw-semibold text-decoration-none py-2"
                            onClick={() => setShowMenu(false)}
                          >
                            {item.data.footerLink.label}
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </header>
  );
};

export default Navbar;
