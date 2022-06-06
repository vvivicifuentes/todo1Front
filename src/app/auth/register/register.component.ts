import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'

import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
})
export class RegisterComponent {

  public formSubmitted = false;

  public registerForm = this.fb.group({
    nombreUsuario: ['carlos', Validators.required ],
    nombre: ['carlos andres', Validators.required ],
    email: ['carlos@prueba.com', [ Validators.required, Validators.email ] ],
    password: ['1234', Validators.required ],
    password2: ['1234', Validators.required ],
    enabled: [ true ],
    lastPasswordResetDate: [ '2021-01-01' ],
    authorities: [ [{ id : 2}]]
  }, {
    validators: this.passwordsIguales('password', 'password2')
  });

  constructor( private fb: FormBuilder,
               private usuarioService: UsuarioService,
               private router: Router ) { }

  crearUsuario() {
    this.formSubmitted = true;
    //console.log( this.registerForm.value );

    if ( this.registerForm.invalid ) {
      return;
    }

    // Realizar el posteo
    this.usuarioService.crearUsuario( this.registerForm.value )
        .subscribe( resp => {
          
          // Navegar al Dashboard
          this.router.navigateByUrl('/');

        }, (err) => {
          console.log(err);
          Swal.fire('Error', err.error.msg, 'error' );
        });


  }

  campoNoValido( campo: string ): boolean {
    
    if ( this.registerForm.get(campo).invalid && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }

  }

  contrasenasNoValidas() {
    const pass1 = this.registerForm.get('password').value;
    const pass2 = this.registerForm.get('password2').value;

    if ( (pass1 !== pass2) && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }

  }


  passwordsIguales(pass1Name: string, pass2Name: string ) {

    return ( formGroup: FormGroup ) => {

      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if ( pass1Control.value === pass2Control.value ) {
        pass2Control.setErrors(null)
      } else {
        pass2Control.setErrors({ noEsIgual: true })
      }


    }
  }

}
