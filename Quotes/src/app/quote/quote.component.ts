import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, name:'The American Dream',description:'...'},
    {id:2,name:'The rich also cry',description:'...'},
    {id:3,name:'to catch a mockingBird',description:'...'},
    {id:4,name:'a bird in hand is worth two in the bush',description:'...'},
    {id:5,name:'The great Gatsby', description:'...'},
    {id:6,name:'In the quest to find yourself, you may lose yourself', description:'...'},
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
