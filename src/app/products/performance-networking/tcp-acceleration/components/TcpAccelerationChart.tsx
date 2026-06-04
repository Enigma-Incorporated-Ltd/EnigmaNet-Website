import { useTheme } from '@/utils/useTheme';
import React, { useEffect, useState } from 'react';

const data = [
  {
    Cenario : '1MB / 100ms / 0% loss',
    rawTcp: 0.6,
    apn: 0.09,
    improvement: '7×',
  },
  {
    Cenario : '20MB / 100ms / 0.5% loss',
    rawTcp: 34,
    apn: 1.8,
    improvement: '19×',
  },
  {
    Cenario : '20MB / 300ms / 0.5% loss',
    rawTcp: 70.2,
    apn: 1.8,
    improvement: '39×',
  },
  {
    Cenario : '20MB / 300ms / 0.5% loss',
    rawTcp: 71,
    apn: 2.1,
    improvement: '34×',
  },
  {
    Cenario : '20MB / 300ms / 2% loss',
    rawTcp: 160,
    apn: 2.5,
    improvement: '64×',
  },
];

const MAX_VALUE = 160;

const RAW_H = 28;
const APN_H = 22;

const SUCCESS_COLOR = '#16a34a';
const DANGER_COLOR = '#dc2626';

const APN_COLOR = '#1565c0';
const RAW_COLOR = '#b8b5ac';

const tooltipStyle: React.CSSProperties = {
  position: 'absolute',
  top: '-105px',
  left: 0,
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

const TcpAccelerationChart: React.FC = () => {
  const {theme} = useTheme();
  const [hovered, setHovered] = useState<string | null>(null);

  const [view, setView] = useState<'chart' | 'table'>('chart');

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const BAR_W = isMobile ? 180 : 560;
  const LABEL_W = isMobile ? 90 : 210;

 return (
   <div
     className="container"
     style={{
   
       padding: '2rem 1rem',
       maxWidth: 950,
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
         alignItems: 'center',
         marginBottom: 24,
         flexWrap: 'wrap',
         gap: 12,
       }}
     >
       <div>
         <h2
           style={{
             margin: 0,
             fontSize: 26,
             color: theme === 'dark' ? '#fff' : '#111',
           }}
         >
           TCP Acceleration Performance
         </h2>

         <p
           style={{
             margin: '6px 0 0',
             color: theme === 'dark' ? '#9ca3af' : '#777',
             fontSize: 13,
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
           padding: '10px 18px',
           borderRadius: 8,
           cursor: 'pointer',
           fontWeight: 600,
           fontSize: 13,
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
         }}
       >
         <table
           style={{
             width: '100%',
             borderCollapse: 'collapse',
             minWidth: isMobile ? 520 : 700,
           }}
         >
           <thead>
             <tr
               style={{
                 borderBottom:
                   theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e5e5e5',
               }}
             >
               <th
                 style={{
                   ...thStyle,
                   color: theme === 'dark' ? '#fff' : '#555',
                 }}
               >
                 Cenario 
               </th>

               <th
                 style={{
                   ...thStyle,
                   color: theme === 'dark' ? '#fff' : '#555',
                 }}
               >
                 Raw TCP / no acceleration
               </th>

               <th
                 style={{
                   ...thStyle,
                   color: theme === 'dark' ? '#fff' : '#555',
                 }}
               >
                 APN / Enigma TCP-A
               </th>

               <th
                 style={{
                   ...thStyle,
                   color: theme === 'dark' ? '#fff' : '#555',
                 }}
               >
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
                 <td
                   style={{
                     ...tdStyle,
                     color: theme === 'dark' ? '#fff' : '#222',
                   }}
                 >
                   {d.Cenario }
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

                 <td
                   style={{
                     ...tdStyle,
                     color: APN_COLOR,
                     fontWeight: 700,
                   }}
                 >
                   {d.apn}s
                 </td>

                 <td
                   style={{
                     ...tdStyle,
                     color: SUCCESS_COLOR,
                     fontWeight: 700,
                   }}
                 >
                   {d.improvement} faster
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
     ) : (
       <>
         {/* LEGEND */}
         <div
           style={{
             display: 'flex',
             gap: 24,
             flexWrap: 'wrap',
             marginBottom: 28,
             fontSize: 13,
             color: theme === 'dark' ? '#d1d5db' : '#5f5e5a',
           }}
         >
           <span
             style={{
               display: 'flex',
               alignItems: 'center',
               gap: 6,
             }}
           >
             <span
               style={{
                 width: 12,
                 height: 12,
                 borderRadius: 2,
                 background: RAW_COLOR,
                 display: 'inline-block',
               }}
             />
             Raw TCP / no acceleration
           </span>

           <span
             style={{
               display: 'flex',
               alignItems: 'center',
               gap: 6,
             }}
           >
             <span
               style={{
                 width: 12,
                 height: 12,
                 borderRadius: 2,
                 background: APN_COLOR,
                 display: 'inline-block',
               }}
             />
             APN / Enigma TCP-A (accelerated)
           </span>
         </div>

         {/* CHART */}
         {data.map((d, i) => {
           const rawPx = Math.max((d.rawTcp / MAX_VALUE) * BAR_W, 10);

           const apnPx = Math.max((d.apn / MAX_VALUE) * BAR_W, 4);

           return (
             <div
               key={i}
               style={{
                 marginBottom: 28,
               }}
             >
               {/* Cenario  */}
               <p
                 style={{
                   fontSize: 13,
                   color: theme === 'dark' ? '#cbd5e1' : '#475569',
                   margin: '0 0 10px',
                   paddingLeft: isMobile ? 0 : LABEL_W,
                   wordBreak: 'break-word',
                   fontWeight: 500,
                 }}
               >
                 {d.Cenario }
               </p>

               {/* RAW TCP */}
               <div
                 style={{
                   display: 'flex',
                   alignItems: 'center',
                   gap: 10,
                 }}
               >
                 <span
                   style={{
                     width: LABEL_W,
                     textAlign: 'right',
                     fontSize: 12,
                     color: theme === 'dark' ? '#d1d5db' : '#6b7280',
                     paddingRight: 10,
                     fontWeight: 600,
                   }}
                 >
                   Raw TCP
                 </span>

                 <div
                   style={{
                     position: 'relative',
                   }}
                 >
                   <div
                     style={{
                       width: BAR_W,
                       height: RAW_H,
                       background: theme === 'dark' ? '#374151' : '#ececec',
                       borderRadius: 6,
                       overflow: 'hidden',
                       position: 'relative',
                     }}
                   >
                     <div
                       onMouseEnter={() => setHovered(`raw-${i}`)}
                       onMouseLeave={() => setHovered(null)}
                       style={{
                         width: rawPx,
                         height: RAW_H,
                         background: RAW_COLOR,
                         borderRadius: 6,
                         cursor: 'pointer',
                         transition: '0.3s ease',
                       }}
                     />
                   </div>

                   {hovered === `raw-${i}` && (
                     <div style={tooltipStyle}>
                       <div
                         style={{
                           fontWeight: 700,
                           marginBottom: 6,
                         }}
                       >
                         Raw TCP Performance
                       </div>

                       <div>
                         <strong>Cenario :</strong> {d.Cenario }
                       </div>

                       <div>
                         <strong>Transfer Time:</strong> {d.rawTcp}s
                       </div>

                       <div>
                         <strong>Compared to Enigma TCP-A:</strong>{' '}
                         <span
                           style={{
                             color: '#f87171',
                           }}
                         >
                           {d.improvement} slower
                         </span>
                       </div>
                     </div>
                   )}
                 </div>

                 <span
                   style={{
                     fontSize: 13,
                     color: theme === 'dark' ? '#e5e7eb' : '#6b7280',
                     minWidth: 50,
                   }}
                 >
                   {d.rawTcp}s
                 </span>

                 <span
                   style={{
                     fontSize: 13,
                     color: DANGER_COLOR,
                     fontWeight: 700,
                     whiteSpace: 'nowrap',
                   }}
                 >
                   {d.improvement} slower
                 </span>
               </div>

               {/* APN */}
               <div
                 style={{
                   display: 'flex',
                   alignItems: 'center',
                   gap: 10,
                   marginTop: 8,
                 }}
               >
                 <span
                   style={{
                     width: LABEL_W,
                     textAlign: 'right',
                     fontSize: 12,
                     color: APN_COLOR,
                     paddingRight: 10,
                     fontWeight: 700,
                   }}
                 >
                   APN / Enigma TCP-A
                 </span>

                 <div
                   style={{
                     position: 'relative',
                   }}
                 >
                   <div
                     style={{
                       width: BAR_W,
                       height: APN_H,
                       background: theme === 'dark' ? '#1e3a5f' : '#edf4ff',
                       borderRadius: 6,
                       overflow: 'hidden',
                       position: 'relative',
                     }}
                   >
                     <div
                       onMouseEnter={() => setHovered(`apn-${i}`)}
                       onMouseLeave={() => setHovered(null)}
                       style={{
                         width: apnPx,
                         height: APN_H,
                         background: APN_COLOR,
                         borderRadius: 6,
                         cursor: 'pointer',
                         transition: '0.3s ease',
                       }}
                     />
                   </div>

                   {hovered === `apn-${i}` && (
                     <div style={tooltipStyle}>
                       <div
                         style={{
                           fontWeight: 700,
                           marginBottom: 6,
                         }}
                       >
                         APN / Enigma TCP-A Accelerated Performance
                       </div>

                       <div>
                         <strong>Cenario :</strong> {d.Cenario }
                       </div>

                       <div>
                         <strong>Transfer Time:</strong> {d.apn}s
                       </div>

                       <div>
                         <strong>Speed Boost:</strong>{' '}
                         <span
                           style={{
                             color: '#4ade80',
                           }}
                         >
                           {d.improvement} faster
                         </span>
                       </div>
                     </div>
                   )}
                 </div>

                 <span
                   style={{
                     fontSize: 13,
                     color: APN_COLOR,
                     fontWeight: 700,
                   }}
                 >
                   {d.apn}s
                 </span>

                 <span
                   style={{
                     fontSize: 13,
                     color: SUCCESS_COLOR,
                     fontWeight: 700,
                     marginLeft: 10,
                     whiteSpace: 'nowrap',
                   }}
                 >
                   {d.improvement} faster
                 </span>
               </div>

               {i < data.length - 1 && (
                 <div
                   style={{
                     borderTop:
                       theme === 'dark'
                         ? '0.5px solid rgba(255,255,255,0.08)'
                         : '0.5px solid rgba(0,0,0,0.07)',
                     marginTop: 24,
                   }}
                 />
               )}
             </div>
           );
         })}
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

export default TcpAccelerationChart;
