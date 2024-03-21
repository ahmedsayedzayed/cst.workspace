export class AppConsts {
    private static _dateWithHourFormat = 'yyyy/MM/dd hh:mm a';
    public static get DateWithHourFormat() { return this._dateWithHourFormat;}
    private static _dateOnlyWithDayNameFormat = 'EEEE yyyy/MM/dd';
    public static get DateOnlyWithDayNameFormat() { return this._dateOnlyWithDayNameFormat;}
    private static _dateOnlyFormat = 'yyyy/MM/dd';
    public static get DateOnlyFormat() { return this._dateOnlyFormat;}
    private static _calenderDateOnlyFormat ='yyyy/MM/dd GGGGG';
    public static get CalenderDateOnlyFormat() { return this._calenderDateOnlyFormat;}
    private static _timeOnlyFormat = 'hh:mm a';
    public static get TimeOnlyFormat() { return this._timeOnlyFormat;}
    public static RatingServiceAfterSumbittion =  'ServiceRateAfter';
    public static RatingServiceForRequest =  'ServiceRequestRate';
    public static FaviconUrl = 'https://www.google.com/s2/favicons?sz=64&domain_url=';
    public static readonly backgroundImagesCount = 5;
    public static readonly swapImagesIndex = -1;
    public static readonly swapImagesInterval = 1000 * 60;//One minuet
    public static readonly fontFamily = 'LoewNextArabic, tahoma';


    public static setEnglishDateConsts(){
        this._dateOnlyFormat = 'dd/MM/yyyy';
        this._calenderDateOnlyFormat ='dd/MM/yyyy GGGGG';
        this._dateWithHourFormat = 'dd/MM/yyyy hh:mm a';
        this._dateOnlyWithDayNameFormat = 'EEEE dd/MM/yyyy';
        this._timeOnlyFormat = 'hh:mm a';
    }
}
