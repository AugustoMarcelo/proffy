import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';

import { LoginBackground, LogoDescription } from '../../assets/images';
import {
  Container,
  LeftContent,
  RightContent,
  SubmitButton,
  OptionsBlock,
  Footer,
  CreateAccountBlock,
  Description,
} from './styles';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async () => {
    console.log(formRef.current?.getData());
  }, []);

  return (
    <Container>
      <LeftContent>
        <LoginBackground className="background" />
        <LogoDescription className="logo-description" />
      </LeftContent>
      <RightContent>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Fazer login</h1>
          <Input
            label="E-mail"
            autoComplete="off"
            name="email"
            type="email"
            labelStyle="inside"
            inputStyle={{
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderBottom: 0,
            }}
          />
          <Input
            label="Senha"
            name="password"
            type="password"
            labelStyle="inside"
            containerStyle={{ marginTop: 0 }}
            inputStyle={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
          />

          <OptionsBlock>
            <Checkbox name="remember" label="Lembrar-me" />
            <Link to="/forgot-password">Esqueci minha senha</Link>
          </OptionsBlock>

          <SubmitButton isDisabled={false}>Entrar</SubmitButton>
        </Form>

        <Footer>
          <CreateAccountBlock>
            <span>Não tem conta?</span>
            <Link to="/register">Cadastre-se</Link>
          </CreateAccountBlock>
          <Description>
            <span>É de graça</span>
            <img src={purpleHeartIcon} alt="Coração Roxo" />
          </Description>
        </Footer>
      </RightContent>
    </Container>
  );
};

export default Login;
