import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote (1, 'Martin Luther','there shall come a point where everyone will be equal',new Date(2020,2,28)),
    new Quote (2,'Poeng Ming','it does not matter how rich you are, some things, money cannot buy',new Date(2020,2,28)),
    new Quote (3,'pete Cantbarry','what are your approaches to life, are they worht the while',new Date(2020,2,28)),
    new Quote (4,'Desmond Tutu','be grateful of what you have at hand, what you wish foy could be vanity.',new Date(2020,2,28)),
    new Quote (5,'Ludwig krapf','overcome all odds to be the greatest you could ever be.',new Date(2020,2,28)),
    new Quote (6,'Michelle Ngele', 'have vision and be focused',new Date(2020,3,28)),
  ];

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }


}
