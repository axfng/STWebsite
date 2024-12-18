import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCardMainComponent } from './article-card-main.component';

describe('ArticleCardMainComponent', () => {
  let component: ArticleCardMainComponent;
  let fixture: ComponentFixture<ArticleCardMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleCardMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleCardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
