import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Authors/new', component:NewAuthorComponent},
  {path:'Quotes/:id',component:QuoteDetailComponent},
  {path:'Quotes/new/:id',component :NewQuoteComponent},
  {path : '**',component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
