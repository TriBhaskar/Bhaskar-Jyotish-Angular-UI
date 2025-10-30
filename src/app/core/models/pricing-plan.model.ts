export interface PricingPlan {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
  featuredBadge?: string;
  buttonText: string;
  buttonStyle?: 'raised' | 'stroked';
}
