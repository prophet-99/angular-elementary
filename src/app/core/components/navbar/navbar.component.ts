import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeStateService } from '@pages/home/state/home-state.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  private homeStateService = inject(HomeStateService);

  ngOnInit() {
    this.homeStateService.selectedMovie.subscribe((movie) =>
      console.log(movie)
    );
  }
}
