import { blokEditable } from './blokEditable';
import { useEffect, useState } from 'react';
import { getStoryblokApi } from '@storyblok/react';
import Banner, { type BannerBlokContent } from './Banner';

interface BannerReferenceBlok {
  _uid: string;
  component: string;
  /** UUID string, comma-separated UUIDs, or array of UUIDs (Storyblok default) */
  banners: string | string[] | Array<{ uuid?: string; content?: BannerBlokContent }>;
}

interface StoryblokStory {
  uuid: string;
  content: BannerBlokContent;
}

/**
 * Storyblok `by_uuids` must be a comma-separated string, not an array.
 * Banner stories use `headline` (blocks), `lead`, `buttons`, media — not legacy text/button_label fields.
 */
function uuidsFromBanners(
  banners: BannerReferenceBlok['banners'],
): string[] {
  if (banners == null) return [];
  if (typeof banners === 'string') {
    return banners
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
  }
  if (!Array.isArray(banners)) return [];
  const out: string[] = [];
  for (const item of banners) {
    if (typeof item === 'string' && item.trim()) out.push(item.trim());
    else if (item && typeof item === 'object' && 'uuid' in item && typeof item.uuid === 'string') {
      out.push(item.uuid);
    }
  }
  return out;
}

function resolvedContents(
  banners: BannerReferenceBlok['banners'],
): BannerBlokContent[] {
  if (!Array.isArray(banners)) return [];
  const out: BannerBlokContent[] = [];
  for (const item of banners) {
    if (item && typeof item === 'object' && 'content' in item && item.content && typeof item.content === 'object') {
      const c = item.content as BannerBlokContent;
      if (c._uid) out.push(c);
    }
  }
  return out;
}

export default function BannerReference({ blok }: { blok: BannerReferenceBlok }) {
  const [items, setItems] = useState<BannerBlokContent[]>([]);

  useEffect(() => {
    const preloaded = resolvedContents(blok.banners);
    if (preloaded.length > 0) {
      setItems(preloaded);
      return;
    }

    const uuids = uuidsFromBanners(blok.banners);
    if (uuids.length === 0) {
      setItems([]);
      return;
    }

    const api = getStoryblokApi();
    const byUuids = uuids.join(',');

    api
      .get('cdn/stories', {
        version: 'draft',
        by_uuids: byUuids,
      })
      .then((r) => {
        const stories = (r.data.stories ?? []) as StoryblokStory[];
        const contents = stories
          .map((s) => s.content)
          .filter((c) => c && typeof c === 'object');
        setItems(contents);
      })
      .catch(() => setItems([]));
  }, [blok.banners]);

  if (items.length === 0) return null;

  return (
    <div {...blokEditable(blok)}>
      {items.map((content, i) => (
        <Banner key={content._uid || `banner-${i}`} blok={content} />
      ))}
    </div>
  );
}
