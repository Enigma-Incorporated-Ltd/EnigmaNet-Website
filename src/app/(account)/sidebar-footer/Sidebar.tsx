import avatar18 from '@/assets/img/avatar/18.jpg';
import IconifyIcon from '@/components/IconifyIcon';
import { useState } from 'react';
import { Button, Collapse, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link, useLocation } from 'react-router';

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  
  const [open, setOpen] = useState(false);

  const menuItems = [
    { href: '/account-details', icon: 'bx:cog', label: 'Account Details' },
    { href: '/account-security', icon: 'bx:lock-alt', label: 'Security' },
    { href: '/account-notifications', icon: 'bx:bell', label: 'Notifications' },
    { href: '/account-messages', icon: 'bx:chat', label: 'Messages' },
    { href: '/account-saved-items', icon: 'bx:bookmark', label: 'Saved Items' },
    { href: '/account-collections', icon: 'bx:collection', label: 'My Collections' },
    { href: '/account-payment', icon: 'bx:credit-card-front', label: 'Payment Details' },
    { href: '/account-signin', icon: 'bx:log-out', label: 'Sign Out' },
  ];

  return (
    <aside className="col-lg-3 col-md-4 border-end pb-5 mt-n5">
      <div className="position-sticky top-0">
        <div className="text-center pt-5">
          <div className="d-table position-relative mx-auto mt-2 mt-lg-4 pt-5 mb-3">
            <img src={avatar18} className="d-block rounded-circle" width={120} alt="John Doe" />
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-change">Change picture</Tooltip>}
            >
              <button
                type="button"
                className="btn btn-icon btn-light bg-white btn-sm border rounded-circle shadow-sm position-absolute bottom-0 end-0 mt-4"
                aria-label="Change picture"
              >
                <IconifyIcon icon="bx:refresh" fontSize={18} />
              </button>
            </OverlayTrigger>
          </div>

          <h2 className="h5 mb-1">John Doe</h2>
          <p className="mb-3 pb-3">jonny@email.com</p>

          <Button
            variant="secondary"
            className="w-100 d-md-none mt-n2 mb-3 d-flex align-items-center justify-content-center"
            onClick={() => setOpen(!open)}
            aria-controls="account-menu"
            aria-expanded={open}
          >
            <IconifyIcon icon="bxs:user-detail" className="fs-xl me-2" />
            Account menu
            <IconifyIcon icon="bx:chevron-down" className="fs-lg ms-1" />
          </Button>

          <Collapse in={open}>
            <div id="account-menu" className="list-group list-group-flush d-md-none">
              {menuItems.map(item => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`list-group-item list-group-item-action d-flex align-items-center ${pathname === item.href ? 'active' : ''
                    }`}
                  onClick={() => setOpen(false)}
                >
                  <IconifyIcon icon={item.icon} className="fs-xl opacity-60 me-2" />
                  {item.label}
                </Link>
              ))}
            </div>
          </Collapse>

          <div className="list-group list-group-flush d-none d-md-block">
            {menuItems.map(item => (
              <Link
                key={item.href}
                to={item.href}
                className={`list-group-item list-group-item-action d-flex align-items-center ${pathname === item.href ? 'active' : ''
                  }`}
              >
                <IconifyIcon icon={item.icon} className="fs-xl opacity-60 me-2" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
