import { Checkbox, CheckboxProps } from "@material-ui/core";
import { FieldProps } from "formik";
import React from "react";
interface iprops {
  value: boolean;
}

export const CheckboxElement: React.FC<FieldProps & CheckboxProps & iprops> = ({
  placeholder,
  value,
  field,
}) => {
  return <Checkbox placeholder={placeholder} {...field} />;
};
