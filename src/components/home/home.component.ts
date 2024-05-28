import { Component } from '@angular/core';
import { CtaComponent } from '../cta/cta.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CtaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})

export class HomeComponent {}