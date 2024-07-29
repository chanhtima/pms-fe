export type DropdownInputProps = {
  label?: string;
  name: string;
  options: { label: string; key: string }[];
  rules?: any;
  disabled?: boolean;
  filter?: boolean;
  onChange?: any;
  EN?: boolean;
  onSelected?: (values: any) => void;
  placeholder?:string
};
