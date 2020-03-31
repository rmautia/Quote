import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote (1, 'The American Dream','there shall come a point where everyone will be equal'),
    new Quote (2,'The rich also cry','it does not matter how rich you are, some things, money cannot buy'),
    new Quote (3,'to catch a mockingBird','what are your approaches to life, are they worht the while'),
    new Quote (4,'a bird in hand is worth two in the bush','be grateful of what you have at hand, what you wish foy could be vanity.'),
    new Quote (5,'The great Gatsby','overcome all odds to be the greatest you could ever be.'),
    new Quote (6,'In the quest to find yourself, you may lose yourself', 'have vision and be focused')
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeGoal(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }


}
