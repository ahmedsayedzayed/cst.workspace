import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { DataDto, WeatherInputDto } from '../../../cms/weathers/dto/common/models';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiName = 'CMSService';
  

  getWeatherForcastByInput = (input: WeatherInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, DataDto>({
      method: 'GET',
      url: '/api/CMS-service/Weather',
      params: { latitude: input.latitude, longitude: input.longitude },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
