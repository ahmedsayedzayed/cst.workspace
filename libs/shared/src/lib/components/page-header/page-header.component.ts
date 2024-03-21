import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PreviewModeEnum } from '../../sw-attachments/components/base64-file-preview/base64-file-preview.component';
import { Title } from '@angular/platform-browser';
import { LocalizationService } from '@abp/ng.core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnChanges {
  @Input() isParentRoute:boolean = false;
  @Input() pageTitle: string;
  @Input() icon:string;
  @Input() attachmentIconId;
  @Input() attachmentEntity;
  @Input() attachmentService;
  @Input() oneLineResponsive = false;

  PreviewModeEnum = PreviewModeEnum;

  constructor(
    private title: Title,
    private localizationService: LocalizationService,
  ){
    this.title.setTitle('Portal')
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes["pageTitle"]){
        this.title.setTitle(this.localizationService.instant(this.pageTitle));
      }
  }
}
