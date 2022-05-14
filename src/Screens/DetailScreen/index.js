import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import restaurants from '../../../assets/data/restaurants.json';
import { Ionicons } from '@expo/vector-icons';
import Header from './Header';
import styles from './styles';

import DishListItem from '../../Components/DishListItem';

const restaurant = restaurants[0];
("");

const Detail = () => {
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
      />

      <Ionicons name="arrow-back-circle" size={34} color="white" style={styles.icon} />
    </View>
  )
}

export default Detail

