import { TextField, TextFieldProps } from "@material-ui/core";
import { ErrorMessage, FieldProps } from "formik";
import React from "react";

export const DatedElement: React.FC<FieldProps & TextFieldProps> = ({
  label,
  placeholder,
  helperText,
  field,
}) => {
  return (
    <>
      <TextField
        label={label}
        placeholder={placeholder}
        {...field}
        InputLabelProps={{ shrink: true }}
        type="date"
      />
      <ErrorMessage name={field.name} />
    </>
  );
};
