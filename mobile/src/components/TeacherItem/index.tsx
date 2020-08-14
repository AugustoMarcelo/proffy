import React, { useState, useMemo } from 'react';
import { Image, Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import arrowIcon from '../../assets/images/icons/next.png';

import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  Subject,
  Bio,
  Schedule,
  ScheduleHeader,
  ScheduleHeaderText,
  ScheduleItem,
  ScheduleItemDay,
  Arrow,
  ScheduleItemInterval,
  Footer,
  Price,
  PriceLabel,
  PriceValue,
  ButtonsContainer,
  FavoriteButton,
  ContactButton,
  ContactButtonText,
} from './styles';

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  cost: number;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  const priceFormatted = useMemo(() => {
    return formatValue(teacher.cost);
  }, [teacher.cost]);

  function handleLinkToWhatsapp() {
    api.post('connections', {
      user_id: teacher.id,
    });

    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id;
      });

      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorited(false);
    } else {
      favoritesArray.push(teacher);

      setIsFavorited(true);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: teacher.avatar }} />

        <ProfileInfo>
          <Name>{teacher.name}</Name>
          <Subject>{teacher.subject}</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>{teacher.bio}</Bio>

      <Schedule>
        <ScheduleHeader>
          <ScheduleHeaderText>Dia</ScheduleHeaderText>
          <ScheduleHeaderText>Horário</ScheduleHeaderText>
        </ScheduleHeader>
        <ScheduleItem>
          <ScheduleItemDay>Segunda</ScheduleItemDay>
          <Arrow source={arrowIcon} />
          <ScheduleItemInterval>8h - 18h</ScheduleItemInterval>
        </ScheduleItem>
        <ScheduleItem unavailable>
          <ScheduleItemDay>Terça</ScheduleItemDay>
          <Arrow source={arrowIcon} />
          <ScheduleItemInterval>-</ScheduleItemInterval>
        </ScheduleItem>
        <ScheduleItem>
          <ScheduleItemDay>Quarta</ScheduleItemDay>
          <Arrow source={arrowIcon} />
          <ScheduleItemInterval>8h - 18h</ScheduleItemInterval>
        </ScheduleItem>
        <ScheduleItem unavailable>
          <ScheduleItemDay>Quinta</ScheduleItemDay>
          <Arrow source={arrowIcon} />
          <ScheduleItemInterval>-</ScheduleItemInterval>
        </ScheduleItem>
        <ScheduleItem>
          <ScheduleItemDay>Sexta</ScheduleItemDay>
          <Arrow source={arrowIcon} />
          <ScheduleItemInterval>8h - 18h</ScheduleItemInterval>
        </ScheduleItem>
      </Schedule>

      <Footer>
        <Price>
          <PriceLabel>Preço da minha hora:</PriceLabel>
          <PriceValue>{priceFormatted} reais</PriceValue>
        </Price>

        <ButtonsContainer>
          <FavoriteButton
            onPress={handleToggleFavorite}
            isFavorite={isFavorited}
          >
            {isFavorited ? (
              <Image source={unfavoriteIcon} />
            ) : (
              <Image source={heartOutlineIcon} />
            )}
          </FavoriteButton>

          <ContactButton onPress={handleLinkToWhatsapp}>
            <Image source={whatsappIcon} />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
