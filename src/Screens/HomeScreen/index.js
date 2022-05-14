import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Restaurant1 from '../../Components/RestaurantItem';
import restaurants from '../../../assets/data/restaurants.json'



export default function HomeScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <Restaurant1 restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
    marginTop: 12
  }
});
