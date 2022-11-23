import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView, TouchableOpacity, Linking, ToastAndroid } from 'react-native';
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import { styles } from './styles.js';

export const Equipe = () => {

  const openUrl = async (url) => {
    if (await Linking.canOpenURL(url)) {
      await Linking.openURL(url)
    }
    else {
      ToastAndroid.show('Can\'t open this URL', ToastAndroid.SHORT)
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.tituloPagina}>Equipe:</Text>
        <View style={styles.integrantes}>
          <View style={styles.cardPessoa}>
            <Image
              source={require('../../../assets/foto01.jpg')}
              style={styles.foto}
            />
            <Text style={styles.nome}>Marcelle Machado</Text>
            <View style={styles.iconesRedes}>
              <TouchableOpacity onPress={() => openUrl('https://github.com/MarcelleMachado')} >
                <AntDesign name="github" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openUrl('https://www.linkedin.com/in/marcellermachado/')} >
                <Entypo name="linkedin-with-circle" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.cardPessoa}>
            <Image
              source={require('../../../assets/foto02.jpeg')}
              style={styles.foto}
            />
            <Text style={styles.nome}>Ricardo Andrade</Text>
            <View style={styles.iconesRedes}>
              <TouchableOpacity onPress={() => openUrl('https://github.com/ric-cfan/')} >
                <AntDesign name="github" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openUrl('https://www.linkedin.com/in/ricardo-andrade-1a242a240/')} >
                <Entypo name="linkedin-with-circle" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.cardPessoa}>
            <Image
              source={require('../../../assets/foto03.jpeg')}
              style={styles.foto}
            />
            <Text style={styles.nome}>Matheus Aquino</Text>
            <View style={styles.iconesRedes}>
              <TouchableOpacity onPress={() => openUrl('https://github.com/AquinoMatheus16')} >
                <AntDesign name="github" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openUrl('https://www.linkedin.com/in/matheus-aquino-1840a4258/')} >
                <Entypo name="linkedin-with-circle" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.cardPessoa}>
            <Image
              source={require('../../../assets/foto04.jpeg')}
              style={styles.foto}
            />
            <Text style={styles.nome}>Fábio Gurgel</Text>
            <View style={styles.iconesRedes}>
              <TouchableOpacity onPress={() => openUrl('https://github.com/Fabio-Gurgel')} >
                <AntDesign name="github" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openUrl('https://www.linkedin.com/in/f%C3%A1bio-gurgel-6b6b17240/')} >
                <Entypo name="linkedin-with-circle" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.cardPessoa}>
            <Image
              source={require('../../../assets/foto05.jpeg')}
              style={styles.foto}
            />
            <Text style={styles.nome}>Anthony Barbosa</Text>
            <View style={styles.iconesRedes}>
              <TouchableOpacity onPress={() => openUrl('https://github.com/anthonybarbosa15')} >
                <AntDesign name="github" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openUrl('https://www.linkedin.com/in/anthony-barbosa-467073258/')} >
                <Entypo name="linkedin-with-circle" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.cardPessoa}>
            <TouchableOpacity onPress={() => openUrl('https://github.com/AquinoMatheus16/trabalhoReactNative')} >
              <FontAwesome name="file-code-o" size={80} color="black" />
            </TouchableOpacity>
            <Text style={styles.nome}>Repositório App</Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
