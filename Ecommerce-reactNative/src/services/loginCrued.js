import { api } from "./api";

export const newLogin = async (novoLogin) => {
    try {
        const login = await api.post("/login", novoLogin)
        return login;
    } catch (e) {
        console.error(e);
    }
};