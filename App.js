import React, { useState }from 'react';
import { View, Text,Button,TextInput,SafeAreaView,FlatList, StyleSheet,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Form from './Form';
import emotes from './Emotes';
import Emotes from './Emotes';

function HomeScreen({navigation}) {
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

function Users({navigation}) {
  
  const DATA = [
  { id: '1',
  title: 'JOSE',
  nombre:"Jose",
  Icon: 'account-circle',},
  { id: '2',
  title: 'PEDRO',
  nombre:"Pedro",
  Icon: 'alien',},
  { id: '3',
  title: 'MARTI',
  nombre:"Marti",
  Icon: 'alpha-i-box',},
  { id: '4',
  title: 'DAVID',
  nombre:"David",
  Icon: 'alpha-j-box',},
  { id: '5',
  title: 'ALVARO',
  nombre:"Alvaro",
  Icon: 'alpha-l-circle-outline',},
  ];
  
  
    const renderItem = ({ item }) => {
      return (
        <View style={styles.item}>
           <Button 
            title={item.title}
            onPress={() => navigation.navigate("Details", {username:item.nombre, age:19,})} />
     
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

function DetailsScreen({route}) {
  const{username,age}=route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{username}</Text>
      <Text>{age}</Text>
    </View>
  );
}
function Homeee() {
  return (
    <Stack.Navigator initialRouteName="Home">
     <Tab.Screen name="Home" component={HomeScreen} options={{title: "Casita", headerTitleAlign: 'center'}} />
    <Stack.Screen  name="Users" component={Users} />
    <Stack.Screen  name="Details" component={DetailsScreen} />
    <Stack.Screen  name="Form" component={Form} />
  </Stack.Navigator>
  );
}

function SearchScreen() {
  return (
    <View>
    <Text style={{fontSize:80, color:"red"}}>EL USO DE LA APLICACION ES INVALIDO</Text>
    </View>
  );
}
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
            }if (route.name === 'Search') {
              iconName = focused ? 'ios-search' : 'ios-search-outline';
            }if (route.name === 'Form') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }if (route.name === 'Emotes') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })} initialRouteName="Homeee">
        <Stack.Screen  name="Homeee" component={Homeee} />
        <Tab.Screen name="SearchScreen" component={SearchScreen} options={{title: "Search", headerTitleAlign: 'center'}} />
        
      </Tab.Navigator>
    </NavigationContainer>
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

export default App;
