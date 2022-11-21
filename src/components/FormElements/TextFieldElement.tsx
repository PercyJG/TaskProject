import { TextField } from "@material-ui/core";
import { ErrorMessage, FieldProps } from "formik";
import { TextFieldProps } from "@material-ui/core/TextField/TextField";
import React from "react";
import style from "../Tasks/EditTaskForm.module.css";

export const TextFieldElement: React.FC<FieldProps & TextFieldProps> = ({
  label,
  placeholder,
  field,
}) => {
  console.log("field: ", field);
  return (
    <>
      <TextField
        className={style.form_input_textfield}
        InputProps={{ disableUnderline: true }}
        label={label}
        placeholder={placeholder}
        {...field}
        helperText={<ErrorMessage component="span" name={field.name} />}
      />
    </>
  );
};
