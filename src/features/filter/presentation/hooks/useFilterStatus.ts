import { useEffect, useState } from "react";
import { FilterRepository } from "../../data/repository/FilterRepository";
import type { FilterStatusWithHistory } from "../../data/models/FilterStatusWithHistory";

interface State {
  data?: FilterStatusWithHistory;
  loading: boolean;
  error?: string;
}

export function useFilterStatus(filterId: string) {
  const [state, setState] = useState<State>({ loading: true });

  useEffect(() => {
    let mounted = true;
    const repo = new FilterRepository();

    (async () => {
      setState({ loading: true });
      try {
        const data = await repo.getStatusById(filterId);
        if (mounted) {
          if (!data) {
            setState({ loading: false, error: "No se obtuvo información del filtro." });
          } else {
            setState({ loading: false, data });
          }
        }
      } catch (e: any) {
        if (mounted) setState({ loading: false, error: e?.message ?? "Error" });
      }
    })();

    return () => {
      mounted = false;
    };
  }, [filterId]);

  return state;
}
