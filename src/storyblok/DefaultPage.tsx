import { blokEditable } from './blokEditable';
import { StoryblokComponent } from '@storyblok/react';

interface DefaultPageBlok {
  _uid: string;
  component: string;
  body?: DefaultPageBlok[];
  [key: string]: unknown;
}

interface DefaultPageProps {
  blok: DefaultPageBlok;
}

export default function DefaultPage({ blok }: DefaultPageProps) {
  return (
    <main {...blokEditable(blok)}>
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
