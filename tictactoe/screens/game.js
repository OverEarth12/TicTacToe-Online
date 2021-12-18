import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { authentication } from "../stores/Auth.service";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import axios from "axios";

const Game = ({ navigation }) => {
  const [onPlayer, setOnPlayer] = useState(0)
  const [update, forceUpdate] = useState(0)

  const [xCount, setxCount] = useState(0)
  const [oCount, setoCount] = useState(0)

  const [field, setField] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const TileField = (props) => {
    if (field[props.num] == null) {
      return (
        <View
          style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0 }]}
        ></View>
      );
    } else if (field[props.num] == 1) {
      return (
        <Image
          style={{ width: 100, height: 100, resizeMode: "stretch" }}
          source={require("../assets/oooo.png")}
        ></Image>
      );
    } else if (field[props.num] == 0) {
      return (
        <Image
          style={{ width: 100, height: 100, resizeMode: "stretch" }}
          source={require("../assets/xxxx.png")}
        ></Image>
      );
    }

  };
  // console.log(field)
const checkWinner = () => {
  for (let j = 0; j < 7; j++) {
    if (field[j] === field[j + 3] && field[j + 3] === field[j + 6] && field[j] !== null && field[j + 3] !== null && field[j + 6] !== null) {
      return field[j + 3]
    } else if (field[j] === field[j + 1] && field[j + 1] === field[j + 2] && field[j] !== null && field[j + 1] !== null && field[j + 2] !== null) {
      return field[j + 1]
    } else if (field[j] === field[j + 4] && field[j + 4] === field[j + 8] && field[j] !== null && field[j + 4] !== null && field[j + 8] !== null) {
      return field[j + 4]
    } else if (field[j + 2] === field[j + 4] && field[j + 4] === field[j + 6] && field[j + 2] !== null && field[j + 4] !== null && field[j + 6] !== null) {
      return field[j + 2]
    }
}
}
  // if(onPlayer){
  //   console.log(authentication.getGameDetail.player, authentication.getProfile.displayName," ->Round: "+authentication.getGameDetail.participant)
  // }
  // else{
  //   console.log(authentication.getGameDetail.player, authentication.getProfile.displayName," ->Round: "+authentication.getGameDetail.host_name)
  // }

  if(checkWinner() !== undefined){
    console.log(checkWinner())
    if(Boolean(checkWinner()) === Boolean(authentication.getGameDetail.player)){
      navigation.navigate("Win")
    }
    else{
      navigation.navigate("Lose")
    }
  }

  if(onPlayer !== authentication.getGameDetail.player){
    const observerPlayer = setInterval(() => {
      axios.get(`/findMatchById?room_id=${authentication.getGameDetail._id}`).then((res) => {
        let dupField = field
        // console.log(authentication.getProfile.displayName +' -> ', res.data)
        if(!authentication.getGameDetail.player){
          if(res.data.oindex.length !== oCount){
            dupField[res.data.oindex[res.data.oindex.length - 1]] = !authentication.getGameDetail.player
            clearInterval(observerPlayer)
            setOnPlayer(0)
            setoCount(oCount+1)
            setField(dupField)
            forceUpdate(!update);
            }
          }
          else {
          if(res.data.xindex.length !== xCount){
            dupField[res.data.xindex[res.data.xindex.length - 1]] = !authentication.getGameDetail.player
            clearInterval(observerPlayer)
            setOnPlayer(1)
            setxCount(xCount+1)
            setField(dupField)
            forceUpdate(!update);
          }
        }
        })
      }, 1000);
    }
    
  const indexField = (num) => {
    if(onPlayer === authentication.getGameDetail.player){
      let dupField = field
      if(field[num] === null){
        dupField[num] = authentication.getGameDetail.player
        axios.get(`/updateTable?room_id=${authentication.getGameDetail._id}&onXO=${authentication.getGameDetail.player}&indexXO=${num}`).then(() => {
          setField(dupField)
          forceUpdate(!update);
          setOnPlayer(authentication.getGameDetail.player ? 0:1)
        })
      }
    }
  };

  // let nField = field;
  // nField[num] = xo;
  // setField(nField);
  // forceUpdate(!update);
  // setxo(xo == 0 ? 1 : 0);

  return (
    //   <View style={{width:'100%', height:150, backgroundColor:'powderblue'}} >
    //     <Text style={{fontSize:40, fontWeight:'bold', color:'gray', marginTop:60}} >GAME</Text>
    // </View>
    <View style={styles.container}>
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontWeight: "bold", fontSize: 36 }}>TicTacToe</Text>
      </View>
        <View style={{ width: '70%', flexDirection: "row", justifyContent: 'space-between', paddingTop: 50 }}>
          <View style={styles.playerGroup}>
          <Image
          style={{ width: 100, height: 100, resizeMode: "stretch" }}
          source={require("../assets/xxxx.png")}
        ></Image>
            <Text style={{fontWeight: 'bold'}}>{ authentication.getGameDetail.host_name }</Text>
          </View>
          <View style={styles.playerGroup}>
          <Image
          style={{ width: 100, height: 100, resizeMode: "stretch" }}
          source={require("../assets/oooo.png")}
        ></Image>
            <Text style={{fontWeight: 'bold'}}>{ authentication.getGameDetail.participant }</Text>
          </View>
        </View>
      <View style={styles.fieldContainer}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0 }]}
          >
            <TouchableOpacity onPress={() => indexField(0)}>
              <TileField num={0} />
            </TouchableOpacity>
          </View>
          <View style={[styles.tile, { borderTopWidth: 0 }]}>
            <TouchableOpacity onPress={() => indexField(1)}>
              <TileField num={1} />
            </TouchableOpacity>
          </View>
          <View
            style={[styles.tile, { borderTopWidth: 0, borderRightWidth: 0 }]}
          >
            <TouchableOpacity onPress={() => indexField(2)}>
              <TileField num={2} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={[styles.tile, { borderLeftWidth: 0 }]}>
            <TouchableOpacity onPress={() => indexField(3)}>
              <TileField num={3} />
            </TouchableOpacity>
          </View>
          <View style={styles.tile}>
            <TouchableOpacity onPress={() => indexField(4)}>
              <TileField num={4} />
            </TouchableOpacity>
          </View>
          <View style={[styles.tile, { borderRightWidth: 0 }]}>
            <TouchableOpacity onPress={() => indexField(5)}>
              <TileField num={5} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={[styles.tile, { borderBottomWidth: 0, borderLeftWidth: 0 }]}
          >
            <TouchableOpacity onPress={() => indexField(6)}>
              <TileField num={6} />
            </TouchableOpacity>
          </View>
          <View style={[styles.tile, { borderBottomWidth: 0 }]}>
            <TouchableOpacity onPress={() => indexField(7)}>
              <TileField num={7} />
            </TouchableOpacity>
          </View>
          <View
            style={[styles.tile, { borderBottomWidth: 0, borderRightWidth: 0 }]}
          >
            <TouchableOpacity onPress={() => indexField(8)}>
              <TileField num={8} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
    alignItems: "center",
    // justifyContent:'center',
  },

  fieldContainer: {
    flex: 1,
    backgroundColor: "beige",
    alignItems: "center",
    // justifyContent:'center'
    marginTop: 100
  },

  playerGroup:{
    flexDirection: 'column',
    alignItems: 'center',
  },

  tile: {
    width: 100,
    height: 100,
    borderWidth: 1,
  },
});

export default observer(Game);
