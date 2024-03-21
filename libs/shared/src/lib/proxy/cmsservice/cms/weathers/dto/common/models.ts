
export interface DataDto {
  location?: string;
  dayWeatherDtos: DayWeatherDto[];
}

export interface DayWeatherDto {
  day?: string;
  maxtemp: number;
  mintemp: number;
  condition?: string;
  conditionIcon?: string;
}

export interface WeatherInputDto {
  latitude: number;
  longitude: number;
}
