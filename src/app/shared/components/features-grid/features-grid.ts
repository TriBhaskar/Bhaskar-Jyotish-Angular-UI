import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Feature } from '../../../core/models/feature.model';

@Component({
  selector: 'app-features-grid',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './features-grid.html',
  styleUrl: './features-grid.css',
})
export class FeaturesGrid {
  title = input.required<string>();
  subtitle = input.required<string>();
  features = input.required<Feature[]>();
}
