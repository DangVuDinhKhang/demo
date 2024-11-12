import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }

  public search(keyword: File): Observable<any> {
    let formData = new FormData();
    formData.append("image", keyword);
    return this.http.post('http://localhost:5000/predict', formData)
  }
}
