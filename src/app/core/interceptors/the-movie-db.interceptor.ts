import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '@environments/environment.development';

export const theMovieDbInterceptor: HttpInterceptorFn = (req, next) => {
  const apiKey = environment.apiKeyTheMovieDB;

  const authRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${apiKey}`,
      'X-Requested-With': 'ProphetCode',
    },
  });

  return next(apiKey ? authRequest : req);
};
