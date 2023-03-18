import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) {}

    getAlbums() {
      this.http.get('https://jsonplaceholder.typicode.com/albums').subscribe(data => {
        console.log(data);
      });
    }
   
}
