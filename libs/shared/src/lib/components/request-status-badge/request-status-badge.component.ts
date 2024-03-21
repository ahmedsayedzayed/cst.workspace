import { Component, Input } from '@angular/core';
import { StatusCode_StatusCodeEnum } from '../../proxy/request-service/requests';


@Component({
  selector: 'app-request-status-badge',
  templateUrl: './request-status-badge.component.html',
  styleUrls: ['./request-status-badge.component.scss']
})
export class RequestStatusBadgeComponent {
  @Input() requestStatus: StatusCode_StatusCodeEnum;
}
