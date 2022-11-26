import { View, Text, Image, LogBox, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";

export const Card = ({ item }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("UpdateDeleteStack", { item: item })}
            >
                <View style={styles.main}>
                    <Text style={styles.textoNome}>{item.nome}</Text>
                    <View style={styles.containerCard}>
                        <Image source={{ uri: item.urlImagem + '?' + new Date() }} style={styles.img} />

                        {/* <Image key={(new Date()).getTime()} source={{ uri: global.SERVER_ROOT + item['LOGO_IMG'] + '?time' + (new Date()).getTime(), headers: { Pragma: 'no-cache' } }} style={{ width: width / 5, height: 100 }} /> */}

                        <View>
                            {/* <Text style={styles.textoDescricao}>Descrição: {item.descricao}</Text> */}
                            <Text style={styles.texto}>Categoria: {item.categoria.nome}</Text>
                            <Text style={styles.texto}>Quant. em estoque: {item.qtdEstoque}</Text>
                            <Text style={styles.texto}>Data cadastro: {item.dataCadastro}</Text>

                            {/* <Text style={styles.textoValor}>Valor unitário: R${item.valorUnitario}</Text> */}
                            <Text style={styles.textoValor}>Valor unitário: R${(Math.floor(item.valorUnitario * 100).toFixed(0) / 100).toFixed(2)}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};