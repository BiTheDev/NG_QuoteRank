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
  DeleteQuote(id){
  }

  VoteUp(id){
    console.log(this.AuthorQuotes);
    console.log(id);
    
    for(var i = 0; i<this.AuthorQuotes.length; i++){
      console.log(this.AuthorQuotes[i]);
      
      if(this.AuthorQuotes[i]['_id'] == id){
        this.AuthorQuotes[i]['Vote']+=1;
        console.log(this.AuthorQuotes[i]['Vote']);
        console.log(this.AuthorQuotes);
      }
    }
    let obs = this._httpService.EditAuthor(this.AuthorId,this.AuthorQuotes)
        obs.subscribe(data=>console.log("Vote up success", data));
  }

  VoteDown(id){
    console.log(this.AuthorQuotes);
    console.log(id);
    
    for(var i = 0; i<this.AuthorQuotes.length; i++){
      console.log(this.AuthorQuotes[i]);
      
      if(this.AuthorQuotes[i]['_id'] == id){
        this.AuthorQuotes[i]['Vote']-=1;
        console.log(this.AuthorQuotes[i]['Vote']);
        console.log(this.AuthorQuotes);
      }
    }
    let obs = this._httpService.EditAuthor(this.AuthorId,this.AuthorQuotes)
        obs.subscribe(data=>console.log("Vote up success", data));
  }
  Delete(id){
    console.log(this.AuthorQuotes);
    console.log(id);
    
    for(var i = 0; i<this.AuthorQuotes.length; i++){
      console.log(this.AuthorQuotes[i]);
      
      if(this.AuthorQuotes[i]['_id'] == id){
        this.AuthorQuotes.splice(i,1);
        console.log(this.AuthorQuotes);
      }
    }
    let obs = this._httpService.EditAuthor(this.AuthorId,this.AuthorQuotes)
        obs.subscribe(data=>console.log("Vote up success", data));
  }



}
