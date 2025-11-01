import { Component, inject, input } from '@angular/core';
import { AssetsService } from '../../../core/services/assets.service';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.html',
  styleUrl: './logo.css',
})
export class Logo {
  // Inject assets service
  protected readonly assets = inject(AssetsService);

  // Optional inputs for customization
  size = input<'small' | 'medium' | 'large'>('medium');
}
