export interface CTASection {
  badge: string;
  title: string;
  highlightedTitle: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  stats: {
    value: string;
    label: string;
  }[];
}
