import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent {
  public alerta: boolean = false;
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  email: string = 'mateocodeando01@gmail.com';
  constructor(private fb: FormBuilder) {}

  public myForm: FormGroup = this.fb.group({
    user_name: ['', [Validators.required]],
    user_email: [
      '',
      [Validators.required, Validators.pattern(this.emailPattern)],
    ],
    message: ['', [Validators.required]],
  });

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  public sendEmail(e: Event) {
    e.preventDefault();
  }

  async onSubmit() {
    if (this.myForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Llene todos los campos!',
      });

      return;
    }

    //Validacion correcta

    const templateParams = {
      message: `Mensaje : ${this.myForm.value.message}  Email : ${this.myForm.value.user_email} Nombre : ${this.myForm.value.user_name}`,
    };

    emailjs
      .send(
        'service_1esbj87',
        'template_chpydpg',
        templateParams,
        '6OL4zc1huquTHu_yL'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          Swal.fire('Enviado Correctamente!', '', 'success');
          this.myForm.reset();
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un error!',
            footer: '<a href="#">Intente otra vez</a>',
          });
        }
      );
  }
}
