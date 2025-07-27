export interface WaterQualityDataPoint {
  time: string;
  quality: number;
}

export const waterQualityMock: WaterQualityDataPoint[] = [
  { time: "2025-07-01", quality: 78 },
  { time: "2025-07-02", quality: 82 },
  { time: "2025-07-03", quality: 65 },
  { time: "2025-07-04", quality: 25 },
  { time: "2025-07-06", quality: 55 },
   { time: "2025-07-07", quality: 65 },
    { time: "2025-07-08", quality: 95 },
];
