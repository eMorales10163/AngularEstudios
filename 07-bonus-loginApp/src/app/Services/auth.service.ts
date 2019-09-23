import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../Models/usuario.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  private API_KEY = 'AIzaSyA4ty5dk1RPDxNjMybrlQQ2c0d653vhx4I';
  userToken: string;

  // [API_KEY]

  // [API_KEY]

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  private guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('Token', idToken);

    let hoy = new Date();
    hoy.setSeconds(3600);
    localStorage.setItem('expira', hoy.getTime().toString());
  }

  private leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  logout() {
    localStorage.removeItem('token');
  }

  login(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http
      .post(this.url + ':signInWithPassword?key=' + this.API_KEY, authData)
      .pipe(
        map(response => {
          this.guardarToken(response['idToken']);
          return response;
        })
      );
  }

  nuevoUsuario(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http
      .post(this.url + ':signUp?key=' + this.API_KEY, authData)
      .pipe(
        map(response => {
          this.guardarToken(response['idToken']);
          return response;
        })
      );
  }

  estaAutenticado(): boolean {
    if (this.userToken.length < 2) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if (expiraDate > new Date()) {
      return true;
    } else {
      return false;
    }
  }
}
