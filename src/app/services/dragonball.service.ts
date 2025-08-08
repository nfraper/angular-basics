import { effect, Injectable, signal } from "@angular/core";
import { Character } from "../interfaces/character.interface";

//lee del local storage
const loadFromLocalStorage = (): Character[] => {
    const charcaters = localStorage.getItem('characters');
    return charcaters ? JSON.parse(charcaters) : [];
}

@Injectable({providedIn: 'root'})
export class DragonballService {

    characters = signal<Character[]>(loadFromLocalStorage());

    saveToLocalStorage = effect( () => {
        localStorage.setItem('characters', JSON.stringify(this.characters()));
    }); //graba en el local storage

    addCharacter(newCharacter: Character) {
        this.characters.update((list) => [...list, newCharacter]);
    }
}