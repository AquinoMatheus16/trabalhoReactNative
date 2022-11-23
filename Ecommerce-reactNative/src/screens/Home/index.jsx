import { FontAwesome } from '@expo/vector-icons';
import { View, TextInput, FlatList } from 'react-native';
// import { CardProduto } from '../../components/CardProduto';
import { useEffect, useState } from 'react';
import { styles } from './styles';
import { Card } from '../../components/Card';
import { getProduto } from '../../services/produtoCrud';

export const Home = () => {
  const [produtos, setProdutos] = useState([]);

  const fetchData = async () => {
    const produtokList = await getProduto();
    setProdutos(produtokList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <View style={styles.input}>
          <TextInput placeholder='Pesquisar Produto' />
          <FontAwesome name="search" size={22} color="black" />
        </View>
      </View>

      <View style={styles.containerFlat}>
        <FlatList
          data={produtos}
          keyExtractor={item => item.idProduto}
          renderItem={({ item }) => <Card item={item} />}
        />
        
      </View>
      {/* <View style={styles.}/> */}
    </View>
  );
}
