import React, { useState, useRef, useEffect, useCallback } from 'react';
import { TextInputProps, StyleProp, ViewStyle } from 'react-native';
import { useField } from '@unform/core';

import { Container, Label, Border, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  containerStyle = {},
  ...rest
}) => {
  const { fieldName, registerField, defaultValue = '', error } = useField(name);

  const inputElementRef = useRef<any>(null);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

  return (
    <Container style={containerStyle} isFocused={isFocused} isFilled={isFilled}>
      {label && (
        <Label isFocused={isFocused} isFilled={isFilled} isErrored={!!error}>
          {label}
        </Label>
      )}
      {isFocused && <Border />}
      <TextInput
        ref={inputElementRef}
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={(value: string) => (inputValueRef.current.value = value)}
        {...rest}
      />
    </Container>
  );
};

export default Input;
