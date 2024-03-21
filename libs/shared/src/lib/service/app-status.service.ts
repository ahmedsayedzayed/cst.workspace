import { Injectable } from "@angular/core";

export class UiStatus {
  pageName: string;
  members: any;
  isNewLoad: boolean;
}

@Injectable({
    providedIn: 'root'
  })
  export class AppStatusService {
  
    private data: Array<UiStatus> = [];
  
    clearStatus(pageName: string) {
      this.data = this.data.filter(r => r.pageName !== pageName);
    }
  
    saveStatus(status: UiStatus) {
      this.data = this.data.filter(r => r.pageName !== status.pageName);
      this.data.push(status);
  
    }
  
    loadStatus(pageName: string) {
      let result: UiStatus;
      result = this.data.find(r => r.pageName === pageName);
      if (result == null || result === undefined) {
        result = new UiStatus();
        result.pageName = pageName;
        result.members = {};
        result.isNewLoad = true;
      } else {
        result.isNewLoad = false;
      }
          return result;
    }
  
  }
  