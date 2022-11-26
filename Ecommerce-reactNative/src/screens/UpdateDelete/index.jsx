import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { styles } from './styles';
import { EvilIcons } from '@expo/vector-icons';
import { SelectList } from 'react-native-dropdown-select-list';
import { useState, useEffect, useContext } from 'react';
import { api } from '../../services/api';
import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/AuthContext";

export const UpdateDelete = ({ route }) => {
    const [descricao, setDescricao] = useState("");
    const [qtdEstoque, setQtdEstoque] = useState("");
    const [valorUnitario, setValorUnitario] = useState("");
    const [categoria, setCategoria] = useState("");
    const [categoriasSalvas, setCategoriasSalvas] = useState("");
    const [nome, setNome] = useState("");
    const [selected, setSelected] = useState("");
    const [data, setData] = useState([]);
    const [image, setImage] = useState(null);
    const navigation = useNavigation();
    const { item } = route.params;
    const { loading } = useContext(AuthContext);

    const getCategoria = async () => {
        api.get('/api/categoria')
            .then((response) => {
                let newArray = response.data.map((item) => {
                    return { key: item.id, value: item.nome }
                })
                setData(newArray)
                setCategoriasSalvas(response.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    useEffect(() => {
        getCategoria();
        setNome(item.nome)
        setValorUnitario("" + (Math.floor(item.valorUnitario * 100).toFixed(0) / 100).toFixed(2))
        setQtdEstoque("" + item.qtdEstoque)
        setDescricao(item.descricao)
        setCategoria(item.categoria.id)
        setImage(item.urlImagem)
    }, []);
    // console.log(valorUnitario);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Desculpe, precisamos de permissões de rolo da câmera para fazer isso funcionar!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const confirmarPut = () =>
        Alert.alert(
            "Aviso",
            "Deseja mesmo salvar as alterações?",
            [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "OK", onPress: () => put() }
            ]
        );

    const confirmarDeletar = () =>
        Alert.alert(
            "Aviso",
            "Deseja mesmo deletar o produto?",
            [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "OK", onPress: () => onDelete() }
            ]
        );

    const put = async () => {
        try {

            const tokenStorage = await AsyncStorage.getItem("@app_token")
            if (nome == "" || descricao == "" || qtdEstoque == "" || valorUnitario == "" || categoria == "") {
                alert("Preencha todos os campos")
                return
            }

            let idCategoria = categoria
            categoriasSalvas.forEach(item => {
                if (categoria == item.nome) {
                    idCategoria = (item.id)
                }
            });

            const novoProduto = {
                nome: nome,
                descricao: descricao,
                qtdEstoque: parseInt(qtdEstoque),
                valorUnitario: parseFloat(valorUnitario),
                idCategoria: idCategoria
            }
            console.log(image);
            // console.log(novoProduto);
            const produto = JSON.stringify(novoProduto)
            const formData = new FormData();
            formData.append('file', {
                uri: image,
                type: 'image/jpeg',
                name: 'file'
            })
            formData.append('produto', {
                "string": JSON.stringify(novoProduto),
                type: 'application/json',
                name: 'produto'
            })

            const { data } = await api.put("/api/produto/" + item.idProduto, formData, { headers: { "Authorization": `${tokenStorage}`, "Accept": "application/json", "Content-Type": "multipart/form-data" } })

            Alert.alert(
                'Aviso',
                'Produto alterado com suecsso!',
                [
                    {
                        text: "OK",
                        onPress: () => null
                    }
                ]
            );

            navigation.goBack();

        } catch (e) {
            console.error(e);
            Alert.alert(
                'Aviso',
                'Não possível alterar o produto.',
                [
                    {
                        text: "OK",
                        onPress: () => null
                    }
                ]
            );
        }
    };

    const onDelete = async () => {
        try {
            const tokenStorage = await AsyncStorage.getItem("@app_token")
            const { data } = await api.delete("/api/produto/" + item.idProduto, {
                headers: { Authorization: `${tokenStorage}` },
            });

            Alert.alert(
                'Aviso',
                'Produto deletado com sucesso.',
                [
                    {
                        text: "OK",
                        onPress: () => null
                    }
                ]
            );

            navigation.goBack();
        } catch (e) {
            console.error(e);
            Alert.alert(
                'Aviso',
                'Não possível deletar o produto.',
                [
                    {
                        text: "OK",
                        onPress: () => null
                    }
                ]
            );

        }

    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.main}>

                    <Image source={{ uri: image + '?' + new Date() }} style={styles.img} />

                    <View style={styles.container2}>
                        <Text>Imagem do produto: </Text>

                        <TouchableOpacity
                            style={styles.buttonArquivo}
                            onPress={pickImage}>
                            <Text style={styles.buttonText}>Selecionar arquivo</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.titulo}>Nome produto:</Text>
                    <TextInput
                        style={styles.inputNome}
                        textAlign='left'
                        placeholder='Digite o nome do produto (máx.30)'
                        onChangeText={setNome}
                        value={nome}
                    />

                    <Text style={styles.titulo}>Descrição:</Text>
                    <TextInput
                        style={styles.inputDescricao}
                        multiline
                        numberOfLines={9}
                        placeholder='Digite a descrição do produto (máx.200)'
                        onChangeText={setDescricao}
                        value={descricao}
                    />

                    <Text style={styles.titulo}>Categoria: </Text>
                    <View style={styles.containerCategoria}>
                        <SelectList
                            setSelected={(val) => setSelected(val)}
                            data={data}
                            save='key'
                            onSelect={() => setCategoria(selected)}
                            boxStyles={{ borderRadius: 0, borderColor: 'black' }}
                            dropdownStyles={{ borderRadius: 0, borderColor: 'black' }}
                            searchPlaceholder='Pesquisar'
                            placeholder='Categoria'
                            defaultOption={{ key: item.categoria.id, value: item.categoria.nome }}
                        />
                    </View>

                    <Text style={styles.titulo}>Quantidade em estoque: </Text>
                    <TextInput
                        style={styles.inputNome}
                        keyboardType='numeric'
                        textAlign='left'
                        placeholder='Digite a quantidade em estoque'
                        onChangeText={setQtdEstoque}
                        value={qtdEstoque}
                    />

                    <Text style={styles.titulo}>Valor unitário: </Text>
                    <View style={styles.containerValorUnitario}>
                        <View style={styles.containerRs}>
                            <Text style={styles.textRs}>R$</Text>
                        </View>
                        <TextInput
                            style={styles.inputValorUnitario}
                            keyboardType='numeric'
                            placeholder='Digite o valor unitário do produto'
                            onChangeText={setValorUnitario}
                            value={valorUnitario}
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.buttonSalvar}
                        onPress={confirmarPut}
                    >
                        <Text style={styles.buttonText}>SALVAR   ALTERAÇÕES</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonDeletar}
                        onPress={confirmarDeletar}
                    >
                        <Text style={styles.buttonText}>DELETAR</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView >
    )
};