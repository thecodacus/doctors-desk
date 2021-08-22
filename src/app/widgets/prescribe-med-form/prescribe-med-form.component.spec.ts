import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescribeMedFormComponent } from './prescribe-med-form.component';

describe('PrescribeMedFormComponent', () => {
  let component: PrescribeMedFormComponent;
  let fixture: ComponentFixture<PrescribeMedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescribeMedFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescribeMedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
