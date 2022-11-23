import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import { styles } from './styles';
import { EvilIcons, MaterialIcons } from '@expo/vector-icons';
import { getImagem } from '../../services/produtoCrud';
import { SelectList } from 'react-native-dropdown-select-list';

import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import React from 'react';

export const Insert = () => {
    const [produto, setProduto] = useState([]);
    const [descricao, setDescricao] = useState("");
    const [qtdEstoque, setQtdEstoque] = useState("");
    const [valorUnitario, setValorUnitario] = useState("");
    const [categoria, setCategoria] = useState("");
    const [nome, setNome] = useState("");
    const [selected, setSelected] = React.useState("");
    const [data, setData] = React.useState([]);
    const [singleFile, setSingleFile] = useState(null);

    const fetchData = async () => {
        const produtoList = await getImagem();
        setProduto(produtoList);
    };

    const getCategoria = async () => {
        api.get('/api/produto')
            .then((response) => {
                // Store Values in Temporary Array
                let newArray = response.data.map((item) => {
                    return { key: item.idCategoria, value: item.nome }
                })
                //Set Data Variable
                setData(newArray)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    useEffect(() => {
        getCategoria()
    }, []);

    const uploadImage = async () => {
        // Check if any file is selected or not
        // console.log("foi");
        if (singleFile != null) {
            // If file selected then create FormData
            console.log("foi");
            const fileToUpload = singleFile;
            const data = new FormData();
            data.append('name', 'Image Upload');
            data.append('file_attachment', fileToUpload);
            // Please change file upload URL
            let res = await fetch(
                'http://localhost/upload.php',
                {
                    method: 'post',
                    body: data,
                    headers: {
                        'Content-Type': 'multipart/form-data; ',
                    },
                }
            );
            console.log(res);
            let responseJson = await res.json();
            if (responseJson.status == 1) {
                alert('Upload Successful');
            }
        } else {
            // If no file selected the show alert
            alert('Please Select File first');
        }
    };

    const selectFile = async () => {
        // Opening Document Picker to select one file
        try {
          const res = await DocumentPicker.pick({
            // Provide which type of file you want user to pick
            type: [DocumentPicker.types.allFiles],
            // There can me more options as well
            // DocumentPicker.types.allFiles
            // DocumentPicker.types.images
            // DocumentPicker.types.plainText
            // DocumentPicker.types.audio
            // DocumentPicker.types.pdf
          });
          // Printing the log realted to the file
          console.log('res : ' + JSON.stringify(res));
          // Setting the state to show single file attributes
          setSingleFile(res);
        } catch (err) {
          setSingleFile(null);
          // Handling any exception (If any)
          if (DocumentPicker.isCancel(err)) {
            // If user canceled the document selection
            alert('Canceled');
          } else {
            // For Unknown Error
            alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
          }
        }
      };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.main}>
                    <EvilIcons name="image" size={300} color="black" />

                    <View style={styles.container2}>
                        <Text>Imagem do produto: </Text>

                        <TouchableOpacity
                            style={styles.buttonArquivo}
                            onPress={selectFile}>
                            <Text style={styles.buttonText}>Selecionar arquivo</Text>
                        </TouchableOpacity>
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
                            setSelected={(categoria) => setSelected(categoria)}
                            data={data}
                            save={setCategoria}
                            // onSelect={() => ()}
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

                    <TouchableOpacity style={styles.buttonSalvar}  >
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
