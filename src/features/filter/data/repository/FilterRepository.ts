import type { Filter } from "../models/Filter";
import { FilterDTO } from "../models/FilterDTO";
import type { FilterStatusWithHistory } from "../models/FilterStatusWithHistory";

const BASE_URL = "http://44.217.95.165";

export class FilterRepository {
  async create(filter: Filter): Promise<FilterDTO | null> {
    try {
      const payload = {
        filterId: filter.getFilterId(),
        createdBy: filter.getCreateBy(),
        model: filter.getModel(),
        dateRecord: filter.getDateRecord(),
        isActive: filter.isActiveFilter(),
        filterLayers: filter.getFilterLayer().map((layer) => ({
          filterLayerId: layer.filterLayerId,
          name: layer.name,
          lifeTime: layer.lifeTime,
          efficiency: layer.efficiency,
        })),
        sensors: filter.getSensors().map((sensor) => ({
          sensorId: sensor.sensorId,
          name: sensor.name,
          model: sensor.model,
          unitMeasurement: sensor.unitMeasurement,
        })),
      };

      console.log("Payload enviado desde frontend:", JSON.stringify(payload, null, 2));

      const response = await fetch(`${BASE_URL}/filters`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const responseData = await response.json();

      return new FilterDTO(
        responseData.data.id,
        responseData.data.attributes.model,
        responseData.data.attributes.dateRecord,
        responseData.data.relationships.creator.data.id,
        responseData.data.attributes.isActive,
        responseData.data.attributes.createdAt,
        responseData.included
          .filter((i: any) => i.type === "sensors")
          .map((sensor: any) => ({
            id: sensor.id,
            name: sensor.attributes.name,
            model: sensor.attributes.model,
            unitMeasurement: sensor.attributes.unitMeasurement,
          })),
        responseData.included
          .filter((i: any) => i.type === "filter-layers")
          .map((layer: any) => ({
            id: layer.id,
            name: layer.attributes.name,
            lifeTime: layer.attributes.lifeTime,
            efficiency: layer.attributes.efficiency,
          }))
      );
    } catch (error) {
      console.error("Error creating filter:", error);
      return null;
    }
  }

  async getAll(): Promise<FilterDTO[]> {
    try {
      const response = await fetch(`${BASE_URL}/filters`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();

      return data.data.map((filter: any) => {
        return new FilterDTO(
          filter.id,
          filter.attributes.model,
          "",
          "",
          filter.attributes.isActive,
          filter.attributes.createdAt,
          [],
          []
        );
      });
    } catch (error) {
      console.error("Error fetching filters:", error);
      return [];
    }
  }

  async assignFilterToUser(filterId: string, userId: string): Promise<Filter> {
    const response = await fetch(`${BASE_URL}/filters/${filterId}/assign-user`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const resData = await response.json();
    return resData.data;
  }

  async getStatusById(filterId: string): Promise<FilterStatusWithHistory | null> {
    try {
      const response = await fetch(`${BASE_URL}/filters/${filterId}/status`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching filter status:", error);
      return null;
    }
  }
}
