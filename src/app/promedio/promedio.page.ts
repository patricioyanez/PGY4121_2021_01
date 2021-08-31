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
  promediar(n1 : HTMLInputElement,n2 : HTMLInputElement,n3 : HTMLInputElement,
            p1 : HTMLInputElement,p2 : HTMLInputElement,p3 : HTMLInputElement)
  {
    /*
    let res = Number(n1.value)+Number(n2.value)+Number(n3.value);
    this.resultado = res / 3;
    */
    let no1 = Number(n1.value) * Number(p1.value) / 100;
    let no2 = Number(n2.value) * Number(p2.value) / 100;
    let no3 = Number(n3.value) * Number(p3.value) / 100;

    this.resultado = no1 + no2 + no3;

  }
}
