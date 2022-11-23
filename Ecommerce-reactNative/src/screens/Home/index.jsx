import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View, StatusBar, TextInput, ScrollView, Image, FlatList } from 'react-native';
import Header from './src/components/Header';
import CardProduto from './src/components/CardProduto';
import { useState } from 'react';
import { styles } from './styles';

export default function App() {
  const [produtos, setProdutos] = useState([])

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Card item={item} />} />
      <Header />
      <StatusBar />
      <View style={styles.containerInput}>
        <View style={styles.input}>
          <TextInput placeholder='Pesquisar Produto'></TextInput>
          <FontAwesome name="search" size={22} color="black" />
        </View>
      </View>
      <CardProduto />
    </View>
  );
}
