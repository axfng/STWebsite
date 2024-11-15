import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public static Route = {
    path: '',
    component: HomeComponent
  };

  // constructor(route: ActivatedRoute, router: Router) {
  //   router.navigateByUrl('/home');
  // }
}
