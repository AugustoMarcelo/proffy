import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import backgroundSuccessImg from '../../assets/images/background-success.png';

import {
  Container,
  Content,
  Background,
  BoxIcon,
  SuccessText,
  InfoText,
  GoToLoginButton,
  GoToLoginButtonText,
} from './styles';

const GiveClassesRegisterSuccess: React.FC = () => {
  const { navigate } = useNavigation();

  function handleGoToLogin() {
    navigate('Login');
  }

  return (
    <Container>
      <StatusBar style="light" />
      <Content>
        <Background source={backgroundSuccessImg} resizeMode="contain" />
        <BoxIcon>
          <FontAwesome5 name="check" color="#04D361" size={24} />
        </BoxIcon>
        <SuccessText>Cadastro Salvo!</SuccessText>
        <InfoText>
          Tudo certo, seu cadastro está na nossa lista de professores. Agora é
          só ficar de olho no seu WhatsApp.
        </InfoText>
      </Content>
      <GoToLoginButton onPress={handleGoToLogin}>
        <GoToLoginButtonText>Fazer login</GoToLoginButtonText>
      </GoToLoginButton>
    </Container>
  );
};

export default GiveClassesRegisterSuccess;
