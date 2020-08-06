import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PaisService} from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  usuario = {
    nombre: 'Juan Noe',
    apellido: 'Garcia',
    correo: 'jnoe.garciar@gmail.com',
    pais: 'MEX',
    genero: 'M'
  };
  paises: any[] = [];

  constructor( private paiseService: PaisService ) { }

  ngOnInit(): void {
    this.paiseService.getPaises().subscribe(paises => {
      this.paises = paises;
      this.paises.unshift({
        nombre: '--Seleccione un pais--',
        codigo: ''
      });
      console.log(paises);
    });
  }

  guardar(forma : NgForm){
    if (forma.invalid) {
      Object.values( forma.controls ).forEach(control => {
        control.markAsTouched();
      });
      console.log("El formulario no es valido");
      return;
    }
    console.log("Formulario Valido");
    console.log(forma.value);
  }

}
