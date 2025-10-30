import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Service } from '../../../core/models/service.model';

@Component({
  selector: 'app-services-grid',
  imports: [RouterLink, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './services-grid.html',
  styleUrl: './services-grid.css',
})
export class ServicesGrid {
  title = input.required<string>();
  subtitle = input.required<string>();
  services = input.required<Service[]>();
}
