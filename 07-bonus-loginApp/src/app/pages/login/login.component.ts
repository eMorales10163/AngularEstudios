import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../Models/usuario.models';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {

    if (localStorage.getItem('email')) {
      this.usuario.email =  localStorage.getItem('email');
      this.recordarme = true;
    }
  }

  login(form: NgForm) {
    console.log(form);
    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    this.auth.login(this.usuario).subscribe(
      response => {
        console.log(response);
        Swal.close();

        if (this.recordarme) {
          localStorage.setItem('email', this.usuario.email);
        }
        this.router.navigateByUrl('/home');
      },
      error => {
        console.log(error.error.error.message);
        Swal.fire({
          type: 'error',
          title: 'error al autenticar',
          text: error.error.error.message
        });
      }
    );
  }
}
