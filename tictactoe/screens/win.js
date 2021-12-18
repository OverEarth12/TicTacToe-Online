import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity, Image  } from 'react-native';
import { observer } from "mobx-react-lite";

const WinScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{width:'100%', height:150, backgroundColor:'powderblue'}} >
      </View>
      <Text style={{fontSize:40, fontWeight:'bold', color:'gray', marginTop:60}} >YOU WIN!</Text>
      <Image style={{width: 300, height:300, marginTop:50,resizeMode: 'stretch'}} source={require("../assets/2222.png")}></Image>
      <TouchableOpacity   
      onPress={() => {
        navigation.navigate('Main')
      }}    
        style={{width:160, height:60, backgroundColor:'powderblue', borderRadius:5, margin:40}} >
        <Text 
        style={{fontSize:22, color:'#fff', textAlign:'center', paddingTop:15, fontWeight:'bold'}} >Play Again</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => {
        navigation.navigate('Main')
      }}
        style={{width:100, height:60, backgroundColor:'brown', borderRadius:5}} >
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

export default observer(WinScreen);