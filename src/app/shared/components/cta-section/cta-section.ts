import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CTASection as CTAData } from '../../../core/models/cta.model';

@Component({
  selector: 'app-cta-section',
  imports: [MatButtonModule],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.css',
})
export class CtaSection {
  data = input.required<CTAData>();
}
