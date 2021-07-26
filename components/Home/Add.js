import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity, StatusBar,
} from "react-native";

const Add = ({ navigation }) => {
    const[count, setCount]= useState(1);
  
  return (
    <View >
      <Text>My Add page</Text>

      <Button
        title="sub"
        onPress={() => setCount(count-1)}
        
      />
      <Text style={{fontSize:30}}>{count}</Text>
      <Button
        title="Add"
        onPress={() => setCount(count+1)}
        
      />
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
export default Add;