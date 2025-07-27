import { useEffect, useState } from "react";

export const useUserFilters = () => {
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("userFilters");
    if (stored) setFilters(JSON.parse(stored));
  }, []);

  const addFilter = (filterId: string) => {
    const updated = Array.from(new Set([...filters, filterId]));
    localStorage.setItem("userFilters", JSON.stringify(updated));
    setFilters(updated);
  };

  return { filters, addFilter };
};
