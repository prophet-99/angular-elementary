import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { SearchComponent } from '@pages/search/search.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'address',
        loadComponent: () =>
          import('@pages/home/address/address.component').then(
            (m) => m.AddressComponent
          ),
      },
      {
        path: 'credit-card',
        loadComponent: () =>
          import('@pages/home/credit-card/credit-card.component').then(
            (m) => m.CreditCardComponent
          ),
      },
    ],
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
