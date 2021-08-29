import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { BtnRedefineText, Container, ContainerInput, Image, Input } from './styles';
import Button from '../../components/Button'

import logo from '../../../assets/logo.png'


export default function Login({ navigation }) {
  return (
    <Container>
      <Image source={logo} />
      <ContainerInput>
        <Input
          name="user"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Email"
        />
        <Input
          name="user"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Email"
          style={styles.input}
        />
      </ContainerInput>
      <Button
        bgcolor="outline"
        onPress={() => navigation.navigate('Index')}
        text="entrar"
      />
      <BtnRedefine
        onPress={() => navigation.navigate('RedefinePass')}
      >
        <BtnRedefineText>Esqueceu sua senha?</BtnRedefineText>
      </BtnRedefine>
    </Container>
  );
}
