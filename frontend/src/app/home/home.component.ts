import { Component } from '@angular/core';
import { ArticleCardMainComponent } from './widgets/article-card-main/article-card-main.component';
import { ArticleCardSideComponent } from './widgets/article-card-side/article-card-side.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ArticleCardMainComponent, ArticleCardSideComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public static Route = {
    path: '',
    component: HomeComponent
  };
}
