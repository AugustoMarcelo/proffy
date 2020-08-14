import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
  isPrimary?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: #e5e5e5;
`;

export const Header = styled.View`
  height: 365px;
  background-color: #8257e5;
  padding: 62px 32px 0;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Navigation = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Name = styled.Text`
  font-family: 'Poppins_500Medium';
  color: #d4c2ff;
  font-size: 12px;
  line-height: 22px;
  margin-left: 16px;
`;

export const LogoutButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  background-color: #774dd6;
  border-radius: 8px;
`;

export const Banner = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
`;

export const Content = styled.View`
  padding: 42px 32px 0;
`;

export const Title = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #6a6180;
  font-size: 20px;
  line-height: 30px;
`;

export const TitleBold = styled.Text`
  font-family: 'Poppins_600SemiBold';
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 24px;
  justify-content: space-between;
`;

export const Button = styled(RectButton)<ButtonProps>`
  height: 150px;
  width: 48%;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
  background-color: #04d361;

  ${({ isPrimary }) =>
    isPrimary &&
    css`
      background-color: #9871f5;
    `};
`;

export const ButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #fff;
  font-size: 19px;
`;

export const TotalConnectionsText = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #9c98a6;
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`;
