import React from 'react';

import { Container, ContainerInput, Input, Image } from './styles';
import Button from '../../components/Button'

import logo from '../../../assets/logo.png'


export default function RedefinePass() {
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
      </ContainerInput>
      <Button
        bgcolor="outline"
        text="entrar"
        onPress={() => { }}
      />
    </Container>
  );
}
