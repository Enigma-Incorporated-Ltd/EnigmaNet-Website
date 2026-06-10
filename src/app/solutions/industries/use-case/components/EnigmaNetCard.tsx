import {
  Lock_ICON,
  LTE_ICON,
  MICROWAVE_ICON,
  PROTECT_ICON,
  SATELLITE_ICON,
  TCP_ICON,
  TRIFFIC_ICON,
  ZERO_TRUST_ICON,
} from '@/assets/svgs/solutions/industries/usecase';
import React from 'react';
import LogoCircle from '@/assets/img/logo-c.png';
import FeatureCard from '@/components/ui/Use-Case/FeatureCard';
import { handleCardMouseEnter, handleCardMouseLeave } from '@/utils/cardHover';
const EnigmaNetCard: React.FC = () => {
  const metrics = [
    {
      icon: TCP_ICON,
      value: (
        <>
          7 <span style={{ color: '#2ADEFF' }}>x</span>–65
          <span style={{ color: '#2ADEFF' }}>x</span>
        </>
      ),
      label: 'TPC THROUGHPUT UPLIFT',
    },
    {
      icon: TRIFFIC_ICON,
      value: (
        <>
          {'<5'} <span style={{ color: '#2ADEFF' }}>ms</span>
        </>
      ),
      label: 'PROTECTED TRAFFIC JITTER',
    },
    {
      icon: PROTECT_ICON,
      value: (
        <>
          {'<0.1'} <span style={{ color: '#2ADEFF' }}>%</span>
        </>
      ),
      label: 'EFFECTIVE PACKET LOSS',
    },
    {
      icon: ZERO_TRUST_ICON,
      value: 'Zero-Gap',
      label: 'FAILOVER VIA RAIN',
    },
  ];
  return (
    <section
      style={{
        background: '#FFFFFF',
        padding: '80px 0',
        position: 'relative',
      }}
    >
      <div className="container">
        <div className=" row align-items-center ">
          <div className="col-lg-8 ">
            <h2
              style={{
                fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#001A94',
                textAlign: 'center',
              }}
            >
              ENIGMA NET APN
            </h2>

            <p
              style={{
                color: '#000',
                fontSize: 'clamp(1rem, 1.2vw, 1.25rem)',
                fontWeight: 400,
                marginBottom: '2rem',
                textAlign: 'center',
              }}
            >
              Intelligent Path Bonding & Traffic Steering for Distributed Teams
            </p>

            <div
              className="d-flex align-items-center flex-column flex-md-row justify-content-center gap-4"
              style={{ marginBottom: '4rem' }}
            >
              {/* Left Side */}
              <div className="d-flex flex-column gap-3">
                {[
                  { Icon: SATELLITE_ICON, label: 'SATELLITE' },
                  { Icon: MICROWAVE_ICON, label: 'MICROWAVE' },
                  { Icon: LTE_ICON, label: 'LTE / 5G' },
                ].map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="d-flex align-items-center justify-content-center gap-2 px-3 py-2"
                    style={{
                      borderRadius: '12px',
                      background: '#FFF',
                      color: '#000',
                      minWidth: '180px',
                      fontWeight: 500,
                      transition: 'all 0.3s ease',
                      boxShadow:
                        '0 21px 6px rgba(0,0,0,0), 0 13px 5px rgba(0,0,0,0.01), 0 8px 5px rgba(0,0,0,0.05), 0 3px 3px rgba(0,0,0,0.09), 0 1px 2px rgba(0,0,0,0.1)',
                    }}
                    onMouseEnter={handleCardMouseEnter}
                    onMouseLeave={handleCardMouseLeave}
                  >
                    <Icon />
                    {label}
                  </div>
                ))}
              </div>

              {/* Center */}
              <div
                className="d-flex "
                style={{
                  border: '1px solid #2ADEFF',
                  borderRadius: '50%',
                  background: '#FFF',
                  width: '165px',
                  height: '165px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow:
                    '0 21px 6px rgba(0,0,0,0), 0 13px 5px rgba(0,0,0,0.01), 0 8px 5px rgba(0,0,0,0.05), 0 3px 3px rgba(0,0,0,0.09), 0 1px 2px rgba(0,0,0,0.1)',
                }}
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
              >
                <img
                  src={LogoCircle}
                  alt="Enigma Net Icon"
                  style={{
                    width: '141px',
                    height: '141px',
                    transform: 'scale(1)',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </div>

              {/* Right Side */}

              <FeatureCard
                icon={Lock_ICON}
                label={
                  <>
                    {' '}
                    ON-PREM /<br /> AIR-GAPPED NETWORK
                  </>
                }
                fontWeight={500}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row g-4">
              {metrics.map((metric, index) => (
                <div key={index} className="col-6">
                  <FeatureCard
                    icon={metric.icon}
                    value={metric.value}
                    label={metric.label}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnigmaNetCard;
