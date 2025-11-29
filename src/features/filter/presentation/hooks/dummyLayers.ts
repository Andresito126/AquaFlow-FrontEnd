import type { TFunction } from "i18next";

export const getDummyLayers = (t: TFunction) => [
  {
    left: { 
      name: t("common.pages.filter.layers.sand"),
      value: 55,
      status: "Good" as const,
      date: "11-04-25",
      backContent: t("common.pages.filter.layers.sandInfo")
    },
    right: { 
      name: t("common.pages.filter.layers.activatedCarbon"),
      value: 75,
      status: "Good" as const,
      date: "22-04-25",
      backContent: t("common.pages.filter.layers.activatedCarbonInfo")
    },
  },

  {
    left: { 
      name: t("common.pages.filter.layers.mineralSand"),
      value: 75,
      status: "Good" as const,
      date: "25-04-25",
      backContent: t("common.pages.filter.layers.mineralSandInfo")
    },
    right: { 
      name: t("common.pages.filter.layers.land"),
      value: 75,
      status: "Good" as const,
      date: "25-04-25",
      backContent: t("common.pages.filter.layers.landInfo")
    },
  },

  {
    left: { 
      name: t("common.pages.filter.layers.water"),
      value: 15,
      status: "Good" as const,
      date: "01-04-25",
      backContent: t("common.pages.filter.layers.waterInfo")
    },
    right: { 
      name: t("common.pages.filter.layers.silicaSand"),
      value: 75,
      status: "Good" as const,
      date: "22-04-25",
      backContent: t("common.pages.filter.layers.silicaSandInfo")
    },
  },

  {
    left: { 
      name: t("common.pages.filter.layers.zeolite"),
      value: 75,
      status: "Good" as const,
      date: "22-04-25",
      backContent: t("common.pages.filter.layers.zeoliteInfo")
    },
    right: { 
      name: t("common.pages.filter.layers.activatedCarbon"),
      value: 18,
      status: "Good" as const,
      date: "22-04-25",
      backContent: t("common.pages.filter.layers.activatedCarbonInfo")
    },
  },

  {
    left: { 
      name: t("common.pages.filter.layers.mineralBalls"),
      value: 87,
      status: "Good" as const,
      date: "22-04-25",
      backContent: t("common.pages.filter.layers.mineralBallsInfo")
    },
    right: { 
      name: t("common.pages.filter.layers.mineralBalls"),
      value: 75,
      status: "Good" as const,
      date: "22-04-25",
      backContent: t("common.pages.filter.layers.mineralBallsInfo2")
    },
  },
];
