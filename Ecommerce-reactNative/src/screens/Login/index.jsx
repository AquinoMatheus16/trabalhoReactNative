import { useContext, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';
import logo from '../../images/drogatec_Logo.png';
import { styles } from './styles';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { loginContext } = useContext(AuthContext);

  const handleLogin = async () => {
    if (username != '' && password != '') {
      loginContext();
    }

  };

  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.containerLogin}>

        <View style={styles.logoContainer}>
          <ImageBackground source={logo} />
        </View>

        <Text>LOGIN</Text>
        <TextInput
          style={styles.input}
          placeholder='INSIRA SEU LOGIN'
          // onChangeText={(e) => setUsername(e.target.value)}
          onChangeText={setUsername}
          value={username}
        />

        <Text>SENHA</Text>
        <TextInput
          style={styles.input}
          placeholder='INSIRA SUA SENHA'
          // onChangeText={(e) => setPassword(e.target.value)}
          onChangeText={setPassword}
          value={password}
        />

        <TouchableOpacity onPress={() => handleLogin()}>
          <View style={styles.botaoEntrar}>
            <Text>ENTRAR</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
