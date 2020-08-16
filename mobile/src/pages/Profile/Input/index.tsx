import React, { useRef, useEffect } from 'react';
import { TextInputProps, StyleProp, ViewStyle } from 'react-native';
import { useField } from '@unform/core';

import { Container, Label, TextInput } from './styles';

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

  return (
    <Container style={containerStyle}>
      {label && <Label>{label}</Label>}
      <TextInput
        ref={inputElementRef}
        defaultValue={defaultValue}
        onChangeText={(value: string) => (inputValueRef.current.value = value)}
        {...rest}
      />
    </Container>
  );
};

export default Input;
