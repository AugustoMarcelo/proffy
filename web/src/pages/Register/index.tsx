import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';

import { LoginBackground, LogoDescription } from '../../assets/images';
import { ReactComponent as BackIcon } from '../../assets/images/icons/back.svg';

import {
  Container,
  LeftContent,
  RightContent,
  SubmitButton,
} from './styles';

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(async () => {
    console.log(formRef.current?.getData());

    history.push('/register-success');
  }, [history]);

  return (
    <Container>
      <LeftContent>
        <Link to="/login">
          <BackIcon />
        </Link>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Cadastro</h1>
          <p>Preencha os dados abaixo para começar.</p>
          <Input
            label="Nome"
            name="name"
            labelStyle="inside"
            inputStyle={{
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderBottom: 0,
            }}
          />
          <Input
            label="Sobrenome"
            name="lastname"
            labelStyle="inside"
            containerStyle={{
              marginTop: 0,
            }}
            inputStyle={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderBottom: 0,
            }}
          />
          <Input
            label="E-mail"
            name="email"
            type="email"
            labelStyle="inside"
            containerStyle={{
              marginTop: 0,
            }}
            inputStyle={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
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

          <SubmitButton isDisabled={false}>Concluir cadastro</SubmitButton>
        </Form>
      </LeftContent>
      <RightContent>
        <LoginBackground className="background" />
        <LogoDescription className="logo-description" />
      </RightContent>
    </Container>
  );
};

export default Register;
