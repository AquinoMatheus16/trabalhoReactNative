import { styles } from './styles.js';
import { View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export const Header = () => {

    return (
        <View style={styles.header}>
            <Image
                source={require('../../../assets/drogatec_Logo.png')}
                style={styles.logo}
            />
            {/* <Entypo name="menu" size={30} color="black" style={styles.menuIcone} /> */}
        </View>
    );
};