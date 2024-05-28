import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import { MastheadComponent } from './components/masthead/masthead.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MastheadComponent, SidenavComponent, HomeComponent, FooterComponent],
  styleUrl: 'global-styles.sass',
  template: `
    <masthead></masthead>
    <main>
      <sidenav></sidenav>
      <home></home>
    </main>
    <main-footer></main-footer>
  `
})

export class App {
  title = 'ux-exercise';
}

bootstrapApplication(App);