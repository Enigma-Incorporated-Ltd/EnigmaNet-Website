import { blokEditable } from './blokEditable';
interface FeatureBlok {
  _uid: string;
  component: 'feature';
  name: string;
}

export default function Feature({ blok }: { blok: FeatureBlok }) {
  return (
    <div
      {...blokEditable(blok)}
      style={{
        background: '#ffffff',
        borderRadius: '16px',
        padding: '28px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #6251B8, #80efac)',
          margin: '0 auto 16px',
        }}
      />
      <h3 style={{ fontWeight: 700, fontSize: '1rem', margin: 0 }}>{blok.name}</h3>
    </div>
  );
}
