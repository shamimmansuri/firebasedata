import React, { useState } from "react";
import UserName from "./UserName";
import Address from "./Address";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity, StatusBar,
} from "react-native";

const Phone = ({navigation, route}) => {
    const [phone, setPhone] = useState("");
    const{username} = route.params;
    console.log("name", username);
  return (
    <View style={styles.container}>
       <Text>My Phone page</Text>
      <Text>My Name:- {username}</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone"
          placeholderTextColor="#003f5c"
          onChangeText={phoneNo => setPhone(phoneNo)}
          value={phone}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Address', {username: username, userphone: phone})}>
        <Text style={styles.loginText}>Next>></Text>
      </TouchableOpacity>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
    width: 90,
    height: 90,
    borderRadius:30,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
  txtinput: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,

  },
});
export default Phone;