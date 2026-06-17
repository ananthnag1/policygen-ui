import { Component } from '@angular/core';
// Import the four components you just generated
import { InputPanelComponent } from './components/input-panel/input-panel.component';
import { ReferencePanelComponent } from './components/reference-panel/reference-panel.component';
import { DataViewerComponent } from './components/data-viewer/data-viewer.component';
import { ExecutionPanelComponent } from './components/execution-panel/execution-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // Add them to the imports array
  imports: [
    InputPanelComponent, 
    ReferencePanelComponent, 
    DataViewerComponent, 
    ExecutionPanelComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}