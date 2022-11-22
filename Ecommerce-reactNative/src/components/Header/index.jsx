import { styles } from './styles.js';
import { View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function Header() {

    return (
        <View style={styles.header}>
            <Image
                source={require('../../../assets/drogatec_Logo.png')}
                style={styles.logo}
            />
            <Entypo name="menu" size={30} color="black" style={styles.menuIcone} />
            <StatusBar style="auto" />
        </View>
    )
}