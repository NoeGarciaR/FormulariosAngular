import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

interface ErrorValidate {
  [s: string]: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noHerrera(control: FormControl): ErrorValidate{
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

  existeUsuario(control: FormControl): Promise<ErrorValidate> | Observable<ErrorValidate>{
    if (!control.value){
      return Promise.resolve(null);
    }
    return new Promise( (resolve,  reject) => {
      setTimeout( () => {
        if (control.value === 'strider'){
          resolve({ existe: true});
        } else {
          resolve(null);
        }
      }, 3500);
    } );
  }
}
