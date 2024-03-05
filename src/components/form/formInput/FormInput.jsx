import React from "react";
import "./style.css";
import { Controller, useFormContext } from "react-hook-form";
import { getErrorMessageByPropertyName } from './../../../utils/schema-validator';

const FormInput = ({
  name,
  label,
  type,
  value = "",
  placeholder,
  onChange,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div className="form-input form-group">
      {label ? <label>{label}</label> : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            className={`form-control ${errorMessage ? 'error' : ''}`}
            placeholder={placeholder}
            // onChange={onChange}
            // value={value ? value : field.value}
          />
        )}
      />
      {errorMessage ? <small className="input-err-msg">{errorMessage}</small> : null}
    </div>
  );
};

export default FormInput;
