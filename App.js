import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import RootNavigator from './src/Screens/Navigation'

import { NavigationContainer } from '@react-navigation/native';
import { Amplify } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native';
import config from './src/aws-exports'

Amplify.configure(config)

function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}

export default withAuthenticator(App);
