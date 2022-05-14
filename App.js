import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Restaurant1 from './src/Components/RestaurantItem';
import restaurants from "./assets/data/restaurants.json"



export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Restaurant1 restaurant={restaurants[0]} />
        <Restaurant1 restaurant={restaurants[1]} />
        <Restaurant1 restaurant={restaurants[2]} />
      </ScrollView>


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
    padding: 10,
    marginTop: 12
  },
});
