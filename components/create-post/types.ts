export interface MediaItem {
  id: string;
  url: string;
  type: "image" | "video";
  filter: string;
}

export const FILTERS = [
  { name: "Normal", class: "" },
  { name: "Clarendon", class: "brightness-110 contrast-125 saturation-125" },
  { name: "Gingham", class: "sepia-20 brightness-110 contrast-90" },
  { name: "Moon", class: "grayscale brightness-110" },
  { name: "Vivid", class: "contrast-125 saturation-150" },
];
