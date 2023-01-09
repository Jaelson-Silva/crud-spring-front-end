import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  async login(user: any) {
    const result = await this.http.post<any>(`${environment.api}/auth/login`, user).toPromise();
    if(result && result.access_token) {
      window.localStorage.setItem('token', result.access_token);
      return true;
    }

    return false;
  }

  async createAccount(account: any) {
    const result = await this.http.post<any>(`${environment.api}/users`, account).toPromise();
    return result
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  // Pegando data de expiração do token
  getTokenExpirationDate(token: string): Date | null {
    const decoded: any = jwt_decode(token);

    if(decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp)
    return date;
  }

  // verifica se o token ta expirado
  isTokenExpired(token?: string): boolean {
    if(!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if(date === undefined) {
      return false;
    }

    return !(date!.valueOf() > new Date().valueOf());
  }

  // verificar se está logado
  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    
    if(!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    } else {
      return true;
    }
  }
}