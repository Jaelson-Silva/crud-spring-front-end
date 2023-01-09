import { AccountService } from './../account.service';
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.accountService.getAuthorizationToken();
    let request: HttpRequest<any> = req;

    if(token) {
      // request é imutavél
      // fazer o clone para conseguir mudar as propriedades
      // passar o token de autenticação no header
      request = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
    }

    // retornando a request com o erro tratado
    return next.handle(request).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Deu erro antes de chegar no servidor
      console.error('Ocorreu um erro:', error.error.message);
    } else {
      // Erro retornado pelo backend
      console.error(`Código do erro ${error.status},` + `Error: ${JSON.stringify(error.error)}`)
    }
    // retornando observable com a mensagem
    return throwError(error);
  }


}
