import { TextField, TextFieldProps } from "@material-ui/core";
import { ErrorMessage, FieldProps } from "formik";
import React from "react";
import style from "../Tasks/TaskForm.module.css";

export const DatedElement: React.FC<FieldProps & TextFieldProps> = ({
  label,
  placeholder,
  helperText,
  field,
}) => {
  return (
    <>
      <TextField
        className={style.form_input_date}
        InputProps={{ disableUnderline: true }}
        label={label}
        placeholder={placeholder}
        {...field}
        InputLabelProps={{ shrink: true }}
        type="date"
      />
      <ErrorMessage component="span" name={field.name} />
    </>
  );
};
