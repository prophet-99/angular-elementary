import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('@pages/index').then((m) => m.HomeComponent),
  },
  {
    path: 'movies',
    loadComponent: () => import('@pages/index').then((m) => m.MoviesComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
