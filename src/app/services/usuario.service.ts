import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { observable, Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';



import { RegisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';

const base_url = environment.base_url;

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public auth2: any;

  constructor( private http: HttpClient, 
                private router: Router,
                private ngZone: NgZone ) {

  }

  logout() {
    localStorage.removeItem('token');

    this.auth2.signOut().then(() => {

      this.ngZone.run(() => {
        this.router.navigateByUrl('/login');
      })
    });

  }

  
  // validarToken(): Observable<boolean> {
  //   const token = localStorage.getItem('token') || '';

  //   return this.http.get(`${ base_url }/refresh`, {
  //     headers: {
  //       'Authorization': token
  //     }
  //   }).pipe(
  //     tap( (resp: any) => {
  //       localStorage.setItem('token', resp.token );
  //     }),
  //     map( resp => true),
  //     catchError( error => of(false) )
  //     //catchError( error => of(true) )
  //   );

  // }


  crearUsuario( formData: RegisterForm ) {
    console.log(formData);
    return this.http.post(`${ base_url }/auth/nuevo`, formData )
              .pipe(
                tap( (resp: any) => {
                  console.log(resp);
                })
              )

  }

  login( formData: LoginForm ) {
    
    return this.http.post(`${ base_url }/auth/login`, formData )
                .pipe(
                  tap( (resp: any) => {
                    localStorage.setItem('token', resp.token )
                  })
                );

  }

}
