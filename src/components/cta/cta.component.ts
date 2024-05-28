import { Component, EventEmitter, Input, Output } from '@angular/core';

type CtaVariant = 'primary' | 'secondary';

@Component({
  selector: 'cta',
  standalone: true,
  imports: [],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.sass',
})

export class CtaComponent {

  @Input('cta-text') ctaText: string = '';
  @Input('cta-title') ctaTitle: string = '';
  @Input() disabled: boolean = false;
  @Input() variant: CtaVariant = 'primary';
  @Output('click') onClick = new EventEmitter();

  /**
   * Go back to the top of the page.
   */
  backToTop() {
    
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}