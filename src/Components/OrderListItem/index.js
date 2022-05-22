import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'



const OrderListItem = ({ order }) => {
  return (
    <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>

      <Image source={{ uri: order.Restaurant.image }}
        style={{ width: 77, height: 77, marginRight: 10, borderRadius: 15 }} />

      <View>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>{order.Restaurant.name}</Text>
        <Text style={{ marginVertical: 5 }}>3 items &#8226; $38.45</Text>
        <Text>2 days ago &#8226; {order.status}</Text>
      </View>
    </View>
  )
}

export default OrderListItem

const styles = StyleSheet.create({})