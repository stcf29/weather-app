import { weatherDatas } from 'src/app/models/interfaces/Weather';
import { WeatherService } from './../../services/weather.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit, OnDestroy{
  //pratica para evitar memory leak, sai da tela ele é fechado
  private readonly destroy$: Subject<void> = new Subject();

  initialCityName = 'São Paulo'
  weatherDatas! : weatherDatas
  searchIcon = faMagnifyingGlass;

  constructor(private WeatherService : WeatherService){}

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName : string): void{
    this.WeatherService.getWeatherDatas(cityName)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response) => {
        response && (this.weatherDatas = response)
        console.log(this.weatherDatas)
      },
      error: (error) => console.log(error)
    })
  }

  onSubmit() : void {
    this.getWeatherDatas(this.initialCityName)
    this.initialCityName = "";
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
