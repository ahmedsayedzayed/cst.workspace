

import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

export class VirtualScrollDataSource<T,K> extends DataSource<T> {
    private _length:number = 0;
    public get length() { return this._length;}
    private _pageSize:number = 1;
    private _cachedData:T[] = Array.from<T>({length: this._length});
    public get cachedData(): T[] { return this._cachedData.filter(e => e != null);}
    private _fetchedPages:Set<number> = new Set<number>();
    private readonly _dataStream = new BehaviorSubject<(T)[]>(this._cachedData);
    private readonly _subscription = new Subscription();
    private soruce: K;
    private functionName: string; 
    constructor(soruce: K, functionName:string, pageSize:number) {
      super();
      if(!soruce[functionName]){
        throw `Cannot Implment unkow function ${functionName} Name for DataSoucre ${typeof(soruce)}`
      }
      this._pageSize = pageSize
      this.soruce = soruce;
      this.functionName = functionName;
      this._cachedData =  Array.from<T>({length: this._length});
      this._fetchedPages = new Set<number>();
      this._fetchPage(0);
    }
    connect(collectionViewer: CollectionViewer): Observable<(T)[]> {
      this._subscription.add(
        collectionViewer.viewChange.subscribe(range => {
          const startPage = this._getPageForIndex(range.start);
          const endPage = this._getPageForIndex(range.end - 1);
          for (let i = startPage; i <= endPage; i++) {
            this._fetchPage(i);
          }
        }),
      );
      return this._dataStream;
    }
  
    disconnect(): void {
      // this._subscription.unsubscribe();
    }
    clear(){
      this._length = 0;
      this._cachedData =  Array.from<T>({length: this._length});
      this._fetchedPages = new Set<number>();
      this._dataStream.next([]);
      this._fetchPage(0);
    }
  
    private _getPageForIndex(index: number): number {
      return Math.floor(index / this._pageSize);
    }
  
    private _fetchPage(page: number) {
      if (this._fetchedPages.has(page)) {
        return;
      }
      this._fetchedPages.add(page);
      this.soruce[this.functionName](page).subscribe(res => {
        if(this._length != res.totalCount){
          this._length = res.totalCount;
          this._cachedData =  Array.from<T>({length: this._length});
          this._fetchedPages = new Set<number>();
        }
        const start = page * this._pageSize;
        res.items.forEach((value, index) => {
          this._cachedData[start + index] = value as T;
        })
        this._dataStream.next(this._cachedData);
      }, error => {
        this._fetchedPages.delete(page);
      });
    }
  }
  