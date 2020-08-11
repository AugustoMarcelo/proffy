import React, { useState, useRef, useCallback, useEffect } from 'react';
import { View, TextInput, TextInputProps, Text, StyleProp, ViewStyle } from 'react-native';
import { useField } from '@unform/core';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface InputProps extends TextInputProps {
  name: string;
  label?: string;
  containerStyle?: StyleProp<ViewStyle>,
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
    <View style={[styles.container, containerStyle, isFocused || isFilled ? { paddingVertical: 8 } : { paddingVertical: 20 } ]}>
      {label && <Text style={[styles.label, isFocused || isFilled ? styles.labelFloating : {}]}>{label}</Text>}
      {isFocused && <View style={styles.borderOnFocus} />}
      <TextInput
        ref={inputElementRef}
        defaultValue={defaultValue}
        style={[styles.input, isFocused || isFilled ? { alignSelf: 'flex-end' } : {}]}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        secureTextEntry={hidePassword}
        onChangeText={value => inputValueRef.current.value = value}
        {...rest}
      />
      <TouchableOpacity onPress={handleToggleShowPassword}>
        <Feather
          name={hidePassword ? 'eye' : 'eye-off'}
          size={20}
          color={isFocused ? '#8257E5' : '#9C98A6'}
          style={{
            transform: [
              { rotateX: '190deg' },
            ]
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default InputPassword;
