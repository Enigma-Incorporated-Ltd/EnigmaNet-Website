import { StoryblokComponent, useStoryblok } from '@storyblok/react';
import SbLayout from './SbLayout';

interface StoryblokPageProps {
  slug: string;
}

export default function StoryblokPage({ slug }: StoryblokPageProps) {
  const story = useStoryblok(slug, { version: 'draft' });

  if (!story?.content) {
    return (
      <SbLayout>
        <div
          style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem',
            color: '#999',
          }}
        >
          Loading...
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
