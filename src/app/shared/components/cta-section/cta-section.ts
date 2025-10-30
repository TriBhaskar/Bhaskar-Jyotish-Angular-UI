import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CTASection } from '../../../core/models/cta.model';

@Component({
  selector: 'app-cta-section',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.css',
})
export class CtaSection {
  data = input.required<CTASection>();
}
