import { useTheme } from '@/utils/useTheme';
import React, { useEffect, useState } from 'react';

const data = [
  {
    Cenario: '1MB / 100ms / 0% loss',
    rawTcp: 0.6,
    apn: 0.09,
    improvement: '7×',
  },
  {
    Cenario: '20MB / 100ms / 0.5% loss',
    rawTcp: 34,
    apn: 1.8,
    improvement: '19×',
  },
  {
    Cenario: '20MB / 300ms / 0.5% loss',
    rawTcp: 70.2,
    apn: 1.8,
    improvement: '39×',
  },
  {
    Cenario: '20MB / 300ms / 0.5% loss',
    rawTcp: 71,
    apn: 2.1,
    improvement: '34×',
  },
  {
    Cenario: '20MB / 300ms / 2% loss',
    rawTcp: 160,
    apn: 2.5,
    improvement: '64×',
  },
];

const MAX_VALUE = 160;
const CHART_HEIGHT = 300;
const BAR_WIDTH = 50;

const SUCCESS_COLOR = '#16a34a';
const APN_COLOR = '#1565c0';
const RAW_COLOR = '#b8b5ac';

const tooltipStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '50%',
  left: '50%',
  transform: 'translateX(-50%)',
  marginBottom: '8px',
  background: '#1f2937',
  color: '#fff',
  padding: '10px 12px',
  borderRadius: 8,
  fontSize: 12,
  width: 240,
  boxShadow: '0 8px 20px rgba(0,0,0,0.18)',
  zIndex: 9999,
  lineHeight: 1.5,
  pointerEvents: 'none',
};

const GraphTable: React.FC = () => {
  const { theme } = useTheme();
  const [hovered, setHovered] = useState<string | null>(null);
  const [view, setView] = useState<'chart' | 'table'>('chart');
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

const getBarHeight = (value: number) => {
  // Log scale keeps huge numbers from crushing small ones
  const minHeight = 8;

  const scaledHeight = (Math.log10(value + 1) / Math.log10(MAX_VALUE + 1)) * CHART_HEIGHT;

  return Math.max(scaledHeight, minHeight);
};
  const getResponsiveGap = () => {
    if (isMobile) return 16;
    if (isTablet) return 24;
    return 40;
  };

  const getResponsiveBarWidth = () => {
    if (isMobile) return 35;
    if (isTablet) return 42;
    return BAR_WIDTH;
  };

  return (
    <div
      className="container"
      style={{
        padding: isMobile ? '1rem' : '2rem 1rem',
        maxWidth: 1200,
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
        color: theme === 'dark' ? '#fff' : '#111',
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'flex-start' : 'center',
          marginBottom: 24,
          flexWrap: 'wrap',
          gap: 12,
          //   flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontSize: isMobile ? 20 : 26,
              color: theme === 'dark' ? '#fff' : '#111',
            }}
          >
            TCP Acceleration Performance
          </h2>

          <p
            style={{
              margin: '6px 0 0',
              color: theme === 'dark' ? '#9ca3af' : '#777',
              fontSize: isMobile ? 11 : 13,
            }}
          >
            Compare Raw TCP vs Enigma TCP-A accelerated transfer speeds
          </p>
        </div>

        {/* TOGGLE BUTTON */}
        <button
          onClick={() => setView(view === 'chart' ? 'table' : 'chart')}
          className="btn btn-primary"
          style={{
            border: 'none',
            padding: isMobile ? '8px 14px' : '10px 18px',
            borderRadius: 8,
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: isMobile ? 12 : 13,
          }}
        >
          {view === 'chart' ? 'Show Table View' : 'Show Chart View'}
        </button>
      </div>

      {/* TABLE VIEW */}
      {view === 'table' ? (
        <div
          style={{
            overflowX: 'auto',
            border: theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e5e5e5',
            borderRadius: 10,
            background: theme === 'dark' ? '' : '#fff',
            boxShadow: '0 1.875rem 7.5rem -.625rem rgba(124,125,152, .2)',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              minWidth: isMobile ? 480 : 700,
            }}
          >
            <thead>
              <tr
                style={{
                  borderBottom:
                    theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e5e5e5',
                }}
              >
                <th style={{ ...thStyle, color: theme === 'dark' ? '#fff' : '#555' }}>Cenario </th>
                <th style={{ ...thStyle, color: theme === 'dark' ? '#fff' : '#555' }}>
                  Raw TCP / no acceleration
                </th>
                <th style={{ ...thStyle, color: theme === 'dark' ? '#fff' : '#555' }}>
                  APN / Enigma TCP-A
                </th>
                <th style={{ ...thStyle, color: theme === 'dark' ? '#fff' : '#555' }}>
                  Improvement
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((d, i) => (
                <tr
                  key={i}
                  style={{
                    borderBottom:
                      i !== data.length - 1
                        ? theme === 'dark'
                          ? '1px solid rgba(255,255,255,0.08)'
                          : '1px solid #ececec'
                        : 'none',
                  }}
                >
                  <td style={{ ...tdStyle, color: theme === 'dark' ? '#fff' : '#222' }}>
                    {d.Cenario}
                  </td>
                  <td
                    style={{
                      ...tdStyle,
                      color: theme === 'dark' ? '#e5e7eb' : '#222',
                      fontWeight: 500,
                    }}
                  >
                    {d.rawTcp}s
                  </td>
                  <td style={{ ...tdStyle, color: APN_COLOR, fontWeight: 700 }}>{d.apn}s</td>
                  <td style={{ ...tdStyle, color: SUCCESS_COLOR, fontWeight: 700 }}>
                    {d.improvement} faster
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          {/* VERTICAL CHART */}
          <div
            style={{
              overflowX: 'auto',
              paddingBottom: 20,
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: getResponsiveGap(),
                justifyContent: 'center',
                minWidth: isMobile ? 500 : isTablet ? 700 : 'auto',
                padding: '20px 0',
              }}
            >
              {data.map((d, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 12,
                  }}
                >
                  {/* Cenario LABEL */}
                  <div
                    style={{
                      writingMode: isMobile ? 'horizontal-tb' : 'vertical-rl',
                      transform: isMobile ? 'none' : 'rotate(225deg)',
                      fontSize: isMobile ? 10 : 12,
                      color: theme === 'dark' ? '#cbd5e1' : '#475569',
                      fontWeight: 500,
                      textAlign: 'center',
                      height: isMobile ? 'auto' : 100,
                      marginBottom: isMobile ? 10 : 0,
                      whiteSpace: isMobile ? 'normal' : 'nowrap',
                      zIndex: 1000,
                      maxWidth: isMobile ? 80 : 'none',
                      wordBreak: 'break-word',
                    }}
                  >
                    {d.Cenario}
                  </div>

                  {/* BARS CONTAINER */}
                  <div
                    style={{
                      display: 'flex',
                      gap: isMobile ? 4 : 8,
                      alignItems: 'flex-end',
                      height: CHART_HEIGHT,
                      position: 'relative',
                    }}
                  >
                    {/* RAW TCP BAR */}
                    <div
                      style={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <div
                        onMouseEnter={() => setHovered(`raw-${i}`)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => {
                          if (isMobile) {
                            setHovered(hovered === `raw-${i}` ? null : `raw-${i}`);
                          }
                        }}
                        style={{
                          width: getResponsiveBarWidth(),
                          height: getBarHeight(d.rawTcp),
                          background: RAW_COLOR,
                          borderRadius: '6px 6px 0 0',
                          cursor: 'pointer',
                          transition: '0.3s ease',
                          position: 'relative',
                        }}
                      />
                      <span
                        style={{
                          fontSize: isMobile ? 9 : 11,
                          marginTop: 6,
                          color: theme === 'dark' ? '#9ca3af' : '#6b7280',
                        }}
                      >
                        {d.rawTcp}s
                      </span>

                      {hovered === `raw-${i}` && (
                        <div style={{ ...tooltipStyle, width: isMobile ? 200 : 240 }}>
                          <div style={{ fontWeight: 700, marginBottom: 6 }}>
                            Raw TCP Performance
                          </div>
                          <div>
                            <strong>Cenario:</strong> {d.Cenario}
                          </div>
                          <div>
                            <strong>Transfer Time:</strong> {d.rawTcp}s
                          </div>
                          <div>
                            <strong>Compared to Enigma TCP-A:</strong>{' '}
                            <span style={{ color: '#f87171' }}>{d.improvement} slower</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* APN BAR */}
                    <div
                      style={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <div
                        onMouseEnter={() => setHovered(`apn-${i}`)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => {
                          if (isMobile) {
                            setHovered(hovered === `apn-${i}` ? null : `apn-${i}`);
                          }
                        }}
                        style={{
                          width: getResponsiveBarWidth(),
                          height: getBarHeight(d.apn) + 2,
                          background: APN_COLOR,
                          borderRadius: '6px 6px 0 0',
                          cursor: 'pointer',
                          transition: '0.3s ease',
                          position: 'relative',
                        }}
                      />
                      <span
                        style={{
                          fontSize: isMobile ? 9 : 11,
                          marginTop: 6,
                          color: APN_COLOR,
                          fontWeight: 600,
                        }}
                      >
                        {d.apn}s
                      </span>

                      {hovered === `apn-${i}` && (
                        <div style={{ ...tooltipStyle, width: isMobile ? 200 : 240 }}>
                          <div style={{ fontWeight: 700, marginBottom: 6 }}>
                            APN / Enigma TCP-A Accelerated Performance
                          </div>
                          <div>
                            <strong>Cenario:</strong> {d.Cenario}
                          </div>
                          <div>
                            <strong>Transfer Time:</strong> {d.apn}s
                          </div>
                          <div>
                            <strong>Speed Boost:</strong>{' '}
                            <span style={{ color: '#4ade80' }}>{d.improvement} faster</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* IMPROVEMENT LABEL */}
                  <div
                    style={{
                      fontSize: isMobile ? 10 : 12,
                      fontWeight: 700,
                      color: SUCCESS_COLOR,
                      marginTop: 8,
                      textAlign: 'center',
                    }}
                  >
                    {d.improvement} faster
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* LEGEND */}
          <div
            style={{
              display: 'flex',
              gap: isMobile ? 12 : 24,
              flexWrap: 'wrap',
              marginBottom: 28,
              fontSize: isMobile ? 11 : 13,
              color: theme === 'dark' ? '#d1d5db' : '#5f5e5a',
              justifyContent: isMobile ? 'center' : 'center',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span
                style={{
                  width: isMobile ? 10 : 12,
                  height: isMobile ? 10 : 12,
                  borderRadius: 2,
                  background: RAW_COLOR,
                  display: 'inline-block',
                }}
              />
              Raw TCP / no acceleration
            </span>

            <span style={{ display: 'flex', alignItems: 'center',  gap: 6 }}>
              <span
                style={{
                  width: isMobile ? 10 : 12,
                  height: isMobile ? 10 : 12,
                  borderRadius: 2,
                  background: APN_COLOR,
                  display: 'inline-block',
                }}
              />
              APN / Enigma TCP-A (accelerated)
            </span>
          </div>
        </>
      )}
    </div>
  );
};

const thStyle: React.CSSProperties = {
  textAlign: 'left',
  padding: '14px 16px',
  fontSize: 13,
  color: '#555',
};

const tdStyle: React.CSSProperties = {
  padding: '14px 16px',
  fontSize: 14,
  color: '#222',
};

export default GraphTable;
