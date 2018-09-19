import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {
  newAuthor =  {name: ""};
  error;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }
  ngOnInit() {
  }
  CreateAuthor(){
    let obs= this._httpService.CreateAuthor(this.newAuthor)
    obs.subscribe(data=>{
      if(data['errors']){
        console.log(data['errors']);
        this.error = data['errors']['name']['message'];
        console.log(this.error);
        this.newAuthor = {name:""};
      }else{
        console.log("create Author success", data);
        this.newAuthor = {name:""}; 
        this.goHome();
      }
    })
  }
  goHome(){
    this._router.navigate(['/']);
  }
}
