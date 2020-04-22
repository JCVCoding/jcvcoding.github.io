import React from "react";

import { InputWrapper } from "./formInput.styles";

export const FormInput = ({ handleChange, label, ...otherProps }) => (
  <InputWrapper>
    <label>{label}</label>
    <input onChange={handleChange} {...otherProps} />
  </InputWrapper>
);

export const FormTextArea = ({ handleChange, label, ...otherProps }) => (
  <InputWrapper>
    <label>{label}</label>
    <textarea onChange={handleChange} {...otherProps} />
  </InputWrapper>
);
