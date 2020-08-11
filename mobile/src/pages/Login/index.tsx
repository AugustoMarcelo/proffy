import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import { TouchableOpacity, RectButton } from 'react-native-gesture-handler';
import { Form } from '@unform/mobile';

import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';
import InputPassword from '../../components/InputPassword';

import backgroundImg from '../../assets/images/background.png';
import logoDescriptionImg from '../../assets/images/logoDescription.png';

import styles from './styles';

function Login() {
  const [remember, setRemember] = useState(false);
  const [hasError, setHasError] = useState(true);

  function handleSubmit() {
    console.log(remember);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View style={styles.header }>
            <Image source={backgroundImg} resizeMode="contain" />
            <Image source={logoDescriptionImg} style={styles.logoDescription} />
          </View>
          
          <Form onSubmit={() => {}} style={styles.content}>
            <View style={styles.contentTop}>
              <Text style={styles.textLoginTitle}>Fazer login</Text>
              <TouchableOpacity>
                <Text style={styles.textCreateAccount}>Criar uma conta</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contentMiddle}>
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
            </View>
            <View style={styles.contentBottom}>
              <Checkbox label="Lembrar-me" value={remember} onValueChange={setRemember} />
              <TouchableOpacity>
                <Text style={styles.textForgotPassword}>Esqueci minha senha</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={handleSubmit}
              style={[hasError ? styles.buttonDisabled : styles.submitButton]}
              disabled={hasError}
            >
              <Text
                style={[hasError ? styles.buttonTextDisabled : styles.submitButtonText]}
              >
                Entrar
              </Text>
            </TouchableOpacity>
          </Form>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
