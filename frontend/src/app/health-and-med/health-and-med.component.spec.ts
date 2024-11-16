import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthAndMedComponent } from './health-and-med.component';

describe('HealthAndMedComponent', () => {
  let component: HealthAndMedComponent;
  let fixture: ComponentFixture<HealthAndMedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthAndMedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthAndMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
