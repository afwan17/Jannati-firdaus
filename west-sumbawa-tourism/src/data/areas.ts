export type TourismItem = {
  id: string;
  name: string;
  type: "beach" | "island" | "hill" | "waterfall" | "park" | "spot" | "other";
  description?: string;
  location?: [number, number]; // [lat, lng]
};

export type Area = {
  id: string;
  name: string;
  center: [number, number]; // [lat, lng]
  items: TourismItem[];
};

export const areas: Area[] = [
  {
    id: "taliwang",
    name: "Taliwang",
    center: [-8.744, 116.84],
    items: [
      {
        id: "taliwang-city-park",
        name: "Taliwang City Park",
        type: "park",
        description: "Central public park, evening food stalls and local events.",
        location: [-8.7445, 116.841],
      },
      {
        id: "ai-manis-beach",
        name: "Ai Manis Beach",
        type: "beach",
        description: "Quiet beach with gentle waves, good for sunsets.",
        location: [-8.776, 116.86],
      },
    ],
  },
  {
    id: "maluk",
    name: "Maluk",
    center: [-8.936, 116.802],
    items: [
      {
        id: "maluk-beach",
        name: "Maluk Beach",
        type: "beach",
        description: "Golden sand bay, popular surf spot with mellow sections.",
        location: [-8.939, 116.803],
      },
      {
        id: "benete-bay",
        name: "Benete Bay View",
        type: "spot",
        description: "Scenic bay viewpoint near mining port area.",
        location: [-8.953, 116.79],
      },
    ],
  },
  {
    id: "sekongkang",
    name: "Sekongkang",
    center: [-8.957, 116.779],
    items: [
      {
        id: "rantung-beach",
        name: "Rantung Beach",
        type: "beach",
        description: "Consistent surf with open ocean views and wide sandy stretch.",
        location: [-8.964, 116.767],
      },
    ],
  },
  {
    id: "jereweh",
    name: "Jereweh",
    center: [-8.891, 116.834],
    items: [
      {
        id: "jereweh-waterfall",
        name: "Jereweh Waterfall",
        type: "waterfall",
        description: "Forest waterfall with natural pools, short trek required.",
        location: [-8.885, 116.84],
      },
    ],
  },
  {
    id: "poto-tano",
    name: "Poto Tano",
    center: [-8.524, 116.71],
    items: [
      {
        id: "kenawa-island",
        name: "Kenawa Island",
        type: "island",
        description: "Iconic small savanna island with crystal water and hilltop view.",
        location: [-8.492, 116.84],
      },
      {
        id: "mantar-hill",
        name: "Mantar Hill",
        type: "hill",
        description: "Paragliding site and sunrise viewpoint above the clouds.",
        location: [-8.593, 116.68],
      },
    ],
  },
  {
    id: "seteluk",
    name: "Seteluk",
    center: [-8.616, 116.707],
    items: [
      {
        id: "kertasari-beach",
        name: "Kertasari Beach",
        type: "beach",
        description: "Long white-sand beach, snorkeling spots near reefs.",
        location: [-8.61, 116.69],
      },
    ],
  },
  {
    id: "brang-rea",
    name: "Brang Rea",
    center: [-8.693, 116.953],
    items: [
      {
        id: "lawar-waterfall",
        name: "Lawar Waterfall",
        type: "waterfall",
        description: "Hidden multi-tier waterfall in lush forest.",
        location: [-8.702, 116.983],
      },
    ],
  },
  {
    id: "brang-ene",
    name: "Brang Ene",
    center: [-8.756, 116.897],
    items: [
      {
        id: "brang-ene-view",
        name: "Brang Ene Viewpoint",
        type: "spot",
        description: "River and valley views, quiet rural scenery.",
        location: [-8.752, 116.9],
      },
    ],
  },
];

