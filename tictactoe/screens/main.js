import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity, Image  } from 'react-native';
import { useState } from 'react';

const Main = ({navigation}) => {

  return (
    

    <View style={styles.container}>
      <Image style={{width: 300, height:300, marginTop:60,resizeMode: 'stretch'}} source={require("../assets/logo.png")}></Image>      
      <TextInput  
      style={{padding:10, margin:80, borderWidth:'1', borderColor:'black', width:300, height:50}} keyboardType='default' placeholder={'fill your name'} autoCapitalize='none' autoCorrect={false}/>
   <TouchableOpacity 
        onPress={() => {
          navigation.navigate('Game')
        }}
        style={{width:160, height:60, backgroundColor:'powderblue', borderRadius:5, margin:10}} >
        <Text 
        style={{fontSize:22, color:'#fff', textAlign:'center', paddingTop:15, fontWeight:'bold'}} >Start</Text>
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

export default Main;