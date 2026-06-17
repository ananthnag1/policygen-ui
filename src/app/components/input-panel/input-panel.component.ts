import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select'; // Correct import

@Component({
  selector: 'app-input-panel',
  standalone: true,
  // Change 'Dropdown' to 'Select' here to match the import
  imports: [CommonModule, FormsModule, Select], 
  templateUrl: './input-panel.component.html'
})
export class InputPanelComponent {
  policy: any; // Or a specific type/interface
  policytype = [
    { label: 'Life Insurance', value: 'life' },
    { label: 'Health Insurance', value: 'health' },
    { label: 'Auto Insurance', value: 'auto' }
  ];
}