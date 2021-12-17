import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity, Image  } from 'react-native';
import { useState } from 'react';

const Rank = ({navigation}) => {

  return (
    

    <View style={styles.container}>
      <View style={{width:'100%', height:100, backgroundColor:'powderblue'}} >
          
      </View>
      <Text style={{fontSize:40, fontWeight:'bold', color:'gray', marginTop:60}} >Ranking</Text>
      <TouchableOpacity       
        style={{width:160, height:60, backgroundColor:'powderblue', borderRadius:5, margin:40, position:'absolute', top:'70%'}} >
        <Text 
        style={{fontSize:22, color:'#fff', textAlign:'center', paddingTop:15, fontWeight:'bold'}} >Play Again</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => {
        navigation.navigate('Main')
      }}       
        style={{width:100, height:60, backgroundColor:'brown', borderRadius:5, position:'absolute', top:'85%'}} >
        <Text 
        style={{fontSize:22, color:'#fff', textAlign:'center', paddingTop:15, fontWeight:'bold'}} >Quit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
  },

});

export default Rank;