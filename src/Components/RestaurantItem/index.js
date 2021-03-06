import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


const Restaurant1 = ({ restaurant }) => {
  const navigation = useNavigation();

  const onPress = () => {
    console.log('first')
    navigation.navigate("Restraurant", { id: restaurant.id });
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.Rcontainer}>
      <Image source={{
        uri: restaurant.image,
      }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subtitle}>
            ${restaurant.deliveryFee} ​&#8226; {restaurant.minDeliveryTime} -
            {restaurant.maxDeliveryTime} mins</Text>
        </View>

        <View style={styles.rating}>
          <Text>{restaurant.rating}</Text>
        </View>


      </View>

    </TouchableOpacity>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rating: {
    marginLeft: 'auto',
    backgroundColor: 'lightgray',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21
  },
});
