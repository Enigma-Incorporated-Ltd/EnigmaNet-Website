import { blokEditable } from './blokEditable';
import { StoryblokComponent } from '@storyblok/react';

interface GridBlok {
  _uid: string;
  component: 'grid';
  columns: Array<{ _uid: string; component: string; [key: string]: unknown }>;
}

export default function Grid({ blok }: { blok: GridBlok }) {
  const cols = blok.columns ?? [];
  const colSpan = Math.floor(12 / Math.min(cols.length || 3, 4));

  return (
    <section
      {...blokEditable(blok)}
      style={{ padding: '64px 0', background: '#ffffff' }}
    >
      <div className="container">
        <div className="row g-4">
          {cols.map((nestedBlok) => (
            <div key={nestedBlok._uid} className={`col-12 col-md-6 col-lg-${colSpan}`}>
              <StoryblokComponent blok={nestedBlok} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
