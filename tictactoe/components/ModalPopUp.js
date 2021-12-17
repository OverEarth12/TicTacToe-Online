import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react'
import { observer } from "mobx-react-lite";
import { authentication } from "../stores/Auth.service";

import {
    StyleSheet,
    Text,
    View,
    Modal,
    Alert,
    Pressable,
  } from "react-native";
const ModalPopUp = (props) => {
    const [modalOnWatingMatch, setModalOnWatingMatch] = useState(props.FindMatch);
    // console.log(props.FindMatch)
    // console.log(props.Profile)
    if(modalOnWatingMatch){
        axios.get("/findAllQueue").then((res) => {
            if(res.data.length > 0){
                console.log("Found")
                axios.get(`/joinQueue?id=${res.data[0]._id}&name=${res.data[0].host_name}&participant=${authentication.getProfile.displayName}`).then((res) => {
                    console.log("Joining")
                    authentication.setGameDetail(res.data)
                    setModalOnWatingMatch(false)
                })
            }
            else{
                axios.get(`/newQueue?name=${authentication.getProfile.displayName}`).then((res) => {
                    console.log("New Queue")
                    const observerInterval = setInterval(() => {
                        axios.get(`/observerQueueById?id=${res.data._id}`).then((observerQueue) => {
                            if(observerQueue.data.participant){
                                clearInterval(observerInterval)
                                authentication.setGameDetail(observerQueue.data)
                                setModalOnWatingMatch(false)
                            }
                        })
                    }, 1000);
                })
            }
        })
    }
    return (
        <Modal
        animationType="slide"
        transparent={false}
        visible={modalOnWatingMatch}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalOnWatingMatch(!modalOnWatingMatch);
        }}
      >
       <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={[styles.modalText, {fontWeight: "bold"}]}>Finding Match..</Text>
            <Text>{props.Profile.displayName}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose, {marginTop: 20}]}
              onPress={() => setModalOnWatingMatch(false)}
              >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    )
}

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

  export default observer(ModalPopUp)