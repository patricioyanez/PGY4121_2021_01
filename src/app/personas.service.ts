import { Injectable } from '@angular/core';
import { Persona }  from './persona.model';
@Injectable({
  providedIn: 'root'
})
export class PersonasService {
//// copiar personas

  private personas: Persona[] = [
    {
      id    : 1, 
      nombre: 'Juan',
      edad  : 25,
      foto  : 'https://s03.s3c.es/imag/_v0/770x420/7/6/f/700x420_GettyImages-522796439.jpg'
    },
    { 
      id    : 2,
      nombre: 'Ana',
      edad  : 23,
      foto  : 'https://d8bwfgv5erevs.cloudfront.net/cdn/13/images/curso-online-perfil-psicologico-de-una-persona_l_primaria_1_1524733601.jpg'
    },
    
    { 
      id    : 3,
      nombre: 'Juan',
      edad  : 25,
      foto  : 'https://s03.s3c.es/imag/_v0/770x420/7/6/f/700x420_GettyImages-522796439.jpg'
    },
    {
      id    : 4, 
      nombre: 'Ana',
      edad  : 23,
      foto  : 'https://d8bwfgv5erevs.cloudfront.net/cdn/13/images/curso-online-perfil-psicologico-de-una-persona_l_primaria_1_1524733601.jpg'
    },
    { 
      id    : 5,
      nombre: 'Juan',
      edad  : 25,
      foto  : 'https://s03.s3c.es/imag/_v0/770x420/7/6/f/700x420_GettyImages-522796439.jpg'
    },
    { 
      id    : 6,
      nombre: 'Ana',
      edad  : 23,
      foto  : 'https://d8bwfgv5erevs.cloudfront.net/cdn/13/images/curso-online-perfil-psicologico-de-una-persona_l_primaria_1_1524733601.jpg'
    }
  ]
  constructor() { }

  getPersonas()
  {
    return this.personas
  }

  getPersona(id : number)
  {
    return this.personas.find(x => {return x.id = id})
  }

  addPersona(nombre: string, edad: number, foto: string)
  {
    this.personas.push(
      {id       : this.personas.length + 1,
        nombre  : nombre,
        edad    : edad,
        foto    : foto          
    })
  }

  deletePersona(id: number)
  {
    this.personas = this.personas.filter(x=> {return x.id != id})
  }
}
