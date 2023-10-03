import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonModel } from '../models/Pokemon.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  public getPokemon(): Observable<any> {
    return this.http.get<PokemonModel>(`https://pokeapi.co/api/v2/pokemon?limit=150`);
  }
}
