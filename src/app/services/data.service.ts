import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPokemons(limit: number = 10, page: number = 1) {
    const offset = (page - 1) * limit;
    const maxItems = 100;
    if (offset + limit > maxItems) {
      limit = maxItems - offset;
    }
    return this.http.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
  }

  getMoreData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
