import { createContext, useState, useEffect } from "react";
import { login } from "../services/auth";
import { api } from "../services/api";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const loginContext = async (username, password) => {
        const response = await login(username, password)
        if (response.token && response.user) {
            setUser(response.user)
            api.defaults.headers['Authorization'] = `Bearer ${response.token}`
            console.log("Foi");
            await AsyncStorage.setItem("@app_user", JSON.stringify(response.user))
            await AsyncStorage.setItem("@app_token", response.token)
        }
    };

    const logoutContext = () => {
        setUser(null)
        AsyncStorage.clear();
    };

    useEffect(() => {
        const verificaStorage = async () => {
            const userStorage = await AsyncStorage.getItem("@app_user")
            const tokenStorage = await AsyncStorage.getItem("@app_token")

            if (userStorage != null && tokenStorage != null) {
                setUser(JSON.parse(userStorage))
                api.defaults.headers['Authorization'] = `Bearer ${tokenStorage}`
            }

            await new Promise(resolve => setTimeout(resolve, 2000))
            setLoading(false)
        }
        verificaStorage()
    }, [])

    return (
        // <AuthContext.Provider value={{ logado: false }}>
        //     {children}
        // </AuthContext.Provider>
        <AuthContext.Provider value={{ logado: !!user, loginContext, logoutContext, loading: loading }}>
            {children}
        </AuthContext.Provider>
    )
};
