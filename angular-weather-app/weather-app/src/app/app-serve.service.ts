import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServeService {
  
  apiKey = '7238d61a958aa9f57ef306d3faf1d1d1'
  baseUrl = ''

  constructor(private _http: HttpClient) {
    this.baseUrl = 'http://api.openweathermap.org/data/2.5/weather'
  }

  getWeather(cityName: String):Observable<any> {
    return this._http.get(`${this.baseUrl}?appid=${this.apiKey}&q=${cityName}`)
  }
}
