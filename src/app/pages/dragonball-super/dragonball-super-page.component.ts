import { Component, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { AddCharacterComponent } from "../../components/dragonball/add-character/add-character/add-character.component";

interface Character {
    id: number;
    name: string;
    power: number;
}

@Component ({
    templateUrl: 'dragonball-super-page.component.html',
    imports: [CharacterListComponent, AddCharacterComponent]
})
export class DragonballSuperPageComponent {

    characters = signal<Character[]>([
        { id: 1, name: 'Goku', power: 9001 },
        { id: 2, name: 'Vegeta', power: 8000 }
    ]);

    addCharacter(newCharacter: Character) {
        this.characters.update((list) => [...list, newCharacter]);
    }

}