// drawer navegation
import 'react-native-reanimated';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import HomeScreen from './screens/home';
import FormScreen from './screens/form';
import OrcamentosScreen from './screens/orcamentos';

const Drawer = createDrawerNavigator();

function App() {
	return (
	<NavigationContainer>
		<Drawer.Navigator initialRouteName='Home'>
		<Drawer.Screen name='Home' options={{title:"BEM VINDOS AO APP"}} component={HomeScreen} />
		<Drawer.Screen name='form' options={{title:"Preencha o formulário"}} component={FormScreen} />
		<Drawer.Screen name='orcamentos' options={{title:"Seus Orçamentos"}} component={OrcamentosScreen}/>
		</Drawer.Navigator>
	</NavigationContainer>
	);
}

export default App;