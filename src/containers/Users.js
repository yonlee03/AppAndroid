import React, { useState }from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text,Button,TextInput,SafeAreaView,FlatList, StyleSheet,StatusBar } from 'react-native';
import DetailsScreen from '../containers/DetailsScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Users({navigation}) {
  
    const DATA = [
    { id: '1',
    title: 'JOSE',
    nombre:"Jose",
    age:19,
    Icon: 'account-circle',},
    { id: '2',
    title: 'PEDRO',
    age:23,
    nombre:"Pedro",
    Icon: 'alien',},
    { id: '3',
    title: 'MARTI',
    nombre:"Marti",
    age:52,
    Icon: 'alpha-i-box',},
    { id: '4',
    title: 'DAVID',
    age:89,
    nombre:"David",
    Icon: 'alpha-j-box',},
    { id: '5',
    title: 'ALVARO',
    age:19,
    nombre:"Alvaro",
    Icon: 'alpha-l-circle-outline',},
    ];
    
    
      const renderItem = ({ item }) => {
        return (
          <View style={styles.item}>
             <Button 
              title={item.title}
              onPress={() => navigation.navigate("Details", {username:item.nombre, age: item.age,})} />
       
        <Icon name={item.Icon} size={100} color="#4F8EF7"/>
      </View>
        )
      }
    
      return (
        <SafeAreaView style={styles.container}>
          
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      );
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          marginTop: StatusBar.currentHeight || 0,
        },
        item: {
          backgroundColor: 'darkblue',
          color:'white',
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16,
        },
        title: {
          fontSize: 15,
          color:'white',
        },
      });
      