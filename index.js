/**
 * @format
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import App from './App';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { name as appName } from './app.json';



AppRegistry.registerComponent(appName, () => App);
