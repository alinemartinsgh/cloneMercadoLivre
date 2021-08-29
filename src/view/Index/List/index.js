import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';

import {
  Container,
  Item,
  ItemSubDetach,
  ItemSubdivision,
  ItemText,
  Picture,
  TextResults
} from './styles';


function Item({ item }) {
  return (
    <Item
      onPress={() => navigation.navigate("InfoProduct")}
    >
      <Picture source={{ uri: item.picture }} />
      <View>
        <ItemText>
          {item.name}
        </ItemText>
        <ItemText>
          R$ {item.price.toFixed(2)}
        </ItemText>
        <ItemSubdivision>
          Parcelado em 12 x <ItemSubDetach>
            R${(item.price / 12).toFixed(2)}
          </ItemSubDetach>
        </ItemSubdivision>
        <Text>
          {item.condition}
        </Text>
      </View>
    </Item>
  );
}

export default function List() {


  const listProduct = [
    {
      id: '2',
      name: 'TV',
      price: 1250.27,
      condition: 'Novo',
      picture: "https://www.casasbahia-imagens.com.br/Informatica/Notebook/55006647/1312426042/macbook-air-apple-core-i5-8gb-512gb-ssd-tela-retina-13-3-macos-mvh22bz-a-cinza-espacial-55006647.jpg"
    },
    {
      id: '1',
      name: 'TV2',
      price: 1250.27,
      condition: 'Novo',
      picture: "https://www.casasbahia-imagens.com.br/Informatica/Notebook/55006647/1312426042/macbook-air-apple-core-i5-8gb-512gb-ssd-tela-retina-13-3-macos-mvh22bz-a-cinza-espacial-55006647.jpg"
    },
    {
      id: '3',
      name: 'TV 2',
      price: 1250.27,
      condition: 'Novo',
      picture: "https://www.casasbahia-imagens.com.br/Informatica/Notebook/55006647/1312426042/macbook-air-apple-core-i5-8gb-512gb-ssd-tela-retina-13-3-macos-mvh22bz-a-cinza-espacial-55006647.jpg"
    },
    {
      id: '4',
      name: 'TV 2',
      price: 1250.27,
      condition: 'Novo',
      picture: "https://www.casasbahia-imagens.com.br/Informatica/Notebook/55006647/1312426042/macbook-air-apple-core-i5-8gb-512gb-ssd-tela-retina-13-3-macos-mvh22bz-a-cinza-espacial-55006647.jpg"
    }
  ]



  return (
    <>
      <TextResults>
        Produtos encontrados: {listProduct.length}
      </TextResults>
      <Container>
        <FlatList
          data={listProduct}
          renderItem={({ item }) => (
            <Item
              item={item}
            />
          )}
          keyExtractor={item => item.id}
        />
      </Container>
    </>
  );
}