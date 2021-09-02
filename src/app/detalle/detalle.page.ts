import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../persona.model'; 
import { PersonasService } from '../personas.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  persona: Persona
  constructor(
    private activatedRouter : ActivatedRoute,
    private personasService : PersonasService,
    private alertControl    : AlertController,
    private router          : Router
  ) { }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(paramMap =>{
      const id = paramMap.get('id');
      this.persona = this.personasService.getPersona(Number(id));
    })

  }

}
