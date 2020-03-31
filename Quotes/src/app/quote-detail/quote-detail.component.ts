import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  
  @Input() quote: Quote;
  @Output() isComplete =new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  downvote=0;
upvote=0

voteDown(){
  this.downvote=this.downvote+1;
}

voteUp(){
  this.upvote=this.upvote+1;
}


  constructor() { }

  ngOnInit() {
  }

}
