import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 32px;
  padding-top: 101px;
  background-color: #8257e5;
  position: relative;
`;

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #774dd6;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 101px;
  padding: 0 32px;
  padding-top: 40px;
  border-bottom-width: 1px;
  border-bottom-color: #6842c2;
`;

export const PageTitle = styled.Text`
  font-family: 'Archivo_400Regular';
  color: #d4c2ff;
  font-size: 14px;
  line-height: 15px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: 40px 0;
`;

export const Subtitle = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #fff;
  font-size: 24px;
  line-height: 29px;
  max-width: 160px;
`;
