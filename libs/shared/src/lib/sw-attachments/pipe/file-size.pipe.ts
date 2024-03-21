import { Pipe, PipeTransform } from "@angular/core";
import { Observable } from "rxjs";
import { FileBinaryData } from "../shared/model/proxy-model";
import { LocalizationService } from "@abp/ng.core";

@Pipe({ name: 'fileSize' })
export class FileSizePipe implements PipeTransform {
    constructor(private _localization: LocalizationService){}
    transform(value: any, ...args: any[]): string{
        if(!value){
            return "";
        }
        return this._formatSizeUnits(value);
    }

    _formatSizeUnits(bytes): string{
        const giga = (1024 * 1024 * 1024);
        const mega = (1024 * 1024);
        const kilo = (1024);
        if      (bytes >= giga) { bytes = (bytes / giga).toFixed(2) + " " + this._localization.instant("::FileSizeType:GB"); }
        else if (bytes >= mega)    { bytes = (bytes / mega).toFixed(2) + " " + this._localization.instant("::FileSizeType:MB"); }
        else if (bytes >= kilo)       { bytes = (bytes / kilo).toFixed(2) + " " + this._localization.instant("::FileSizeType:KB"); }
        else if (bytes >= 0)           { bytes = bytes + " " + this._localization.instant("::FileSizeType:bytes"); }
        return bytes;
      }
      
}