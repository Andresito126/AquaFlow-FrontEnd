import type { WaterActivity } from "./WaterActivity";

export interface WaterActivitiesList {
  user_id: string;
  filtrer_id: string;
  water_activities_list: WaterActivity[];
}