import { Component, OnInit } from '@angular/core';
import { AppServeService } from './app-serve.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-app';

  constructor (private weatherService: AppServeService) { }

  ngOnInit() { }

  // getWeatherData(cityName: String) {
  //   this.weatherService.getWeather(cityName).subscribe(
  //     (data) => {
  //       console.log(data)
  //     },
  //     (error) => {
  //       console.log(error)
  //     })
  // }

  // submitForm(cityName: HTMLInputElement) {
  //   this.getWeatherData(cityName.value)
  //   return false;
  // }
}
