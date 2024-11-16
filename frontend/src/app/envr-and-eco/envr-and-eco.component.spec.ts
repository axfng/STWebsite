import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvrAndEcoComponent } from './envr-and-eco.component';

describe('EnvrAndEcoComponent', () => {
  let component: EnvrAndEcoComponent;
  let fixture: ComponentFixture<EnvrAndEcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvrAndEcoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvrAndEcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
