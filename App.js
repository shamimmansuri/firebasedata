
import * as React from 'react';
import { Button, StyleSheet, TextInput, View, Text, ActivityIndicator, Alert } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import UserName from './components/Home/UserName';
import Phone from './components/Home/Phone';
import Address from './components/Home/Address';
import Submit from './components/Home/Submit';
import Add from './components/Home/Add';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
      <Text>Home Screen</Text>
      <Button
        title="Login Here"
        onPress={() => navigation.navigate('Login')}
        
      />
      <Button
        title="Registration Here"
        onPress={() => navigation.navigate('SignUp')} />

        <View>
        <Text>My Home page</Text>
      <Text>fill form click button</Text>
      <Button
        title="Login Here"
        onPress={() => navigation.navigate('UserName')}
        
      />
      <View style={{margin:30}}>
       <Button
        title="Addition"
        onPress={() => navigation.navigate('Add')}
        
      /></View>
        </View>
    </View>
  );
}

function TanxForSignUp({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Successfully SignUP</Text>
      <Text>Please click here to Login</Text>
      <Button
        title="Login Here"
        onPress={() => navigation.navigate('Login')}
        
      />
     
    
    </View>
  );
}

function TanxForLoginUp({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Successfully Login</Text>
      <Text>Please click here to Home</Text>
      <Button
        title="back"
        onPress={() => navigation.navigate('Home')}
        
      />
      
    
    </View>
  );
}


const Stack = createStackNavigator();

// function Loginx() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//      <Text>hdfgv</Text>
//      <Button title="me" onPress={()=> navigation.navigate('Login')} />
//     </View>
//   );
// }

// Loginx = () =>
// {
//    props.navigation.navigate('Login');
   
// }
// function Loginxx({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

//       <Button title="me" onPress={()=> navigation.navigate('Login')} />
//     </View>
//   );
// }
const App = () => {


  return (
   
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TanxForLoginUp" component={TanxForLoginUp} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="TanxForSignUp" component={TanxForSignUp} />
      <Stack.Screen name="UserName" component={UserName} />
      <Stack.Screen name="Phone" component={Phone} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="Submit" component={Submit} />
      <Stack.Screen name="Add" component={Add} />



      {/* <Stack.Screen name="Home" component={Home} /> */}
    </Stack.Navigator>
  </NavigationContainer>
  
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',

    alignItems: 'center',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
