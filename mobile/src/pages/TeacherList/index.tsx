import React, { useState } from 'react';
import { View, YellowBox } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import {
  Container,
  TeacherListScroll,
  SearchForm,
  Label,
  InputGroup,
  InputBlock,
  DropDown,
  SubmitButton,
  SubmitButtonText,
} from './styles';

YellowBox.ignoreWarnings(['DropDownPicker']);

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [subjects] = useState([
    { label: 'Matemática', value: 'Matemática' },
    { label: 'Português', value: 'Português' },
    { label: 'Ciências', value: 'Ciências' },
    { label: 'Geografia', value: 'Geografia' },
    { label: 'História', value: 'História' },
    { label: 'Física', value: 'Física' },
    { label: 'Biologia', value: 'Biologia' },
  ]);

  const [week_days] = useState([
    { label: 'Domingo', value: '0' },
    { label: 'Segunda', value: '1' },
    { label: 'Terça', value: '2' },
    { label: 'Quarta', value: '3' },
    { label: 'Quinta', value: '4' },
    { label: 'Sexta', value: '5' },
    { label: 'Sábado', value: '6' },
  ]);

  const [times] = useState(
    Array.from({ length: 24 }).map((_, i) => {
      return {
        label: i === 1 ? `${i} hora` : `${i} horas`,
        value: `${i}:`.padEnd(i > 9 ? 5 : 4, '0'),
      };
    }),
  );

  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: Teacher) => teacher.id,
        );

        setFavorites(favoritedTeachersIds);
      }
    });
  }

  function toggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorites();
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setIsFiltersVisible(false);
    setTeachers(response.data);
  }

  return (
    <Container>
      <PageHeader
        title="Proffys disponíveis"
        pageTitle="Estudar"
        headerRight={
          <BorderlessButton onPress={toggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <SearchForm>
            <Label>Matéria</Label>
            <View style={{ position: 'relative' }}>
              <DropDown
                zIndex={5000}
                placeholder="Selecione"
                items={subjects}
                defaultValue={subject}
                dropDownMaxHeight={200}
                onChangeItem={(item: { value: string }) =>
                  setSubject(item.value)
                }
              />
            </View>

            <InputGroup style={{ position: 'relative' }}>
              <InputBlock>
                <Label>Dia da semana</Label>
                <DropDown
                  zIndex={4000}
                  placeholder="Selecione"
                  items={week_days}
                  defaultValue={week_day}
                  dropDownMaxHeight={100}
                  onChangeItem={(item: { value: string }) =>
                    setWeekDay(item.value)
                  }
                />
              </InputBlock>
              <InputBlock>
                <Label>Horário</Label>
                <DropDown
                  zIndex={3000}
                  placeholder="Selecione"
                  items={times}
                  defaultValue={time}
                  dropDownMaxHeight={100}
                  onChangeItem={(item: { value: string }) =>
                    setTime(item.value)
                  }
                />
              </InputBlock>
            </InputGroup>

            <SubmitButton onPress={handleFiltersSubmit}>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>

      <TeacherListScroll>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        ))}
      </TeacherListScroll>
    </Container>
  );
};

export default TeacherList;
