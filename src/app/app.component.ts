import { Component } from '@angular/core';
import { InputPanelComponent } from './components/input-panel/input-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputPanelComponent],
  template: `
    <main>
      <app-input-panel></app-input-panel>
    </main>
  `
})
export class AppComponent { }