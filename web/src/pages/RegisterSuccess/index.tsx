import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Background } from '../../assets/images/success-background.svg';
import { ReactComponent as IconCheck } from '../../assets/images/icons/success-check-icon.svg';

import { Container } from './styles';

export default function RegisterFunction() {
  return (
    <Container>
      <Background />

      <IconCheck />

      <h1>Cadastro concluído</h1>
      <p>
        Agora você faz parte da plataforma da Proffy. Tenha uma ótima
        experiência
      </p>

      <Link to="/login">Fazer login</Link>
    </Container>
  );
}
