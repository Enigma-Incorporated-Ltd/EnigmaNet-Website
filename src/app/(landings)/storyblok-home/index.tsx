import { StoryblokComponent, useStoryblok } from '@storyblok/react';
import SbLayout from '@/storyblok/SbLayout';

export default function StoryblokHome() {
  const story = useStoryblok('home', {
    version: 'draft',
  });

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
