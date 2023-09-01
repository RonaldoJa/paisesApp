import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interface/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apirUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apirUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apirUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisCapital(termino: string): Observable<Country> {
    const url = `${this.apirUrl}/alpha/${termino}`;
    return this.http.get<Country>(url);
  }

  getPaisPorAlpha( id: string ):Observable<Country>{
    const url = `${ this.apirUrl }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }


}
