import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import restaurants from '../../../assets/data/restaurants.json';
import { Ionicons } from '@expo/vector-icons';
import Header from './Header';
import styles from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';

import DishListItem from '../../Components/DishListItem';

const restaurant = restaurants[0];

const Detail = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id;
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />

      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={34} color="white"
        style={styles.icon} />
    </View>
  )
}

export default Detail

