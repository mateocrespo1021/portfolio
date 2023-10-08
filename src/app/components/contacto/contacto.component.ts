import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent {
  public alerta:boolean=false
  public contactForm = new FormGroup({
    name: new FormControl<string>(''),
    email: new FormControl<string>('', { nonNullable: true }),
    message: new FormControl<string>(''),
  });

  onSubmit(){

    
    if (Object.values(this.contactForm.value).includes('')) {
        this.alerta=true
        setTimeout(() => {
          this.alerta=false
        }, 3000);      
        return
    }

    //Validacion correcta
    
    
  }
}
