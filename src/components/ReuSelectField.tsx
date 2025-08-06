import React from "react";
import { Autocomplete, TextField } from "@mui/material";

interface Option {
  value: string;
  label: string;
}

interface ReuSelectFieldProps {
  name: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<any>) => void;
  onBlur?: (event: React.FocusEvent<any>) => void;
  error?: boolean;
  helperText?: React.ReactNode;
  options: Option[];
  className?: string;
  placeholder?: string;
}

const ReuSelectField: React.FC<ReuSelectFieldProps> = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  helperText,
  options,
  className,
  placeholder,
}) => {
  const selectedOption =
    options.find((option) => option.value === value) || null;

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.label}
      value={selectedOption}
      onChange={(event, newValue) => {
        const syntheticEvent = {
          target: {
            name,
            value: newValue ? newValue.value : "",
          },
        } as React.ChangeEvent<any>;
        onChange(syntheticEvent);
      }}
      onBlur={onBlur}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          name={name}
          error={error}
          helperText={helperText}
          placeholder={placeholder}
          size="small"
          className={className}
        />
      )}
    />
  );
};

export default ReuSelectField;
