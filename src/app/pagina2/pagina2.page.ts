import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {
  // atributos
  nombre : string;
  edad: number;
  lista : [];
  listado = [
    { id : '1',
      nombre: 'Juan',
      direccion: 'vespucio 1501'
    },
    { id : '2',
      nombre: 'Juana',
      direccion: 'vespucio 1550'
    },
    { id : '3',
      nombre: 'anna',
      direccion: 'vespucio 1590'
    }
  ] 
  constructor() {
    this.nombre = "Daniel";
    this.edad = 22;
   }

  ngOnInit() {
  }

  // medotos// eventos
}
