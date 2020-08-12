import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f7;
`;

export const TeacherListScroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
})`
  margin-top: -40px;
`;

export const SearchForm = styled.View`
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  color: #d4c2ff;
  font-family: 'Poppins_400Regular';
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputBlock = styled.View`
  width: 48%;
`;

export const DropDown = styled(DropDownPicker).attrs({
  containerStyle: {
    height: 54,
    marginTop: 4,
    marginBottom: 16,
  },
  dropDownStyle: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  labelStyle: {
    fontFamily: 'Poppins_400Regular',
    color: '#6A6180',
  },
  activeLabelStyle: {
    fontFamily: 'Poppins_600SemiBold',
  },
  itemStyle: {
    justifyContent: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 13,
  },
  activeItemStyle: {
    borderLeftWidth: 2,
    borderStyle: 'solid',
    borderColor: '#8257E5',
    backgroundColor: '#EBEBF5',
    paddingLeft: 10,
  },
  placeholderStyle: { color: '#C1BCCC' },
  arrowColor: '#9C98A6',
})``;

export const SubmitButton = styled(RectButton)`
  background-color: #04d361;
  flex-direction: row;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-family: 'Archivo_700Bold';
  font-size: 16px;
`;
