
export const newLogin = async (novoLogin) => {
    try {
        const produto = await api.post("/login", novoLogin)
        return produto;
    } catch (e) {
        console.log(e)
    }
};