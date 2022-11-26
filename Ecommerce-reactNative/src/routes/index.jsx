import { RotasPrivadas } from "./RotasPrivadas";
import { RotasPublicas } from "./RotasPublicas";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ActivityIndicator, View } from "react-native";

export const Routes = () => {
    const { logado } = useContext(AuthContext);

    return logado ? <RotasPrivadas /> : <RotasPublicas />;
    // return <RotasPrivadas />;
    // return <RotasPublicas />;
};
