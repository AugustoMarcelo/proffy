import React, { useRef, useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ScrollView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import {
  Swiper as SwiperStyled,
  PersonalDataSlide,
  CredentialsSlide,
  BackButton,
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
  const swipeRef = useRef<Swiper>(null);
  const scrollPersonalDataRef = useRef<ScrollView>(null);
  const [hasError] = useState(false);
  const { goBack, navigate } = useNavigation();

  function handleGoToNextSlide() {
    swipeRef.current?.scrollBy(1);
  }

  function handleGoToPreviousSlide() {
    swipeRef.current?.scrollBy(-1);
  }

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        scrollPersonalDataRef.current?.scrollToEnd({ animated: true });
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        scrollPersonalDataRef.current?.scrollTo({ y: 0 });
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  function handleSaveDataAndGoToNextPage() {
    console.log('save locally and go to the next step');
  }

  function handleSaveUserData() {
    console.log('get locally saved data and submit');
    navigate('CreatedAccountSuccess');
  }

  return (
    <SwiperStyled ref={swipeRef} loop={false} scrollEnabled={false}>
      <PersonalDataSlide>
        <StatusBar style="dark" />
        <BackButton onPress={() => goBack()}>
          <Ionicons name="ios-arrow-round-back" size={24} color="#9C98A6" />
        </BackButton>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            ref={scrollPersonalDataRef}
            contentContainerStyle={{
              paddingTop: 180,
            }}
          >
            <Title>Crie sua conta gratuita</Title>
            <Description>
              Basta preencher esses dados e você estará conosco
            </Description>
            <Question>01. Quem é você?</Question>
            <Form onSubmit={handleSaveDataAndGoToNextPage}>
              <Input
                name="name"
                label="Nome"
                autoCompleteType="off"
                containerStyle={{
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              />
              <Input
                name="lastname"
                label="Sobrenome"
                autoCompleteType="off"
                containerStyle={{
                  borderTopWidth: 0,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
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
          </ScrollView>
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
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1, paddingTop: 180 }}
          >
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
                containerStyle={{
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
              />
              <InputPassword
                name="password"
                label="Senha"
                autoCompleteType="off"
                containerStyle={{
                  borderTopWidth: 0,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
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
          </ScrollView>
        </KeyboardAvoidingView>
      </CredentialsSlide>
    </SwiperStyled>
  );
};

export default CreateAccount;
