import React, { useState }from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text,Button,TextInput,SafeAreaView,FlatList, StyleSheet,StatusBar } from 'react-native';


export default function DetailsScreen({route}) {
    const{username,age}=route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{username}</Text>
        <Text>{age}</Text>
      </View>
    );
  }