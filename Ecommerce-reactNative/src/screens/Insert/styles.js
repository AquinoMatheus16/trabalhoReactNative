import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'dodgerblue'
    },

    main: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 20,
        margin: 10,
        backgroundColor: '#FFFF'
    },
    container2: {
        width: '80%',
        height: 40,
        flexDirection: 'row',
        // backgroundColor: '#0433',
        alignItems: 'center'
    },
    containerCategoria: {
        width: '80%',
        // backgroundColor:'#8555'
    },

    containerValorUnitario: {
        flexDirection: 'row',
        width: '85%',
        // backgroundColor: '#9229',
        justifyContent: 'center'
    },
    containerRs: {
        height: 30,
        width: 29,
        // marginLeft: 38,
        backgroundColor: '#1124',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textRs: {
        fontSize: 18
    },
    inputValorUnitario: {
        borderWidth: 1,
        height: 30,
        paddingLeft: 8,
        width: '85%'
    },

    inputNome: {
        borderWidth: 1,
        width: '80%',
        height: 30,
        paddingLeft: 8,
    },
    inputDescricao: {
        borderWidth: 1,
        width: '80%',
        paddingLeft: 8,
        // alignItems: 'flex-start'
    },
    titulo: {
        alignSelf: 'flex-start',
        marginLeft: '11%',
        // backgroundColor: '#8888',
        marginTop: 20
    },

    buttonArquivo: {
        width: '50%',
        height: 30,
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#696969',
    },
    textProduto: {
        width: '40%'
    },
    input: {
        width: '80%',
        height: 30,
        // backgroundColor: '#DDD',
        borderRadius: 5,
        fontSize: 20,
        padding: 5
    },
    buttonSalvar: {
        alignItems: "center",
        backgroundColor: '#32CD32',
        padding: 10,
        borderRadius: 20,
        width: '65%',
        margin: 20
    },
    textButton: {
        fontSize: 15,
    },

    buttonDeletar: {
        alignItems: "center",
        // backgroundColor: '#FF0000',
        backgroundColor: '#B22222',
        padding: 10,
        borderRadius: 20,
        width: '65%',
        margin: 20
    },
    buttonText: {
        fontSize: 15,
        color: '#FFFF'
    },
});