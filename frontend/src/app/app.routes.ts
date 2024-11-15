import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then( c=> c.HomeComponent)
    }
];
