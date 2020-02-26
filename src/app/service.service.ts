import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 table = [];
  // constructor(private http: HttpClient) { }
  // gethttp(loc) {
  //   return this.http.get( 'http://api.weatherstack.com/current?access_key=f2601fada874e7350cbbb8767b7e7110&query=' + loc );
  //   }
  add(profile) {
    this.table.push(profile);
    console.log(this.table);
  }
  remove(i) {
    this.table.splice(i , 1);
  }
  update(i, f) {
    this.table[i] = f;
  }
}

