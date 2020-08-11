import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles, { dropdownStyles } from './styles';

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [subjects] = useState([
    { label: 'Matemática', value: 'Matemática' },
    { label: 'Português', value: 'Português' },
    { label: 'Ciências', value: 'Ciências' },
    { label: 'Geografia', value: 'Geografia' },
    { label: 'História', value: 'História' },
    { label: 'Física', value: 'Física' },
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
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={toggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <View style={{ position: 'relative' }}>
              <DropDownPicker
                zIndex={5000}
                placeholder="Selecione"
                items={subjects}
                placeholderStyle={{ color: '#C1BCCC' }}
                defaultValue={subject}
                containerStyle={styles.dropdown}
                dropDownStyle={dropdownStyles.box}
                dropDownMaxHeight={200}
                arrowColor="#9C98A6"
                labelStyle={{
                  fontFamily: 'Poppins_400Regular',
                  color: '#6A6180',
                }}
                itemStyle={{
                  justifyContent: 'flex-start',
                  paddingHorizontal: 12,
                  paddingVertical: 13,
                }}
                activeLabelStyle={{
                  fontFamily: 'Poppins_600SemiBold',
                }}
                activeItemStyle={{
                  borderLeftWidth: 2,
                  borderStyle: 'solid',
                  borderColor: '#8257E5',
                  backgroundColor: '#EBEBF5',
                  paddingLeft: 10,
                }}
                onChangeItem={item => setSubject(item.value)}
              />
            </View>

            <View style={[styles.inputGroup, { position: 'relative' }]}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <DropDownPicker
                  zIndex={4000}
                  style={{ position: 'relative' }}
                  placeholder="Selecione"
                  items={week_days}
                  placeholderStyle={{ color: '#C1BCCC' }}
                  defaultValue={week_day}
                  containerStyle={styles.dropdown}
                  dropDownStyle={dropdownStyles.box}
                  dropDownMaxHeight={100}
                  arrowColor="#9C98A6"
                  labelStyle={{
                    fontFamily: 'Poppins_400Regular',
                    color: '#6A6180',
                  }}
                  itemStyle={{
                    justifyContent: 'flex-start',
                    paddingHorizontal: 12,
                    paddingVertical: 13,
                  }}
                  activeLabelStyle={{
                    fontFamily: 'Poppins_600SemiBold',
                  }}
                  activeItemStyle={{
                    borderLeftWidth: 2,
                    borderStyle: 'solid',
                    borderColor: '#8257E5',
                    backgroundColor: '#EBEBF5',
                    paddingLeft: 10,
                  }}
                  onChangeItem={item => setWeekDay(item.value)}
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <DropDownPicker
                  zIndex={3000}
                  style={{ position: 'relative' }}
                  placeholder="Selecione"
                  items={times}
                  placeholderStyle={{ color: '#C1BCCC' }}
                  defaultValue={time}
                  containerStyle={styles.dropdown}
                  dropDownStyle={dropdownStyles.box}
                  dropDownMaxHeight={100}
                  arrowColor="#9C98A6"
                  labelStyle={dropdownStyles.label}
                  itemStyle={dropdownStyles.item}
                  activeLabelStyle={{
                    fontFamily: 'Poppins_600SemiBold',
                  }}
                  activeItemStyle={dropdownStyles.activeItem}
                  onChangeItem={item => setTime(item.value)}
                />
              </View>
            </View>

            <RectButton
              onPress={handleFiltersSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default TeacherList;
