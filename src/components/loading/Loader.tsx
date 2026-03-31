import React, { useEffect } from 'react';

// ─── Brand tokens (mirrors your _variables.scss) ───────────────────────────
const brand = {
  royalBlue: '#3d5a9e',
  petrol: '#0d1b29',
  lightBlue: '#2adeff',
  steelBlue: '#157bc9',
  steel: '#666666',
  gold: '#e5ae51',
  gray100: '#f3f6ff',
  gray200: '#eff2fc',
  gray300: '#e2e5f1',
  gray400: '#d4d7e5',
  gray500: '#b4b7c9',
  gray600: '#9397ad',
  gray700: '#565973',
  gray800: '#33354d',
  gray900: '#0b0f19',
} as const;
import Logo from '@/assets/img/logo.png';
// ─── Types ─────────────────────────────────────────────────────────────────
type Theme = 'light' | 'dark';

interface ThemeTokens {
  bg: string;
  surface: string;
  border: string;
  text: string;
  muted: string;
  cardBg: string;
  skeletonBase: string;
  skeletonShine: string;
}

const tokens: Record<Theme, ThemeTokens> = {
  light: {
    bg: '#ffffff',
    surface: brand.gray100,
    border: brand.gray300,
    text: brand.gray900,
    muted: brand.gray600,
    cardBg: '#ffffff',
    skeletonBase: brand.gray200,
    skeletonShine: brand.gray100,
  },
  dark: {
    bg: '#0b0f19',
    surface: '#132233',
    border: 'rgba(255,255,255,0.10)',
    text: '#ffffff',
    muted: 'rgba(255,255,255,0.50)',
    cardBg: '#0f2030',
    skeletonBase: '#1a2f42',
    skeletonShine: ' #1f3a50',
  },
};

// ─── Shared keyframe injection ─────────────────────────────────────────────
const injectKeyframes = () => {
  if (document.getElementById('si-loader-keyframes')) return;
  const style = document.createElement('style');
  style.id = 'si-loader-keyframes';
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap');

    @keyframes si-spin       { to { transform: rotate(360deg); } }
    @keyframes si-pulse      { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.7;transform:scale(1.07)} }
    @keyframes si-shimmer    { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
    @keyframes si-sweep      { 0%{left:-60%;width:40%} 100%{left:120%;width:40%} }
    @keyframes si-dotBounce  { 0%,80%,100%{opacity:.3;transform:translateY(0)} 40%{opacity:1;transform:translateY(-4px)} }
    @keyframes si-fadeIn     { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
    @keyframes si-overlayIn  { from{opacity:0} to{opacity:1} }
    @keyframes si-overlayOut { from{opacity:1} to{opacity:0;visibility:hidden} }
    @keyframes si-ring       { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
    @keyframes si-ripple     { 0%{transform:scale(0.6);opacity:1} 100%{transform:scale(2.2);opacity:0} }
    @keyframes si-barGlow    { 0%,100%{box-shadow:0 0 8px 0 rgba(42,222,255,.4)} 50%{box-shadow:0 0 18px 4px rgba(42,222,255,.7)} }
  `;
  document.head.appendChild(style);
};

interface OverlayLoaderProps {
  visible: boolean;
  message?: string;
  theme?: Theme;
}

export const OverlayLoader: React.FC<OverlayLoaderProps> = ({
  visible,
  message = 'Loading',
  theme,
}) => {
  useEffect(() => {
    injectKeyframes();
  }, []);

  if (!visible) return null;

  const currentTheme =
    typeof document !== 'undefined'
      ? (document.body.getAttribute('data-bs-theme') as Theme) || 'dark'
      : 'dark';

  const t = tokens[currentTheme];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1080,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: t.bg,
        fontFamily: "'Manrope', sans-serif",
        animation: visible ? 'si-overlayIn 0.3s ease' : 'si-overlayOut 0.4s ease forwards',
        pointerEvents: visible ? 'all' : 'none',
      }}
    >
      {/* Radial glow backdrop */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${
            theme === 'dark' ? 'rgba(21,123,201,0.12)' : 'rgba(61,90,158,0.06)'
          } 0%, transparent 70%)`,
        }}
      />

      {/* Logo */}
      <div style={{ marginBottom: 28, position: 'relative', zIndex: 1 }}>
        <img src={Logo} width={100} alt={'Logo'} />
      </div>

      {/* Bar */}
      <div
        style={{
          width: 'min(22rem, 78vw)',
          height: 4,
          borderRadius: 50,
          background: t.border,
          overflow: 'hidden',
          position: 'relative',
          marginBottom: 18,
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '40%',
            borderRadius: 50,
            background: `linear-gradient(90deg, ${brand.royalBlue}, ${brand.steelBlue}, ${brand.lightBlue})`,
            animation: 'si-sweep 1.6s ease-in-out infinite',
          }}
        />
      </div>

      {/* Label */}
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.12em',
          color: t.muted,
          textTransform: 'uppercase',
          zIndex: 1,
        }}
      >
        {message}
        <span style={{ display: 'inline-flex', gap: 1, marginLeft: 2 }}>
          {[0, 0.2, 0.4].map((d, i) => (
            <span
              key={i}
              style={{
                display: 'inline-block',
                color: brand.lightBlue,
                animation: `si-dotBounce 1.2s ease-in-out ${d}s infinite`,
              }}
            >
              .
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};
