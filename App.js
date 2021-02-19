
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import ExchangeScreen from './screens/ExchangeScreen';
import HomeScreen from './screens/HomeScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs'

export default class App extends Component {
  render(){
    return(
    <AppContainer/>
    )
  }
}


const AppTabNavigator = createBottomTabNavigator({
  Exchange: {
    screen: ExchangeScreen,
   
  },
 HomeScreen: {
    screen: HomeScreen,
  
  },
 
});

const switchNavigator = createSwitchNavigator({
  Welcome:{screen: WelcomeScreen},
  Tabs:{screen:AppTabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);

