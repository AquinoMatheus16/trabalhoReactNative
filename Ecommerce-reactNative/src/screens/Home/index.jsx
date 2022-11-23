import { useContext } from "react";
import { Text, Button } from "react-native"
import { AuthContext } from "../../contexts/AuthContext";
// import { View, FlatList, Button } from 'react-native';

export const Home = () => {
    const { logoutContext } = useContext(AuthContext);
    return (
        <>
            <Text>Homeyagvduscv</Text>
            <Button title='LOGOUT' onPress={() => logoutContext()} />
        </>
    )
}