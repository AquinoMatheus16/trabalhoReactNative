import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    paddingBottom: 90
  },
  containerInput: {
    marginTop: 26,
    width: '100%',
    height: 40,
    alignItems: 'center',
    marginBottom: 26,
  },

  inputBusca: {
    paddingHorizontal: 40,
    width: '90%',
    paddingVertical: 1,
    backgroundColor: '#FFF',
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
  input: {
    minHeight: 40,
    width: '90%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
  },
});