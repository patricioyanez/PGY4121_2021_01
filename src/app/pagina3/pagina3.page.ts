import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {
  personas = []
  
  constructor(private personasService: PersonasService, private router: Router) { }

  ngOnInit() {
    this.personas = this.personasService.getPersonas();
  }
  ionViewWillEnter()
  {
    this.personas = this.personasService.getPersonas();
  }
  
  onClick()
  {
    console.log("ud realizó un clic")
  }

  ingresar()
  {
    this.router.navigate(['/ingreso']);
  }
}
