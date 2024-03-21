import { EnvironmentService, isNullOrEmpty } from '@abp/ng.core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-qr-code-generator',
  templateUrl: './qr-code-generator.component.html',
  styleUrls: ['./qr-code-generator.component.scss'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QrCodeGeneratorComponent implements OnInit, OnChanges{
  @Input() qrCodeData: string;
  qrCodeImage: string;
  baseUrl: string;

  constructor(
    private _env: EnvironmentService,
    private _cd: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
    this._drawQrImage();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.baseUrl = this._env.getEnvironment().application.baseUrl;
    this._drawQrImage();
  }
  private _drawQrImage(){
    QRCode.toDataURL(isNullOrEmpty(this.qrCodeData) ? this.baseUrl : this.qrCodeData)
      .then(url => {
        this.qrCodeImage = url;
        this._cd.detectChanges();
      })
      .catch(err => {
        console.error(err);
      });
  }
}
