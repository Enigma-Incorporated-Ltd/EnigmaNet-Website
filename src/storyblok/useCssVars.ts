import { useEffect } from 'react';
import { useSiteConfig } from './useSiteConfig';

/**
 * Injects CSS variables from the live Storyblok site-config story into :root.
 * This mirrors exactly what storyblok-demo-default-v2 does at runtime,
 * making all colours, fonts and border-radius match the demo precisely.
 */
export function useCssVars() {
  const config = useSiteConfig();

  useEffect(() => {
    if (!config) return;

    const root = document.documentElement;

    const set = (varName: string, value: string | undefined) => {
      if (value) root.style.setProperty(varName, value);
    };

    // Colors from site-config
    set('--primary-dark', config.primary_dark_color?.color);
    set('--primary-highlight', config.primary_highlight_color?.color);
    set('--primary-background', config.primary_background_color?.color);
    set('--highlight-1', config.highlight_1_color?.color);
    set('--highlight-2', config.highlight_2_color?.color);
    set('--highlight-3', config.highlight_3_color?.color);
    set('--background-1', config.background_1_color?.color);
    set('--background-2', config.background_2_color?.color);
    set('--background-3', config.background_3_color?.color);
    set('--background-4', config.background_4_color?.color);
    set('--background-5', config.background_5_color?.color);
    set('--background-6', config.background_6_color?.color);
    set('--background-7', config.background_7_color?.color);
    set('--background-8', config.background_8_color?.color);
    set('--background-9', config.background_9_color?.color);
    set('--background-10', config.background_10_color?.color);

    // Border radius: disable when site-config says so
    if (config.disable_rounded_corners) {
      ['sm','default','md','lg','xl','2xl','3xl','full'].forEach((s) =>
        root.style.setProperty(`--rounded_${s}`, s === 'full' ? '9999px' : '0px')
      );
    }

    // Font families
    if (config.use_custom_fonts && config.custom_font_display) {
      root.style.setProperty('--font-family-display', `'${config.custom_font_display}', sans-serif`);
    }
    if (config.use_custom_fonts && config.custom_font_body) {
      root.style.setProperty('--font-family-body', `'${config.custom_font_body}', sans-serif`);
    }
  }, [config]);
}
