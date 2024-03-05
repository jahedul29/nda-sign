import React from "react";
import "./style.css";
import { Controller, useFormContext } from "react-hook-form";
import { getErrorMessageByPropertyName } from './../../../utils/schema-validator';

const FormCheckbox = ({
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
    <div className="form-input-chekbox">
    <label htmlFor={name} >
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            {...field}
            type={"checkbox"}
            className={`${errorMessage ? 'error' : ''}`}
            // onChange={onChange}
            // value={value ? value : field.value}
          />
        )}
      />
      {label ? <p className="label">{label}</p> : null}
    </label>
      {errorMessage ? <small className="input-err-msg">{errorMessage}</small> : null}
    </div>
  );
};

export default FormCheckbox;
