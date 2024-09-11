import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import Home from './screens/Home';
import Scanner from './screens/Scanner';
import {CameraView, useCameraPermissions} from "expo-camera" 


export default function App() {
  const Stack = createNativeStackNavigator()

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>

      
  );
  
}
