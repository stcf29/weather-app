import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { weatherDatas } from './../../../../models/interfaces/Weather';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent {

  //dados da previisão do tempo recebidos pelo componente pai
    @Input() weatherDatasInput!: weatherDatas;

    minTemperatureIcon = faTemperatureLow;
    maxTemperatureIcon = faTemperatureHigh;
    humidityIcon = faDroplet;
    windIcon = faWind;

}
