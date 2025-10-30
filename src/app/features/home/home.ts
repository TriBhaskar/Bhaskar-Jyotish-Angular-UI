import { Component } from '@angular/core';
import { HeroSection } from '../../shared/components/hero-section/hero-section';
import { FeaturesGrid } from '../../shared/components/features-grid/features-grid';
import { ServicesGrid } from '../../shared/components/services-grid/services-grid';
import { Testimonials } from '../../shared/components/testimonials/testimonials';
import { PricingPlans } from '../../shared/components/pricing-plans/pricing-plans';
import { CtaSection } from '../../shared/components/cta-section/cta-section';

import { HeroSection as HeroData } from '../../core/models/hero.model';
import { Feature } from '../../core/models/feature.model';
import { Service } from '../../core/models/service.model';
import { Testimonial } from '../../core/models/testimonial.model';
import { PricingPlan } from '../../core/models/pricing-plan.model';
import { CTASection } from '../../core/models/cta.model';

@Component({
  selector: 'app-home',
  imports: [
    HeroSection,
    FeaturesGrid,
    ServicesGrid,
    Testimonials,
    PricingPlans,
    CtaSection,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // Hero Section Data
  heroData: HeroData = {
    badge: {
      icon: 'auto_awesome',
      text: 'AI-Powered Vedic Astrology Platform',
    },
    title: 'Discover Your',
    highlightedTitle: 'Cosmic Journey',
    subtitle:
      'Connect with certified Vedic astrologers, get personalized insights, and explore the wisdom of ancient Jyotish through modern technology.',
    primaryButtonText: 'Book Consultation',
    secondaryButtonText: 'Explore Services',
    stats: [
      { value: '500+', label: 'Certified Astrologers' },
      { value: '10K+', label: 'Happy Users' },
      { value: '50K+', label: 'Consultations' },
    ],
  };

  // Features Section Data
  featuresTitle = 'Why Choose <span class="brand-name">Bhaskar Jyotish</span>';
  featuresSubtitle =
    'Experience the perfect blend of ancient Vedic wisdom and modern technology for accurate astrological guidance';
  features: Feature[] = [
    {
      icon: 'verified',
      iconColor: 'orange',
      title: 'Certified Astrologers',
      description:
        'Connect with verified and experienced Vedic astrology experts with proven track records',
    },
    {
      icon: 'event_available',
      iconColor: 'orange',
      title: 'Easy Booking',
      description:
        'Seamlessly manage and book consultations with our intuitive booking system',
    },
    {
      icon: 'psychology_alt',
      iconColor: 'magenta',
      title: 'Personalized Insights',
      description:
        'Get personalized astrological guidance tailored to your unique birth chart and life situation',
    },
    {
      icon: 'currency_rupee',
      iconColor: 'orange',
      title: 'Transparent Pricing',
      description:
        'Honest, upfront fees help you find affordable suggestions for every budget',
    },
    {
      icon: 'workspace_premium',
      iconColor: 'orange',
      title: 'Verified Astrologers',
      description:
        'Thorough verification ensures deep, supportive insights and personalized astrological remedies',
    },
    {
      icon: 'security',
      iconColor: 'magenta',
      title: 'Secure & Private',
      description:
        'Your data security and confidentiality are priorities with end-to-end encryption',
    },
  ];

  // Services Section Data
  servicesTitle = 'Our <span class="gradient-text">Services</span>';
  servicesSubtitle =
    "Comprehensive astrological services designed to guide you through life's journey with ancient wisdom and modern precision";
  services: Service[] = [
    {
      icon: 'video_call',
      iconColor: 'orange',
      title: 'Video Consultations',
      description:
        'One-on-one sessions with certified astrologers through secure video calls',
      features: [
        'Real-time chart analysis',
        'Screen sharing',
        'Instant answers',
        'Video sharing',
      ],
      price: 'Starting from <strong>FREE</strong>',
      buttonText: 'Learn More',
      buttonColor: 'primary',
    },
    {
      icon: 'auto_stories',
      iconColor: 'orange',
      title: 'Subscription Plans',
      description:
        'Regular personalized content and astrological guidance for continued development',
      features: [
        'Daily horoscopes',
        'Transit predictions',
        'Remedial suggestions',
        'PDF reports',
      ],
      price: 'Starting from <strong>₹299/month</strong>',
      buttonText: 'View Plans',
      buttonColor: 'primary',
    },
    {
      icon: 'forum',
      iconColor: 'magenta',
      title: 'Community Forum',
      description:
        'Connect with the mystical community and engage in meaningful discussions',
      features: [
        'Topic-based discussion',
        'Ask experts',
        'Share experiences',
        'Knowledge sharing',
      ],
      price: '<strong>Free to join</strong>',
      buttonText: 'Join Now',
      buttonColor: 'primary',
    },
    {
      icon: 'shopping_bag',
      iconColor: 'orange',
      title: 'Digital Marketplace',
      description:
        'Explore carefully curated remedial products and spiritual items',
      features: [
        'Gemstones & yantras',
        'Spiritual books',
        'Verified sellers',
        'Secure payments',
      ],
      price: '<strong>Varies by product</strong>',
      buttonText: 'Explore',
      buttonColor: 'primary',
    },
  ];

  // Testimonials Section Data
  testimonialsTitle = 'What Our <span class="gradient-text">Clients Say</span>';
  testimonialsSubtitle =
    'Thousands of satisfied clients trust us for authentic, Vedic astrological guidance';
  testimonials: Testimonial[] = [
    {
      rating: 5,
      text: 'The consultation was incredibly accurate and insightful. The astrologer helped me understand my career path better.',
      authorName: 'Priya Sharma',
      authorInitials: 'PS',
      authorLocation: 'Mumbai, Maharashtra',
    },
    {
      rating: 5,
      text: 'Amazing platform! The daily horoscope predictions are spot on and the astrologer was detailed and kind.',
      authorName: 'Rajesh Kumar',
      authorInitials: 'RK',
      authorLocation: 'Delhi, India',
    },
    {
      rating: 5,
      text: 'I love the subscription service. The daily insights are spot-on and had helped me a lot in my daily life.',
      authorName: 'Anita Patel',
      authorInitials: 'AP',
      authorLocation: 'Ahmedabad, Gujarat',
    },
    {
      rating: 5,
      text: 'The astrologers are highly knowledgeable, and the video consultation feature is top-notch. Highly recommend!',
      authorName: 'Vikram Singh',
      authorInitials: 'VS',
      authorLocation: 'Jaipur, Rajasthan',
    },
  ];

  // Pricing Section Data
  pricingTitle = 'Choose Your <span class="gradient-text">Plan</span>';
  pricingSubtitle =
    'Select the perfect subscription plan that matches your astrological journey and needs';
  pricingPlans: PricingPlan[] = [
    {
      name: 'Basic',
      price: 299,
      period: 'month',
      description: 'Perfect for exploring basic astrology',
      features: [
        'Daily horoscope',
        'Weekly predictions',
        'Basic birth chart',
        'Email support',
        'Community access',
      ],
      buttonText: 'Choose Plan',
      buttonStyle: 'stroked',
    },
    {
      name: 'Premium',
      price: 799,
      period: 'month',
      description: 'Ideal for seekers of in-depth cosmic guidance',
      features: [
        'Everything in Basic',
        'Monthly detailed reports',
        'Transit predictions',
        'Dasha analysis',
        'Priority support',
        '2 video consultations',
      ],
      isFeatured: true,
      featuredBadge: 'Most Popular',
      buttonText: 'Get Started Now',
      buttonStyle: 'raised',
    },
    {
      name: 'Professional',
      price: 1499,
      period: 'month',
      description: 'Comprehensive guidance for serious practitioners',
      features: [
        'Everything in Premium',
        'Weekly video calls',
        'Personalized remedies',
        'Gemstone analysis',
        'Muhurta consultation',
        'Relationship compatibility',
        'Career roadmap',
      ],
      buttonText: 'Choose Plan',
      buttonStyle: 'stroked',
    },
  ];
  pricingFooterNote =
    'Need a custom plan? We offer enterprise solutions for businesses and institutions';
  pricingFooterButton = 'Contact Sales';

  // CTA Section Data
  ctaData: CTASection = {
    badge: 'JOIN OUR COMMUNITY',
    title: 'Ready to Unlock Your',
    highlightedTitle: 'Cosmic Potential?',
    description:
      'Start your journey with a 5-minute FREE consultation today and discover what the stars have in store for you',
    primaryButtonText: 'Book Free Consultation',
    secondaryButtonText: 'Explore Plans',
    stats: [
      { value: '24/7', label: 'Available Support' },
      { value: '100%', label: 'Satisfaction Guarantee' },
      { value: '500+', label: 'Expert Astrologers' },
    ],
  };
}
