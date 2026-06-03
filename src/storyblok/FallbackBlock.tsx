import { storyblokEditable } from '@storyblok/react';

interface FallbackBlok {
  _uid: string;
  component: string;
  [key: string]: unknown;
}

interface FallbackBlockProps {
  blok: FallbackBlok;
}

export default function FallbackBlock({ blok }: FallbackBlockProps) {
  if (import.meta.env.DEV) {
    return (
      <div
        {...storyblokEditable(blok)}
        style={{
          border: '2px dashed #e87722',
          padding: '1rem',
          margin: '0.5rem 0',
          background: '#fff8f2',
          borderRadius: '6px',
          fontFamily: 'monospace',
          fontSize: '13px',
          color: '#333',
        }}
      >
        <strong>Storyblok block: </strong>
        <code>{blok.component}</code>
        <pre style={{ marginTop: '0.5rem', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          {JSON.stringify(blok, null, 2)}
        </pre>
      </div>
    );
  }
  return null;
}
