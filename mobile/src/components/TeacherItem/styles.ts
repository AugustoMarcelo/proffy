import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
  isFavorite: boolean;
}

interface ScheduleProps {
  unavailable?: boolean;
}

export const Container = styled.View`
  background-color: #fff;
  border-width: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #eee;
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
`;

export const Name = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #32264d;
  font-size: 20px;
`;

export const Subject = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #6a6180;
  font-size: 12px;
  margin-top: 4px;
`;

export const Bio = styled.Text`
  margin: 0 24px;
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  line-height: 24px;
  color: #6a6180;
`;

export const Schedule = styled.View`
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #e6e6f0;
  padding: 24px;
  margin-top: 24px;
`;

export const ScheduleHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px 0 15px;
`;

export const ScheduleHeaderText = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 10px;
  line-height: 15px;
  color: #9c98a6;
`;

export const ScheduleItem = styled.View<ScheduleProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 25px 10px 15px;
  background-color: #fafafc;
  border-width: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;
  margin-top: 8px;

  ${({ unavailable }) => unavailable && `opacity: 0.4;`};
`;

export const ScheduleItemDay = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: 16px;
  line-height: 21px;
  color: #6a6180;
`;

export const Arrow = styled.Image`
  opacity: 0.2;
  margin-left: auto;
  margin-right: 30px;
`;

export const ScheduleItemInterval = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: 16px;
  line-height: 21px;
  color: #6a6180;
  width: 62px;
`;

export const Footer = styled.View`
  background-color: #fafafc;
  padding: 24px;
`;

export const Price = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PriceLabel = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #6a6180;
  font-size: 14px;
  line-height: 24px;
  align-self: flex-end;
`;

export const PriceValue = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #8257e5;
  font-size: 16px;
  line-height: 26px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const FavoriteButton = styled(RectButton)<ButtonProps>`
  background-color: #8257e5;
  width: 56px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;

  ${({ isFavorite }) =>
    isFavorite &&
    css`
      background-color: #e33d3d;
    `}
`;

export const ContactButton = styled(RectButton)`
  background-color: #04d361;
  flex: 1;
  flex-direction: row;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const ContactButtonText = styled.Text`
  color: #fff;
  font-family: 'Archivo_700Bold';
  font-size: 16px;
  margin-left: 16px;
`;
