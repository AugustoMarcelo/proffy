import styled, { css } from 'styled-components/native';

interface CheckboxProps {
  isChecked: boolean;
}

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const BoxContainer = styled.View<CheckboxProps>`
  height: 24px;
  width: 24px;
  background-color: #fff;
  border-width: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;
  align-items: center;
  justify-content: center;

  ${({ isChecked }) =>
    isChecked &&
    css`
      background-color: #04d361;
      border-color: #04d361;
      border-width: 2px;
    `}
`;

export const Label = styled.Text`
  margin-left: 12px;
  font-family: 'Poppins_400Regular';
  font-size: 12px;
  color: #9c98a6;
`;
