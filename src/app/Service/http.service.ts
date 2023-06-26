import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../Classes/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  api_item = "http://localhost:3000/item";
  constructor(private http: HttpClient) { }

  //get 
  fatch_item(): Observable<Item[]> {
    return this.http.get<Item[]>(this.api_item)
  }

  //post
  PostItems(formData: any): Observable<Item[]> {
    return this.http.post<Item[]>(this.api_item, formData)
  }

  //delete
  deleteHandle(id: number): Observable<Item[]> {
    return this.http.delete<Item[]>(`${this.api_item}/${id}`)
  }

  //edit
  singleData(id: number): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.api_item}/${id}`)
  }

  //Update
  editData(id: any, formData: any): Observable<Item[]> {
    return this.http.put<Item[]>(`${this.api_item}/${id}`,formData)
  }

}