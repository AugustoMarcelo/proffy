import React, { useState, useRef } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';

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
  const formRef = useRef<FormHandles>(null);
  const [remember, setRemember] = useState(false);
  const [hasError] = useState(false);
  const { navigate } = useNavigation();

  function handleSubmit() {
    navigate('Landing');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Container>
          <Header>
            <Image source={backgroundImg} resizeMode="contain" />
            <LogoDescription source={logoDescriptionImg} />
          </Header>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <ContentTop>
              <LoginTitle>Fazer login</LoginTitle>
              <TouchableOpacity onPress={() => navigate('CreateAccount')}>
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
                containerStyle={{
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              />
              <InputPassword
                name="password"
                label="Senha"
                returnKeyType="send"
                containerStyle={{
                  borderTopWidth: 0,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                }}
              />
            </ContentMiddle>
            <ContentBottom>
              <Checkbox
                label="Lembrar-me"
                value={remember}
                onValueChange={setRemember}
              />
              <TouchableOpacity onPress={() => navigate('ForgotPassword')}>
                <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
              </TouchableOpacity>
            </ContentBottom>
            <SubmitButton
              onPress={() => formRef.current?.submitForm()}
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
