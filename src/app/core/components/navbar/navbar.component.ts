import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeEventBusService } from '@pages/home/event-bus/home.event-bus.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  private homeEventBusService = inject(HomeEventBusService);

  ngOnInit() {
    this.homeEventBusService.selectMovie$.subscribe((movie) =>
      console.log(movie)
    );
  }
}
