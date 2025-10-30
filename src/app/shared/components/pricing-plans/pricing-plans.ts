import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PricingPlan } from '../../../core/models/pricing-plan.model';

@Component({
  selector: 'app-pricing-plans',
  imports: [RouterLink, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './pricing-plans.html',
  styleUrl: './pricing-plans.css',
})
export class PricingPlans {
  title = input.required<string>();
  subtitle = input.required<string>();
  plans = input.required<PricingPlan[]>();
  footerNote = input<string>();
  footerButtonText = input<string>();
}
