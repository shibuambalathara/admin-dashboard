import React from "react";
import { inputStyle, textAreaStyle } from "./style";

export const FormFieldInput = ({ label, type, name, register,defaultValue, error, ...rest }) => {
  return (
    <div className="flex flex-col">
      <label className="t" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        defaultValue={defaultValue}
        {...register(name, rest)}
        className={`${inputStyle.data}`}
      />
      
      {error && <p className="text-red-500">{`${label} Required`}</p>}
    </div>
  );
};
export const TextAreaInput = ({ label, type, name, register,defaultValue, error, ...rest }) => {
  return (
    <div className="flex flex-col">
      <label className="t" htmlFor={name}>
        {label}
      </label>
      <textarea
        type={type}
        defaultValue={defaultValue}
        {...register(name, rest)}
        className={`${inputStyle.data}`}
      />
      
      {error && <p className="text-red-500">{`${label} Required`}</p>}
    </div>
  );
};


export const SelectInput = ({ label, name, options,defaultValue, register, ...rest }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <select
        {...register(name)}
        className={`${inputStyle.data}`}
        {...rest}
        defaultValue={defaultValue}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};


