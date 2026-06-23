import posthog from 'posthog-js';

posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  person_profiles: 'identified_only',
  defaults: '2026-01-30',
  session_recording: { recordCrossOriginIframes: true }, 
});

export default posthog;
