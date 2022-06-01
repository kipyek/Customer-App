import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../HomeScreen';
import DishDetailScreen from '../DishDetailScreen';
import DetailScreen from '../DetailScreen';
import Basket from '../Basket';
import OrderScreen from '../OrderScreen';
import OrderDetails from '../OrderDetails';
import ProfileScreen from '../ProfileScreen';

import { Feather, MaterialIcons } from '@expo/vector-icons';

const stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="Home" component={HomeTabs} />
    </stack.Navigator >
  );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: 'lightgrey' }} screenOptions={{ tabBarStyle: { backgroundColor: 'red' } }}>
      <Tab.Screen name="Home" component={HomeStackNavigator}
        options={{ tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} /> }} />
      <Tab.Screen name="Orders" component={OrderStackNavigator}
        options={{ tabBarIcon: ({ color }) => <MaterialIcons name="list-alt" size={24} color={color} /> }} />
      <Tab.Screen name="Profile" component={ProfileScreen}
        options={{ tabBarIcon: ({ color }) => <MaterialIcons name="person" size={24} color={color} /> }} />
    </Tab.Navigator>
  )
}

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Restraurants" component={HomeScreen} />
      <HomeStack.Screen name="Restraurant" component={DetailScreen} />
      <HomeStack.Screen name="Dish" component={DishDetailScreen} />
      <HomeStack.Screen name="Basket" component={Basket} />
    </HomeStack.Navigator>
  );
};

const OrderStack = createNativeStackNavigator();

const OrderStackNavigator = () => {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen name="Orders" component={OrderScreen} />
      <OrderStack.Screen name="Order" component={OrderDetails} />
    </OrderStack.Navigator>
  );
};

export default RootNavigator;