import React, { useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import {
  Swiper,
  PersonalDataSlide,
  CredentialsSlide,
  BackButton,
  Content,
  Title,
  Description,
  Question,
  Form,
  NextButton,
  NextButtonText,
  ConfirmButton,
  ConfirmButtonText,
} from './styles';
import Input from '../../components/Input';
import InputPassword from '../../components/InputPassword';

const CreateAccount: React.FC = () => {
  const swipeRef = useRef<typeof Swiper>(null);
  const [hasError] = useState(false);
  const { goBack, navigate } = useNavigation();

  function handleGoToNextSlide() {
    swipeRef.current.scrollBy(1);
  }

  function handleGoToPreviousSlide() {
    swipeRef.current.scrollBy(-1);
  }

  function handleSaveDataAndGoToNextPage() {
    console.log('save locally and go to the next step');
  }

  function handleSaveUserData() {
    console.log('get locally saved data and submit');
    navigate('CreatedAccountSuccess');
  }

  return (
    <Swiper ref={swipeRef} loop={false} scrollEnabled={false}>
      <PersonalDataSlide>
        <StatusBar style="dark" />
        <BackButton onPress={() => goBack()}>
          <Ionicons name="ios-arrow-round-back" size={24} color="#9C98A6" />
        </BackButton>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
        >
          <Content showsVerticalScrollIndicator={false}>
            <Title>Crie sua conta gratuita</Title>
            <Description>
              Basta preencher esses dados e você estará conosco
            </Description>
            <Question>01. Quem é você?</Question>
            <Form onSubmit={handleSaveDataAndGoToNextPage}>
              <Input name="name" label="Nome" autoCompleteType="off" />
              <Input
                name="lastname"
                label="Sobrenome"
                autoCompleteType="off"
                containerStyle={{
                  borderTopWidth: 0,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                }}
              />
              <NextButton
                isDisabled={hasError}
                enabled={!hasError}
                onPress={handleGoToNextSlide}
              >
                <NextButtonText isDisabled={hasError}>Próximo</NextButtonText>
              </NextButton>
            </Form>
          </Content>
        </KeyboardAvoidingView>
      </PersonalDataSlide>

      <CredentialsSlide>
        <BackButton onPress={handleGoToPreviousSlide}>
          <Ionicons name="ios-arrow-round-back" size={24} color="#9C98A6" />
        </BackButton>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
        >
          <Content showsVerticalScrollIndicator={false}>
            <Title>Crie sua conta gratuita</Title>
            <Description>
              Basta preencher esses dados e você estará conosco
            </Description>
            <Question>02. E-mail e Senha</Question>
            <Form onSubmit={handleSaveDataAndGoToNextPage}>
              <Input
                name="email"
                label="E-mail"
                autoCompleteType="off"
                keyboardType="email-address"
              />
              <InputPassword
                name="password"
                label="Senha"
                autoCompleteType="off"
                containerStyle={{
                  borderTopWidth: 0,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                }}
              />
              <ConfirmButton
                isDisabled={hasError}
                enabled={!hasError}
                onPress={handleSaveUserData}
              >
                <ConfirmButtonText isDisabled={hasError}>
                  Concluir cadastro
                </ConfirmButtonText>
              </ConfirmButton>
            </Form>
          </Content>
        </KeyboardAvoidingView>
      </CredentialsSlide>
    </Swiper>
  );
};

export default CreateAccount;
