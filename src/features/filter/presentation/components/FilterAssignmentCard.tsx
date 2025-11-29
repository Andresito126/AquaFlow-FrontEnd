import { useState, useEffect } from "react";
import axios from "axios";
import { Filter } from "../../data/models/Filter";
import { showSuccessAlert, showErrorAlert, showConfirmationAlert } from "../../../shared/utils/swal";
import { useTranslation } from "react-i18next";


interface Props {
  userId: string;
  onAssigned?: (id: string) => void; 

}

export function FilterAssignmentCard({ userId, onAssigned }: Props) {
  const [filterId, setFilterId] = useState("");
  const [assignedFilters, setAssignedFilters] = useState<Filter[]>([]);
  const [activeFilterId, setActiveFilterId] = useState("");
  const { t } = useTranslation("common");


  const baseUrl = import.meta.env.VITE_API_AUTH;

  useEffect(() => {
    async function fetchAssignedFilters() {
      try {
        const res = await axios.get(`${baseUrl}/filters/by-user`, {
          params: { userId },
        });

        const filtersFromApi = res.data.data.map(
          (f: any) =>
            new Filter(
              f.id,
              f.attributes.createBy || "",
              f.attributes.model || "",
              f.attributes.installationDate || "",
              f.attributes.isActive,
              [],
              []
            )
        );
        setAssignedFilters(filtersFromApi);
      } catch (error) {
        console.error("Error fetching user filters:", error);
      }
    }

    fetchAssignedFilters();
  }, [userId, baseUrl]);

  // carga el filtro activo desde localStorage
  useEffect(() => {
    const savedFilterId = localStorage.getItem("activeFilterId");
    if (savedFilterId) {
      setActiveFilterId(savedFilterId);
    }
  }, []);

  const handleAssign = async () => {
    try {
      const res = await axios.patch(
        `${baseUrl}/filters/${filterId}/assign-user`,
        { userId }
      );
      const newFilterData = res.data.data;
      const newFilter = new Filter(
        newFilterData.id,
        newFilterData.attributes.createBy || "",
        newFilterData.attributes.model || "",
        newFilterData.attributes.installationDate || "",
        newFilterData.attributes.isActive,
        [],
        []
      );
      setAssignedFilters((prev) => [...prev, newFilter]);
      setFilterId("");
    } catch (err) {
      console.error("Error assigning filter:", err);
    }
  };

const handleSetActive = async () => {
  if (!activeFilterId) return;

  const confirmed = await showConfirmationAlert(
    t("common.pages.dashboard.filters.confirmSetActive"),
    t("common.pages.dashboard.filters.areusure"),
    t("common.pages.dashboard.filters.yesContinue")
  );
  if (!confirmed) return;

  try {
    localStorage.setItem("activeFilterId", activeFilterId);
    showSuccessAlert(t("common.pages.dashboard.filters.successActive"));
    if (onAssigned) {
      onAssigned(activeFilterId);
    }
  } catch (err) {
    showErrorAlert(t("common.pages.dashboard.filters.errorActive"));
    console.error(err);
  }
};


  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-4 w-full items-center justify-center text-center">
        <p className="text-xl font-semibold text-gray-700 dark:text-gray-200">
          {t("common.pages.dashboard.filters.title")}
        </p>
      </div>

      <input
        type="text"
        placeholder={t("common.pages.dashboard.filters.placeholderUUID")}
        value={filterId}
        onChange={(e) => setFilterId(e.target.value)}
        className="px-2 py-1 rounded-md w-full"
      />
      <button
        onClick={handleAssign}
        className="bg-[#01182B] hover:bg-[#01182be0] dark:bg-[#5a90bd] text-white px-3 py-1 rounded-lg "
      >
      {t("common.pages.dashboard.filters.assign")}
      </button>

      <select
        className="rounded-md px-2 py-1 w-full"
        value={activeFilterId}
        onChange={(e) => setActiveFilterId(e.target.value)}
      >
        <option className="text-[black]" value="">{t("common.pages.dashboard.filters.select")}</option>
        {assignedFilters.map((filter) => (
          <option className="text-[black]" key={filter.getFilterId()} value={filter.getFilterId()}>
            {filter.getFilterId()}
          </option>
        ))}
      </select>

      <button
        onClick={handleSetActive}
        className="bg-[#01182B] text-white px-3 py-1 rounded-lg hover:bg-[#01182be0] dark:bg-[#5a90bd]"
      >
      {t("common.pages.dashboard.filters.useThis")}
      </button>
    </div>
  );
}
