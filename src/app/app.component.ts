import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from '@core/components';

const NG_COMPONENTS = [RouterOutlet];
const COMPONENTS = [NavbarComponent];

@Component({
  selector: 'app-root',
  imports: [...NG_COMPONENTS, ...COMPONENTS],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
