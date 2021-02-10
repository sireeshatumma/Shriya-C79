
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import DonateScreen from './screens/DonateScreen';
import RequestScreen from './screens/RequestScreen';
export default class App extends Component {
  render(){
    return(
    <AppContainer/>
    )
  }
}



const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Donate:{screen:DonateScreen},
  Request:{screen:RequestScreen}
})

const AppContainer =  createAppContainer(switchNavigator);

