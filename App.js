import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import RootNavigator from './src/Screens/Navigation'

import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}

export default App;
