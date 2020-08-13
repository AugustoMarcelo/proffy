import styled, { css } from 'styled-components/native';
import Swipe from 'react-native-swiper';
import { RectButton } from 'react-native-gesture-handler';
import { Form as Unform } from '@unform/mobile';

interface ButtonProps {
  isDisabled: boolean;
}

export const Swiper = styled(Swipe).attrs({
  dotStyle: {
    borderRadius: 1,
    width: 4,
    height: 4,
  },
  activeDotStyle: {
    borderRadius: 1,
    width: 4,
    height: 4,
  },
  activeDotColor: '#8257E5',
  paginationStyle: {
    top: 82,
    right: 32,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
})`
  background-color: #f0f0f7;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 10;
  top: 74px;
  left: 32px;
`;

export const PersonalDataSlide = styled.View`
  flex: 1;
  padding: 0 32px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 180,
    flexGrow: 1,
  },
})`
  /* margin-top: 180px; */
`;

export const Title = styled.Text`
  font-size: 32px;
  font-family: 'Poppins_600SemiBold';
  width: 235px;
  color: #32264d;
  margin-bottom: 16px;
`;

export const Description = styled.Text`
  font-size: 14px;
  font-family: 'Poppins_400Regular';
  color: #6a6180;
  width: 208px;
  margin-bottom: 87px;
`;

export const Question = styled.Text`
  font-size: 24px;
  font-family: 'Poppins_600SemiBold';
  color: #32264d;
  margin-bottom: 24px;
`;

export const Form = styled(Unform)``;

export const NextButton = styled(RectButton)<ButtonProps>`
  background-color: #8257e5;
  flex-direction: row;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 24px;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      background-color: #dcdce5;
    `}
`;

export const NextButtonText = styled.Text<ButtonProps>`
  color: #fff;
  font-family: 'Archivo_600SemiBold';
  font-size: 16px;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      color: #9c98a6;
    `};
`;

export const CredentialsSlide = styled.View`
  flex: 1;
  padding: 0 32px;
`;

export const ConfirmButton = styled(NextButton)`
  background-color: #04d361;
`;

export const ConfirmButtonText = styled(NextButtonText)``;
