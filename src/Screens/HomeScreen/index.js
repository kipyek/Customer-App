import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Restaurant1 from '../../Components/RestaurantItem';
import restaurants from '../../../assets/data/restaurants.json'



export default function HomeScreen() {
  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <Restaurant1 restaurant={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({});
