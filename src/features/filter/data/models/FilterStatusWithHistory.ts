import type { FilterStatus } from "./FilterStatus";
import type { HistoricalStatusFilter } from "./HistoricalStatusFilter";

export interface FilterStatusWithHistory {
  filter_status: FilterStatus;
  historical_status_filter: HistoricalStatusFilter;
}