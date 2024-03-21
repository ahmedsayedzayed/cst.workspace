import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { OpenFirewallPortsInputDto, OpenFirewallPortsOutputDto } from '../../services/dtos/open-firewall-ports/models';
import type { RequestResultDto } from '../../shared/models';

@Injectable({
  providedIn: 'root',
})
export class OpenFirewallPortsService {
  apiName = 'RemedyService';
  

  create = (input: OpenFirewallPortsInputDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, RequestResultDto>({
      method: 'POST',
      url: '/api/remedy-service/OpenFirewallPorts',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (requestNo: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, OpenFirewallPortsOutputDto>({
      method: 'GET',
      url: '/api/remedy-service/OpenFirewallPorts',
      params: { requestNo },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
