import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  AuthorId : String;
  CurrentAuthor;
  UpdateAuthor={name : ""};
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.AuthorId = params.id;
      console.log(this.AuthorId);
      this.GetOneAuthor();
    });
  }
  GetOneAuthor(){
    let obs = this._httpService.GetAuthor(this.AuthorId);
    obs.subscribe(data=>{console.log("Get one Author success", data)
    this.CurrentAuthor = data;
    this.UpdateAuthor = {name : this.CurrentAuthor['name']};
  })
  }
  EditAuthor(){
    let obs = this._httpService.EditAuthor(this.AuthorId, this.UpdateAuthor);
    obs.subscribe(data=>
      {console.log("Edit Author success", data)
      this.goHome();
  });
}
goHome(){
  this._router.navigate(['/']);
}
}
