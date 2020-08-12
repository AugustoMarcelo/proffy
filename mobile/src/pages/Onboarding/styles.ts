import styled from 'styled-components/native';
import Swipe from 'react-native-swiper';

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
    justifyContent: 'flex-start',
    paddingLeft: 40,
    paddingBottom: 39,
  },
})``;

export const Slide = styled.View`
  flex: 1;
  background-color: #e5e5e5;
`;

export const Header = styled.View`
  height: 350px;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const SlideIcon = styled.Image`
  position: absolute;
  transform: translateY(20px);
`;

export const Content = styled.View`
  padding-top: 66px;
  padding-left: 40px;
  position: relative;
`;

export const SlideNumber = styled.Text`
  font-family: 'Archivo_500Medium';
  font-size: 40px;
  color: #6a6180;
  opacity: 0.16;
`;

export const SlideDescription = styled.Text`
  font-family: 'Poppins_500Medium';
  color: #6a6180;
  font-size: 24px;
  max-width: 210px;
  margin-top: 24px;
`;

export const ButtonNextSlide = styled.TouchableOpacity`
  position: absolute;
  right: 28px;
  bottom: -70px;
`;
