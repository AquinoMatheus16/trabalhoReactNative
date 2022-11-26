import { FontAwesome } from '@expo/vector-icons';
import { View, TextInput, FlatList } from 'react-native';
// import { CardProduto } from '../../components/CardProduto';
import { useEffect, useState } from 'react';
import { styles } from './styles';
import { Card } from '../../components/Card';
import { getProduto } from '../../services/produtoCrud';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {

  const [produtos, setProdutos] = useState([]);
  const [itemFiltrado, setItemFiltrado] = useState([]);
  const [busca, setBusca] = useState("");
  const [input, setInput] = useState();
  const navigation = useNavigation();

  const fetchData = async () => {
    const produtoList = await getProduto();
    setProdutos(produtoList);
    setItemFiltrado(produtoList);
  };

  useEffect(() => {
    setItemFiltrado(produtos)

  }, [produtos]);

  useEffect(() => {
    navigation.addListener('focus', () => fetchData())
    fetchData();
  }, []);

  useEffect(() => {
    const resultado = produtos.filter((produto) =>
      produto.nome.toLowerCase().includes(busca.toLowerCase())
    );
    setItemFiltrado(resultado)
  }, [busca]);

  // console.log(busca);

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <View style={styles.inputBusca}>
          <TextInput
            placeholder='Pesquisar Produto'
            value={busca}
            onChangeText={e => setBusca(e)}
            style={styles.input}
          />
          <FontAwesome name="search" size={22} color="black" />
        </View>
      </View>

      <View>
        <FlatList
          data={itemFiltrado}
          keyExtractor={item => item.idProduto}
          renderItem={({ item }) => <Card item={item} />}
        />
      </View>
      {/* <View style={styles.}/> */}
    </View>
  );
}
