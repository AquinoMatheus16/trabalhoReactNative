import { api } from './api';

// GET
export const getProduto = async () => {
    try {
        const { data } = await api.get("/api/produto")
        // console.log(data)
        return data;
    } catch (e) {
        console.log(e)
    }
};

// GET ID
export const getProdutoId = async (produto) => {
    try {
        const { data } = await api.get("/produto" + produto.id)
        // console.log(data)
        return data;
    } catch (e) {
        console.log(e)
    }
};

// GET ID
export const getImagem = async (produto) => {
    try {
        const { data } = await api.get("/produto" + produto.id)
        // console.log(data)
        return data;
    } catch (e) {
        console.log(e)
    }
};

// POST
export const newProduto = async (novoProduto) => {
    try {
        const produto = await api.post("/produto", novoProduto)
        return produto;
    } catch (e) {
        console.log(e)
    }
};

// PUT
export const updateProduto = async (produto) => {
    try {
        const updateProduto = await api.put("/produto/" + produto.id, produto)
        return updateProduto;
    } catch (e) {
        console.log(e)
    }
};

// DELETE   
export const deleteProduto = async (id) => {
    try {
        const deletedTask = await api.delete("/produto/" + id)
        return deletedTask;
    } catch (e) {
        console.log(e)
    }
};