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
      console.log(id);
      this.persona = this.personasService.getPersona(Number(id));
    })

  }

  async eliminar()
  {
    const alerta = await this.alertControl.create({
      header  : "¿Está seguro de eliminar?",
      message : "Favor confirmar",
      buttons : [
        {
          text: "No",
          role: "cancel"
        },
        {
          text    : "Si",
          handler : () => {
            this.personasService.deletePersona(this.persona.id);
            this.router.navigateByUrl('/pagina3')
          }
        }
      ]
    });
    await alerta.present();

  }

}
