import React from 'react';
import { StyledInput } from './styled';

interface Props {
  name?: string;
  type?: 'text' | 'password' | 'email';
  value?: string;
  placeholder?: string;
  onChange: Function;
}

const FormInput: React.FC<Props> = props => {
  const { name, type, value, placeholder, onChange } = props;
  return <StyledInput name={name} type={type || 'text'} value={value} placeholder={placeholder} onChange={e => onChange(e)} />;
};

export default FormInput;
