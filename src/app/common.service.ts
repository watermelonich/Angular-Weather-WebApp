import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  getWeatherData(city:string):Observable<any>{
    var  headers={
      'X-RapidAPI-Key': 'Your_Api_Key',
      'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'
    }
    var q = city;
    var appid = ['da0f9c8d90bde7e619c3ec47766a42f4'];
    var units = 'standard';
      return this.http.get('https://openweather43.p.rapidapi.com/weather',{params:{q,appid,units },headers:headers})
  }
}
