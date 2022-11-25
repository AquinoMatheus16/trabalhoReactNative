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
        marginBottom: 20
    },

    containerCard: {
        width: 330,
        height: 150,
        // backgroundColor: '#436',
        flexDirection: 'row',
        padding: 8
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
        paddingLeft: 5
    },
    textoValor: {
        fontSize: 17,
        marginBottom: 5,
        marginTop: 5,
        paddingLeft: 5
    },
    img: {
        height: 140,
        width: 140,
        borderRadius: 10
    }

})