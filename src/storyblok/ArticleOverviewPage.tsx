import { storyblokEditable } from '@storyblok/react';
import { useEffect, useState } from 'react';
import { getStoryblokApi } from '@storyblok/react';
import { Link } from 'react-router-dom';

interface ArticleStory {
  uuid: string;
  slug: string;
  full_slug: string;
  name: string;
  content: {
    headline: string;
    image: { filename: string; alt: string };
    meta_description: string;
    categories: unknown[];
  };
}

interface ArticleOverviewBlok {
  _uid: string;
  component: string;
}

interface ArticleOverviewPageProps {
  blok: ArticleOverviewBlok;
}

export default function ArticleOverviewPage({ blok }: ArticleOverviewPageProps) {
  const [articles, setArticles] = useState<ArticleStory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const api = getStoryblokApi();
    api
      .get('cdn/stories', {
        version: 'draft',
        starts_with: 'articles/',
        is_startpage: false,
      } as Record<string, unknown>)
      .then((r) => {
        setArticles(r.data.stories as ArticleStory[]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main {...storyblokEditable(blok)} style={{ minHeight: '80vh' }}>
      {/* Hero */}
      <section style={{ background: '#f5f5f7', padding: '64px 0 48px' }}>
        <div className="container text-center">
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800 }}>Blog</h1>
          <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '12px' }}>
            Fresh ideas and insights from the Brand New Day team.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section style={{ background: '#ffffff', padding: '64px 0' }}>
        <div className="container">
          {loading ? (
            <div className="row g-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="col-12 col-md-6 col-lg-3">
                  <div style={{ background: '#f5f5f5', borderRadius: '16px', height: '300px', animation: 'pulse 1.5s infinite' }} />
                </div>
              ))}
            </div>
          ) : (
            <div className="row g-4">
              {articles.map((article) => (
                <div key={article.uuid} className="col-12 col-md-6 col-lg-3">
                  <Link
                    to={`/${article.full_slug}`}
                    style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}
                  >
                    <div
                      style={{
                        background: '#ffffff',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
                      }}
                    >
                      {article.content?.image?.filename && (
                        <img
                          src={article.content.image.filename}
                          alt={article.content.image.alt || ''}
                          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                      )}
                      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{ fontWeight: 700, fontSize: '1rem', lineHeight: 1.4, marginBottom: '10px', flex: 1 }}>
                          {article.content?.headline || article.name}
                        </h3>
                        {article.content?.meta_description && (
                          <p style={{ color: '#777', fontSize: '0.85rem', lineHeight: 1.6, margin: '0 0 16px' }}>
                            {article.content.meta_description.slice(0, 90)}…
                          </p>
                        )}
                        <span style={{ fontWeight: 600, fontSize: '0.85rem', color: '#6251B8' }}>
                          Read more →
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
