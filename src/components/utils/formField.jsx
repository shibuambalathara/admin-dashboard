import React from "react";
import { inputStyle, labelStyle, textAreaStyle } from "./style";



//  type is input
export const FormFieldInput = ({ label, type, name, register,defaultValue, error, ...rest }) => {
  return (
    <div className="flex flex-col">
     
      <label  className={`${labelStyle.data}`} htmlFor={name}>
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


// input type is textarea
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

// Input type is select with constant value maping

export const SelectInput = ({ label, name, options,defaultValue,error, register, ...rest }) => {
  console.log("defa",defaultValue)
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <select
        {...register(name,{required:true})}
        className={`${inputStyle.data}`}
        {...rest}
        defaultValue={defaultValue}
      >
        <option value={defaultValue}>{defaultValue}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500">{`${label} Required`}</p>}
    
    </div>
  );
};


// Input type is select with dynamic value maping
export const SelectWithDynamic  = ({   options,defaultValue,error, register,mappingValue,mappingLabel,defaultLabel, ...rest }) => {
    
  return (
    
    <div className="flex flex-col">
      <label htmlFor={rest.name}>{rest.label}</label>
      <select
        {...register(rest.name,{required: true})}
        className={`${inputStyle.data}`}
          {...rest}
        
      >
        <option value={defaultValue}>{defaultLabel}</option>
         {options?.map((option) => (
          <>
          
          <option key={option[mappingValue]} value={option[mappingValue]}> 
            {option[mappingLabel]} 
          </option>
          </>
        ))
        }  
      </select>
      {error && <p className="text-red-500">{`${rest.label} Required`}</p>}
    </div>
  );
};


