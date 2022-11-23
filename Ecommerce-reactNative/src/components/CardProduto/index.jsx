import { styles } from './styles';
import { View, Image, Text, ScrollView } from 'react-native';
import img1 from '../../../assets/foto01.jpg'

export const CardProduto = () => {
    return (
        // <Fletl>
        <>
            <View style={styles.cardProduto}>
                <Text style={styles.titulo}>Ratinho LightYear</Text>
                <View style={styles.produto}>
                    <Image source={img1}
                        style={styles.fotoProduto} />
                    {/* <Image source={require('../../../assets/icon.foto01.jpg')}
                        style={styles.fotoProduto} /> */}
                    <View style={styles.textos}>
                        <Text>Ratinho Lightyear, um heroi improvavel, não é o que queremos, mas é o que precisamos</Text>
                        <Text style={styles.preco}>preço: R$: 35,90</Text>
                    </View>
                </View>
            </View><View style={styles.cardProduto}>
                <Text style={styles.titulo}>Fino Señores</Text>
                <View style={styles.produto}>
                    <Image source={img1}
                        style={styles.fotoProduto} />
                    {/* <Image source={require('../../../assets/icon.jpg')}
                        style={styles.fotoProduto} /> */}
                    <View style={styles.textos}>
                        <Text>Ok, I pull up </Text>
                        <Text style={styles.preco}>preço: R$: 59,90</Text>
                    </View>
                </View>
            </View>
            {/* </Fletl> */}
        </>
    );
};