
import React, { Component } from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import ExchangeScreen from './screens/ExchangeScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import CustomSideBarMenu from './components/CustomSideBarMenu';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import {createDrawerNavigator} from 'react-navigation-drawer';

export default class App extends Component {
  render(){
    return(
    <AppContainer/>
    )
  }
}


const AppTabNavigator = createBottomTabNavigator({
  Home: {screen: HomeScreen},
  Exchange: {screen: ExchangeScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName === "Home"){
        return(
          <Image
          source={require("./assets/home.png")}
          style={{width:50, height:31}}
        />
        )

      }
      else if(routeName === "Exchange"){
        return(
          <Image
          source={require("./assets/add.png")}
          style={{width:50, height:31,}}
        />)

      }
    }
  })
}
);


const AppDrawerNavigator = createDrawerNavigator({
  Home:{
    screen: AppTabNavigator
  },
  Settings:{
    screen:SettingsScreen
  },
},
{
  contentComponent: CustomSideBarMenu
},
{
  initialRouteName:'Home'
}
)



const switchNavigator = createSwitchNavigator({
  Welcome:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator},
  Tabs:{screen:AppTabNavigator},

})

const AppContainer =  createAppContainer(switchNavigator);

