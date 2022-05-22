import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import DishDetailScreen from './src/Screens/DishDetailScreen';
import Basket from './src/Screens/Basket';
import OrderScreen from './src/Screens/OrderScreen';
import OrderDetails from './src/Screens/OrderDetails';




export default function App() {
  return (
    <View style={styles.container}>
      <OrderDetails />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
    // marginTop: 12
  },
});
