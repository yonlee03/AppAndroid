import React, { useState }from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text,Button,TextInput,SafeAreaView,FlatList, StyleSheet,StatusBar } from 'react-native';
import Users from '../containers/Users';
import Form from '../../Form';
import DetailsScreen from '../containers/DetailsScreen';
import HomeScreen  from '../containers/HomeScreen';
const Stack = createNativeStackNavigator();


export default function HomeStack() {
    return (
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{title: "Casita", headerTitleAlign: 'center'}} />
      <Stack.Screen  name="Users" component={Users} />
      <Stack.Screen  name="Details" component={DetailsScreen} />
      <Stack.Screen  name="Form" component={Form} />
    </Stack.Navigator>
    );
  }