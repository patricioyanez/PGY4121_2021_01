import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.page.html',
  styleUrls: ['./promedio.page.scss'],
})
export class PromedioPage implements OnInit {
  resultado : number;
  constructor() { }

  ngOnInit() {
  }
  promediar(n1 : HTMLInputElement,n2 : HTMLInputElement,n3 : HTMLInputElement)
  {
    let res = Number(n1.value)+Number(n2.value)+Number(n3.value);
    this.resultado = res / 3;
  }
}
