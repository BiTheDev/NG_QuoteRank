import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {
  newQuote = {title:""};
  AuthorId;
  errors;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.AuthorId = params.id;
      console.log(this.AuthorId);
      
    });
  }
  CreateQuote(){
    let obs = this._httpService.CreateQuote(this.AuthorId,this.newQuote);
    obs.subscribe(data=>{
      if(data['errors']){
          console.log(data['errors']);
          
          this.errors = data['errors']['Quotes']['errors']['title']['message'];
      }else{
        console.log("create Author success", data);
        this.newQuote = {title:""};     
        this.BackToQuoteList();   
      }
    })
  }
  BackToQuoteList(){
    return this._router.navigate(['/Quotes/',this.AuthorId]);
  }
  
  

}
