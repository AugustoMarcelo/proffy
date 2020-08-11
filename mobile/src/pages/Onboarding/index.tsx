import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Swipe from 'react-native-swiper';

import slide1Img from '../../assets/images/slide1.png';
import slide2Img from '../../assets/images/slide2.png';
import nextIcon from '../../assets/images/icons/next.png';
import slideStudyIcon from '../../assets/images/icons/slideIconStudy.png';
import slideGiveClassesIcon from '../../assets/images/icons/slideIconGiveClasses.png';

import styles from './styles';

const Onboarding: React.FC = () => {
  const swipeRef = useRef<Swipe>(null);
  const { navigate } = useNavigation();

  function goToNextSlide() {
    swipeRef.current?.scrollBy(1);
  }

  function handleNavigateToLoginPage() {
    navigate('Login');
  }

  return (
    <Swipe
      ref={swipeRef}
      loop={false}
      dotStyle={{
        borderRadius: 1,
        width: 4,
        height: 4,
      }}
      activeDotStyle={{
        borderRadius: 1,
        width: 4,
        height: 4,
      }}
      activeDotColor="#8257E5"
      paginationStyle={{
        justifyContent: 'flex-start',
        paddingLeft: 40,
        paddingBottom: 39,
      }}
    >
      <View style={styles.slide}>
        <View style={[styles.header, { backgroundColor: '#8257E5' }]}>
          <Image source={slide1Img} resizeMode="contain" />
          <Image source={slideStudyIcon} style={styles.slideIcon} />
        </View>

        <View style={styles.content}>
          <Text style={styles.slideNumber}>01.</Text>
          <Text style={styles.slideDescription}>
            Encontre vários professores para ensinar você
          </Text>
          <TouchableOpacity
            onPress={goToNextSlide}
            style={styles.buttonNextSlide}
          >
            <Image source={nextIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.slide}>
        <View style={[styles.header, { backgroundColor: '#04D361' }]}>
          <Image source={slide2Img} resizeMode="contain" />
          <Image source={slideGiveClassesIcon} style={styles.slideIcon} />
        </View>

        <View style={styles.content}>
          <Text style={styles.slideNumber}>02.</Text>
          <Text style={styles.slideDescription}>
            Ou dê aulas sobre o que você mais conhece
          </Text>
          <TouchableOpacity
            onPress={handleNavigateToLoginPage}
            style={styles.buttonNextSlide}
          >
            <Image source={nextIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </Swipe>
  );
};

export default Onboarding;
