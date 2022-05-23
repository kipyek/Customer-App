import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const DishListItem = ({ dish }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Dish", { id: dish.id })} style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description} numberOfLines={2}>{dish.description}</Text>
        <Text style={styles.price}>{dish.price}</Text>
      </View>
      {dish.image && <Image source={{ uri: dish.image }} style={styles.image} />}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingVertical: 10,
    marginHorizontal: 20,
    borderBottomColor: 'Lightgray',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  description: {
    color: 'gray',
    marginVertical: 5
  },
  price: {
    fontSize: 16

  },
  image: {
    height: 80,
    aspectRatio: 1,
    borderRadius: 34
  }
})


export default DishListItem;