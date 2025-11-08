import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieDbThumb',
})
export class MovieDbThumbPipe implements PipeTransform {
  transform(posterURL: string | undefined): string {
    if (!posterURL) return '';

    return `https://image.tmdb.org/t/p/original/${posterURL}`;
  }
}
