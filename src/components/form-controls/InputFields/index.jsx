import { TextField } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;

  const { errors, formState } = form;

  const hasError = formState.touched[name] && errors[name];
  console.log(errors[name], formState.touched[name]);

  return (
    <Controller
      name={name}
      control={form.control}
      as={TextField}
      //các tham số fullwidth, label, disable tự truyền vào textfield
      margin="normal"
      variant="outlined"
      fullWidth
      label={label}
      disabled={disabled}
      //error
      error={!!hasError}
      helperText={errors[name]?.message}
    ></Controller>
  );
}

export default InputField;
