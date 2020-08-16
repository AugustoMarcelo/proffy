import styled from 'styled-components/native';
import DropDownPicker from 'react-native-dropdown-picker';

export const Container = styled.View`
  min-width: 48%;
`;

export const Label = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 12px;
  line-height: 22px;
  color: #9c98a6;
  margin-bottom: 4px;
`;

export const DropDown = styled(DropDownPicker).attrs({
  containerStyle: {
    height: 56,
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
    paddingHorizontal: 12,
    paddingVertical: 8,
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
  placeholderStyle: {
    color: '#C1BCCC',
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
  },
  arrowColor: '#9C98A6',
})`
  background-color: #fafafc;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
