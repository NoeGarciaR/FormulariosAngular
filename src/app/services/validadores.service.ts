import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noHerrera(control: FormControl): { [s: string]: boolean }{
    if (control.value?.toLowerCase() === 'herrera'){
      return {
        noHerrera: true
      }
    }
    return null;
  }

  passwordsIguales( password1Name: string, password2Name ){
    return (formGroup: FormGroup) => {
      const password1Control = formGroup.controls[password1Name];
      const password2Control = formGroup.controls[password2Name];

      if (password1Control.value === password2Control.value){
        password2Control.setErrors(null);
      } else {
        password2Control.setErrors({noEsIgual: true});
      }

    }
  }
}
