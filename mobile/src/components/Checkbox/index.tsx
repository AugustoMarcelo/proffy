import React, { useState } from 'react';
import {
  CheckBoxProps,
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import styles from './styles';

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
    <TouchableOpacity onPress={handleToggleCheck} style={styles.container}>
      <>
        <View
          style={[styles.boxContainer, checked ? styles.activeBoxColor : {}]}
        >
          {checked && <FontAwesome5 name="check" color="#fff" size={10} />}
        </View>

        {label && <Text style={styles.label}>{label}</Text>}
      </>
    </TouchableOpacity>
  );
};

export default Checkbox;
