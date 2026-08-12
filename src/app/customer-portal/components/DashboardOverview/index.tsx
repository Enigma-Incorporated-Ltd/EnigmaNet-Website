import { useState, useRef } from 'react';
import AppCard from '../AppCard';
import './overview.css';

interface DashboardOverviewProps {
  displayName: string;
  applications: any[];
  filteredApps: any[];
  dashboardLoading: boolean;
  searchQuery: string;
  setActiveNav: (nav: string) => void;
  session: { sessionToken: string };
}

export default function DashboardOverview({
  displayName,
  applications,
  filteredApps,
  dashboardLoading,
  searchQuery,
  setActiveNav,
  session,
}: DashboardOverviewProps) {
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [supportPos, setSupportPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDraggingSupport, setIsDraggingSupport] = useState(false);

  const isDraggingRef = useRef(false);
  const dragStartRef = useRef<{ startX: number; startY: number; posX: number; posY: number }>({
    startX: 0,
    startY: 0,
    posX: 0,
    posY: 0,
  });
  const hasDraggedRef = useRef(false);

  const handleSupportPointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (err) {
      // Ignore
    }
    isDraggingRef.current = true;
    setIsDraggingSupport(true);
    hasDraggedRef.current = false;
    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      posX: supportPos.x,
      posY: supportPos.y,
    };
  };

  const handleSupportPointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - dragStartRef.current.startX;
    const deltaY = e.clientY - dragStartRef.current.startY;
    if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
      hasDraggedRef.current = true;
    }
    setSupportPos({
      x: dragStartRef.current.posX + deltaX,
      y: dragStartRef.current.posY + deltaY,
    });
  };

  const handleSupportPointerUp = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDraggingSupport(false);
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch (err) {
      // Ignore
    }
  };

  const handleSupportClick = (e: React.MouseEvent) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    setIsSupportOpen(true);
  };

  return (
    <>
      {/* Welcome Banner */}
      <div className="portal-welcome">
        <h1 className="portal-welcome__title">Welcome, {displayName.split(' ')[0]}!</h1>
        <p className="portal-welcome__subtitle">
          Access your Enigma applications, manage your account and discover new solutions from one secure portal.
        </p>
      </div>

      {/* Hero Cards Row */}
      <div className="portal-hero-cards">
        {/* Overview Block */}
        <div className="portal-hero-block">
          <div className="portal-hero-card">
            <div className="portal-hero-card__header">
              <div className="portal-hero-card__icon-wrap">
                <svg className="portal-hero-card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
                  <path d="M10 5.00015H14M1.5 12.5002C1.5 12.5002 5.5 3.00015 6 2.00015C6.5 1.00015 7.5 1.00015 8 1.00015C8.5 1.00015 10 1.00015 10 3.00015V14.0002H14V3.00015C14 1.00015 15.5 1.00015 16 1.00015C16.5 1.00015 17.5 1.00015 18 2.00015C18.5 3.00015 22.5 12.5002 22.5 12.5002M18.5 19.0002C19.0909 19.0002 19.6761 18.8838 20.2221 18.6576C20.768 18.4315 21.2641 18.1 21.682 17.6821C22.0998 17.2643 22.4313 16.7682 22.6575 16.2222C22.8836 15.6763 23 15.0911 23 14.5002C23 13.9092 22.8836 13.324 22.6575 12.7781C22.4313 12.2321 22.0998 11.736 21.682 11.3182C21.2641 10.9003 19.0909 10.0002 18.5 10.0002C17.3065 10.0002 16.1619 10.4743 15.318 11.3182C14.4741 12.1621 14 13.3067 14 14.5002C14 15.6936 14.4741 16.8382 15.318 17.6821C16.1619 18.526 17.3065 19.0002 5.5 19.0002ZM5.5 19.0002C4.90905 19.0002 4.32389 18.8838 3.77792 18.6576C3.23196 18.4315 2.73588 18.1 2.31802 17.6821C1.90016 17.2643 1.56869 16.7682 1.34254 16.2222C1.1164 15.6763 1 15.0911 1 14.5002C1 13.9092 1.1164 13.324 1.34254 12.7781C1.56869 12.2321 1.90016 11.736 2.31802 11.3182C2.73588 10.9003 3.23196 10.5688 3.77792 10.3427C4.32389 10.1165 4.90905 10.0002 5.5 10.0002C6.69347 10.0002 7.83807 10.4743 8.68198 11.3182C9.52589 12.1621 10 13.3067 10 14.5002C10 15.6936 9.52589 16.8382 8.68198 17.6821C7.83807 18.526 6.69347 19.0002 5.5 19.0002Z" stroke="url(#paint0_linear_overview_icon)" strokeWidth="2" />
                  <defs>
                    <linearGradient id="paint0_linear_overview_icon" x1="0.98118" y1="10.0002" x2="23" y2="10.0002" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2ADEFF" />
                      <stop offset="1" stopColor="#002398" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="portal-hero-card__label">Overview</span>
            </div>
            <div className="portal-hero-card__body">
              <div className="portal-hero-card__group">
                <span className="portal-hero-card__title">{applications.length}</span>
                <span className="portal-hero-card__desc">Active services</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Block */}
        <div className="portal-hero-block">
          <div className="portal-hero-card">
            <div className="portal-hero-card__header">
              <div className="portal-hero-card__icon-wrap">
                <img
                  src="/eos-icons_product-subscriptions-outlined.svg"
                  alt="Subscription icon"
                  className="portal-hero-card__icon"
                  width="24"
                  height="24"
                />
              </div>
              <span className="portal-hero-card__label">Subscription</span>
            </div>
            <div className="portal-hero-card__body">
              <div className="portal-hero-card__group">
                <span className="portal-hero-card__title portal-hero-card__title--long">Enterprize<br />plan</span>
                <span className="portal-hero-card__desc">Renews on 27 Nov<br />2027</span>
              </div>
            </div>
          </div>
        </div>

        {/* Health Block */}
        <div className="portal-hero-block">
          <div className="portal-hero-card">
            <div className="portal-hero-card__header">
              <div className="portal-hero-card__icon-wrap">
                <img
                  src="/Group.svg"
                  alt="Health icon"
                  className="portal-hero-card__icon"
                  width="24"
                  height="24"
                />
              </div>
              <span className="portal-hero-card__label">Health</span>
            </div>
            <div className="portal-hero-card__body">
              <div className="portal-hero-card__group">
                <span className="portal-hero-card__title portal-hero-card__title--long">All system operational</span>
                <span className="portal-hero-card__desc">No active alerts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity Block */}
        <div className="portal-hero-block">
          <div className="portal-hero-card">
            <div className="portal-hero-card__header">
              <div className="portal-hero-card__icon-wrap">
                <img
                  src="/Vector.svg"
                  alt="Recent Activity icon"
                  className="portal-hero-card__icon"
                  width="24"
                  height="24"
                />
              </div>
              <span className="portal-hero-card__label">Recent Activity</span>
            </div>
            <div className="portal-hero-card__body">
              <div className="portal-hero-card__group">
                <span className="portal-hero-card__title">12</span>
                <span className="portal-hero-card__desc">Recent logins</span>
                <a
                  href="#activity"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveNav('activities');
                  }}
                  className="portal-hero-card__link"
                >
                  View all
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Support Button */}
        <button
          type="button"
          className={`portal-support-btn ${isDraggingSupport ? 'portal-support-btn--dragging' : ''}`}
          aria-label="Support"
          onPointerDown={handleSupportPointerDown}
          onPointerMove={handleSupportPointerMove}
          onPointerUp={handleSupportPointerUp}
          onPointerCancel={handleSupportPointerUp}
          onClick={handleSupportClick}
          style={{
            transform: `translate(${supportPos.x}px, ${supportPos.y}px)`,
            cursor: isDraggingSupport ? 'grabbing' : 'grab',
            touchAction: 'none',
            userSelect: 'none',
          }}
        >
          <div className="portal-support-btn__outer">
            <div className="portal-support-btn__inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.1222 4.87122C13.4285 4.66497 12.7122 4.56372 11.9997 4.56372C8.18223 4.56372 4.99848 7.42872 4.59348 11.2312L4.56348 15.9037H6.32973V16.7887H7.72098C8.27598 16.7887 8.75223 16.1475 8.78973 15.5962C8.84973 14.7787 8.84598 13.5187 8.78973 12.7837C8.74848 12.2587 8.26473 11.625 7.72098 11.625H6.32973V12.5062H5.26473V12.4162C5.19723 10.9612 5.53848 9.60372 6.24348 8.49372L6.29598 8.41122L6.37848 8.46747L7.70223 9.42372C8.10348 8.86872 8.60598 8.26122 9.27723 7.82247C10.0722 7.29747 11.0172 7.01997 11.9997 7.01997C12.9822 7.01997 13.9722 7.31247 14.7822 7.85622C15.3972 8.27247 15.8772 8.84997 16.301 9.42372L17.606 8.45622L17.6847 8.39622L17.741 8.47872C18.446 9.55122 18.8022 10.95 18.7422 12.4162V12.5062H17.6735V11.625H16.2822C15.7272 11.625 15.251 12.2625 15.2097 12.8137C15.1535 13.6312 15.1535 14.8912 15.2097 15.6262C15.251 16.1512 15.7385 16.7887 16.2822 16.7887H17.6735V15.9037H18.7422V16.6012C18.7422 17.1712 18.0297 17.8537 17.4297 17.8575H14.0735L14.051 17.7975C13.8672 17.2987 13.406 16.9762 12.8697 16.9762C12.4985 16.9762 12.1647 17.1375 11.9285 17.4262C11.6472 17.7712 11.5797 18.2512 11.7522 18.6787C11.9247 19.0987 12.2847 19.3837 12.7197 19.4362C12.7422 19.4362 12.7685 19.44 12.7947 19.44C12.8322 19.44 12.866 19.4362 12.9035 19.4362C12.941 19.4325 12.9822 19.4325 13.0197 19.4325H13.0797C13.556 19.3125 13.8897 19.0275 14.051 18.6112L14.0735 18.5512H17.4897C18.2997 18.4837 19.0347 17.9287 19.3122 17.1712C19.3422 17.0887 19.361 17.0025 19.3797 16.9125C19.3985 16.8375 19.4135 16.7625 19.436 16.6912V11.5012C19.2597 8.46747 17.0735 5.73747 14.1222 4.87122ZM7.02348 12.3187H7.66098C7.72098 12.3187 7.93473 12.4612 7.95348 12.48C8.03223 12.5625 8.08473 12.7237 8.09598 12.8287C8.14098 13.2975 8.12223 13.8112 8.09973 14.3062C8.08098 14.7487 8.06223 15.2062 8.09223 15.6225C8.08473 15.8025 7.83348 16.0912 7.66098 16.0912H7.02348V12.3187ZM5.26098 13.2H6.32973V15.21H5.26098V13.2ZM17.2272 7.87497L17.216 7.88997L17.2047 7.90122L16.511 8.39622L16.4397 8.44497L16.3872 8.38122C15.4797 7.30872 14.231 6.60372 12.8735 6.39747C12.5885 6.35247 12.296 6.32997 12.011 6.32997C10.3122 6.32997 8.71098 7.07622 7.61598 8.37747L7.55973 8.44497L7.48848 8.39622L6.79848 7.88622L6.71973 7.82622L6.77973 7.75122C7.58598 6.71997 8.74473 5.93997 10.0385 5.54997C10.6722 5.35872 11.3322 5.26497 11.996 5.26497C13.9197 5.26497 15.7497 6.07122 17.0135 7.48122C17.2722 7.77372 17.2647 7.82247 17.2272 7.87497ZM16.976 16.0912H16.3385C16.2747 16.0912 16.0497 15.9262 16.0347 15.9112C15.9597 15.825 15.9147 15.6825 15.9072 15.585C15.8622 15.1162 15.881 14.6025 15.9072 14.1075C15.926 13.665 15.9447 13.2075 15.9147 12.7875C15.911 12.6637 16.0272 12.5287 16.0797 12.4762C16.136 12.4165 16.2447 12.3187 16.3422 12.3187H16.9797V16.0912H16.976ZM13.2635 18.585C13.1585 18.69 13.031 18.7462 12.896 18.7462C12.6822 18.7462 12.4797 18.6112 12.3897 18.4087C12.3035 18.2175 13.3335 18.015 12.476 17.85C12.5847 17.73 12.7197 17.6625 12.866 17.6625C13.0872 17.6625 13.301 17.8125 13.3872 18.0225C13.4697 18.2175 13.4247 18.4237 13.2635 18.585ZM18.7422 15.21H17.6735V13.2H18.7422V15.21Z" fill="white" />
              </svg>
            </div>
          </div>
        </button>
      </div>

      {/* Support Pop-up Modal */}
      {isSupportOpen && (
        <div className="portal-support-modal-overlay" onClick={() => setIsSupportOpen(false)}>
          <div className="portal-support-modal" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              type="button"
              className="portal-support-modal__close"
              onClick={() => setIsSupportOpen(false)}
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16.3959 7.757C16.4889 7.84988 16.5627 7.96016 16.613 8.08156C16.6633 8.20296 16.6892 8.33309 16.6892 8.4645C16.6892 8.59592 16.6633 8.72605 16.613 8.84744C16.5627 8.96884 16.4889 9.07913 16.3959 9.172L13.4139 12.153L16.0899 14.828C16.2776 15.0156 16.383 15.2701 16.383 15.5355C16.383 15.8009 16.2776 16.0554 16.0899 16.243C15.9023 16.4306 15.6478 16.5361 15.3824 16.5361C15.1171 16.5361 14.8626 16.4306 14.6749 16.243L11.9999 13.567L9.32494 16.243C9.1373 16.4306 8.88281 16.5361 8.61745 16.5361C8.35208 16.5361 8.09759 16.4306 7.90994 16.243C7.7223 16.0554 7.61689 15.8009 7.61689 15.5355C7.61689 15.2701 7.7223 15.0156 7.90994 14.828L10.5859 12.153L7.60394 9.172C7.51103 9.07903 7.43735 8.96866 7.38709 8.84721C7.33683 8.72575 7.31099 8.59559 7.31104 8.46415C7.31108 8.33271 7.33702 8.20256 7.38736 8.08114C7.4377 7.95973 7.51147 7.84941 7.60444 7.7565C7.69742 7.66359 7.80779 7.5899 7.92924 7.53965C8.05069 7.48939 8.18086 7.46355 8.3123 7.46359C8.44374 7.46364 8.57388 7.48957 8.6953 7.53992C8.81672 7.59026 8.92704 7.66403 9.01995 7.757L11.9999 10.74L14.9809 7.758C15.0738 7.66502 15.1841 7.59127 15.3055 7.54094C15.4269 7.49062 15.557 7.46472 15.6884 7.46472C15.8199 7.46472 15.95 7.49062 16.0714 7.54094C16.1928 7.59127 16.3031 7.66403 16.3959 7.757Z" fill="url(#paint0_linear_modal_close)" />
                <path fillRule="evenodd" clipRule="evenodd" d="M4 1C3.20435 1 2.44129 1.31607 1.87868 1.87868C1.31607 2.44129 1 3.20435 1 4V20C1 20.7956 1.31607 21.5587 1.87868 22.1213C2.44129 22.6839 3.20435 23 4 23H20C20.7956 23 21.5587 22.6839 22.1213 22.1213C22.6839 21.5587 23 20.7956 23 20V4C23 3.20435 22.6839 2.44129 22.1213 1.87868C21.5587 1.31607 20.7956 1 20 1H4ZM20 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3Z" fill="url(#paint1_linear_modal_close)" />
                <defs>
                  <linearGradient id="paint0_linear_modal_close" x1="7.31265" y1="11.9956" x2="16.688" y2="11.9956" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2ADEFF" />
                    <stop offset="1" stopColor="#002398" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_modal_close" x1="1.00379" y1="11.9897" x2="22.9972" y2="11.9897" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2ADEFF" />
                    <stop offset="1" stopColor="#002398" />
                  </linearGradient>
                </defs>
              </svg>
            </button>

            {/* Modal Content Header */}
            <div className="portal-support-modal__header">
              <div className="portal-support-modal__icon-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M14.1227 4.87125C13.429 4.665 12.7127 4.56375 12.0002 4.56375C8.18271 4.56375 4.99896 7.42875 4.59396 11.2313L4.56396 15.9038H6.33021V16.7888H7.72146C8.27646 16.7888 8.75272 16.1475 8.79022 15.5963C8.85021 14.7788 8.84647 13.5188 8.79022 12.7838C8.74896 12.2588 8.26521 11.625 7.72146 11.625H6.33021V12.5063H5.26521V12.4163C5.19771 10.9613 5.53896 9.60375 6.24396 8.49375L6.29647 8.41125L6.37896 8.4675L7.70272 9.42375C8.10397 8.86875 8.60646 8.26125 9.27771 7.8225C10.0727 7.2975 11.0177 7.02 12.0002 7.02C12.9827 7.02 13.9727 7.3125 14.7827 7.85625C15.3977 8.2725 15.8777 8.85 16.3015 9.42375L17.6065 8.45625L17.6852 8.39625L17.7415 8.47875C18.4465 9.55125 18.8027 10.95 18.7427 12.4163V12.5063H17.674V11.625H16.2827C15.7277 11.625 15.2515 12.2625 15.2102 12.8138C15.154 13.6313 15.154 14.8913 15.2102 15.6263C15.2515 16.1513 15.739 16.7888 16.2827 16.7888H17.674V15.9038H18.7427V16.6013C18.7427 17.1713 18.0302 17.8538 17.4302 17.8575H14.074L14.0515 17.7975C13.8677 17.2988 13.4065 16.9763 12.8702 16.9763C12.499 16.9763 12.1652 17.1375 11.929 17.4263C11.6477 17.7713 11.5802 18.2513 11.7527 18.6788C11.9252 19.0988 12.2852 19.3838 12.7202 19.4363C12.7427 19.4363 12.769 19.44 12.7952 19.44C12.8327 19.44 12.8665 19.4363 12.904 19.4363C12.9415 19.4325 12.9827 19.4325 13.0202 19.4325H13.0802C13.5565 19.3125 13.8902 19.0275 14.0515 18.6113L14.074 18.5513H17.4902C18.3002 18.4838 19.0352 17.9288 19.3127 17.1713C19.3427 17.0888 19.3615 17.0025 19.3802 16.9125C19.399 16.8375 19.414 16.7625 19.4365 16.6912V11.5013C19.2602 8.4675 17.074 5.7375 14.1227 4.87125ZM7.02396 12.3188H7.66146C7.72146 12.3188 7.93521 12.4613 7.95396 12.48C8.03271 12.5625 8.08521 12.7238 8.09646 12.8288C8.14146 13.2975 8.12271 13.8113 8.10021 14.3063C8.08147 14.7488 8.06271 15.2063 8.09271 15.6225C8.08521 15.8025 7.83396 16.0913 7.66146 16.0913H7.02396V12.3188ZM5.26146 13.2H6.33021V15.21H5.26146V13.2ZM17.2277 7.875L17.2165 7.89L17.2052 7.90125L16.5115 8.39625L16.4402 8.445L16.3877 8.38125C15.4802 7.30875 14.2315 6.60375 12.874 6.3975C12.589 6.3525 12.2965 6.33 12.0115 6.33C10.3127 6.33 8.71146 7.07625 7.61646 8.3775L7.56021 8.445L7.48896 8.39625L6.79896 7.88625L6.72021 7.82625L6.78021 7.75125C7.58646 6.72 8.74521 5.94 10.039 5.55C10.6727 5.35875 11.3327 5.265 11.9965 5.265C13.9202 5.265 15.7502 6.07125 17.014 7.48125C17.2727 7.77375 17.2652 7.8225 17.2277 7.875ZM16.9765 16.0913H16.339C16.2752 16.0913 16.0502 15.9263 16.0352 15.9113C15.9602 15.825 15.9152 15.6825 15.9077 15.585C15.8627 15.1163 15.8815 14.6025 15.9077 14.1075C15.9265 13.665 15.9452 13.2075 15.9152 12.7875C15.9115 12.6638 16.0277 12.5288 16.0802 12.4763C16.1365 12.4163 16.2452 12.3188 16.3427 12.3188H16.9802V16.0913H16.9765ZM13.264 18.585C13.159 18.69 13.0315 18.7463 12.8965 18.7463C12.6827 18.7463 12.4802 18.6113 12.3902 18.4088C12.304 18.2175 12.334 18.015 12.4765 17.85C12.5852 17.73 12.7202 17.6625 12.8665 17.6625C13.0877 17.6625 13.3015 17.8125 13.3877 18.0225C13.4702 18.2175 13.4252 18.4238 13.264 18.585ZM18.7427 15.21H17.674V13.2H18.7427V15.21Z" fill="white" />
                </svg>
              </div>
              <div className="portal-support-modal__title-group">
                <h3 className="portal-support-modal__title">Contact Support</h3>
                <p className="portal-support-modal__subtitle">Speak to the Enigma Net support team</p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="portal-support-modal__form">
              <div className="portal-support-modal__field">
                <label className="portal-support-modal__label">Full name</label>
                <input
                  type="text"
                  className="portal-support-modal__input"
                  defaultValue="Sarah Johnson"
                  placeholder="Sarah Johnson"
                />
              </div>

              <div className="portal-support-modal__field">
                <label className="portal-support-modal__label">LEAVE A MESSAGE</label>
                <textarea
                  className="portal-support-modal__textarea"
                  placeholder="Enter your message..."
                  rows={3}
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="portal-support-modal__footer">
              <button type="button" className="portal-support-modal__submit-btn" onClick={() => setIsSupportOpen(false)}>
                <span>Send a message</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* My Services Section */}
      <section className="portal-section" id="services">
        <div className="portal-section__header">
          <div className="portal-section__header-text">
            <h2 className="portal-section__title">My Services</h2>
            <p className="portal-section__subtitle">Applications available with your current subscription.</p>
          </div>
          <div className="portal-section__nav">
            <button className="portal-section__nav-btn" aria-label="Previous services">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="11.5" transform="matrix(-1 0 0 1 24 0)" stroke="url(#paint0_linear_back_btn)" />
                <path d="M18 11.5H18.5V12.5H18V12V11.5ZM18 12V12.5H5V12V11.5H18V12Z" fill="url(#paint1_linear_back_btn)" />
                <path d="M11 5L5 11.5L11 18" stroke="url(#paint2_linear_back_btn)" strokeLinecap="square" />
                <defs>
                  <linearGradient id="paint0_linear_back_btn" x1="-0.0205304" y1="12" x2="24" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2ADEFF" />
                    <stop offset="1" stopColor="#002398" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_back_btn" x1="18.0111" y1="12.5" x2="5" y2="12.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2ADEFF" />
                    <stop offset="1" stopColor="#002398" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_back_btn" x1="11.0051" y1="11.5" x2="5" y2="11.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2ADEFF" />
                    <stop offset="1" stopColor="#002398" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
            <button className="portal-section__nav-btn" aria-label="Next services">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)' }}>
                <circle cx="12" cy="12" r="11.5" transform="matrix(-1 0 0 1 24 0)" stroke="url(#paint0_linear_fwd_btn)" />
                <path d="M18 11.5H18.5V12.5H18V12V11.5ZM18 12V12.5H5V12V11.5H18V12Z" fill="url(#paint1_linear_fwd_btn)" />
                <path d="M11 5L5 11.5L11 18" stroke="url(#paint2_linear_fwd_btn)" strokeLinecap="square" />
                <defs>
                  <linearGradient id="paint0_linear_fwd_btn" x1="-0.0205304" y1="12" x2="24" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2ADEFF" />
                    <stop offset="1" stopColor="#002398" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_fwd_btn" x1="18.0111" y1="12.5" x2="5" y2="12.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2ADEFF" />
                    <stop offset="1" stopColor="#002398" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_fwd_btn" x1="11.0051" y1="11.5" x2="5" y2="11.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2ADEFF" />
                    <stop offset="1" stopColor="#002398" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
        </div>

        {dashboardLoading && (
          <div className="portal-dashboard__loading">
            <span className="portal-spinner portal-spinner--lg" />
            <p>Loading your applications...</p>
          </div>
        )}

        {!dashboardLoading && applications.length === 0 && (
          <div className="portal-dashboard__empty">
            <p>No applications are available for your account.</p>
            <span>Contact support if you believe this is incorrect.</span>
          </div>
        )}

        {!dashboardLoading && applications.length > 0 && filteredApps.length === 0 && (
          <div className="portal-dashboard__empty">
            <p>No applications match your search query "{searchQuery}".</p>
          </div>
        )}

        {!dashboardLoading && filteredApps.length > 0 && (
          <div className="portal-dashboard__grid">
            {filteredApps.map((app) => (
              <AppCard
                key={app.clientId}
                app={app}
                sessionToken={session.sessionToken}
              />
            ))}
          </div>
        )}
      </section>

      {/* Marketplace Section */}
      <section className="portal-section" id="marketplace">
        <div className="portal-section__header">
          <div className="portal-section__header-text">
            <h2 className="portal-section__title">Marketplace</h2>
            <p className="portal-section__subtitle portal-section__subtitle--marketplace">Explore products available to extend your platform.</p>
          </div>
          <div className="portal-section__nav">
            <button className="portal-section__nav-btn" aria-label="Previous marketplace products">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="11.5" transform="matrix(-1 0 0 1 24 0)" stroke="url(#paint0_linear_market_back)" />
                <path d="M18 11.5H18.5V12.5H18V12V11.5ZM18 12V12.5H5V12V11.5H18V12Z" fill="url(#paint1_linear_market_back)" />
                <path d="M11 5L5 11.5L11 18" stroke="url(#paint2_linear_market_back)" strokeLinecap="square" />
                <defs>
                  <linearGradient id="paint0_linear_market_back" x1="-0.0205304" y1="12" x2="24" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2ADEFF" />
                    <stop offset="1" stopColor="#002398" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_market_back" x1="18.0111" y1="12.5" x2="5" y2="12.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2ADEFF" />
                    <stop offset="1" stopColor="#002398" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_market_back" x1="11.0051" y1="11.5" x2="5" y2="11.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2ADEFF" />
                    <stop offset="1" stopColor="#002398" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
            <button className="portal-section__nav-btn" aria-label="Next marketplace products">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)' }}>
                <circle cx="12" cy="12" r="11.5" transform="matrix(-1 0 0 1 24 0)" stroke="url(#paint0_linear_market_fwd)" />
                <path d="M18 11.5H18.5V12.5H18V12V11.5ZM18 12V12.5H5V12V11.5H18V12Z" fill="url(#paint1_linear_market_fwd)" />
                <path d="M11 5L5 11.5L11 18" stroke="url(#paint2_linear_market_fwd)" strokeLinecap="square" />
                <defs>
                  <linearGradient id="paint0_linear_market_fwd" x1="-0.0205304" y1="12" x2="24" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2ADEFF" />
                    <stop offset="1" stopColor="#002398" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_market_fwd" x1="18.0111" y1="12.5" x2="5" y2="12.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2ADEFF" />
                    <stop offset="1" stopColor="#002398" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_market_fwd" x1="11.0051" y1="11.5" x2="5" y2="11.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2ADEFF" />
                    <stop offset="1" stopColor="#002398" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
        </div>
        <div className="portal-market-grid">
          {/* EDGE App Card */}
          <div className="portal-market-card">
            <div className="portal-market-card__inner">
              <div className="portal-market-card__badge">RECOMMENDED</div>
              <div className="portal-market-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="71" viewBox="0 0 70 71" fill="none">
                  <g filter="url(#filter0_dddddd_542_224)">
                    <path d="M53.386 32.2844C52.3142 32.2844 51.3517 32.7328 50.6626 33.4437L30.0126 21.0953C30.1438 20.7234 30.2095 20.3297 30.2095 19.914C30.2095 17.825 28.5142 16.1297 26.436 16.1297C25.3532 16.1297 24.3688 16.589 23.6798 17.3219L14.4923 11.8312C14.0985 11.6015 13.5954 11.6344 13.2454 11.9187C12.8845 12.2031 12.7423 12.6844 12.8845 13.1219L19.3485 32.4922C17.861 33.0062 16.8001 34.4062 16.8001 36.0578C16.8001 37.4687 17.5767 38.7047 18.7251 39.35L12.8845 57.3531C12.7532 57.7687 12.8735 58.2281 13.2017 58.5125C13.4095 58.6875 13.661 58.7859 13.9235 58.7859C14.0876 58.7859 14.2407 58.7531 14.3938 58.6765L23.997 54.1265C24.6532 54.6734 25.5063 55.0125 26.436 55.0125C28.5142 55.0125 30.2095 53.3172 30.2095 51.2281C30.2095 51.1406 30.2095 51.0422 30.2095 50.9547L51.3079 39.2187C51.9095 39.6125 52.6204 39.8422 53.397 39.8422C55.486 39.8422 57.1813 38.1469 57.1813 36.0578C57.1813 33.9687 55.486 32.2844 53.397 32.2844H53.386ZM54.8845 36.5828C54.6657 37.2172 54.0751 37.6547 53.386 37.6547C52.511 37.6547 51.7892 36.9437 51.7892 36.0578C51.7892 35.4344 52.1501 34.8984 52.6751 34.6469C52.8938 34.5375 53.1345 34.4719 53.386 34.4719C54.261 34.4719 54.9829 35.1828 54.9829 36.0578C54.9829 36.2437 54.9501 36.4187 54.8845 36.5828ZM26.436 21.5C25.5501 21.5 24.8392 20.789 24.8392 19.914C24.8392 19.039 25.5501 18.3172 26.436 18.3172C26.9282 18.3172 27.3767 18.5469 27.661 18.9078C27.8907 19.1812 28.022 19.5312 28.022 19.914C28.022 20.789 27.311 21.5 26.436 21.5ZM15.9032 15.2219L22.7063 19.2906C22.6735 19.4984 22.6517 19.7062 22.6517 19.914C22.6517 21.1062 23.2095 22.1672 24.0735 22.8562L21.2954 31.4094L15.9032 15.2219ZM20.0376 34.5703C20.2017 34.5047 20.3876 34.4719 20.5735 34.4719C21.4595 34.4719 22.1704 35.1828 22.1704 36.0578C22.1704 36.9328 21.4595 37.6547 20.5735 37.6547C20.1142 37.6547 19.7095 37.4578 19.436 37.1515C19.1517 36.8672 18.9876 36.4844 18.9876 36.0578C18.9876 35.3687 19.4251 34.789 20.0376 34.5703ZM15.7501 55.614L20.8688 39.8203C21.1751 39.8094 21.4704 39.7437 21.7438 39.6562L24.522 47.9797C23.4063 48.625 22.6517 49.839 22.6517 51.2281C22.6517 51.589 22.7063 51.939 22.8048 52.2672L15.7501 55.614ZM24.8392 51.2281C24.8392 50.8234 24.9923 50.4515 25.2548 50.1672C25.5392 49.85 25.9657 49.6422 26.436 49.6422C27.311 49.6422 28.022 50.3531 28.022 51.2281C28.022 51.8078 27.7157 52.3109 27.2673 52.5953C27.2017 52.639 27.1251 52.6719 27.0485 52.7047C26.8626 52.7812 26.6548 52.825 26.436 52.825C25.572 52.825 24.8829 52.1578 24.8501 51.3047C24.8392 51.2828 24.8392 51.25 24.8392 51.2281ZM29.4001 48.8984C28.7438 48.0781 27.7704 47.5203 26.6548 47.4656L23.6032 38.3219C24.0735 37.6875 24.3579 36.9109 24.3579 36.0578C24.3579 34.9094 23.8438 33.8812 23.0235 33.1922L26.1079 23.6656C26.2173 23.6875 26.3267 23.6875 26.436 23.6875C27.3001 23.6875 28.0985 23.3922 28.7329 22.9L49.6673 35.3797C49.6235 35.5984 49.6017 35.8281 49.6017 36.0578C49.6017 36.5609 49.7001 37.0531 49.886 37.4906L29.4001 48.8984Z" fill="#2ADEFF" />
                  </g>
                  <defs>
                    <filter id="filter0_dddddd_542_224" x="-11.6796" y="-11.4422" width="93.3592" height="93.3592" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="0.139043" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.0705882 0 0 0 0 0.686275 0 0 0 1 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_542_224" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="0.278086" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.0705882 0 0 0 0 0.686275 0 0 0 1 0" />
                      <feBlend mode="normal" in2="effect1_dropShadow_542_224" result="effect2_dropShadow_542_224" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="0.973301" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.0705882 0 0 0 0 0.686275 0 0 0 1 0" />
                      <feBlend mode="normal" in2="effect2_dropShadow_542_224" result="effect3_dropShadow_542_224" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="1.9466" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.0705882 0 0 0 0 0.686275 0 0 0 1 0" />
                      <feBlend mode="normal" in2="effect3_dropShadow_542_224" result="effect4_dropShadow_542_224" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="3.33703" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.0705882 0 0 0 0 0.686275 0 0 0 1 0" />
                      <feBlend mode="normal" in2="effect4_dropShadow_542_224" result="effect5_dropShadow_542_224" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="5.8398" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.0705882 0 0 0 0 0.686275 0 0 0 1 0" />
                      <feBlend mode="normal" in2="effect5_dropShadow_542_224" result="effect6_dropShadow_542_224" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_542_224" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <h3 className="portal-market-card__name">EDGE</h3>
            <a href="/products/connectivity-products/enigma-edge" className="portal-market-card__btn">Discover</a>
          </div>

          {/* Large File Transfer Card */}
          <div className="portal-market-card">
            <div className="portal-market-card__inner">
              <div className="portal-market-card__badge">NEW</div>
              <div className="portal-market-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="71" viewBox="0 0 70 71" fill="none">
                  <g filter="url(#filter0_dddddd_542_367)">
                    <path d="M53.386 32.2844C52.3142 32.2844 51.3517 32.7328 50.6626 33.4437L30.0126 21.0953C30.1438 20.7234 30.2095 20.3297 30.2095 19.914C30.2095 17.825 28.5142 16.1297 26.436 16.1297C25.3532 16.1297 24.3688 16.589 23.6798 17.3219L14.4923 11.8312C14.0985 11.6015 13.5954 11.6344 13.2454 11.9187C12.8845 12.2031 12.7423 12.6844 12.8845 13.1219L19.3485 32.4922C17.861 33.0062 16.8001 34.4062 16.8001 36.0578C16.8001 37.4687 17.5767 38.7047 18.7251 39.35L12.8845 57.3531C12.7532 57.7687 12.8735 58.2281 13.2017 58.5125C13.4095 58.6875 13.661 58.7859 13.9235 58.7859C14.0876 58.7859 14.2407 58.7531 14.3938 58.6765L23.997 54.1265C24.6532 54.6734 25.5063 55.0125 26.436 55.0125C28.5142 55.0125 30.2095 53.3172 30.2095 51.2281C30.2095 51.1406 30.2095 51.0422 30.2095 50.9547L51.3079 39.2187C51.9095 39.6125 52.6204 39.8422 53.397 39.8422C55.486 39.8422 57.1813 38.1469 57.1813 36.0578C57.1813 33.9687 55.486 32.2844 53.397 32.2844H53.386ZM54.8845 36.5828C54.6657 37.2172 54.0751 37.6547 53.386 37.6547C52.511 37.6547 51.7892 36.9437 51.7892 36.0578C51.7892 35.4344 52.1501 34.8984 52.6751 34.6469C52.8938 34.5375 53.1345 34.4719 53.386 34.4719C54.261 34.4719 54.9829 35.1828 54.9829 36.0578C54.9829 36.2437 54.9501 36.4187 54.8845 36.5828ZM26.436 21.5C25.5501 21.5 24.8392 20.789 24.8392 19.914C24.8392 19.039 25.5501 18.3172 26.436 18.3172C26.9282 18.3172 27.3767 18.5469 27.661 18.9078C27.8907 19.1812 28.022 19.5312 28.022 19.914C28.022 20.789 27.311 21.5 26.436 21.5ZM15.9032 15.2219L22.7063 19.2906C22.6735 19.4984 22.6517 19.7062 22.6517 19.914C22.6517 21.1062 23.2095 22.1672 24.0735 22.8562L21.2954 31.4094L15.9032 15.2219ZM20.0376 34.5703C20.2017 34.5047 20.3876 34.4719 20.5735 34.4719C21.4595 34.4719 22.1704 35.1828 22.1704 36.0578C22.1704 36.9328 21.4595 37.6547 20.5735 37.6547C20.1142 37.6547 19.7095 37.4578 19.436 37.1515C19.1517 36.8672 18.9876 36.4844 18.9876 36.0578C18.9876 35.3687 19.4251 34.789 20.0376 34.5703ZM15.7501 55.614L20.8688 39.8203C21.1751 39.8094 21.4704 39.7437 21.7438 39.6562L24.522 47.9797C23.4063 48.625 22.6517 49.839 22.6517 51.2281C22.6517 51.589 22.7063 51.939 22.8048 52.2672L15.7501 55.614ZM24.8392 51.2281C24.8392 50.8234 24.9923 50.4515 25.2548 50.1672C25.5392 49.85 25.9657 49.6422 26.436 49.6422C27.311 49.6422 28.022 50.3531 28.022 51.2281C28.022 51.8078 27.7157 52.3109 27.2673 52.5953C27.2017 52.639 27.1251 52.6719 27.0485 52.7047C26.8626 52.7812 26.6548 52.825 26.436 52.825C25.572 52.825 24.8829 52.1578 24.8501 51.3047C24.8392 51.2828 24.8392 51.25 24.8392 51.2281ZM29.4001 48.8984C28.7438 48.0781 27.7704 47.5203 26.6548 47.4656L23.6032 38.3219C24.0735 37.6875 24.3579 36.9109 24.3579 36.0578C24.3579 34.9094 23.8438 33.8812 23.0235 33.1922L26.1079 23.6656C26.2173 23.6875 26.3267 23.6875 26.436 23.6875C27.3001 23.6875 28.0985 23.3922 28.7329 22.9L49.6673 35.3797C49.6235 35.5984 49.6017 35.8281 49.6017 36.0578C49.6017 36.5609 49.7001 37.0531 49.886 37.4906L29.4001 48.8984Z" fill="#2ADEFF" />
                  </g>
                  <defs>
                    <filter id="filter0_dddddd_542_367" x="-11.6796" y="-11.4422" width="93.3592" height="93.3592" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="0.139043" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.0705882 0 0 0 0 0.686275 0 0 0 1 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_542_367" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="0.278086" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.0705882 0 0 0 0 0.686275 0 0 0 1 0" />
                      <feBlend mode="normal" in2="effect1_dropShadow_542_367" result="effect2_dropShadow_542_367" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="0.973301" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.0705882 0 0 0 0 0.686275 0 0 0 1 0" />
                      <feBlend mode="normal" in2="effect2_dropShadow_542_367" result="effect3_dropShadow_542_367" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="1.9466" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.0705882 0 0 0 0 0.686275 0 0 0 1 0" />
                      <feBlend mode="normal" in2="effect3_dropShadow_542_367" result="effect4_dropShadow_542_367" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="3.33703" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.0705882 0 0 0 0 0.686275 0 0 0 1 0" />
                      <feBlend mode="normal" in2="effect4_dropShadow_542_367" result="effect5_dropShadow_542_367" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.0705882 0 0 0 0 0.686275 0 0 0 1 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="5.8398" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.0705882 0 0 0 0 0.686275 0 0 0 1 0" />
                      <feBlend mode="normal" in2="effect5_dropShadow_542_367" result="effect6_dropShadow_542_367" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_542_367" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <h3 className="portal-market-card__name">Large File Transfer</h3>
            <a href="/products/data-&-file-services/large-file-transfer" className="portal-market-card__btn">Discover</a>
          </div>
        </div>
      </section>

      {/* Subgrid: Recent Activity & Health Summary */}
      <div className="portal-dashboard-grid" style={{ marginTop: '24px' }}>
        {/* Recent Activity summary */}
        <section className="portal-summary-card">
          <div className="portal-summary-card__header">
            <h2 className="portal-summary-card__title">Recent Activity</h2>
            <a
              href="#activities"
              onClick={(e) => {
                e.preventDefault();
                setActiveNav('activities');
              }}
              className="portal-summary-card__link"
            >
              View all activities
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
          <div className="portal-summary-card__body">
            <div className="portal-activity-row">
              <div className="portal-activity-row__details">
                <span className="portal-activity-row__name">GPU Cluster created</span>
                <span className="portal-activity-row__time">2 min ago</span>
              </div>
              <span className="portal-badge portal-badge--pending">Pending</span>
            </div>
            <div className="portal-activity-row">
              <div className="portal-activity-row__details">
                <span className="portal-activity-row__name">APN Core configuration</span>
                <span className="portal-activity-row__time">2 days ago</span>
              </div>
              <span className="portal-badge portal-badge--pending">Pending</span>
            </div>
            <div className="portal-activity-row">
              <div className="portal-activity-row__details">
                <span className="portal-activity-row__name">Payment received</span>
                <span className="portal-activity-row__time">2 days ago</span>
              </div>
              <span className="portal-badge portal-badge--pending">Pending</span>
            </div>
            <div className="portal-activity-row">
              <div className="portal-activity-row__details">
                <span className="portal-activity-row__name">Support ticket #2309</span>
                <span className="portal-activity-row__time">3 days ago</span>
              </div>
              <span className="portal-badge portal-badge--pending">Pending</span>
            </div>
          </div>
        </section>

        {/* Health Summary status */}
        <section className="portal-summary-card">
          <div className="portal-summary-card__header">
            <h2 className="portal-summary-card__title">Health summary</h2>
            <a
              href="#health"
              onClick={(e) => {
                e.preventDefault();
                setActiveNav('health');
              }}
              className="portal-summary-card__link"
            >
              View all activities
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
          <div className="portal-summary-card__body">
            <div className="portal-health-row">
              <span className="portal-health-row__label">Network</span>
              <span className="portal-badge portal-badge--operational">Operational</span>
            </div>
            <div className="portal-health-row">
              <span className="portal-health-row__label">Compute</span>
              <span className="portal-badge portal-badge--operational">Operational</span>
            </div>
            <div className="portal-health-row">
              <span className="portal-health-row__label">Storage</span>
              <span className="portal-badge portal-badge--operational">Operational</span>
            </div>
            <div className="portal-health-row">
              <span className="portal-health-row__label">APN</span>
              <span className="portal-badge portal-badge--operational">Operational</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
