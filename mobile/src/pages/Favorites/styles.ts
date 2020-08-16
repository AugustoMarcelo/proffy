import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f7;
`;

export const HeaderRight = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProffysQuantity = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #d4c2ff;
  font-size: 12px;
  line-height: 18px;
  margin-top: 5px;
  margin-left: 8px;
`;

export const TeacherList = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
})`
  margin-top: -40px;
`;
