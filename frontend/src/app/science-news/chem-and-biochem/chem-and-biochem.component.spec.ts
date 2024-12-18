import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemAndBiochemComponent } from './chem-and-biochem.component';

describe('ChemAndBiochemComponent', () => {
  let component: ChemAndBiochemComponent;
  let fixture: ComponentFixture<ChemAndBiochemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChemAndBiochemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChemAndBiochemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
