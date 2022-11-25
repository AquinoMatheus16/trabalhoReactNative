import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { styles } from './styles';
import { EvilIcons } from '@expo/vector-icons';
import { SelectList } from 'react-native-dropdown-select-list';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Insert = () => {
    const [produto, setProduto] = useState([]);
    const [descricao, setDescricao] = useState("");
    const [qtdEstoque, setQtdEstoque] = useState("");
    const [valorUnitario, setValorUnitario] = useState("");
    const [categoria, setCategoria] = useState("");
    const [nome, setNome] = useState("");
    const [selected, setSelected] = useState("");
    const [data, setData] = useState([]);
    const [image, setImage] = useState(null);

    const getCategoria = async () => {
        api.get('/api/categoria')
            .then((response) => {
                let newArray = response.data.map((item) => {
                    return { key: item.idCategoria, value: item.nome }
                })
                setData(newArray)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    useEffect(() => {
        getCategoria()
    }, []);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
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
        // console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    ////////////////////////////////////////////////////////////////////////////////////////////////

    const [categorias, setCategorias] = useState([])
    const [categoriaJson, setCategoriaJson] = useState("")
    // console.log(categoria);
    const post = async () => {
        const tokenStorage = await AsyncStorage.getItem("@app_token")
        if (nome == "" || descricao == "" || qtdEstoque == "" || valorUnitario == "") {
            // if (nome == "" || descricao == "" || qtdEstoque == "" || valorUnitario == "" || categoria == "" || categoria == "Escolha a categoria") {
            alert("Preencha todos os campos")
            return
        }
        console.log("<<<<<<<<<<<<<<<<");
        const novoProduto = {
            nome: nome,
            descricao: descricao,
            qtdEstoque: parseInt(qtdEstoque),
            valorUnitario: parseFloat(valorUnitario),
            idCategoria: categoria.idCategoria
        }

        const json = JSON.stringify(novoProduto)
        const blob = new Blob([json], { type: 'application/json' })
        // console.log(novoProduto);
        const formData = new FormData();
        // formData.append("file", image);
        // formData.append("produto", blob);
        formData.append('file', {
            // uri: pictureUri,
            uri: image,
            type: 'image/jpeg',
            name: 'profile-picture'
        })

        // console.log(categoria);
        // console.log(blob)
        // console.log(image)
        // console.log(token)

        const { data } = await api.post("/api/produto", formData, { headers: { "Authorization": `${tokenStorage}`, "Accept": "application/json", "Content-Type": "multipart/form-data" } })
        console.log("Aqui sgfu");
        console.log(data);

        // const { data } = await api.post("/api/produto", formData)
        // console.log(data)
        // navigate('/painel')
        //
        //
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.main}>

                    {image ? <Image source={{ uri: image }} style={{ width: 200, height: 200, justifyContent: 'center', alignItems: 'center', marginTop: 20 }} /> : <EvilIcons name="image" size={300} color="black" />}

                    <View style={styles.container2}>
                        <Text>Imagem do produto: </Text>

                        <TouchableOpacity
                            style={styles.buttonArquivo}
                            onPress={pickImage}>
                            <Text style={styles.buttonText}>Selecionar arquivo</Text>
                        </TouchableOpacity>
                        {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}
                    </View>

                    <Text style={styles.titulo}>Nome produto:</Text>
                    <TextInput
                        style={styles.inputNome}
                        // keyboardType='phone'
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
                            save='value'
                            onSelect={() => setCategoria(selected)}
                            boxStyles={{ borderRadius: 0, borderColor: 'black' }}
                            dropdownStyles={{ borderRadius: 0, borderColor: 'black' }}
                            searchPlaceholder='Pesquisar'
                            placeholder='Categoria'
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
                        onPress={post}
                    >
                        <Text style={styles.buttonText}>SALVAR   ALTERAÇÕES</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonDeletar} >
                        <Text style={styles.buttonText}>DELETAR   PRODUTO</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView >
    )
};