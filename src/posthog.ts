import posthog from 'posthog-js';

posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
  api_host: 'https://eu.i.posthog.com',
  defaults: '2026-01-30',
});

//test data posthog

// if (!window.location.host.includes('127.0.0.1') && !window.location.host.includes('localhost')) {
//   posthog.init('phc_AMVoykYWiTvaJA25pp63pngt3hwqDqdPQ7UMWLWPGmrA', {
//     api_host: 'https://eu.i.posthog.com',
//     defaults: '2026-01-30',
//   });
// }

export default posthog;