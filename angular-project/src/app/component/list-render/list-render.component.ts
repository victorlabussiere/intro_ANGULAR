import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service'

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})


export class ListRenderComponent implements OnInit {
  animalInfo!: string
  defaultAnimals: Array<Animal> = [
    {
      name: 'Wesley',
      type: 'Cat',
      age: 9
    },
    {
      name: 'Mel',
      type: 'Dog',
      age: 6
    },
    {
      name: 'Jorge',
      type: 'Turtle',
      age: 12
    },
    {
      name: 'Lua',
      type: 'Dog',
      age: 4
    }
  ]
  animals: Array<Animal> = [
    {
      name: 'Wesley',
      type: 'Cat',
      age: 9
    },
    {
      name: 'Mel',
      type: 'Dog',
      age: 6
    },
    {
      name: 'Jorge',
      type: 'Turtle',
      age: 12
    },
    {
      name: 'Lua',
      type: 'Dog',
      age: 4
    }
  ]
  constructor(private listService: ListService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  showAge(animal: Animal): void {
    this.animalInfo = `O animal ${animal.name} tem ${animal.age} anos`
  }

  reset() {
    this.animalInfo = ""
    this.animals.length < 4
      ? (this.animals = this.defaultAnimals, console.clear())
      : console.clear()
  }

  removeAnimal(animal: Animal): void {
    console.log(`Removendo ${animal.name}`)
    this.animals = this.listService.remove(this.animals, animal)
  }
}
