import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {

  listado  =[
    { 
      nombre: 'Juan',
      edad  : 25,
      foto  : 'https://s03.s3c.es/imag/_v0/770x420/7/6/f/700x420_GettyImages-522796439.jpg'
    },
    { 
      nombre: 'Ana',
      edad  : 23,
      foto  : 'https://d8bwfgv5erevs.cloudfront.net/cdn/13/images/curso-online-perfil-psicologico-de-una-persona_l_primaria_1_1524733601.jpg'
    },
    
    { 
      nombre: 'Juan',
      edad  : 25,
      foto  : 'https://s03.s3c.es/imag/_v0/770x420/7/6/f/700x420_GettyImages-522796439.jpg'
    },
    { 
      nombre: 'Ana',
      edad  : 23,
      foto  : 'https://d8bwfgv5erevs.cloudfront.net/cdn/13/images/curso-online-perfil-psicologico-de-una-persona_l_primaria_1_1524733601.jpg'
    },
    { 
      nombre: 'Juan',
      edad  : 25,
      foto  : 'https://s03.s3c.es/imag/_v0/770x420/7/6/f/700x420_GettyImages-522796439.jpg'
    },
    { 
      nombre: 'Ana',
      edad  : 23,
      foto  : 'https://d8bwfgv5erevs.cloudfront.net/cdn/13/images/curso-online-perfil-psicologico-de-una-persona_l_primaria_1_1524733601.jpg'
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  
  onClick()
  {
    console.log("ud realizó un clic")
  }
}
