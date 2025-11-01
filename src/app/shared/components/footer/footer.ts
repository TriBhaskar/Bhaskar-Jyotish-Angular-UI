import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Logo } from '../logo/logo';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, MatIconModule, Logo],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {}
