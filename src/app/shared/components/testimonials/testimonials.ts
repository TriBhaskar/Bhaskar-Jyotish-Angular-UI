import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Testimonial } from '../../../core/models/testimonial.model';

@Component({
  selector: 'app-testimonials',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  title = input.required<string>();
  subtitle = input.required<string>();
  testimonials = input.required<Testimonial[]>();

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
