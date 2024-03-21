import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { GetPrayerTimeInput, PrayerTimeDto } from '../../../cms/prayer-time/dto/common/models';

@Injectable({
  providedIn: 'root',
})
export class PrayerTimeService {
  apiName = 'CMSService';
  

  getPrayerTimesByInput = (input: GetPrayerTimeInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PrayerTimeDto>({
      method: 'GET',
      url: '/api/cms-service/prayer-time',
      params: { latitude: input.latitude, longitude: input.longitude },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
