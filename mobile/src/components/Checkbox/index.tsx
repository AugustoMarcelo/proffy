import React, { useState } from 'react';
import { CheckBoxProps, StyleProp, ViewStyle } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { Container, BoxContainer, Label } from './styles';

interface CheckboxProps extends CheckBoxProps {
  checkboxStyle?: StyleProp<ViewStyle>;
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, onValueChange }) => {
  const [checked, setChecked] = useState(false);

  function handleToggleCheck() {
    setChecked(!checked);
    onValueChange && onValueChange(!checked);
  }

  return (
    <Container onPress={handleToggleCheck}>
      <>
        <BoxContainer isChecked={checked}>
          {checked && <FontAwesome5 name="check" color="#fff" size={10} />}
        </BoxContainer>

        {label && <Label>{label}</Label>}
      </>
    </Container>
  );
};

export default Checkbox;
