
export interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicWeight: string;
  electronConfiguration: string;
  group: number | null;
  period: number;
  block: string;
  category: ElementCategory;
  state: ElementState;
  metalType: MetalType;
  discoveredBy?: string;
  discoveryYear?: number;
  electronegativity?: number;
  density?: number;
  meltingPoint?: number;
  boilingPoint?: number;
}

export enum ElementCategory {
  ALKALI_METAL = "alkali-metal",
  ALKALINE_EARTH_METAL = "alkaline-earth-metal",
  TRANSITION_METAL = "transition-metal",
  POST_TRANSITION_METAL = "post-transition-metal",
  METALLOID = "metalloid",
  NONMETAL = "nonmetal",
  NOBLE_GAS = "noble-gas",
  LANTHANIDE = "lanthanide",
  ACTINIDE = "actinide",
  UNKNOWN = "unknown"
}

export enum ElementState {
  SOLID = "solid",
  LIQUID = "liquid",
  GAS = "gas",
  UNKNOWN = "unknown"
}

export enum MetalType {
  METAL = "metal",
  METALLOID = "metalloid",
  NONMETAL = "nonmetal",
  UNKNOWN = "unknown"
}

// This is a simplified dataset with just a few elements for demonstration purposes
// In a real application, you would include all 118 elements
export const elements: Element[] = [
  {
    atomicNumber: 1,
    symbol: "H",
    name: "Hydrogen",
    atomicWeight: "1.008",
    electronConfiguration: "1s¹",
    group: 1,
    period: 1,
    block: "s",
    category: ElementCategory.NONMETAL,
    state: ElementState.GAS,
    metalType: MetalType.NONMETAL,
    discoveredBy: "Henry Cavendish",
    discoveryYear: 1766,
    electronegativity: 2.20,
    density: 0.0000899,
    meltingPoint: -259.14,
    boilingPoint: -252.87
  },
  {
    atomicNumber: 2,
    symbol: "He",
    name: "Helium",
    atomicWeight: "4.003",
    electronConfiguration: "1s²",
    group: 18,
    period: 1,
    block: "s",
    category: ElementCategory.NOBLE_GAS,
    state: ElementState.GAS,
    metalType: MetalType.NONMETAL,
    discoveredBy: "Pierre Janssen, Norman Lockyer",
    discoveryYear: 1868,
    electronegativity: null,
    density: 0.0001785,
    meltingPoint: -272.2,
    boilingPoint: -268.93
  },
  {
    atomicNumber: 3,
    symbol: "Li",
    name: "Lithium",
    atomicWeight: "6.94",
    electronConfiguration: "1s² 2s¹",
    group: 1,
    period: 2,
    block: "s",
    category: ElementCategory.ALKALI_METAL,
    state: ElementState.SOLID,
    metalType: MetalType.METAL,
    discoveredBy: "Johan August Arfwedson",
    discoveryYear: 1817,
    electronegativity: 0.98,
    density: 0.534,
    meltingPoint: 180.54,
    boilingPoint: 1342
  },
  {
    atomicNumber: 6,
    symbol: "C",
    name: "Carbon",
    atomicWeight: "12.011",
    electronConfiguration: "1s² 2s² 2p²",
    group: 14,
    period: 2,
    block: "p",
    category: ElementCategory.NONMETAL,
    state: ElementState.SOLID,
    metalType: MetalType.NONMETAL,
    discoveredBy: "Ancient",
    discoveryYear: null,
    electronegativity: 2.55,
    density: 2.267,
    meltingPoint: 3550,
    boilingPoint: 4027
  },
  {
    atomicNumber: 7,
    symbol: "N",
    name: "Nitrogen",
    atomicWeight: "14.007",
    electronConfiguration: "1s² 2s² 2p³",
    group: 15,
    period: 2,
    block: "p",
    category: ElementCategory.NONMETAL,
    state: ElementState.GAS,
    metalType: MetalType.NONMETAL,
    discoveredBy: "Daniel Rutherford",
    discoveryYear: 1772,
    electronegativity: 3.04,
    density: 0.0012506,
    meltingPoint: -210.1,
    boilingPoint: -195.79
  },
  {
    atomicNumber: 8,
    symbol: "O",
    name: "Oxygen",
    atomicWeight: "15.999",
    electronConfiguration: "1s² 2s² 2p⁴",
    group: 16,
    period: 2,
    block: "p",
    category: ElementCategory.NONMETAL,
    state: ElementState.GAS,
    metalType: MetalType.NONMETAL,
    discoveredBy: "Carl Wilhelm Scheele",
    discoveryYear: 1771,
    electronegativity: 3.44,
    density: 0.001429,
    meltingPoint: -218.79,
    boilingPoint: -182.95
  },
  {
    atomicNumber: 11,
    symbol: "Na",
    name: "Sodium",
    atomicWeight: "22.990",
    electronConfiguration: "1s² 2s² 2p⁶ 3s¹",
    group: 1,
    period: 3,
    block: "s",
    category: ElementCategory.ALKALI_METAL,
    state: ElementState.SOLID,
    metalType: MetalType.METAL,
    discoveredBy: "Humphry Davy",
    discoveryYear: 1807,
    electronegativity: 0.93,
    density: 0.971,
    meltingPoint: 97.72,
    boilingPoint: 883
  },
  {
    atomicNumber: 18,
    symbol: "Ar",
    name: "Argon",
    atomicWeight: "39.948",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶",
    group: 18,
    period: 3,
    block: "p",
    category: ElementCategory.NOBLE_GAS,
    state: ElementState.GAS,
    metalType: MetalType.NONMETAL,
    discoveredBy: "Lord Rayleigh, William Ramsay",
    discoveryYear: 1894,
    electronegativity: null,
    density: 0.0017837,
    meltingPoint: -189.34,
    boilingPoint: -185.85
  },
  {
    atomicNumber: 26,
    symbol: "Fe",
    name: "Iron",
    atomicWeight: "55.845",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶",
    group: 8,
    period: 4,
    block: "d",
    category: ElementCategory.TRANSITION_METAL,
    state: ElementState.SOLID,
    metalType: MetalType.METAL,
    discoveredBy: "Ancient",
    discoveryYear: null,
    electronegativity: 1.83,
    density: 7.874,
    meltingPoint: 1538,
    boilingPoint: 2861
  },
  {
    atomicNumber: 29,
    symbol: "Cu",
    name: "Copper",
    atomicWeight: "63.546",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d¹⁰",
    group: 11,
    period: 4,
    block: "d",
    category: ElementCategory.TRANSITION_METAL,
    state: ElementState.SOLID,
    metalType: MetalType.METAL,
    discoveredBy: "Ancient",
    discoveryYear: null,
    electronegativity: 1.90,
    density: 8.96,
    meltingPoint: 1084.62,
    boilingPoint: 2562
  },
  {
    atomicNumber: 47,
    symbol: "Ag",
    name: "Silver",
    atomicWeight: "107.868",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s¹",
    group: 11,
    period: 5,
    block: "d",
    category: ElementCategory.TRANSITION_METAL,
    state: ElementState.SOLID,
    metalType: MetalType.METAL,
    discoveredBy: "Ancient",
    discoveryYear: null,
    electronegativity: 1.93,
    density: 10.49,
    meltingPoint: 961.78,
    boilingPoint: 2162
  },
  {
    atomicNumber: 54,
    symbol: "Xe",
    name: "Xenon",
    atomicWeight: "131.293",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 5s² 5p⁶",
    group: 18,
    period: 5,
    block: "p",
    category: ElementCategory.NOBLE_GAS,
    state: ElementState.GAS,
    metalType: MetalType.NONMETAL,
    discoveredBy: "William Ramsay, Morris Travers",
    discoveryYear: 1898,
    electronegativity: 2.60,
    density: 0.005887,
    meltingPoint: -111.75,
    boilingPoint: -108.12
  },
  {
    atomicNumber: 79,
    symbol: "Au",
    name: "Gold",
    atomicWeight: "196.967",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s¹",
    group: 11,
    period: 6,
    block: "d",
    category: ElementCategory.TRANSITION_METAL,
    state: ElementState.SOLID,
    metalType: MetalType.METAL,
    discoveredBy: "Ancient",
    discoveryYear: null,
    electronegativity: 2.54,
    density: 19.3,
    meltingPoint: 1064.18,
    boilingPoint: 2856
  },
  {
    atomicNumber: 80,
    symbol: "Hg",
    name: "Mercury",
    atomicWeight: "200.59",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 6s²",
    group: 12,
    period: 6,
    block: "d",
    category: ElementCategory.TRANSITION_METAL,
    state: ElementState.LIQUID,
    metalType: MetalType.METAL,
    discoveredBy: "Ancient",
    discoveryYear: null,
    electronegativity: 2.00,
    density: 13.546,
    meltingPoint: -38.83,
    boilingPoint: 356.73
  },
  {
    atomicNumber: 92,
    symbol: "U",
    name: "Uranium",
    atomicWeight: "238.029",
    electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p⁶ 4d¹⁰ 4f¹⁴ 5s² 5p⁶ 5d¹⁰ 5f³ 6s² 6p⁶ 6d¹ 7s²",
    group: null,
    period: 7,
    block: "f",
    category: ElementCategory.ACTINIDE,
    state: ElementState.SOLID,
    metalType: MetalType.METAL,
    discoveredBy: "Martin Heinrich Klaproth",
    discoveryYear: 1789,
    electronegativity: 1.38,
    density: 19.1,
    meltingPoint: 1132.2,
    boilingPoint: 4131
  }
];

// Element layout in the periodic table
export const elementPositions = [
  { atomicNumber: 1, x: 0, y: 0 },
  { atomicNumber: 2, x: 17, y: 0 },
  
  { atomicNumber: 3, x: 0, y: 1 },
  { atomicNumber: 4, x: 1, y: 1 },
  { atomicNumber: 5, x: 12, y: 1 },
  { atomicNumber: 6, x: 13, y: 1 },
  { atomicNumber: 7, x: 14, y: 1 },
  { atomicNumber: 8, x: 15, y: 1 },
  { atomicNumber: 9, x: 16, y: 1 },
  { atomicNumber: 10, x: 17, y: 1 },
  
  { atomicNumber: 11, x: 0, y: 2 },
  { atomicNumber: 12, x: 1, y: 2 },
  { atomicNumber: 13, x: 12, y: 2 },
  { atomicNumber: 14, x: 13, y: 2 },
  { atomicNumber: 15, x: 14, y: 2 },
  { atomicNumber: 16, x: 15, y: 2 },
  { atomicNumber: 17, x: 16, y: 2 },
  { atomicNumber: 18, x: 17, y: 2 },
  
  { atomicNumber: 19, x: 0, y: 3 },
  { atomicNumber: 20, x: 1, y: 3 },
  { atomicNumber: 21, x: 2, y: 3 },
  { atomicNumber: 22, x: 3, y: 3 },
  { atomicNumber: 23, x: 4, y: 3 },
  { atomicNumber: 24, x: 5, y: 3 },
  { atomicNumber: 25, x: 6, y: 3 },
  { atomicNumber: 26, x: 7, y: 3 },
  { atomicNumber: 27, x: 8, y: 3 },
  { atomicNumber: 28, x: 9, y: 3 },
  { atomicNumber: 29, x: 10, y: 3 },
  { atomicNumber: 30, x: 11, y: 3 },
  { atomicNumber: 31, x: 12, y: 3 },
  { atomicNumber: 32, x: 13, y: 3 },
  { atomicNumber: 33, x: 14, y: 3 },
  { atomicNumber: 34, x: 15, y: 3 },
  { atomicNumber: 35, x: 16, y: 3 },
  { atomicNumber: 36, x: 17, y: 3 },
  
  // Rows 5-7 follow the same pattern...
  { atomicNumber: 47, x: 10, y: 4 },
  { atomicNumber: 54, x: 17, y: 4 },
  
  { atomicNumber: 79, x: 10, y: 5 },
  { atomicNumber: 80, x: 11, y: 5 },
  
  { atomicNumber: 92, x: 3, y: 9 } // Actinide row
];

export const categoryLabels = {
  [ElementCategory.ALKALI_METAL]: "Alkali Metals",
  [ElementCategory.ALKALINE_EARTH_METAL]: "Alkaline Earth Metals",
  [ElementCategory.TRANSITION_METAL]: "Transition Metals",
  [ElementCategory.POST_TRANSITION_METAL]: "Post-Transition Metals",
  [ElementCategory.METALLOID]: "Metalloids",
  [ElementCategory.NONMETAL]: "Nonmetals",
  [ElementCategory.NOBLE_GAS]: "Noble Gases",
  [ElementCategory.LANTHANIDE]: "Lanthanides",
  [ElementCategory.ACTINIDE]: "Actinides",
  [ElementCategory.UNKNOWN]: "Unknown"
};

export const stateLabels = {
  [ElementState.SOLID]: "Solid",
  [ElementState.LIQUID]: "Liquid",
  [ElementState.GAS]: "Gas",
  [ElementState.UNKNOWN]: "Unknown"
};

export const metalTypeLabels = {
  [MetalType.METAL]: "Metal",
  [MetalType.METALLOID]: "Metalloid",
  [MetalType.NONMETAL]: "Nonmetal",
  [MetalType.UNKNOWN]: "Unknown"
};
