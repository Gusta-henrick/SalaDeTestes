import { Component } from '@angular/core';
import { PokemonModel } from 'src/app/models/Pokemon.model';
import { PokemonService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-observables-page',
  templateUrl: './observables-page.component.html',
  styleUrls: ['./observables-page.component.scss']
})
export class ObservablesPageComponent {
  public pokemons: PokemonModel;
  public listaPokemons: Array<any>;
  public erro: any;
  constructor(public pokemonService: PokemonService){
    this.getter();
  }

  ngOnInit(){ }

  public getter(){
    this.pokemonService.getPokemon().subscribe(
      (data: PokemonModel) => {
        this.pokemons = data;
        this.listaPokemons = this.pokemons.results;
        console.log(this.listaPokemons);
      }, (error: any) => {
        this.erro = error;
      });
  }
}
