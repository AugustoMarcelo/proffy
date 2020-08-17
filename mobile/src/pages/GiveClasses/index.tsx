import React, { useCallback, useState, useRef } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';

import PageHeader from '../../components/PageHeader';
import Dropdown from '../../components/Dropdown';

import Input from '../Profile/Input';
import {
  Container,
  Title,
  Subtitle,
  ProfileResume,
  Avatar,
  UserNameContainer,
  UserName,
  UserSubject,
  ProfileData,
  Form,
  Fieldset,
  LegendGroup,
  Legend,
  InputBlock,
  AddNewScheduleButton,
  AddNewScheduleButtonText,
  ScheduleItem,
  Options,
  Border,
  RemoveScheduleButton,
  RemoveScheduleButtonText,
  Footer,
  SaveButton,
  SaveButtonText,
  InfoContainer,
  InfoText,
  InfoTextHighlight,
} from './styles';

const GiveClasses: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { navigate } = useNavigation();
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

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: '', from: '', to: '' },
  ]);

  const addNewScheduleItem = useCallback(() => {
    setScheduleItems([...scheduleItems, { week_day: '', from: '', to: '' }]);
  }, [scheduleItems]);

  const setScheduleItemValue = useCallback(
    (position: number, field: string, value: string) => {
      const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
        if (index === position) {
          return { ...scheduleItem, [field]: value };
        }

        return scheduleItem;
      });

      setScheduleItems(updatedScheduleItems);
    },
    [scheduleItems],
  );

  const removeScheduleItem = useCallback(
    (position: number) => {
      const updatedScheduleItems = scheduleItems.filter(
        (item, index) => position !== index,
      );

      setScheduleItems(updatedScheduleItems);
    },
    [scheduleItems],
  );

  const handleSubmit = useCallback(() => {
    navigate('GiveClassesRegisterSuccess');
  }, [navigate]);

  return (
    <Container>
      <PageHeader pageTitle="Dar aulas">
        <Title>Que incrível que você quer dar aulas.</Title>
        <Subtitle>
          O primeiro passo é preencher este formulário de inscrição
        </Subtitle>
      </PageHeader>
      <ProfileData showsVerticalScrollIndicator={false}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Fieldset>
            <Legend>Seus dados</Legend>
            <ProfileResume>
              <Avatar
                source={{ uri: 'https://github.com/augustomarcelo.png' }}
              />
              <UserNameContainer>
                <UserName>Marcelo Augusto</UserName>
                <UserSubject>Português</UserSubject>
              </UserNameContainer>
            </ProfileResume>
            <Input name="whatsapp" label="Whatsapp" keyboardType="phone-pad" />
            <Input
              name="bio"
              label="Bio"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              autoCompleteType="off"
            />
          </Fieldset>
          <Fieldset>
            <Legend>Sobre a aula</Legend>
            <Input name="subject" label="Matéria" />
            <Input name="cost" label="Custo da sua hora por aula" />
          </Fieldset>
          <Fieldset>
            <LegendGroup>
              <Legend
                style={{
                  borderBottomWidth: 0,
                  paddingBottom: 0,
                  marginBottom: 0,
                }}
              >
                Horários disponíveis
              </Legend>
              <AddNewScheduleButton onPress={addNewScheduleItem}>
                <AddNewScheduleButtonText>+ Novo</AddNewScheduleButtonText>
              </AddNewScheduleButton>
            </LegendGroup>
            {scheduleItems.map((scheduleItem, index) => (
              <ScheduleItem
                key={`${scheduleItem.week_day}_${scheduleItem.to}_${scheduleItem.from}`}
              >
                <Dropdown
                  placeholder="Selecione..."
                  label="Dia da semana"
                  items={week_days}
                  defaultValue={scheduleItem.week_day}
                  arrowStyle={{ marginRight: 12 }}
                  onChangeItem={(item: { value: string }) =>
                    setScheduleItemValue(index, 'week_day', item.value)
                  }
                />
                <InputBlock>
                  <Dropdown
                    zIndex={4000}
                    label="Das"
                    placeholder="Selecione"
                    defaultValue={scheduleItem.from}
                    items={times}
                    onChangeItem={(item: { value: string }) =>
                      setScheduleItemValue(index, 'from', item.value)
                    }
                    dropDownMaxHeight={100}
                    showArrow={false}
                  />
                  <Dropdown
                    zIndex={3000}
                    label="Até"
                    placeholder="Selecione"
                    defaultValue={scheduleItem.to}
                    items={times}
                    onChangeItem={(item: { value: string }) =>
                      setScheduleItemValue(index, 'to', item.value)
                    }
                    dropDownMaxHeight={100}
                    showArrow={false}
                  />
                </InputBlock>
                <Options>
                  <Border />
                  <RemoveScheduleButton
                    onPress={() => removeScheduleItem(index)}
                  >
                    <RemoveScheduleButtonText>
                      Excluir horário
                    </RemoveScheduleButtonText>
                  </RemoveScheduleButton>
                  <Border />
                </Options>
              </ScheduleItem>
            ))}
          </Fieldset>
        </Form>
        <Footer>
          <SaveButton onPress={() => formRef.current?.submitForm()}>
            <SaveButtonText>Salvar cadastro</SaveButtonText>
          </SaveButton>
          <InfoContainer>
            <Feather name="alert-octagon" color="#8257E5" size={32} />
            <InfoText>
              <InfoTextHighlight>Importante!</InfoTextHighlight>
              {'\n'}
              Preencha todos os dados
            </InfoText>
          </InfoContainer>
        </Footer>
      </ProfileData>
    </Container>
  );
};

export default GiveClasses;
