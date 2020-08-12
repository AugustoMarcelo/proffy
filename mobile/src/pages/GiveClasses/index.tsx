import React from 'react';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import {
  Container,
  Content,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from './styles';

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <Container>
      <Content resizeMode="contain" source={giveClassesBgImage}>
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Description>
      </Content>

      <OkButton onPress={handleNavigateBack}>
        <OkButtonText>Tudo bem</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default GiveClasses;
