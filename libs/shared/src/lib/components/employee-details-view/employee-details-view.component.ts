import { AppConsts } from '@cst-workspace/shared';
import { Component, EventEmitter, Output } from '@angular/core';
import { finalize } from 'rxjs';
import { EmployeeInfoPublicDto, EmployeeInfoService } from '../../proxy/user-profile-service/employee-infos';
import { PreviewModeEnum } from '@cst-workspace/shared';
import { AttachmentEntities } from '@cst-workspace/shared';
import { EmployeeAvailabilityStatus } from '../../proxy/user-profile-service/enums';
import { ToasterService } from '@abp/ng.theme.shared';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-employee-details-view',
  templateUrl: './employee-details-view.component.html',
  styleUrls: ['./employee-details-view.component.scss'],
})
export class EmployeeDetailsViewComponent {
  AppConsts = AppConsts;
  @Output() onClosed: EventEmitter<boolean> = new EventEmitter<boolean>(true);
  _isOpen = false;
  get isOpen() { return this._isOpen;}
  isLoading = true;
  employeeData: EmployeeInfoPublicDto;
  EmployeeAvailableEnum = EmployeeAvailabilityStatus;
  PreviewModeEnum = PreviewModeEnum;
  AttachmentEntities = AttachmentEntities;
  constructor(
    private _employeeService: EmployeeInfoService,
    private _toasterService: ToasterService,
    private _clipboardService: ClipboardService){};
  openSidebar(username: string){
    this.isLoading = true;
    this._employeeService.getEmployeeInfoPublic(username)
    .pipe(finalize(() => this.isLoading = false))
    .subscribe(res => {
      this.employeeData = res;
    });
    this._isOpen = true;
  }
  closeSidebar(){
    this.employeeData = null;
    this._isOpen = false;
    this.onClosed.emit(true);
  }
  copyTextToClipboard(textToCopy: string) {
    if(textToCopy !== null && textToCopy !==''){
      this._clipboardService.copyFromContent(textToCopy);
      this._toasterService.success('::Copied');
    }
  }
}

