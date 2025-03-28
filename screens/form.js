import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../styles/form';

function FormScreen() {
    const [empresa, setEmpresa] = useState('');
    const [tipoObra, setTipoObra] = useState('');
    const [cliente, setCliente] = useState('');
    const [materiais, setMateriais] = useState([]);
    const [custos, setCustos] = useState([]);
    const [prazoEntrega, setPrazoEntrega] = useState([]);
    
    // *inicio Campos materiais
    const [tipoMaterial, setTipoMaterial] = useState('');
    const [valorMaterial, setValorMaterial] = useState('');
    const [medidasMaterial, setMedidasMaterial] = useState('');

    const adicionarMaterial = () => {
        if (!tipoMaterial || !valorMaterial || !medidasMaterial) {
            Alert.alert('Atenção', 'Todos os campos materiais são obrigatórios');
            return;
        }

        setMateriais([...materiais, { tipo: tipoMaterial, valor: valorMaterial, medidas: medidasMaterial }]);

        setTipoMaterial('');
        setValorMaterial('');
        setMedidasMaterial('');
    };
    
    // * inicio campo custos
    const [nomeCusto, setNomeCusto] = useState('');
    const [tipoCusto, setTipoCusto] = useState('');
    const [valorCusto, setValorCusto] = useState('');

    const adicionarCusto = () => {
        setCustos([...custos, { nome: nomeCusto, tipo: tipoCusto, valor: valorCusto }]);
        setNomeCusto('');
        setTipoCusto('');
        setValorCusto('');
    };

    //* inicio prazo entrega
    const [numDias, setNumDias] = useState('');

    const adicionarPrazoEntrega = () => {
        if (!numDias) {
            Alert.alert('Atenção', 'O prazo de entrega é obrigatório');
            return;
        }

        setPrazoEntrega([...prazoEntrega, { dias: numDias }]);
        setNumDias('');
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>DADOS DA EMPRESA</Text>
                <Text style={styles.label}>Nome da Empresa:</Text>
                <TextInput value={empresa} onChangeText={setEmpresa} style={styles.input} />

                <Text style={styles.label}>Tipo de Obra:</Text>
                <TextInput value={tipoObra} onChangeText={setTipoObra} style={styles.input} />

                <Text style={styles.label}>Nome do Cliente:</Text>
                <TextInput value={cliente} onChangeText={setCliente} style={styles.input} />

                {/* Materiais */}

                <Text style={styles.label}>ADICIONE OS MATERIAIS QUE SERÃO USADO</Text>
                <Text style={styles.label}>Tipo de Material:</Text>
                <TextInput value={tipoMaterial} onChangeText={setTipoMaterial} style={styles.input} placeholder="Exemplo: Ferro, Madeira" />
                <Text style={styles.label}>Valor do Material:</Text>
                <TextInput value={valorMaterial} onChangeText={setValorMaterial} style={styles.input} placeholder="Exemplo: 100" keyboardType="numeric" />
                <Text style={styles.label}>Medidas do Material:</Text>
                <TextInput value={medidasMaterial} onChangeText={setMedidasMaterial} style={styles.input} placeholder="Exemplo: 2m x 3m" />
                <Button title="Adicionar Material" onPress={adicionarMaterial} />

                <FlatList
                    data={materiais}
                    renderItem={({ item, index }) => (
                        <View style={styles.materialItem}>
                            <Text>Material {index + 1}:</Text>
                            <Text>Tipo: {item.tipo}</Text>
                            <Text>Valor: R${item.valor}</Text>
                            <Text>Medidas: {item.medidas}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    nestedScrollEnabled={true}
                />

                {/* Custos */}
                <Text style={styles.label}>ADICIONE OS CUSTOS EXTRAS</Text>
                <Text>Nome</Text>
                <TextInput value={nomeCusto} onChangeText={setNomeCusto} style={styles.input} placeholder="Exemplo: Mão de obra" />
                <Text>Tipo de Custos</Text>
                <TextInput value={tipoCusto} onChangeText={setTipoCusto} style={styles.input} placeholder="Gasolina, Horas extras e etc." />
                <Text>Valor</Text>
                <TextInput value={valorCusto} onChangeText={setValorCusto} style={styles.input} placeholder="20" keyboardType="numeric"/>
                <Button title="Adicionar Custos" onPress={adicionarCusto} />

                <FlatList
                    data={custos}
                    renderItem={({ item, index }) => (
                        <View style={styles.custoItem}>
                            <Text>Custo {index + 1}:</Text>
                            <Text>Nome: {item.nome}</Text>
                            <Text>Tipo: {item.tipo}</Text>
                            <Text>Valor: R${item.valor}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />

                {/* Prazo de Entrega */}
                <Text style={styles.label}>ADICIONE O PRAZO DE ENTREGA DA OBRA</Text>
                <Text style={styles.label}>Prazo de Entrega</Text>
                <TextInput value={numDias} onChangeText={setNumDias} style={styles.input} placeholder="Exemplo: Prazo em dias" keyboardType="numeric"/>

                <FlatList
                    data={prazoEntrega}
                    renderItem={({ item, index }) => (
                        <View style={styles.prazoItem}>
                            <Text>Prazo {index + 1}:</Text>
                            <Text>{item.dias} dias</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
                
                <Button title="Definir Prazo de Entrega" onPress={adicionarPrazoEntrega} />
            </View>
        </ScrollView>
    );
}

export default FormScreen;
