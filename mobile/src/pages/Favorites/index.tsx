import React, { useState, useMemo } from 'react';
import { Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import favoriteEmoticon from '../../assets/images/icons/favoriteEmoticon.png';

import { Container, TeacherList, HeaderRight, ProffysQuantity } from './styles';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    });
  }

  const proffysCount = useMemo(() => {
    const count = favorites.length;

    return count !== 1 ? `${count} proffys` : `${count} proffy`;
  }, [favorites.length]);

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <Container>
      <PageHeader
        title="Meus Proffys favoritos"
        pageTitle="Estudar"
        headerRight={
          <HeaderRight>
            <Image source={favoriteEmoticon} width={18} />
            <ProffysQuantity>{proffysCount}</ProffysQuantity>
          </HeaderRight>
        }
      />

      <TeacherList>
        {favorites.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited />
        ))}
      </TeacherList>
    </Container>
  );
};

export default Favorites;
