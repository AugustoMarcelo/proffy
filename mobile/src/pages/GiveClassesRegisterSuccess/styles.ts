import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #8257e5;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
`;

export const Content = styled.View`
  margin-top: 60px;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Background = styled.Image`
  position: absolute;
  left: 0;
  transform: translateX(-50px);
  width: 90%;
`;

export const BoxIcon = styled.View`
  height: 60px;
  width: 60px;
  border-width: 4px;
  border-color: #04d361;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const SuccessText = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: 32px;
  width: 182px;
  color: #fff;
  text-align: center;
  margin: 34px 0 16px;
  line-height: 37px;
`;

export const InfoText = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  line-height: 24px;
  color: #d4c2ff;
  width: 241px;
  text-align: center;
`;

export const GoToLoginButton = styled(RectButton)`
  background-color: #04d361;
  flex-direction: row;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  align-self: stretch;
`;

export const GoToLoginButtonText = styled.Text`
  color: #fff;
  font-family: 'Archivo_600SemiBold';
  font-size: 16px;
`;
