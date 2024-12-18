import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SociAndPsychComponent } from './soci-and-psych.component';

describe('SociAndPsychComponent', () => {
  let component: SociAndPsychComponent;
  let fixture: ComponentFixture<SociAndPsychComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SociAndPsychComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SociAndPsychComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
