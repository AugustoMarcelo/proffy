import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Background } from '../../assets/images/success-background.svg';
import { ReactComponent as IconCheck } from '../../assets/images/icons/success-check-icon.svg';

import { Container } from './styles';

export default function ResetSentSuccess() {
  return (
    <Container>
      <Background />

      <IconCheck />

      <h1>Redefinição enviada!</h1>
      <p>
        Boa, agora é só checar o e-mail que foi enviado para você redefinir sua
        senha e aproveitar os estudos.
      </p>

      <Link to="/login">Voltar ao login</Link>
    </Container>
  );
}
