import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';
import InputPassword from '../../components/InputPassword';

import backgroundImg from '../../assets/images/background.png';
import logoDescriptionImg from '../../assets/images/logoDescription.png';

import {
  Container,
  Header,
  LogoDescription,
  Form,
  ContentTop,
  ContentMiddle,
  ContentBottom,
  LoginTitle,
  CreateAccountText,
  ForgotPasswordText,
  SubmitButton,
  SubmitButtonText,
} from './styles';

const Login: React.FC = () => {
  const [remember, setRemember] = useState(false);
  const [hasError] = useState(true);

  function handleSubmit() {
    console.log(remember);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <Header>
            <Image source={backgroundImg} resizeMode="contain" />
            <LogoDescription source={logoDescriptionImg} />
          </Header>

          <Form onSubmit={handleSubmit}>
            <ContentTop>
              <LoginTitle>Fazer login</LoginTitle>
              <TouchableOpacity>
                <CreateAccountText>Criar uma conta</CreateAccountText>
              </TouchableOpacity>
            </ContentTop>
            <ContentMiddle>
              <Input
                name="email"
                label="E-mail"
                autoCapitalize="none"
                keyboardType="email-address"
                autoCompleteType="off"
              />
              <InputPassword
                name="password"
                label="Senha"
                returnKeyType="send"
                containerStyle={{
                  borderTopWidth: 0,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                }}
              />
            </ContentMiddle>
            <ContentBottom>
              <Checkbox
                label="Lembrar-me"
                value={remember}
                onValueChange={setRemember}
              />
              <TouchableOpacity>
                <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
              </TouchableOpacity>
            </ContentBottom>
            <SubmitButton
              onPress={handleSubmit}
              isDisabled={hasError}
              enabled={!hasError}
            >
              <SubmitButtonText isDisabled={hasError}>Entrar</SubmitButtonText>
            </SubmitButton>
          </Form>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
