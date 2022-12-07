import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Emotes() {
const DATA = [
{ id: '1',
title: 'PISITO',
Icon: 'account-circle',},
{ id: '2',
title: 'AYIYIYI',
Icon: 'alien',},
{ id: '3',
title: 'Odoo',
Icon: 'alpha-i-box',},
{ id: '4',
title: 'bomba',
Icon: 'alpha-j-box',},
{ id: '5',
title: 'YONLEE',
Icon: 'alpha-l-circle-outline',},
];


  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
         <Button 
          title={item.title}
          onPress={() => navigation.navigate("Details")} />
   
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

