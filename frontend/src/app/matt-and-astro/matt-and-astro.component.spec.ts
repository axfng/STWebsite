import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MattAndAstroComponent } from './matt-and-astro.component';

describe('MattAndAstroComponent', () => {
  let component: MattAndAstroComponent;
  let fixture: ComponentFixture<MattAndAstroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MattAndAstroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MattAndAstroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
