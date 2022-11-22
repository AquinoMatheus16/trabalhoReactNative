import { api } from "./api"

export const login = async (username, password) => {

    return await api.post("/login", { username: username, password: password })
}