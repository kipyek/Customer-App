import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import restraurants from '../../../assets/data/restaurants.json';

const retraurant = restraurants[0];
const BasketDishItem = ({ basketDish }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={{ fontSize: 16 }}>{basketDish.name}</Text>
      <Text style={{ marginLeft: 'auto' }}>$ {basketDish.price}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginVertical: 15,
    marginHorizontal: 12
  },
  quantityContainer: {
    paddingHorizontal: 5,
    marginRight: 7,
    backgroundColor: 'lightgray',
    borderRadius: 16,
    paddingVertical: 2

  }
})
export default BasketDishItem;