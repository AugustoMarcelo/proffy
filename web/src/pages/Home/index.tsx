import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import {
  Container,
  Content,
  Header,
  UserInfo,
  LogoutButton,
  Backgrounds,
  LogoContainer,
  Footer,
  ButtonsContainer,
} from './styles';

const Home = () => {
  const history = useHistory();

  const handleLogout = useCallback(() => {
    history.push('/login');  
  }, [history]);

  return (
    <Container>
      <Content>
        <Header>
          <UserInfo>
            <img src="https://api.adorable.io/avatars/40/abott@adorable.png" alt="Avatar" />
            <span>Marcelo Augusto</span>
          </UserInfo>
          <LogoutButton onClick={handleLogout}>
            <FiPower size={18} color="#D4C2FF" />
          </LogoutButton>
        </Header>
        <Backgrounds>
          <LogoContainer>
            <img src={logoImg} alt="Proffy Logo" />
            <p>Sua plataforma de estudos online.</p>
          </LogoContainer>

          <img src={landingImg} alt="Plataforma de estudos" />
        </Backgrounds>
      </Content>
      <Footer>
        <div>
          <p>
            Seja bem-vindo.
            <br />
            <strong>O que deseja fazer?</strong>
          </p>

          <ButtonsContainer>
            <span>
              Total de 238 conexões já realizadas.
              <img src={purpleHeartIcon} alt="Coração Roxo" />
            </span>
            <Link to="/study">
              <img src={studyIcon} alt="Estudar" />
              Estudar
            </Link>
            <Link to="/give-classes">
              <img src={giveClassesIcon} alt="Dar aulas" />
              Dar aulas
            </Link>
          </ButtonsContainer>
        </div>
      </Footer>
    </Container>
  );
};

export default Home;
