export interface WaterQualityTrendPoint {
  day: string; 
  ica_value: number;
}


export const waterQualityTrendMock: WaterQualityTrendPoint[] = [
  { day: "2025-07-13", ica_value: 42 },
  { day: "2025-07-14", ica_value: 50 },
  { day: "2025-07-15", ica_value: 55 },
  { day: "2025-07-16", ica_value: 61 },
  { day: "2025-07-17", ica_value: 66 },
  { day: "2025-07-18", ica_value: 71 },
  { day: "2025-07-19", ica_value: 74 },
  { day: "2025-07-20", ica_value: 80 },
  { day: "2025-07-21", ica_value: 88 },
  { day: "2025-07-22", ica_value: 92 }, 
];
