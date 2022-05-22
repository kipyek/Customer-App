import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import restraurants from '../../../assets/data/restaurants.json';
import BasketDishItem from '../../Components/BasketDishItem';

const retraurant = restraurants[0];

const Basket = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{retraurant.name}</Text>


      <Text style={{ fontWeight: '600', marginTop: 20, fontSize: 15, marginLeft: 12 }}>Your items</Text>

      <FlatList
        data={retraurant.dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />
      <View style={styles.separator} />

      <View style={styles.button}>
        <Text style={styles.buttonText}>Pay Order</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    paddingVertical: 30,
    padding: 10
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10
  },
  description: {
    color: '#696969',
  },
  separator: {
    height: 1,
    marginVertical: 10,
    backgroundColor: 'lightgray'
  },
  quantity: {
    fontSize: 25,
    fontWeight: '400',
    marginHorizontal: 20
  },
  button: {
    backgroundColor: 'peru',
    marginTop: 'auto',
    padding: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15
  },
})

export default Basket