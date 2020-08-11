import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  Text,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useField } from '@unform/core';

import styles from './styles';

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
    <View
      style={[
        styles.container,
        containerStyle,
        isFocused || isFilled
          ? { paddingVertical: 8 }
          : { paddingVertical: 20 },
      ]}
    >
      {label && (
        <Text
          style={[
            styles.label,
            isFocused || isFilled ? styles.labelFloating : {},
          ]}
        >
          {label}
        </Text>
      )}
      {isFocused && <View style={styles.borderOnFocus} />}
      <TextInput
        ref={inputElementRef}
        defaultValue={defaultValue}
        style={styles.input}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={value => (inputValueRef.current.value = value)}
        {...rest}
      />
    </View>
  );
};

export default Input;
