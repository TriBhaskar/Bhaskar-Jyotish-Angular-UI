# Component Architecture - Bhaskar Jyotish Landing Page

## Overview

The landing page has been refactored into small, reusable components following Angular 20 standalone architecture with configurable data models.

## Component Structure

### 1. Home Component (Container)

**Location:** `src/app/features/home/`

- **Role:** Orchestrator component that configures data and composes child components
- **Pattern:** Smart component with data configuration
- **Data Configuration:**
  - Hero section data (badge, title, subtitle, stats, buttons)
  - Features array (6 items with icons, colors, titles, descriptions)
  - Services array (4 items with details, features, pricing)
  - Testimonials array (4 customer reviews)
  - Pricing plans array (3 subscription tiers)
  - CTA section data (badge, heading, stats, buttons)

### 2. Reusable Components

#### HeroSection (`app-hero-section`)

**Location:** `src/app/shared/components/hero-section/`

- **Purpose:** Display main hero banner with value proposition
- **Input:** `HeroData` interface
- **Features:**
  - Badge with icon
  - Main heading with gradient text
  - Subtitle/description
  - Call-to-action buttons (primary + secondary)
  - Stats display (3 metrics)
  - Decorative image placeholder
  - Floating chat button

#### FeaturesGrid (`app-features-grid`)

**Location:** `src/app/shared/components/features-grid/`

- **Purpose:** Display grid of platform features/benefits
- **Inputs:**
  - `title` (string)
  - `subtitle` (string)
  - `features` (Feature[] array)
- **Features:**
  - Responsive grid layout (3 columns on desktop)
  - Material card-based design
  - Icon with configurable color (orange/magenta)
  - Title and description for each feature

#### ServicesGrid (`app-services-grid`)

**Location:** `src/app/shared/components/services-grid/`

- **Purpose:** Showcase available services with details
- **Inputs:**
  - `title` (string)
  - `subtitle` (string)
  - `services` (Service[] array)
- **Features:**
  - 4-column responsive grid
  - Service icon with color theme
  - Feature list with checkmarks
  - Pricing information
  - Call-to-action button per service

#### Testimonials (`app-testimonials`)

**Location:** `src/app/shared/components/testimonials/`

- **Purpose:** Display customer reviews and ratings
- **Inputs:**
  - `title` (string)
  - `subtitle` (string)
  - `testimonials` (Testimonial[] array)
- **Features:**
  - 2-column responsive grid
  - 5-star rating display
  - Customer quote
  - Avatar (initials)
  - Name and location

#### PricingPlans (`app-pricing-plans`)

**Location:** `src/app/shared/components/pricing-plans/`

- **Purpose:** Display subscription pricing tiers
- **Inputs:**
  - `title` (string)
  - `subtitle` (string)
  - `plans` (PricingPlan[] array)
  - `footerNote` (string)
  - `footerButtonText` (string)
- **Features:**
  - 3-column pricing comparison
  - Featured plan highlighting
  - Popular badge for premium tier
  - Feature lists with checkmarks
  - Currency formatting (₹)
  - Footer with contact sales CTA

#### CtaSection (`app-cta-section`)

**Location:** `src/app/shared/components/cta-section/`

- **Purpose:** Final call-to-action section
- **Input:** `CtaData` interface
- **Features:**
  - Badge label
  - Bold heading with highlighted text
  - Description text
  - Dual action buttons
  - Stats display (3 metrics)
  - Gradient background (custom theme colors)

## Data Models

### Core Interfaces

**Location:** `src/app/core/models/`

1. **Feature** (`feature.model.ts`)

   - `icon: string` - Material icon name
   - `iconColor: 'orange' | 'magenta'` - Theme color
   - `title: string`
   - `description: string`

2. **Service** (`service.model.ts`)

   - `icon: string`
   - `iconColor: 'orange' | 'magenta'`
   - `title: string`
   - `description: string`
   - `features: string[]`
   - `price: string`
   - `buttonText: string`
   - `buttonAction: () => void`

3. **Testimonial** (`testimonial.model.ts`)

   - `rating: number` (1-5)
   - `text: string`
   - `authorName: string`
   - `authorLocation: string`
   - `authorInitials: string`

4. **PricingPlan** (`pricing-plan.model.ts`)

   - `name: string`
   - `price: number`
   - `currency: string`
   - `period: string` (e.g., "/month")
   - `description: string`
   - `features: string[]`
   - `buttonText: string`
   - `buttonStyle: 'primary' | 'secondary' | 'gradient'`
   - `featured?: boolean`
   - `popularBadgeText?: string`

5. **HeroData** (`hero.model.ts`)

   - `badgeIcon: string`
   - `badgeText: string`
   - `title: string`
   - `titleHighlight: string`
   - `subtitle: string`
   - `primaryButtonText: string`
   - `secondaryButtonText: string`
   - `stats: { value: string; label: string }[]`

6. **CtaData** (`cta.model.ts`)
   - `badgeText: string`
   - `heading: string`
   - `headingHighlight: string`
   - `description: string`
   - `primaryButtonText: string`
   - `secondaryButtonText: string`
   - `stats: { value: string; label: string }[]`

## Design Patterns

### 1. Standalone Components

- All components use `standalone: true`
- Explicit imports in `@Component` decorator
- No NgModule dependencies

### 2. Signal-Based Inputs

- Components use `input.required<T>()` for type-safe inputs
- Example: `data = input.required<HeroData>()`

### 3. File Naming Convention

- Component class: `hero-section.ts` (no `.component` suffix)
- Template: `hero-section.html`
- Styles: `hero-section.css`
- Spec: `hero-section.spec.ts`

### 4. Color Theming

- Primary palette: FFB200 (orange)
- Accent palette: D91656 (magenta)
- Additional gradients: EB5B00, 640D5F
- Material 3 theme integration

### 5. Data Configuration Over Hard-Coding

- All content is configurable via TypeScript
- Easy to update text, pricing, features without touching templates
- Type-safe with TypeScript interfaces

## Usage Example

```typescript
// In home.ts
protected heroData: HeroData = {
  badgeIcon: 'auto_awesome',
  badgeText: 'AI-Powered Vedic Astrology Platform',
  title: 'Discover Your',
  titleHighlight: 'Cosmic Journey',
  subtitle: 'Connect with certified Vedic astrologers...',
  primaryButtonText: 'Book Consultation',
  secondaryButtonText: 'Explore Services',
  stats: [
    { value: '500+', label: 'Certified Astrologers' },
    { value: '10K+', label: 'Happy Users' },
    { value: '50K+', label: 'Consultations' }
  ]
};

// In home.html
<app-hero-section [data]="heroData"></app-hero-section>
```

## Benefits

1. **Reusability:** Components can be used across different pages
2. **Maintainability:** Changes to structure only need to be made once
3. **Type Safety:** TypeScript interfaces prevent data errors
4. **Configurability:** Content updates don't require template changes
5. **Testability:** Each component can be tested in isolation
6. **Performance:** Angular 20 zoneless change detection
7. **Scalability:** Easy to add new sections or modify existing ones

## Next Steps

1. **Add Routing:** Connect buttons to actual route navigation
2. **API Integration:** Replace static data with backend calls
3. **Animation:** Add entrance animations to sections
4. **Responsive Images:** Replace placeholders with actual images
5. **A/B Testing:** Easy to test different content configurations
6. **Lazy Loading:** Consider lazy-loading components for better performance
