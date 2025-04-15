import { Component, inject, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { AddCharacterComponent } from "../../components/dragonball/add-character/add-character/add-character.component";
import { DragonballService } from "../../services/dragonball.service";

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
    public dragonballService = inject(DragonballService);
}