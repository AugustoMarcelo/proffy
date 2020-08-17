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
  height: 300px;
  background-color: #8257e5;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const LogoDescription = styled.Image`
  position: absolute;
  transform: translateY(20px);
`;

export const BackButton = styled.TouchableOpacity`
  margin: 31px 32px 0;
`;

export const Form = styled(Unform)`
  padding: 46px 32px 44px;
`;

export const Title = styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-size: 24px;
  line-height: 34px;
  color: #32264d;
`;

export const Subtitle = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  line-height: 24px;
  color: #6a6180;
  width: 180px;
  margin: 16px 0 40px;
`;

export const SubmitButton = styled(RectButton)<ButtonProps>`
  background-color: #04d361;
  flex-direction: row;
  height: 56px;
  margin-top: 24px;
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
