import { blokEditable } from './blokEditable';
import { renderRichText } from '@storyblok/react';

interface ArticleBlok {
  _uid: string;
  component: string;
  headline: string;
  image: { filename: string; alt: string };
  text: Record<string, unknown>;
  meta_description: string;
}

interface ArticlePageProps {
  blok: ArticleBlok;
}

export default function ArticlePage({ blok }: ArticlePageProps) {
  const bodyHtml = blok.text ? renderRichText(blok.text as never) : '';

  return (
    <article {...blokEditable(blok)} style={{ minHeight: '80vh' }}>
      {/* Hero image */}
      {blok.image?.filename && (
        <div style={{ width: '100%', height: 'clamp(240px, 40vw, 480px)', overflow: 'hidden' }}>
          <img
            src={blok.image.filename}
            alt={blok.image.alt || ''}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}

      {/* Content */}
      <div className="container" style={{ maxWidth: '760px', padding: '56px 16px 80px' }}>
        <h1
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '32px',
          }}
        >
          {blok.headline}
        </h1>

        {bodyHtml ? (
          <div
            className="article-body"
            style={{ color: '#444', lineHeight: 1.8, fontSize: '1.05rem' }}
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />
        ) : (
          blok.meta_description && (
            <p style={{ color: '#555', lineHeight: 1.8, fontSize: '1.05rem' }}>{blok.meta_description}</p>
          )
        )}
      </div>
    </article>
  );
}
