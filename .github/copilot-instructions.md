# Bhaskar Jyotish - Angular Frontend Guidelines

## Project Overview

This is an **Angular 20** astrology consultation platform (Vedic Jyotish) using **standalone components**, **zoneless change detection**, and **Angular Material 20**. The app is in early development (MVP phase) with authentication scaffolding and minimal routing in place.

## Architecture & Key Decisions

### Standalone Components Pattern

- **All components use standalone: true** (via `imports` array in `@Component` decorator)
- No `NgModule` declarations - Angular 20 standalone-first architecture
- Example from `src/app/app.ts`: `imports: [RouterOutlet]` instead of module declarations

### Zoneless Change Detection

- Configured via `provideZonelessChangeDetection()` in `src/app/app.config.ts`
- Use **signals** for reactive state instead of traditional change detection
- Example: `protected readonly title = signal('bjyotish-frontend')` in App component

### File Naming Convention

- Components use **class name without `.component` suffix**: `login.ts`, `header.ts`, `footer.ts` (not `login.component.ts`)
- Templates: `*.html`, Styles: `*.css`, Tests: `*.spec.ts`
- Example: `src/app/features/auth/login/` contains `login.ts`, `login.html`, `login.css`, `login.spec.ts`

### Angular Material Theming

- Custom Material 3 theme in `src/custom-theme.scss` using magenta/violet palette
- Included globally via `angular.json` styles array before `styles.css`
- Always import Material components from `@angular/material` and `@angular/cdk`

## Project Structure

```
src/app/
├── app.ts                    # Root component (App class, not AppComponent)
├── app.config.ts            # Application config with providers
├── app.routes.ts            # Route definitions (currently empty)
├── core/                    # Singletons: guards, interceptors, models, services
│   ├── guards/
│   ├── interceptors/
│   ├── models/
│   └── services/
├── features/                # Feature modules (auth, dashboard, etc.)
│   ├── auth/
│   │   ├── login/
│   │   ├── register/
│   │   └── forgot-password/
│   └── dashboard/
└── shared/                  # Shared components, pipes
    ├── components/
    │   ├── header/
    │   └── footer/
    └── pipes/
```

## Development Workflow

### Running the App

```bash
npm start           # Dev server on http://localhost:4200
ng serve            # Alternative
```

### Testing

```bash
npm test            # Karma/Jasmine unit tests
```

### Code Generation

```bash
ng generate component features/auth/profile
# Creates: profile.ts, profile.html, profile.css, profile.spec.ts
```

## Coding Patterns

### Component Structure

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-login",
  imports: [], // Standalone imports
  templateUrl: "./login.html",
  styleUrl: "./login.css", // Use styleUrl (singular) not styleUrls
})
export class Login {
  // Use signals for reactive state
}
```

### TypeScript Strictness

- `strict: true`, `noImplicitReturns: true`, `noFallthroughCasesInSwitch: true` in `tsconfig.json`
- Always use explicit types for function parameters and return values
- Angular strict templates enabled via `strictTemplates: true`

### Routing (To Be Implemented)

- Routes defined in `src/app/app.routes.ts` (currently empty)
- Use lazy loading for feature modules in production
- Example pattern: `loadComponent: () => import('./features/auth/login/login').then(m => m.Login)`

## Domain Knowledge

### Business Context

See `Bhaskar Jyotish Features.md` for full requirements:

- **Phase 1 (Current)**: User auth, astrologer profiles, appointment booking, payment integration, video consultation MVP
- **Phase 2**: Enhanced consultation features with ratings/reviews
- **Phase 3**: Subscription-based personalized horoscopes and birth chart generation
- **Phase 4**: Community forum, knowledge center, mobile app

### Key Features to Build

1. **Astrologer consultation**: Profiles, availability, video calls, payments
2. **Subscription content**: Personalized daily/weekly/monthly horoscopes
3. **Birth chart generation**: Integration with astrological calculation APIs
4. **Digital marketplace**: Remedial products, books, spiritual items

## Common Tasks

### Adding a New Feature

1. Create feature directory under `src/app/features/`
2. Use `ng generate component features/<name>/<component>` for scaffolding
3. Update `app.routes.ts` with new route
4. Import required Angular Material components in standalone component

### Adding Angular Material Components

```typescript
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  imports: [MatButtonModule, MatInputModule],
  // ...
})
```

### Creating Services

- Place in `src/app/core/services/` for app-wide services
- Use `providedIn: 'root'` for singleton services
- Example: Auth service, API client, state management

## Important Notes

- **No environments/**: Environment configuration directory exists but is empty - needs setup for API URLs
- **Empty routes**: `app.routes.ts` has no routes defined yet - authentication routes need wiring
- **Minimal components**: Login/Register/Dashboard components are placeholders
- **No backend integration**: API services not yet implemented
- **Material theme**: Already configured with magenta/violet palette - use Material components consistently
