import { styles } from './styles'
import { View, Image, Text, ScrollView } from 'react-native';

export default function CardProduto() {
    return (
            <Fletl>
            <View style={styles.cardProduto}>
                <Text style={styles.titulo}>Ratinho LightYear</Text>
                <View style={styles.produto}>
                    <Image source={require('../../assets/ratinholightyear.jpg')}
                        style={styles.fotoProduto} />
                    <View style={styles.textos}>
                        <Text>Ratinho Lightyear, um heroi improvavel, não é o que queremos, mas é o que precisamos</Text>
                        <Text style={styles.preco}>preço: R$: 35,90</Text>
                    </View>
                </View>
            </View><View style={styles.cardProduto}>
                <Text style={styles.titulo}>Fino Señores</Text>
                <View style={styles.produto}>
                    <Image source={require('../../assets/fino.jpg')}
                        style={styles.fotoProduto} />
                    <View style={styles.textos}>
                        <Text>Ok, I pull up </Text>
                        <Text style={styles.preco}>preço: R$: 59,90</Text>
                    </View>
                </View>
            </View>
            </Fletl>
       

    )
}