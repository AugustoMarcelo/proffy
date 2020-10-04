import React, { useState, InputHTMLAttributes, CSSProperties } from 'react';
import { FaCheck } from 'react-icons/fa';

import { Box, InputBlock } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  labelStyle?: "inside" | "outside";
  containerStyle?: CSSProperties;
  inputStyle?: CSSProperties;
}

const Checkbox = ({
  name,
  label,
  labelStyle = 'outside',
  containerStyle = {},
  inputStyle = {},
  ...rest
}: InputProps) => {
  const [checked, setChecked] = useState(false);

  function toggleChecked() {
    setChecked(!checked);
  }

  return (
    <InputBlock style={containerStyle} onClick={toggleChecked}>
      <Box checked={checked}>
        {checked && <FaCheck size={12} color="#fff" />}
      </Box>
      <input type="check" id={name} style={inputStyle} {...rest} />
      {label && <label htmlFor={name}>{label}</label>}
    </InputBlock>
  );
}

export default Checkbox;
