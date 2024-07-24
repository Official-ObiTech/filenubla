export * from "./api";
export * from "./dashboard";


export interface NavLink {
    label: string;
    icon?: string;
    to?: string;
    links?: NavLink[];
  }
  