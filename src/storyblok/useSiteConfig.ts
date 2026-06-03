import { useEffect, useState } from 'react';
import { getStoryblokApi } from '@storyblok/react';

export interface NavItem {
  _uid: string;
  label: string;
  link: { cached_url: string; url: string };
}

export interface ColorToken { color: string }

export interface SiteConfigContent {
  header_logo: { filename: string; alt: string };
  header_nav: NavItem[];
  header_buttons: Array<{
    _uid: string;
    label: string;
    link: { cached_url: string };
  }>;
  header_light: boolean;
  footer_headline: Array<{ _uid: string; text: string; highlight: string }>;
  footer_about: { type: string; content: unknown[] };
  footer_nav_2_headline: string;
  footer_nav_2: NavItem[];
  footer_nav_3_headline: string;
  footer_nav_3: NavItem[];
  footer_light: boolean;
  footer_decoration: boolean;
  // Color tokens
  primary_dark_color: ColorToken;
  primary_highlight_color: ColorToken;
  primary_background_color: ColorToken;
  highlight_1_color: ColorToken;
  highlight_2_color: ColorToken;
  highlight_3_color: ColorToken;
  background_1_color: ColorToken;
  background_2_color: ColorToken;
  background_3_color: ColorToken;
  background_4_color: ColorToken;
  background_5_color: ColorToken;
  background_6_color: ColorToken;
  background_7_color: ColorToken;
  background_8_color: ColorToken;
  background_9_color: ColorToken;
  background_10_color: ColorToken;
  // Typography
  use_custom_fonts: boolean;
  custom_font_display: string;
  custom_font_body: string;
  disable_rounded_corners: boolean;
}

let cached: SiteConfigContent | null = null;

export function useSiteConfig() {
  const [config, setConfig] = useState<SiteConfigContent | null>(cached);

  useEffect(() => {
    if (cached) return;
    const api = getStoryblokApi();
    api
      .get('cdn/stories/site-config', { version: 'draft' })
      .then((r) => {
        cached = r.data.story.content as SiteConfigContent;
        setConfig(cached);
      })
      .catch(console.error);
  }, []);

  return config;
}
