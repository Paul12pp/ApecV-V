import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { constants } from '../../app.constants';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  @ViewChild('f') form: any;
  invalid: boolean;
  notfound: boolean;
  invalidimg: boolean;
  img: any;
  constructor(private router: Router) {
    this.img = constants.images[Math.floor((Math.random() * 5) + 0)];
  }

  ngOnInit() {
  }

  loging() {
    return this.router.navigate(['/home']);
  }

  onSubmit(f: NgForm) {
    this.default();
    if (f.pristine === true || f.invalid === true) {
      this.invalid = true;
      console.log(f);
      return;
    }
    this.invalid = false;
    const user = constants.usuarios.find(r => r.usuario === f.value.correo);
    if (user) {
      if (this.img.value !== f.value.imagen) {
        this.invalidimg = true;
        return;
      } else {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Código enviado a su correo',
          showConfirmButton: false,
          timer: 1500,
          onClose: () => {
            this.loging();
          }
        });
      }
    }
    this.notfound = !user ? true : false;
  }

  onKeydown($event: any) {
    if ($event.key === 'Enter') {
      this.onSubmit(this.form);
    }
  }

  default() {
    this.invalid = false;
    this.notfound = false;
    this.invalidimg = false;
  }

}
