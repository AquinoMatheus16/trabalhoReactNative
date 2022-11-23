import { View, Text, ScrollView, Image, LogBox } from 'react-native';
import { styles } from './styles';

export const Card = ({ item }) => {

    return (
        // <ScrollView>
        <View style={styles.container}>
            <View style={styles.main}>
                {/* <Text style={styles.textoNome}>Nome do produto</Text> */}
                <Text style={styles.textoNome}>{item.nome}</Text>
                <View style={styles.containerCard}>
                    {/* <Image
                        resizeMode='contain'
                        source={item.urlImagem}
                        style={styles.img} /> */}
                    <Image source={{ uri: item.urlImagem }} style={styles.img} />
                    <View>
                        <Text style={styles.textoDescricao}>
                            {item.descricao}
                        </Text>
                        <Text style={styles.texto}>Categoria: {item.categoria.nome}</Text>
                        <Text style={styles.texto}>Quant. em estoque: {item.qtdEstoque}</Text>
                        <Text style={styles.texto}>Data cadastro: {item.dataCadastro}</Text>

                        <Text style={styles.textoValor}>Valor unitário: R${item.valorUnitario}</Text>
                    </View>
                </View>
            </View>
        </View>
        // </ScrollView>
    )
};