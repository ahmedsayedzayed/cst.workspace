import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AnnoucementPublicDto } from '../../proxy/cmsservice/cms/annoucements/dto/public/models';
import { AnnoucementService } from '../../proxy/cmsservice/controllers/cms/annoucements/annoucement.service';
import { Subscription } from 'rxjs';
import { AppConsts } from '@cst-workspace/shared';

@Component({
  selector: 'app-announcement-details',
  templateUrl: './announcement-details.component.html',
  styleUrls: ['./announcement-details.component.scss']
})
export class AnnouncementDetailsComponent implements OnDestroy{
  @Input() id:number;
  isModalOpen :boolean;
  announcementDetails:AnnoucementPublicDto;
  AppConsts = AppConsts;
  sub$:Subscription;
  constructor(private _announcementService:AnnoucementService){}
  show(id?){
    if(id){
      this.isModalOpen = true;
      this._getAnnouncementDetails(id)
    }

  }
  private _getAnnouncementDetails(id){
    this.sub$ = this._announcementService.getPublic(id).subscribe(res=>this.announcementDetails=res)
  }
  ngOnDestroy(): void {
    this.sub$?.unsubscribe()
  }
}
