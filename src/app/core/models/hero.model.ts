export interface Stat {
  value: string;
  label: string;
}

export interface HeroSection {
  badge: {
    icon: string;
    text: string;
  };
  title: string;
  highlightedTitle: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  stats: Stat[];
}
