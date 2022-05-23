import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



const OrderListItem = ({ order }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => (navigation.navigate("order", { id: order.id }))} style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>

      <Image source={{ uri: order.Restaurant.image }}
        style={{ width: 77, height: 77, marginRight: 10, borderRadius: 15 }} />

      <View>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>{order.Restaurant.name}</Text>
        <Text style={{ marginVertical: 5 }}>3 items &#8226; $38.45</Text>
        <Text>2 days ago &#8226; {order.status}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default OrderListItem

const styles = StyleSheet.create({})