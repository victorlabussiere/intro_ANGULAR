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
  animals: Array<Animal> = []

  constructor(private listService: ListService) {
    this.read_animals()
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  showAge(animal: Animal): void {
    this.animalInfo = `${animal.name} tem ${animal.age} anos`
  }

  reset() {
    this.animalInfo = ""
    this.animals.length < 4
      ? (this.read_animals(), console.clear())
      : console.clear()
  }

  delete_animals(animal: Animal): void {
    console.log(`Removendo ${animal.name}`)
    this.animals = this.animals.filter(element => element.name !== animal.name)
    this.listService.remove(animal.id).subscribe()
  }

  read_animals() {
    this.listService.getAll().subscribe(animals => this.animals = animals)
  }
}
