import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeroSection as HeroData } from '../../../core/models/hero.model';

@Component({
  selector: 'app-hero-section',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  data = input.required<HeroData>();
}
