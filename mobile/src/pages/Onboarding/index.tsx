import React, { useRef } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Swipe from 'react-native-swiper';

import slide1Img from '../../assets/images/slide1.png';
import slide2Img from '../../assets/images/slide2.png';
import nextIcon from '../../assets/images/icons/next.png';
import slideStudyIcon from '../../assets/images/icons/slideIconStudy.png';
import slideGiveClassesIcon from '../../assets/images/icons/slideIconGiveClasses.png';

import {
  Swiper,
  Slide,
  Header,
  SlideIcon,
  Content,
  SlideNumber,
  SlideDescription,
  ButtonNextSlide,
} from './styles';

const Onboarding: React.FC = () => {
  const swipeRef = useRef<typeof Swiper>(null);
  const { navigate } = useNavigation();

  function goToNextSlide() {
    swipeRef.current?.scrollBy(1);
  }

  function handleNavigateToLoginPage() {
    navigate('Login');
  }

  return (
    <Swiper ref={swipeRef} loop={false}>
      <Slide>
        <Header style={{ backgroundColor: '#8257E5' }}>
          <Image source={slide1Img} resizeMode="contain" />
          <SlideIcon source={slideStudyIcon} />
        </Header>

        <Content>
          <SlideNumber>01.</SlideNumber>
          <SlideDescription>
            Encontre vários professores para ensinar você
          </SlideDescription>
          <ButtonNextSlide onPress={goToNextSlide}>
            <Image source={nextIcon} />
          </ButtonNextSlide>
        </Content>
      </Slide>

      <Slide>
        <Header style={{ backgroundColor: '#04D361' }}>
          <Image source={slide2Img} resizeMode="contain" />
          <SlideIcon source={slideGiveClassesIcon} />
        </Header>
        <Content>
          <SlideNumber>02.</SlideNumber>
          <SlideDescription>
            Ou dê aulas sobre o que você mais conhece
          </SlideDescription>
          <ButtonNextSlide onPress={handleNavigateToLoginPage}>
            <Image source={nextIcon} />
          </ButtonNextSlide>
        </Content>
      </Slide>
    </Swiper>
  );
};

export default Onboarding;
