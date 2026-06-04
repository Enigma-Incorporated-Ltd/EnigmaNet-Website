import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

interface PageBlok {
  _uid: string;
  component: string;
  body?: PageBlok[];
  [key: string]: unknown;
}

interface PageProps {
  blok: PageBlok;
}

export default function Page({ blok }: PageProps) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
