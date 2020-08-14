import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import {
  Container,
  Header,
  Navigation,
  Profile,
  Avatar,
  Name,
  LogoutButton,
  Banner,
  Content,
  Title,
  TitleBold,
  ButtonsContainer,
  Button,
  ButtonText,
  TotalConnectionsText,
} from './styles';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigateToStudyPages() {
    navigate('Study');
  }

  return (
    <Container>
      <Header>
        <Navigation>
          <Profile>
            <Avatar source={{ uri: 'https://github.com/augustomarcelo.png' }} />
            <Name>Marcelo Augusto</Name>
          </Profile>
          <LogoutButton onPress={() => navigate('Login')}>
            <Feather name="power" color="#D4C2FF" size={20} />
          </LogoutButton>
        </Navigation>
        <Banner source={landingImg} />
      </Header>
      <Content>
        <Title>
          Seja bem-vindo, {'\n'}
          <TitleBold>O que deseja fazer?</TitleBold>
        </Title>

        <ButtonsContainer>
          <Button onPress={handleNavigateToStudyPages} isPrimary>
            <Image source={studyIcon} />

            <ButtonText>Estudar</ButtonText>
          </Button>

          <Button onPress={handleNavigateToGiveClassesPage}>
            <Image source={giveClassesIcon} />

            <ButtonText>Dar aulas</ButtonText>
          </Button>
        </ButtonsContainer>

        <TotalConnectionsText>
          Total de {totalConnections} conexões já realizadas{' '}
          <Image source={heartIcon} />
        </TotalConnectionsText>
      </Content>
    </Container>
  );
};

export default Landing;
