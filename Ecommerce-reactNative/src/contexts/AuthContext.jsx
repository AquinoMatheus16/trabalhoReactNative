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
        // console.log(response);
        // console.log(response.headers.authorization);
        console.log(response.user);
        if (response.headers.authorization) {
            setUser(response.config.data)
            api.defaults.headers['Authorization'] = `Bearer ${response.headers.authorization}`
            console.log("Foi");
            await AsyncStorage.setItem("@app_user", JSON.stringify(response.config.data))
            await AsyncStorage.setItem("@app_token", response.headers.authorization)
        }
    };

    const logoutContext = () => {
        setUser(null)
        AsyncStorage.clear();
        api.defaults.headers.Authorization = null;
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
        <AuthContext.Provider value={{ logado: !!user, loginContext, logoutContext, loading: loading }}>
            {children}
        </AuthContext.Provider>
    )
};
