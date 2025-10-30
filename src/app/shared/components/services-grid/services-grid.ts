import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Service } from '../../../core/models/service.model';

@Component({
  selector: 'app-services-grid',
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './services-grid.html',
  styleUrl: './services-grid.css',
})
export class ServicesGrid {
  title = input.required<string>();
  subtitle = input.required<string>();
  services = input.required<Service[]>();
}
