import { Component, OnInit, resource, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { HomeCardComponent } from './home-card/home-card.component';

@Component({
  selector: 'app-home',
  imports: [HomeCardComponent, JsonPipe],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  pokemonId = signal(1);
  pokemonResource = resource({
    params: () => ({ id: this.pokemonId() }),
    loader: ({ params, previous, abortSignal }) => {
      console.log(previous);
      return this.fetchPokemon(params.id, abortSignal);
    },
    defaultValue: { abilities: ['🐱‍👤'] },
  });

  private async fetchPokemon(id: number, abortSignal: AbortSignal) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      signal: abortSignal,
    });
    return response.json();
  }

  constructor() {}

  selectPokemon() {
    this.pokemonId.update((id) => id + 1);
  }
}
