import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllAuthors(){
    return this._http.get("/AllAuthors");
  }
  CreateAuthor(author){
    return this._http.post("/Author/new/",author);
  }
  CreateQuote(author_id,quote){
    return this._http.patch("/Author/quote/new/" + author_id, quote);
  }
  GetAuthor(author_id){
    return this._http.get("/Author/" + author_id);
  }
  EditAuthor(author_id,updateAuthor){
    return this._http.put("/Author/edit/" + author_id,updateAuthor);
  }
  Delete(author_id){
    return this._http.delete("/Author/destroy/" + author_id);
  }

}
