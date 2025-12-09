export type DropDownProps = {
  isOpen: boolean;
};

export type DropdownItem = {
  id: number;
  name: string;
  image: string;
  link?: string;
};

export type PlanConfigurations = {
  key: "plus" | "pro" | "silver";
  className: string;
};
