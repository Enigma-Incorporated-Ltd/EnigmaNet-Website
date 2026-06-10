/**
 * Dynamic catch-all route — matches any URL and tries to fetch the
 * corresponding Storyblok story by slug. This is the blueprint pattern:
 * "Dynamic routing to fetch and render new stories automatically."
 *
 * How it works:
 *   /about            → fetches slug "about"
 *   /articles/my-post → fetches slug "articles/my-post"
 *   /team             → fetches slug "team" (even if not in Routes.tsx)
 */
import { useLocation } from 'react-router-dom';
import { StoryblokComponent, useStoryblok } from '@storyblok/react';
import SbLayout from './SbLayout';

export default function StoryblokCatchAll() {
  const { pathname } = useLocation();

  // Strip leading slash, treat "/" as "home"
  const slug = pathname === '/' ? 'home' : pathname.replace(/^\//, '').replace(/\/$/, '');

  const story = useStoryblok(slug, { version: 'draft' });

  if (!story?.content) {
    return (
      <SbLayout>
        <div
          style={{
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '12px',
            color: '#999',
          }}
        >
          <div style={{ fontSize: '1.1rem' }}>Loading…</div>
          <div style={{ fontSize: '0.8rem' }}>Fetching /{slug}</div>
        </div>
      </SbLayout>
    );
  }

  return (
    <SbLayout>
      <StoryblokComponent blok={story.content} />
    </SbLayout>
  );
}
