import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interface/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apirUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams().set('fields', 'altSpellings,capital,flags,cca2,population;')
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apirUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apirUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getPaisPorAlpha( id: string ):Observable<Country[]>{
    const url = `${ this.apirUrl }/alpha/${ id }`;
    return this.http.get<Country[]>( url );
  }

  buscarRegion( termino: string ) {
    const url = `${this.apirUrl}/region/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }


}
