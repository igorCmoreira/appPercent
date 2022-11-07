import Work from "./components/Work";
import Index from "./components";

import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Pilha = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Pilha.Navigator>
        <Pilha.Screen name='Home' component={Index} />
        <Pilha.Screen name='Work' component={Work} options={{title: 'calculadora'}} />
      </Pilha.Navigator>
    </NavigationContainer>
  )
}
export default App;