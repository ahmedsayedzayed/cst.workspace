
export interface GetPrayerTimeInput {
  latitude?: number;
  longitude?: number;
}

export interface PrayerTimeDto {
  date?: string;
  fajr?: string;
  sunrise?: string;
  dhuhr?: string;
  asr?: string;
  sunset?: string;
  maghrib?: string;
  isha?: string;
}
