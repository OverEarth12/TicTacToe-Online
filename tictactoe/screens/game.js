import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity, Image  } from 'react-native';
import { useState } from 'react';


const Win = ({navigation}) => {
  const [field, setField] = useState([null,null,null,null,null,null,null,null,null]);
  const [update, forceUpdate] = useState(true);
  const [xo, setxo] = useState(1);
  const TileField = (props) => {
    if(field[props.num] == null){
      return(
        <View style={[styles.tile,{borderLeftWidth:0, borderTopWidth:0}]}></View>
        
      );
    }else if(field[props.num] == 0){
      return(<Image style={{width: 100, height:100,resizeMode: 'stretch'}} source={require("../assets/oooo.png")}></Image>);
    }else if(field[props.num] == 1){
      return(<Image style={{width: 100, height:100,resizeMode: 'stretch'}} source={require("../assets/xxxx.png")}></Image>);
    }
    // return(
    //   <View>
    //     {field[props.num === null] && 
    //   <View style={[styles.tile,{borderLeftWidth:0, borderTopWidth:0}]}></View>}
    //   {field[props.num === 0] && 
    //   <Image style={{width: 100, height:100,resizeMode: 'stretch'}} source={require("../assets/oooo.png")}></Image>}
    //   {field[props.num === 1] && 
    //   <Image style={{width: 100, height:100,resizeMode: 'stretch'}} source={require("../assets/xxxx.png")}></Image>}
    //   </View>
    // );
    // return(
    //   t[props.num]
    // );
  }

  const play = (num) => {
    console.log(num)
    let nField = field;
    nField[num] = xo;
    setField(nField)
    console.log(field)
    forceUpdate(!update)
    setxo(xo == 0 ? 1 : 0)
  }

  return (

    //   <View style={{width:'100%', height:150, backgroundColor:'powderblue'}} >
    //     <Text style={{fontSize:40, fontWeight:'bold', color:'gray', marginTop:60}} >GAME</Text>          
    // </View>
    <View style={styles.container}>

        <View style={{flexDirection: 'row'}}>
          <View style={[styles.tile,{borderLeftWidth:0, borderTopWidth:0}]}>
          <TouchableOpacity onPress={() => play(0)}><TileField num={0}/></TouchableOpacity>
          </View>
          <View style={[styles.tile,{ borderTopWidth:0}]} >
          <TouchableOpacity onPress={() => play(1)}><TileField num={1}/></TouchableOpacity>
          </View>
          <View style={[styles.tile,{ borderTopWidth:0, borderRightWidth:0}]} >
          <TouchableOpacity onPress={() => play(2)}><TileField num={2}/></TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={[styles.tile,{borderLeftWidth:0,}]} >
          <TouchableOpacity onPress={() => play(3)}><TileField num={3}/></TouchableOpacity>
          </View>
          <View style={styles.tile} >
          <TouchableOpacity onPress={() => play(4)}><TileField num={4}/></TouchableOpacity>
          </View>
          <View style={[styles.tile,{borderRightWidth:0,}]} >
          <TouchableOpacity onPress={() => play(5)}><TileField num={5}/></TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={[styles.tile,{borderBottomWidth:0,borderLeftWidth:0,}]} >
          <TouchableOpacity onPress={() => play(6)}><TileField num={6}/></TouchableOpacity>
          </View>
          <View style={[styles.tile,{borderBottomWidth:0,}]} >
          <TouchableOpacity onPress={() => play(7)}><TileField num={7}/></TouchableOpacity>
          </View>
          <View style={[styles.tile,{borderBottomWidth:0,borderRightWidth:0}]} >
          <TouchableOpacity onPress={() => play(8)}><TileField num={8}/></TouchableOpacity>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent:'center',
  },

  tile:{
    width:100,
    height:100,
    borderWidth:1,
  }

});

export default Win;