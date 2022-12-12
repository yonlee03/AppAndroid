import React, { useState }from 'react';
import { View, Text,Button,TextInput,SafeAreaView,FlatList, StyleSheet,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from '../projecto1/src/navigations/HomeStack';
import SearchScreen from './src/containers/SearchScreen';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            }if (route.name === 'SearchScreen') {
              iconName = focused ? 'information' : 'information-outline';
            }if (route.name === 'HomeStack') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })} initialRouteName="HomeStack">
        <Stack.Screen  name="HomeStack" component={HomeStack} />
        <Tab.Screen name="SearchScreen" component={SearchScreen} options={{title: "Search", headerTitleAlign: 'center'}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
