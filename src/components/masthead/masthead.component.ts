import { Component } from '@angular/core';
import { BtnIconComponent } from '../btn-icon/btn-icon.component';

@Component({
  selector: 'masthead',
  standalone: true,
  imports: [BtnIconComponent],
  templateUrl: './masthead.component.html',
  styleUrl: './masthead.component.sass',
})

export class MastheadComponent {}