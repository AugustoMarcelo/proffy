import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Form as Unform } from '@unform/mobile';

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f7;
  padding-bottom: 23px;
`;

export const ProfileResume = styled.View`
  position: relative;
  margin-top: -80px;
  margin-bottom: 44px;
  align-items: center;
  padding-bottom: 6px;
`;

export const Background = styled.Image`
  position: absolute;
  top: -10px;
  left: 0;
  transform: translateX(20px);
`;

export const AvatarContainer = styled.View`
  position: relative;
`;

export const Avatar = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 70px;
`;

export const SelectAvatarButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  position: absolute;
  bottom: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  background-color: #04d361;
`;

export const UserName = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: 24px;
  line-height: 25px;
  color: #fff;
  margin: 26px 0 4px;
`;

export const UserSubject = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 16px;
  line-height: 26px;
  color: #d4c2ff;
`;

export const ProfileData = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 24,
  },
})`
  margin: -40px 16px 0;
  background-color: #fff;
  border-width: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;
  overflow: hidden;
`;

export const Form = styled(Unform)`
  padding: 0 24px;
`;

export const Fieldset = styled.View`
  margin-bottom: 24px;
`;

export const Legend = styled.Text`
  font-family: 'Archivo_600SemiBold';
  font-size: 20px;
  line-height: 30px;
  color: #32264d;
  border-bottom-width: 1px;
  border-color: #e6e6f0;
  padding-bottom: 8px;
  margin-bottom: 24px;
`;

export const LegendGroup = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: #e6e6f0;
  padding-bottom: 8px;
  margin-bottom: 24px;
`;

export const InputBlock = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AddNewScheduleButton = styled.TouchableOpacity``;

export const AddNewScheduleButtonText = styled.Text`
  font-family: 'Archivo_600SemiBold';
  font-size: 14px;
  line-height: 26px;
  color: #8257e5;
`;

export const ScheduleItem = styled.View`
  margin-bottom: 24px;
`;

export const Options = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Border = styled.View`
  height: 1px;
  flex: 1;
  background-color: #e6e6f0;
`;

export const RemoveScheduleButton = styled.TouchableOpacity`
  margin: 0 24px;
`;

export const RemoveScheduleButtonText = styled.Text`
  font-family: 'Archivo_600SemiBold';
  font-size: 12px;
  line-height: 20px;
  color: #e33d3d;
`;

export const Footer = styled.View`
  border-top-width: 1px;
  border-top-color: #e6e6f0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #fafafc;
  padding: 25px 25px;
`;

export const SaveButton = styled(RectButton)`
  background-color: #04d361;
  flex-direction: row;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const SaveButtonText = styled.Text`
  color: #fff;
  font-family: 'Archivo_600SemiBold';
  font-size: 16px;
`;
