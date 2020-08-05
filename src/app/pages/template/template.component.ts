import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  usuario = {
    nombre: 'Juan Noe',
    apellido: 'Garcia',
    correo: 'jnoe.garciar@gmail.com'
  };

  constructor() { }

  ngOnInit(): void {
  }

  guardar(forma : NgForm){
    if (!forma.valid) {
      console.log("El formulario no es valido");
      return;
    }
    console.log("Formulario Valido");
    console.log(forma.value);
  }

}