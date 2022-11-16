import { Checkbox, TextFieldProps } from "@material-ui/core";
import { FieldProps } from "formik";
import React from "react";

export const CheckboxElement: React.FC<FieldProps & TextFieldProps> = ({
  placeholder,
  field,
}) => {
  return <Checkbox placeholder={placeholder} {...field} />;
};
