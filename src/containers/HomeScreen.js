import React, { useState } from 'react';
import { Text, Image, TextInput, View, StyleSheet, Button, Switch, Alert,FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Users from '../containers/Users';
import Form from '../../Form';
import DetailsScreen from '../containers/DetailsScreen';


export default function HomeScreen({navigation}) {
    const [nombre, setNombre] = useState('')
    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <Text style={{marginBottom:10}}>Home Screen</Text>
            <View style={{marginBottom:10}}>
            <Button 
            title="Form"
            onPress={() => navigation.navigate("Form")} />
            </View>
            <View style={{marginBottom:10}}>
            <Button 
            title="Users"
            onPress={() => navigation.navigate("Users")} />
            </View>
            <View style={{marginBottom:10}}>
            <Button 
            title="Fruits"
            onPress={() => navigation.navigate("Fruits")} />
            </View>
            <View style={{marginBottom:10}}>
            <TextInput style={{backgroundColor:'black', color:'white'}}
            value={nombre}
            onChangeText={nombre => setNombre(nombre)}
            />
            <Button 
            title="Details"
            onPress={() => navigation.navigate("Details", {username:nombre, age:19,})}/>
            </View>
      </View>
    );
  }