export interface SelectOption {
  value: string | number;
  label: string;
}

export interface FormFieldConfig {
  fieldType:
    | "textbox-outlined"
    | "select-outlined"
    | "number-outlined"
    | "textarea-outlined"
    | "datepicker-outlined"
    | "radio";
  name: string;
  showLabel?: boolean;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  options?: SelectOption[];
  optionPlaceholder?: string;
  onChange?: any;
  type?: "text" | "password" | "number";
  showPasswordAdornment?: boolean;
  className?: string;
  allowFutureDate?: boolean;
  allowPastDate?: boolean;
  color?:string;
}
