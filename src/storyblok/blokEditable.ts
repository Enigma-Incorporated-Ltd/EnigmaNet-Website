import { storyblokEditable, type SbBlokData } from '@storyblok/react';

/** Wraps custom blok interfaces for Storyblok's editable attributes. */
export function blokEditable(blok: object) {
  return storyblokEditable(blok as SbBlokData);
}
