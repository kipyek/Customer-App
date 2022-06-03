import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import OrderListItem from '../../Components/OrderListItem'
import orders from '../../../assets/data/orders.json'

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  }
})