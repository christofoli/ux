import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'btn-icon',
  standalone: true,
  imports: [],
  templateUrl: './btn-icon.component.html',
  styleUrl: './btn-icon.component.sass',
})

export class BtnIconComponent {

  @Input() className: string = '';
  @Output('click') onClick = new EventEmitter();

  /**
   * Open/close the side navigation.
   */
  toggleSidenav() {
    
    const body = document.body;

    body?.toggleAttribute('data-sidenav-open');

    this.className === 'btn-menu'
      ? this.className = 'btn-close'
      : this.className = 'btn-menu';
  }
}