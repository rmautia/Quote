import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    {id:1, name:'The American Dream'},
    {id:2,name:'The rich also cry'},
    {id:3,name:'to catch a mockingBird'},
    {id:4,name:'a bird in hand is worth two in the bush'},
    {id:5,name:'The great Gatsby'},
    {id:6,name:'In the quest to find yourself, you may lose yourself'},
  ];
  
}
