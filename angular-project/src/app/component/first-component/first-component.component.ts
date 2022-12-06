import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  nome: string = "Victor"
  idade: number = 27
  job : string = "Programmer"
  Vasco? : boolean = true
}