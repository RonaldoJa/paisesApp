import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interface/paises.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {
  regiones: string[] = ['africa','americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  getClaseCSS(region: string) {
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    this.regionActiva = region;

    this.hayError = false;
    this.regionActiva = region;

    this.paisService.buscarRegion(this.regionActiva)
      .subscribe(paises => {
        
        this.paises = paises;
        console.log(this.paises);

      }, (err) => {
        console.log(err);
        this.hayError = true;
        this.paises = [];
      });
  }
}
