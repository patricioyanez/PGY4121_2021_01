import { Component, OnInit } from '@angular/core';
// importamos el servicio
import { PersonasService } from '../personas.service';
// importar el modulo para redireccionar
import { Router } from '@angular/router';
@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  constructor(private personasService: PersonasService,
              private router : Router
    ) { }

  ngOnInit() {
  }
  agregar(nombre :HTMLInputElement, url:HTMLInputElement, edad:HTMLInputElement)
  {
    const nom = nombre.value; //obtiene el valor del elemento
    const img = url.value;
    const eda = Number(edad.value);
    // almacena en el arr que contiene el servicio
    this.personasService.addPersona(nom, eda, img);
    // redireccionar a la lista de personas
    this.router.navigate(['/pagina3'])

  }
}
