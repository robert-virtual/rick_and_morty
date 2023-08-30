import {Component} from '@angular/core';
import {Character, CharactersResponse, RickAndMortyService} from "./rick-and-morty.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rick_and_morty';
  character:Character = {id:0,image:"",name:"",status:""}
  characters:Character[] = []
  constructor(private rickAndMortyService: RickAndMortyService) {
    this.rickAndMortyService.getCharacters()
      .subscribe((data: CharactersResponse) => {
         this.characters = data.results
      })
  }
  saveCharacter(){
    this.rickAndMortyService.postCharacter(this.character)
  }

}
