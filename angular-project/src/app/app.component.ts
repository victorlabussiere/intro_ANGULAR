import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = 'VascoDaGama'
  userData: {
    email: string;
    role: string;
  } = {
    email: 'vasco@dagama.com',
    role: 'admin'
  }
  
  title = 'angular-project';
}
