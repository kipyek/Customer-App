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

const Basket = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{retraurant.name}</Text>


      <Text style={{ fontWeight: '600', marginTop: 20, fontSize: 15 }}>Your items</Text>

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
  row: {
    flexDirection: 'row',
    marginVertical: 15
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
  quantityContainer: {
    paddingHorizontal: 5,
    marginRight: 7,
    backgroundColor: 'lightgray',
    borderRadius: 16,
    paddingVertical: 2

  }
})

export default Basket