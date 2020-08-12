import React, { useState, useRef, useCallback, useEffect } from 'react';
import { TextInputProps, StyleProp, ViewStyle } from 'react-native';
import { useField } from '@unform/core';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container, Label, Border, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

interface InputValueReference {
  value: string;
}

const InputPassword: React.FC<InputProps> = ({
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
  const [hidePassword, setHidePassword] = useState(true);

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

  function handleToggleShowPassword() {
    setHidePassword(!hidePassword);
    inputElementRef.current.focus();
  }

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
        isFocused={isFocused}
        isFilled={isFilled}
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        secureTextEntry={hidePassword}
        onChangeText={(value: string) => (inputValueRef.current.value = value)}
        {...rest}
      />

      <TouchableOpacity onPress={handleToggleShowPassword}>
        <Feather
          name={hidePassword ? 'eye' : 'eye-off'}
          size={20}
          color={isFocused ? '#8257E5' : '#9C98A6'}
          style={{
            transform: [{ rotateX: '190deg' }],
          }}
        />
      </TouchableOpacity>
    </Container>
  );
};

export default InputPassword;
