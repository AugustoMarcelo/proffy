import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  position: relative;
  height: 64px;
  background-color: #fafafc;
  border-width: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;
  padding: 20px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${({ isFocused, isFilled }) =>
    (isFocused || isFilled) &&
    css`
      padding: 8px 24px;
    `}
`;

export const Label = styled.Text<ContainerProps>`
  position: absolute;
  font-family: 'Poppins_400Regular';
  color: #9c98a6;
  font-size: 14px;
  top: 20px;
  left: 24px;

  ${({ isFocused, isFilled }) =>
    (isFocused || isFilled) &&
    css`
      top: 10px;
      font-size: 10px;
    `}

  ${({ isErrored }) =>
    isErrored &&
    css`
      color: #e83f5b;
    `}
`;

export const Border = styled.View`
  position: absolute;
  width: 2px;
  height: 40px;
  background-color: #8257e5;
  left: -1px;
  top: 12px;
  border-radius: 5px;
`;

export const TextInput = styled.TextInput<ContainerProps>`
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  color: #6a6180;
  flex: 1;

  ${({ isFocused, isFilled }) =>
    (isFocused || isFilled) &&
    css`
      align-self: flex-end;
    `}
`;
