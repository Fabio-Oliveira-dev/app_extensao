import * as React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/home';


function HomeScreen({navigation}) {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
            Bem-vindo ao App Orçamento Rápido!

            Facilite a criação de orçamentos para seus projetos de serralheria de forma rápida e organizada. Adicione materiais, custos e prazos de entrega com apenas alguns toques e gere orçamentos profissionais para compartilhar com seus clientes.

            📌 Principais recursos:
            ✔️ Cadastro fácil de materiais e custos
            ✔️ Cálculo automático do orçamento
            ✔️ Geração de documento para compartilhamento
            ✔️ Histórico de orçamentos salvos

            Comece agora e torne sua gestão mais eficiente!
        </Text>
        <Button title='Cria Orçamento' onPress={() => navigation.navigate('form')} />
    </View>
    );
}

export default HomeScreen;