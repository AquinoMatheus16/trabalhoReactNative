import {Text, View, StyleSheet, Button, TextInput} from 'react-native';


const Login = () => {
  
  return (
    <View style={styles.containerPrincipal}>
      <Text>Login</Text>
      <TextInput placeholder='INSIRA SEU LOGIN' onChangeText={setUserName} value={userName}/>
      <TextInput placeholder='INSIRA SUA SENHA' onChangeText={setPassword} value={password}/>
      <Button title="ENTRAR" onPress={() => handleLogin()} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'dodgerblue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  containerLogin: {
    width: '85%'
  }
});

export default Login;