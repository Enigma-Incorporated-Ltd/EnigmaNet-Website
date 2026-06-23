import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import posthog from '../posthog.ts'; 

export function PostHogPageView() {
  const location = useLocation();

  useEffect(() => {
    posthog.capture('$pageview', { $current_url: window.location.href });
  }, [location]);

  return null;
}
