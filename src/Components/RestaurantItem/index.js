import { StyleSheet, Text, View, Image } from 'react-native';


const Restaurant1 = ({ restaurant }) => {
  return (
    <View style={styles.Rcontainer}>
      <Image source={{
        uri: restaurant.image,
      }}
        style={styles.image}
      />
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>${restaurant.deliveryFee} ​&#8226; {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} mins</Text>
    </View>
  );
};

export default Restaurant1;

const styles = StyleSheet.create({
  Rcontainer: {
    width: '100%',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 4 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5
  },
  subtitle: {
    color: 'gray'
  },
});
