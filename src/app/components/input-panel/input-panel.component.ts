import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-input-panel',
  standalone: true,
  imports: [FormsModule, SelectModule, ButtonModule, CommonModule],
  template: `
    <div style="padding: 0.5rem 2rem 2rem 2rem; background: #f8fafc; min-height: 100vh;">
      
      <header style="margin-bottom: 1rem;">
        <h4 style="margin: 0; color: #1e293b; font-weight: 600;">
          UM/UIM Rules Engine POC - Live Demonstration
        </h4>
      </header>

      <div style="display: flex; flex-wrap: wrap; width: 100%; gap: 1.5rem;">
        
        <div style="width: calc(50% - 0.75rem); box-sizing: border-box;">
          <div class="card p-4 border-round border-1 border-gray-200 shadow-1" style="min-height: 260px; background: #ffffff;">
            <h4 class="mt-0">Test Scenario Execution</h4>
            <p-select 
                class="w-full"
                [options]="policytype" 
                [(ngModel)]="selectedPolicy" 
                optionLabel="label" 
                placeholder="Policy type" 
                [showClear]="true" />

            <p-button 
                label="Run Scenario" 
                icon="pi pi-play" 
                styleClass="p-button-success w-full mt-3"
                [disabled]="!selectedPolicy"
                (onClick)="runScenario()" />
          </div>
        </div>

        <div style="width: calc(50% - 0.75rem); box-sizing: border-box;">
          <div class="card p-4 border-round border-1 border-gray-200 shadow-1" style="min-height: 260px; background: #ffffff;">
            <h4 class="mt-0">Rules Evaluation Log</h4>
          </div>
        </div>

        <div style="width: calc(50% - 0.75rem); box-sizing: border-box;">
          <div class="card p-4 border-round border-1 border-gray-200 shadow-1" style="min-height: 260px; background: #ffffff;">
            <h4 class="mt-0">Output Snapshot</h4>
          </div>
        </div>

        <div style="width: calc(50% - 0.75rem); box-sizing: border-box;">
          <div class="card p-4 border-round border-1 border-gray-200 shadow-1" style="min-height: 260px; background: #ffffff;">
            <h4 class="mt-0">Generated Form Preview</h4>
          </div>
        </div>

      </div>
    </div>
  `
})
export class InputPanelComponent implements OnInit {
  policytype = [{ label: 'Auto Insurance' }, { label: 'Home Insurance' }];
  selectedPolicy: any = null;

  constructor() {}

  ngOnInit(): void {}

  runScenario(): void {
    if (this.selectedPolicy) {
      console.log('Running scenario for:', this.selectedPolicy.label);
    }
  }
}