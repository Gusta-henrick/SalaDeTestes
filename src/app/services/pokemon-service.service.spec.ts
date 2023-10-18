import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[HttpClient]
    });
    service = TestBed.inject(PokemonService);
  });

  it('Serviço de Pokemons deve ser criado', () => {
    expect(service).toBeTruthy();
  });
});
