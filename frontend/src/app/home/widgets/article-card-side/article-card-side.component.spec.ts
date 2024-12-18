import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCardSideComponent } from './article-card-side.component';

describe('ArticleCardSideComponent', () => {
  let component: ArticleCardSideComponent;
  let fixture: ComponentFixture<ArticleCardSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleCardSideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleCardSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
