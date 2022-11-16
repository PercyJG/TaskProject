import { TextField } from "@material-ui/core";
import { ErrorMessage, FieldProps } from "formik";
import { TextFieldProps } from "@material-ui/core/TextField/TextField";
import React from "react";

export const TextFieldElement: React.FC<FieldProps & TextFieldProps> = ({
  label,
  placeholder,
  field,
}) => {
  return (
    <>
      <TextField label={label} placeholder={placeholder} {...field} />
      <ErrorMessage name={field.name} />
    </>
  );
};
