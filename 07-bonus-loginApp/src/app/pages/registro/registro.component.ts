import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/Models/usuario.models';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  recordarme = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();

   }

   onSubmit(form: NgForm) {
     console.log(form);
     Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor...'
    });
     Swal.showLoading();

     this.auth.nuevoUsuario(this.usuario).subscribe(response => {
        Swal.close();
        console.log(response);
        if (this.recordarme) {
          localStorage.setItem('email', this.usuario.email);
        }
        this.router.navigateByUrl('/home');
     }, (error) => {
       console.log(error.error.error.message);
       Swal.fire({
        type: 'error',
        title: 'error al autenticar',
        text: error.error.error.message
      });
     });
   }


}
