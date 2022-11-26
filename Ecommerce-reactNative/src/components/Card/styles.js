import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor: '#F1f',
        alignItems: 'center'
    },
    main: {
        width: '95%',
        height: 200,
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#FFF',
        marginBottom: 20,
        paddingTop: 10,
        paddingBottom: 10
    },

    containerCard: {
        width: 330,
        height: 150,
        // backgroundColor: '#436',
        flexDirection: 'row',
        padding: 8,
        justifyContent:'center'
    },

    textoNome: {
        fontSize: 20,
        marginBottom: 5
    },
    textoDescricao: {
        fontSize: 13,
        textAlignVertical: 'center',
        maxWidth: "80%",
        marginBottom: 10,
        padding: 5
    },
    texto: {
        fontSize: 13,
        maxWidth: "90%",
        paddingLeft: 5,
        marginBottom: 5
    },
    textoValor: {
        fontSize: 15,
        marginBottom: 5,
        paddingLeft: 5,
    },
    img: {
        height: 130,
        width: 130,
        borderRadius: 10,
        marginRight: 11
    }

})