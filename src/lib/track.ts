import posthog from '@/posthog';

export function track(eventName: string, properties?: Record<string, unknown>) {
  posthog.capture(eventName, properties);
}
