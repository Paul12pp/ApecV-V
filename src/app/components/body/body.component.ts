import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { constants } from '../../app.constants';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent implements OnInit {
    @ViewChild('f') form: any;
    invalid: boolean;
    valid1: boolean;
    valid2: boolean;
    notfound: boolean;
    invalidpass: boolean;
    constructor(private router: Router) {
    }
    ngOnInit() {
        this.invalid = false;
    }

    changePassword() {
        return this.router.navigate(['/change']);
    }

    onSubmit(f: NgForm) {
        this.default();
        console.log(
            f
        );
        
        if (f.pristine === true || f.invalid === true) {
            this.invalid = true;
            return;
        }
        this.invalid = false;
        const user = constants.usuarios.find(r => r.usuario === f.value.usuario);
        if (user) {
            if (user.password !== f.value.password) {
                this.invalidpass = true;
                return;
            } else {
                Swal.fire({
                    title: 'Iniciando sesión',
                    text: 'Espere un momento',
                    showConfirmButton: false,
                    timer: 2000,
                    showLoaderOnConfirm: true,
                    onBeforeOpen: () => {
                        Swal.showLoading();
                    }
                });
                location.href = 'https://admisiones.unapec.edu.do';
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
        this.valid1 = false;
        this.valid2 = false;
        this.notfound = false;
        this.invalidpass = false;
    }
}
