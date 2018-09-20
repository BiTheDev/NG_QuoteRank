import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditAuthorComponent } from './edit-author/edit-author.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewQuoteComponent,
    QuoteDetailComponent,
    NewAuthorComponent,
    PageNotFoundComponent,
    EditAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
