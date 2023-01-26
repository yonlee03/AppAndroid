import React, {useEffect, useState} from 'react';
import {Text,SafeAreaView,View, FlatList,ScrollView,RefreshControl} from 'react-native';

export default function App () {
  const [fruits, setFruits] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading]=useState(false)
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
     wait(2000).then(() =>
      setRefreshing(false)
    )}, []);
 
    useEffect(() => {
      setRefreshing(true);
      fetch("http://10.88.7.183:8080/fruits")
      .then(response => response.json())
      .then((responseJson) =>{
        console.log('getting data from fetch', responseJson);
        setFruits(responseJson)
        setLoading(true)
      })
      .catch(error => console.log('el error es', error));
      }, [])

      
      const renderItem = ({ item }) => {
        return (
          <View>  
            <Text>{item.name}</Text>
           <Text>{item.price}</Text>
      </View>
        )
      }
      if(loading=false){
        return(
          <ScrollView refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
              <FlatList
          data={fruits}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
          </ScrollView>
      ); 
      }else{
        return(
        <View>
          <Text>CARGANDO</Text>
        </View>
        )
      }
    
   
}

const wait = (timeout) =>
 { return new Promise(resolve => 
  { setTimeout(resolve, timeout); });}
