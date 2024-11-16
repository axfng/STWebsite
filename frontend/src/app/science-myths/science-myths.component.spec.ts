import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceMythsComponent } from './science-myths.component';

describe('ScienceMythsComponent', () => {
  let component: ScienceMythsComponent;
  let fixture: ComponentFixture<ScienceMythsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScienceMythsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScienceMythsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
