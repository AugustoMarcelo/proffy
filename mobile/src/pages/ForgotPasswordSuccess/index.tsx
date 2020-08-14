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

const ForgotPasswordSuccess: React.FC = () => {
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
        <SuccessText>Redefinição enviada!</SuccessText>
        <InfoText>
          Boa, agora é só checar o e-mail que foi enviado para você redefinir
          sua senha e aproveitar os estudos.
        </InfoText>
      </Content>
      <GoToLoginButton onPress={handleGoToLogin}>
        <GoToLoginButtonText>Voltar ao login</GoToLoginButtonText>
      </GoToLoginButton>
    </Container>
  );
};

export default ForgotPasswordSuccess;
