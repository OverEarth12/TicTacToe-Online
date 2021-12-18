import axios from "axios";
import { observer } from "mobx-react-lite";
import { authentication } from "../stores/Auth.service";

import React, { useState } from "react";
import ModalPopUp from "../components/ModalPopUp";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Modal,
  Alert,
  Pressable,
} from "react-native";

const Main = ({ navigation }) => {
  const [playerName, setPlayerName] = useState("");
  // const [isNewPlayer, setIsNewPlayer] = useState(false);
  const [onQueue, setOnQueue] = useState(false);
  let validateName = {};
  if (playerName.length > 2) {
    validateName = {
      display: "inline",
    };
  } else {
    validateName = {
      display: "none",
    };
  }

  if(onQueue){
    axios.get("/findAllQueue").then((res) => {
        if(res.data.length > 0){
            console.log("Found")
            axios.get(`/joinQueue?id=${res.data[0]._id}&name=${res.data[0].host_name}&participant=${authentication.getProfile.displayName}`).then((res) => {
                console.log("Joining")
                authentication.setGameDetail(Object.assign({"player": 1}, res.data))
                navigation.navigate("Game")
                setOnQueue(false)
            })
        }
        else{
            axios.get(`/newQueue?name=${authentication.getProfile.displayName}`).then((res) => {
                console.log("New Queue")
                authentication.setGameDetail(Object.assign({"player": 0}, res.data))
                const observerInterval = setInterval(() => {
                    axios.get(`/observerQueueById?id=${res.data._id}`).then((observerQueue) => {
                        if(observerQueue.data.participant){
                          axios.get(`/deleteQueueById?id=${res.data._id}`).then(() => {
                            axios.get(`/createMatch?room_id=${res.data._id}`).then(() => {
                              clearInterval(observerInterval)
                              navigation.navigate("Game")
                              setOnQueue(false)
                            })
                          })
                        }
                      })
                    }, 1000);
            })
        }
    })
}
const cancelMatch = () => {
  setOnQueue(false)
  if(authentication.getGameDetail._id !== null){
    axios.get(`/deleteQueueById?id=${authentication.getGameDetail._id}`).then(() => {
      console.log("Cancel Queue")
    })
  }
}

  const authenticateProfile = () => {
    // authentication.setProfile()
    axios.get(`/findPlayerByName?name=${playerName}`).then((res) => {
      if (res.data === "Player does not exist") {
        axios.get(`/new-player?name=${playerName}`).then((res) => {
          console.log("Create New Player");
          authentication.setProfile(res.data)
        authentication.setProfile({displayName: "Test"})
          setOnQueue(true)
        })
      } else {
        authentication.setProfile(res.data)
        setOnQueue(true)
        console.log("Finding Queue");
      }
    });
  };

  const controllName = (name) => {
    setPlayerName(name)
    setOnQueue(false)
  }

  // const ModalPopUpQueue = () => {
  //   return <ModalPopUp FindMatch={onQueue} Profile={authentication.getProfile}/>
  // }

  return (
    <View style={styles.container}>
      {/* <ModalPopUpQueue/> */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={onQueue}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setOnQueue(!onQueue);
        }}
      >
       <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={[styles.modalText, {fontWeight: "bold"}]}>Finding Match..</Text>
            <Text>{authentication.getProfile.displayName}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose, {marginTop: 20}]}
              onPress={() => cancelMatch()}
              >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Image
        style={{
          width: 300,
          height: 300,
          marginTop: 60,
          resizeMode: "stretch",
        }}
        source={require("../assets/logo.png")}
      ></Image>
      <TextInput
        style={{
          paddingVertical: 10,
          paddingHorizontal: 20,
          margin: 80,
          borderWidth: 3,
          borderColor: "brown",
          width: 300,
          height: 50,
          borderRadius: 20,
        }}
        onChangeText={(e) => controllName(e)}
        keyboardType="default"
        placeholder={"fill your name"}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity
        onPress={() => {
          authenticateProfile();
        }}
        style={[
          validateName,
          {
            width: 160,
            height: 60,
            backgroundColor: "powderblue",
            borderRadius: 5,
            margin: 10,
          },
        ]}
      >
        <Text
          style={{
            fontSize: 22,
            color: "#fff",
            textAlign: "center",
            paddingTop: 15,
            fontWeight: "bold",
          }}
        >
          Start
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
  //   backgroundColor: "white",
    borderRadius: 20,
    padding: 40,
    paddingBottom: 15,
    alignItems: "center",
  //   shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 30,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default observer(Main);
