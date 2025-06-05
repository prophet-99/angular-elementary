import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent, SidebarComponent } from '@core/components';

const NG_COMPONENTS = [RouterOutlet];
const COMPONENTS = [NavbarComponent, SidebarComponent];

@Component({
    selector: 'app-root',
    imports: [...NG_COMPONENTS, ...COMPONENTS],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {}
