import { storyblokEditable } from '@storyblok/react';
import { useEffect, useState } from 'react';
import { getStoryblokApi } from '@storyblok/react';

interface HeadlineSegment {
  _uid: string;
  text: string;
}

interface FeaturedArticlesBlok {
  _uid: string;
  component: string;
  headline: HeadlineSegment;
  lead: string;
  articles: string[];
  cols: string;
  background_color: string;
}

interface FeaturedArticlesSectionProps {
  blok: FeaturedArticlesBlok;
}

interface ArticleStory {
  uuid: string;
  name: string;
  slug: string;
  content: {
    image?: { filename: string; alt: string };
    teaser_image?: { filename: string; alt: string };
    title?: string;
    teaser?: string;
    category?: { name?: string };
    [key: string]: unknown;
  };
}

const BG_MAP: Record<string, string> = {
  white: '#ffffff',
  'primary-background': '#f3eaff',
  'background-5': '#fff4ec',
};

export default function FeaturedArticlesSection({ blok }: FeaturedArticlesSectionProps) {
  const [articles, setArticles] = useState<ArticleStory[]>([]);
  const bg = BG_MAP[blok.background_color] ?? '#ffffff';

  useEffect(() => {
    if (!blok.articles?.length) return;
    const api = getStoryblokApi();
    Promise.all(
      blok.articles.map((uuid: string) =>
        api
          .get(`cdn/stories`, { version: 'draft', by_uuids: uuid })
          .then((r) => r.data.stories?.[0] as ArticleStory)
          .catch(() => null)
      )
    ).then((results) => {
      setArticles(results.filter(Boolean) as ArticleStory[]);
    });
  }, [blok.articles]);

  const cols = Math.min(parseInt(blok.cols) || 4, 4);
  const colClass = cols <= 2 ? 'col-sm-6' : cols === 3 ? 'col-sm-6 col-lg-4' : 'col-sm-6 col-lg-3';

  return (
    <section {...storyblokEditable(blok)} style={{ background: bg, padding: '80px 0' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '16px' }}>
            {blok.headline?.text}
          </h2>
          {blok.lead && (
            <p style={{ color: '#666', fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto' }}>
              {blok.lead}
            </p>
          )}
        </div>

        {articles.length === 0 ? (
          <div className="row g-4">
            {(blok.articles ?? []).map((uuid) => (
              <div key={uuid} className={`col-12 ${colClass}`}>
                <div
                  style={{
                    background: '#f5f5f5',
                    borderRadius: '16px',
                    height: '280px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#aaa',
                    fontSize: '0.9rem',
                  }}
                >
                  Loading article…
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="row g-4">
            {articles.map((article) => {
              const img = article.content?.image || article.content?.teaser_image;
              return (
                <div key={article.uuid} className={`col-12 ${colClass}`}>
                  <div
                    style={{
                      background: '#fff',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {img?.filename && (
                      <img
                        src={img.filename}
                        alt={img.alt ?? ''}
                        style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                      />
                    )}
                    <div style={{ padding: '20px', flex: 1 }}>
                      <h5 style={{ fontWeight: 700, marginBottom: '8px', fontSize: '1rem' }}>
                        {article.content?.title ?? article.name}
                      </h5>
                      {article.content?.teaser && (
                        <p style={{ color: '#777', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                          {String(article.content.teaser).slice(0, 100)}…
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
