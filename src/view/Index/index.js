import React from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { AntDesign } from "@expo/vector-icons";

import { DrawerBody, DrawerContent, DrawerHeader, MercadoPago, MercadoPagoText, User } from './styles';
import Navigation from './Navigation'
import Profile from '../../components/Profile'
import logoMP from '../../assets/mercado_pago.png'
const Drawer = createDrawerNavigator();


const HeaderDrawer = () => {
  return (
    <DrawerHeader>
      <User>
        <Profile />
        <View>
          <Text>Olá José</Text>
          <Text>Nivel 3 - Mercado Pontos</Text>
        </View>
      </User>
      <MercadoPago>
        <Image source={logoMP} />
        <MercadoPagoText>Mercado Pago</MercadoPagoText>
      </MercadoPago>
    </DrawerHeader>
  );
};

const DrawerContent = ({ navigation }) => {
  const listMenuDrawer = [
    {
      id: 1,
      name: "Home",
      action: "Main",
      icon: <AntDesign name="home" size={24} color="black" />,
    },
    {
      id: 2,
      name: "Procurar",
      action: "List",
      icon: <AntDesign name="search1" size={24} color="black" />,
    },
  ];

  return (
    <DrawerContent>
      <HeaderDrawer />
      <DrawerBody>
        <DrawerContentScrollView>
          {listMenuDrawer.map((menu) => (
            <DrawerItem
              label={menu.name}
              key={menu.id}
              icon={() => menu.icon}
              onPress={() => navigation.navigate(menu.action)}
            />
          ))}
        </DrawerContentScrollView>
      </DrawerBody>
    </DrawerContent>
  );
};

export default function Index() {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen
        name="Navigation"
        component={Navigation}
      />
    </Drawer.Navigator>
  );
}
