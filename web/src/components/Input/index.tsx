import React, {
  InputHTMLAttributes,
  CSSProperties,
  useRef,
  useCallback,
  useState,
  useEffect,
} from 'react';
import { useField } from '@unform/core';

import { InputBlock } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  labelStyle?: 'inside' | 'outside';
  containerStyle?: CSSProperties;
  inputStyle?: CSSProperties;
}

const Input = ({
  name,
  label,
  labelStyle = 'outside',
  containerStyle = {},
  inputStyle = {},
  ...rest
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <InputBlock
      labelStyle={labelStyle}
      style={containerStyle}
      isFilled={isFilled}
      isFocused={isFocused}
    >
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        autoComplete="off"
        style={inputStyle}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
    </InputBlock>
  );
};

export default Input;
