import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencePanel } from './reference-panel';

describe('ReferencePanel', () => {
  let component: ReferencePanel;
  let fixture: ComponentFixture<ReferencePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferencePanel],
    }).compileComponents();

    fixture = TestBed.createComponent(ReferencePanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
