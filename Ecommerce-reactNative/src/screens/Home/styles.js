import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    paddingBottom: 90
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  containerInput: {
    marginTop: '12%',
    width: '100%',
    height: '7%',
    alignItems: 'center',

    marginBottom: 20
  },
  // containerFlat: {
  //   alignItems: 'stretch',
  //   justifyContent: 'center'
  // },

  input: {
    // width: '80%',
    // height: '100%',
    // maxHeight:,
    paddingHorizontal: 40,
    paddingVertical: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

  },
});