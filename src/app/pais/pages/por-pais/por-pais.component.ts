import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interface/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino:string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
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
