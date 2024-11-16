import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceSparknotesComponent } from './science-sparknotes.component';

describe('ScienceSparknotesComponent', () => {
  let component: ScienceSparknotesComponent;
  let fixture: ComponentFixture<ScienceSparknotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScienceSparknotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScienceSparknotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
