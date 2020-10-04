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

const ForgotPassword = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(async () => {
    console.log(formRef.current?.getData());

    history.push('/reset-sent');
  }, [history]);

  return (
    <Container>
      <LeftContent>
        <Link to="/login">
          <BackIcon />
        </Link>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Eita, esqueceu sua senha?</h1>
          <p>Não esquenta, vamos dar um jeito nisso.</p>
          <Input
            label="E-mail"
            name="email"
            type="email"
            labelStyle="inside"
          />
          <SubmitButton isDisabled={false}>Enviar</SubmitButton>
        </Form>
      </LeftContent>
      <RightContent>
        <LoginBackground className="background" />
        <LogoDescription className="logo-description" />
      </RightContent>
    </Container>
  );
};

export default ForgotPassword;
