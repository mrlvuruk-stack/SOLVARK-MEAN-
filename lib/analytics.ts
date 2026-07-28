export interface GAEventProps {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export function trackEvent({ action, category, label, value }: GAEventProps) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

export function trackCTAClick(ctaLabel: string, location: string) {
  trackEvent({
    action: 'cta_click',
    category: 'conversion',
    label: `${ctaLabel} | ${location}`,
  });
}
