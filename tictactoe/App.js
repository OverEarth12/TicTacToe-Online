import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity, Image  } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


// import screen ที่เกี่ยวข้อง
// import Backup from "./src/screen/backup";
import Main from "./screens/main";
import Game from "./screens/game";
import Win from "./screens/win";
import Lose from "./screens/lose";
import Rank from "./screens/ranking";

import axios from "axios";

axios.defaults.baseURL = "http://192.168.1.129:8081";
// สร้าง navigator ตามโจทย์กำหนด
const MainNavigator = createNativeStackNavigator();




export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator
          screenOptions={{
            headerShown: false
          }}>
        <MainNavigator.Screen name="Main" component={Main}/>
        <MainNavigator.Screen name="Game" component={Game}/>
        <MainNavigator.Screen name="Rank" component={Rank}/>
        <MainNavigator.Screen name="Win" component={Win}/>
        <MainNavigator.Screen name="Lose" component={Lose}/>

      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
