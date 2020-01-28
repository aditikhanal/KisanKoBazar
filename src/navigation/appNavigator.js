import {
    createAppContainer,
    createSwitchNavigator,
  } from 'react-navigation';
  import React, { Component } from 'react';
  import { View, TouchableOpacity, Image, Dimensions } from 'react-native';
  import Logo from '../pages/Logo.js'
  import Intro1 from '../pages/Intro1.js'
  import Intro2 from '../pages/Intro2.js'
  import Intro3 from '../pages/Intro3.js'
  import Register from "../pages/RegisterScreen.js"
  import Login from "../pages/LoginScreen.js"
  import bottomTabNavigator from './bottomNavigator'
  import { createStackNavigator } from 'react-navigation-stack';
  
  
  const DashboardTabNavigator = bottomTabNavigator

  const DashboardStackNavigator = createStackNavigator({
    DashboardTabNavigator: {
      screen: DashboardTabNavigator,
      navigationOptions: {
        header: ()=> false
        
      //   headerLeft: (
        
      //     <Image source={require('../images/Hamburger.png')} style={{ height: 15, width: 20, marginLeft: 25, marginTop: 31, tintColor:'black' }} />
  
      //   )
      }
    }
  });

  const AppSwitchNavigator = createSwitchNavigator({
    Logo: { screen: Logo },
    Intro1:{screen:Intro1},
    Intro2:{screen:Intro2},
    Intro3:{screen:Intro3},
    Register:{screen:Register},
    Login:{screen:Login},
    Dashboard:{screen:DashboardStackNavigator}

    })

const App = createAppContainer(AppSwitchNavigator);
export default App;