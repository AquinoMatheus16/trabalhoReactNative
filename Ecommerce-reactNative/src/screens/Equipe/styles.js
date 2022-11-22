import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1E90FF',
    },
  
    header: {
      backgroundColor: 'white',
      height: '12%',
      flexDirection: 'row',
      paddingTop: '6%',
    },
  
    logo: {
      margin: '4%',
      height: 30,
      width: 160
    },
  
    menuIcone: {
      margin: 15,
      // alignSelf: 'flex-end',
      marginLeft: '35%'
    },
  
    tituloPagina: {
      color: 'white',
      marginRight: 'auto',
      marginLeft: 'auto',
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: '3%',
      
    },
  
    integrantes:{
      // borderColor: 'red',
      // borderWidth: 2,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '3%',
      width: '95%',
      height: 650,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    cardPessoa: {
      backgroundColor: 'white',
      width: '45%',
      height: '30%',
      margin: '2%',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    foto: {
      height: '65%',
      width: '85%',
      borderRadius: 20 
    },
  
    nome: {
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: 2,
      marginBottom: 2
    },
  
    iconesRedes: {
      width: '70%',
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    }
  });
  