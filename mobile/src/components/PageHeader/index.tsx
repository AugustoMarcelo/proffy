import React, { ReactNode } from 'react';
import { Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import { Container, TopBar, Header, PageTitle, Subtitle } from './styles';

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  headerRight,
  children,
}) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('Landing');
  }

  return (
    <Container>
      <TopBar>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <PageTitle>Estudar</PageTitle>

        <Image source={logoImg} resizeMode="contain" />
      </TopBar>

      <Header>
        <Subtitle>{title}</Subtitle>
        {headerRight}
      </Header>

      {children}
    </Container>
  );
};

export default PageHeader;
