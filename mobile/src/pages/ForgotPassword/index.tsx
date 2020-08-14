import React, { useState, useRef, useCallback } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import backgroundImg from '../../assets/images/background.png';
import logoDescriptionImg from '../../assets/images/logoDescription.png';

import {
  Container,
  Header,
  LogoDescription,
  Form,
  Title,
  SubmitButton,
  SubmitButtonText,
  Subtitle,
  BackButton,
} from './styles';

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [hasError] = useState(false);
  const { navigate, goBack } = useNavigation();

  const handleSubmit = useCallback(() => {
    navigate('ForgotPasswordSuccess');
  }, [navigate]);

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

          <BackButton onPress={() => goBack()}>
            <Ionicons name="ios-arrow-round-back" size={24} color="#9C98A6" />
          </BackButton>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Title>Esqueceu sua senha?</Title>
            <Subtitle>Não esquenta, vamos dar jeito nisso.</Subtitle>
            <Input
              name="email"
              label="E-mail"
              autoCapitalize="none"
              keyboardType="email-address"
              autoCompleteType="off"
            />
            <SubmitButton
              onPress={() => formRef.current?.submitForm()}
              isDisabled={hasError}
              enabled={!hasError}
            >
              <SubmitButtonText isDisabled={hasError}>Enviar</SubmitButtonText>
            </SubmitButton>
          </Form>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;
