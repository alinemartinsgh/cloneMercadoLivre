import React from 'react';

import { Container, Image } from './styles';
import logo from "../../assets/logo.png"
import Button from '../../components/Button';

const Home = ({ navigation }) => {
  return (
    <Container>
      <Image source={logo} />
      <Button
        text="Entrar"
        press={() => navigation.navigate('Login')}
        bgColor='outlined'
      />
      <Button
        text="criar conta"
        press={() => navigation.navigate('Signup')}
      />
    </Container>
  );
}

export default Home;