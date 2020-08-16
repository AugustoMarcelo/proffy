import React from 'react';

import { Container, Label, DropDown } from './styles';

interface DropdownProps {
  label?: string;
  items: {
    value: string | number;
    label: string;
  }[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, items, ...rest }) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <DropDown items={items} {...rest} />
    </Container>
  );
};

export default Dropdown;
