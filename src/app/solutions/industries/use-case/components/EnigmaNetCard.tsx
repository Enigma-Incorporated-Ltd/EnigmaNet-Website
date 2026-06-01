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
const EnigmaNetCard: React.FC = () => {
  return (
    <section
      style={{
        background: '#FFFFFF',

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
              className="d-flex align-items-center justify-content-center gap-4 px-5 flex-wrap"
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
                      boxShadow:
                        '0 21px 6px rgba(0,0,0,0), 0 13px 5px rgba(0,0,0,0.01), 0 8px 5px rgba(0,0,0,0.05), 0 3px 3px rgba(0,0,0,0.09), 0 1px 2px rgba(0,0,0,0.1)',
                    }}
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
                }}
              >
                <img
                  src={LogoCircle}
                  alt="Enigma Net Icon"
                  style={{ width: '141px', height: '141px' }}
                />
              </div>

              {/* Right Side */}
              <div
                style={{
                  borderRadius: '12px',
                  background: '#FFF',
                  padding: '20px',
                  minWidth: '180px',
                  textAlign: 'center',
                  boxShadow:
                    '0 21px 6px rgba(0,0,0,0), 0 13px 5px rgba(0,0,0,0.01), 0 8px 5px rgba(0,0,0,0.05), 0 3px 3px rgba(0,0,0,0.09), 0 1px 2px rgba(0,0,0,0.1)',
                }}
              >
                <Lock_ICON />

                <br />

                <span
                  style={{
                    color: '#000',
                    fontSize: '14px',
                    fontWeight: 500,
                  }}
                >
                  ON-PREM /<br /> AIR-GAPPED NETWORK
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row g-4">
              {/* First row - two cards */}
              <div className="col-6">
                <div
                  style={{
                    borderRadius: '12px',
                    border: '1px solid #FFF',
                    background: '#FFF',
                    boxShadow:
                      '0 21px 6px 0 rgba(0, 0, 0, 0.00), 0 13px 5px 0 rgba(0, 0, 0, 0.01), 0 8px 5px 0 rgba(0, 0, 0, 0.05), 0 3px 3px 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.10)',
                    padding: '20px',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <TCP_ICON />
                  <p style={{ color: '#000' }}>
                    7 <span style={{ color: '#2ADEFF' }}>x</span>–65
                    <span style={{ color: '#2ADEFF' }}>x</span>
                  </p>
                  <span
                    className="text-center"
                    style={{ color: '#000', fontWeight: 600, fontSize: '16px' }}
                  >
                    TPC THROUGHPUT <br /> UPLIFT
                  </span>
                </div>
              </div>

              <div className="col-6">
                <div
                  style={{
                    borderRadius: '12px',
                    border: '1px solid #FFF',
                    background: '#FFF',
                    boxShadow:
                      '0 21px 6px 0 rgba(0, 0, 0, 0.00), 0 13px 5px 0 rgba(0, 0, 0, 0.01), 0 8px 5px 0 rgba(0, 0, 0, 0.05), 0 3px 3px 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.10)',
                    padding: '20px',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <TRIFFIC_ICON />
                  <p style={{ color: '#000' }}>
                    {'<5'} <span style={{ color: '#2ADEFF' }}>ms</span>
                  </p>
                  <span
                    className="text-center"
                    style={{ color: '#000', fontWeight: 600, fontSize: '16px' }}
                  >
                    PROTECTED TRIFFIC <br /> JITTER
                  </span>
                </div>
              </div>

              {/* Second row - two cards */}
              <div className="col-6">
                <div
                  style={{
                    borderRadius: '12px',
                    border: '1px solid #FFF',
                    background: '#FFF',
                    boxShadow:
                      '0 21px 6px 0 rgba(0, 0, 0, 0.00), 0 13px 5px 0 rgba(0, 0, 0, 0.01), 0 8px 5px 0 rgba(0, 0, 0, 0.05), 0 3px 3px 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.10)',
                    padding: '20px',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <PROTECT_ICON />
                  <p className="pt-2" style={{ color: '#000' }}>
                    {'<0.1'} <span style={{ color: '#2ADEFF' }}>%</span>
                  </p>
                  <span
                    className="text-center"
                    style={{ color: '#000', fontWeight: 600, fontSize: '16px' }}
                  >
                    EFFECTIVE PACKET LOSS
                  </span>
                </div>
              </div>

              <div className="col-6">
                <div
                  style={{
                    borderRadius: '12px',
                    border: '1px solid #FFF',
                    background: '#FFF',
                    boxShadow:
                      '0 21px 6px 0 rgba(0, 0, 0, 0.00), 0 13px 5px 0 rgba(0, 0, 0, 0.01), 0 8px 5px 0 rgba(0, 0, 0, 0.05), 0 3px 3px 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.10)',
                    padding: '20px',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <ZERO_TRUST_ICON />
                  <p style={{ color: '#000' }}>Zero-Gap</p>
                  <span
                    className="text-center"
                    style={{ color: '#000', fontWeight: 600, fontSize: '16px' }}
                  >
                    FAILOVER VIA RAIN{' '}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnigmaNetCard;
