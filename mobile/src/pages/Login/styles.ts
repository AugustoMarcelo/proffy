import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Form as Unform } from '@unform/mobile';

interface ButtonProps {
  isDisabled: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: #e5e5e5;
`;

export const Header = styled.View`
  width: 100%;
  height: 340px;
  background-color: #8257e5;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const LogoDescription = styled.Image`
  position: absolute;
  transform: translateY(20px);
`;

export const Form = styled(Unform)`
  padding: 56px 32px 64px;
`;

export const ContentTop = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContentMiddle = styled.View`
  padding: 24px 0;
`;

export const ContentBottom = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
`;

export const LoginTitle = styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-size: 24px;
  color: #32264d;
`;

export const CreateAccountText = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 12px;
  color: #8257e5;
`;

export const ForgotPasswordText = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 12px;
  color: #9c98a6;
`;

export const SubmitButton = styled(RectButton)<ButtonProps>`
  background-color: #04d361;
  flex-direction: row;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      background-color: #dcdce5;
    `}
`;

export const SubmitButtonText = styled.Text<ButtonProps>`
  color: #fff;
  font-family: 'Archivo_600SemiBold';
  font-size: 16px;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      color: #9c98a6;
    `};
`;
