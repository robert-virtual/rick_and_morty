import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";

@Injectable()
export class RickAndMortyService {
  baseUrl="https://rickandmortyapi.com/api"
  constructor(private http:HttpClient) { }
  getCharacters(){
    return this.http.get<CharactersResponse>(`${this.baseUrl}/character`)
  }
  postCharacter(data:Character){
    return this.http.post("https://rickandmortyapi.com/api/character",data)
  }
  deleteCharacter(){
    return this.http.delete("https://rickandmortyapi.com/api/character")
  }
  updateCharacter(data:Character){
    return this.http.put("https://rickandmortyapi.com/api/character",data)
  }
}
export interface CharactersResponse{

  results:Character[]
}
export interface Character{
  id:number,
  status:string
  name:string
  image:string
}
