import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import restaurants from '../../../assets/data/restaurants.json';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

import DishListItem from '../../Components/DishListItem';

const restaurant = restaurants[0];
("");

const Header = () => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />

      <View style={{ margin: 10 }}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          ${restaurant.deliveryFee} ​&#8226; {restaurant.minDeliveryTime} -
          {restaurant.maxDeliveryTime} mins</Text>

        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  )
}

export default Header;