import { Component } from '@angular/core';
import { Country } from '../../interface/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino:string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino)
      .subscribe(paises => {
        console.log(paises);
        this.paises = paises;

      }, (err) => {
        console.log(err);
        this.hayError = true;
        this.paises = [];
      });

  }

  sugencias(termino:string) {
    this.hayError = false;
  }

}