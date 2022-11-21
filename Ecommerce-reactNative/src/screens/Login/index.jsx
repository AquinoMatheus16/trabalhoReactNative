import { Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import logo from '../../images/drogatec_Logo.png'


const Login = () => {

    return (
        <View style={styles.containerPrincipal}>
            <View style={styles.containerLogin}>

                <View style={styles.logoContainer}>
                    <ImageBackground source={logo}/>
                </View>

                <Text>LOGIN</Text>
                <TextInput style={styles.input} placeholder='INSIRA SEU LOGIN' />
                <Text>SENHA</Text>
                <TextInput style={styles.input} placeholder='INSIRA SUA SENHA' />

                <TouchableOpacity>
                    <View style={styles.botaoEntrar}>
                        <Text>ENTRAR</Text>
                    </View>
                </TouchableOpacity>

            </View>

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
        width: '85%',
        height: '65%',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: 7,
        shadowColor: 'black',
        shadowOffset: {width: -4, height: 7},
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },

    input: {
        height: 35,
        width: 235,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },

    botaoEntrar: {
        backgroundColor: '#ef4036',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        width: 100,
        height: 30,
        borderRadius: 10,
        marginTop: 30,

    },

    entrar: {
      color: 'white',
      fontWeight: 'bold'
    },

    logoContainer: {
        width: 210,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBotto: 20
    }


});

export default Login;