import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';

declare const gapi:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

  public formSubmitted = false;
  public auth2: any;

  public loginForm = this.fb.group({
    nombreUsuario: [ localStorage.getItem('nombreUsuario') || 'admin' , [ Validators.required] ],
    password: ['1234', Validators.required ],
    remember: [false]
  });


  constructor( private router: Router,
               private fb: FormBuilder,
               private usuarioService: UsuarioService,
               private ngZone: NgZone ) { }

  ngOnInit(): void {

  }

  login() {

    this.usuarioService.login( this.loginForm.value )
      .subscribe( resp => {

        if ( this.loginForm.get('remember').value ){ 
          localStorage.setItem('nombreUsuario', this.loginForm.get('nombreUsuario').value );
        } else {
          localStorage.removeItem('nombreUsuario');
        }
        
        // Navegar al Dashboard
        this.router.navigateByUrl('/');

      }, (err) => {
        console.log(err);
        Swal.fire('Error', err.error.msg, 'error' );
      });

  }


}
