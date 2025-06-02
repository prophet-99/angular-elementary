import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { SearchComponent } from '@pages/search/search.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
