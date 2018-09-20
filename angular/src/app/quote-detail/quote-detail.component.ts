import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  AuthorId : String;
  AuthorQuotes;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.AuthorId = params.id;
      console.log(this.AuthorId);
      
    });
    console.log("Load Quote");
    this.GetAuthorQuote();

  }
  GetAuthorQuote(){
    let obs = this._httpService.GetAuthor(this.AuthorId);
    obs.subscribe(data=>
      {console.log("Get Author Quote Success",data);
      this.AuthorQuotes = data['Quotes'];
    })
  }
  Vote(id,num){
    let obs = this._httpService.VoteQuote(id,num);
    obs.subscribe(data=>{
    console.log("Vote the Quote success",data);
    this.AuthorQuotes = data['Quotes'];
    })
  }
  DeleteQuote(id){
    let obs = this._httpService.DeleteQuote(id);
    obs.subscribe(data=>{
    console.log("Delete Quote success",data)
    this.AuthorQuotes = data['Quotes'];
    });
  }
}
