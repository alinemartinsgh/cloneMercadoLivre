import React from 'react';
import { View, Image } from 'react-native';

import { Container } from './styles';
import Button from '../../components/Button'

import logo from '../../../assets/logo.png'


export default function Home({ navigation }) {
  return (
    <Container>
      <Image source={logo} />
      <Button
        bgcolor="outline"
        onPress={() => navigation.navigate('Login')}
        text="entrar"
      />
      <Button
        onPress={() => navigation.navigate('Signup')}
        text="criar conta"
      />
    </Container>
  );
}
