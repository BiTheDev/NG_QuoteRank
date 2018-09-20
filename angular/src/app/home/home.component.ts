import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allAuthors;
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this.getAllAuthors();
  }

  getAllAuthors(){
    let obs=this._httpService.getAllAuthors();
    obs.subscribe(data=>{
      console.log("Get All Authors success",data);
      this.allAuthors = data;
    })
  }
  DeleteAuthor(id){
    let obs = this._httpService.DeleteAuthor(id);
    obs.subscribe(data=>console.log("delete author success",data));
    this.getAllAuthors();
  }
  SortAuthor(sort){
    let obs = this._httpService.SortAuthor(sort);
    obs.subscribe(data=>
      {console.log("Sort author success",data),
      this.allAuthors = data;}
    )
    
  }
}
