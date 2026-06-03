import { storyblokEditable } from '@storyblok/react';

interface TeaserBlok {
  _uid: string;
  component: 'teaser';
  headline: string;
}

export default function Teaser({ blok }: { blok: TeaserBlok }) {
  return (
    <section
      {...storyblokEditable(blok)}
      style={{
        padding: '80px 0',
        background: '#f5f5f7',
        textAlign: 'center',
      }}
    >
      <div className="container">
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            margin: 0,
          }}
        >
          {blok.headline}
        </h1>
      </div>
    </section>
  );
}
