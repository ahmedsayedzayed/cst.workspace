import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nodata-or-loading',
  templateUrl: './nodata-or-loading.component.html',
  styleUrls: ['./nodata-or-loading.component.scss']
})
export class NodataOrLoadingComponent {
  @Input() isLoadingData: boolean;
  @Input() loaderImage: string;
  @Input() loaderImageHeight: string;
  @Input() flipLoadingImage = true;

  @Input() isDataNotEmpty: boolean;  
  @Input() nodataImage: string;
  @Input() nodataMessage: string;
  @Input() nodataHint: string;
  @Input() nodataLink: string;
  
  @Input() isDataFiltered: boolean;
  @Input() noFilterResultImage:string;
  @Input() noFilterResultMessage: string;
  @Input() noFilterResultHint: string;

  @Input() showBtn: boolean;
  @Input() buttonText: string
  @Output()  buttonClicked = new EventEmitter();

  actionEvent(){
    this.buttonClicked.emit()
  }
}
