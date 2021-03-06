import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { HighlightDirective } from './highlight.directive';
import { RelativeTimePipe } from './pipe/relative-time.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailComponent,
    HighlightDirective,
    RelativeTimePipe,
    QuoteFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
