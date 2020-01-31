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
  import Register from "../pages/RegisterFarmers.js"
  import Login from "../pages/LoginFarmers.js"
  import bottomTabNavigator from './bottomNavigator'
  import cropinfo from "../pages/cropinfo.js"
  import juteinfo from "../pages/juteinfo.js"
  import topTabNavigator from './topNavigator'
  import topTabNavigator2 from './topNavigator2'
  import { createStackNavigator } from 'react-navigation-stack';
  import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
  import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
  
  
  const DashboardTabNavigator2 = topTabNavigator
  const DashboardStackNavigator2 = createStackNavigator({
    DashboardTabNavigator2: {
      screen: DashboardTabNavigator2,
      navigationOptions : {
      
        title: 'Register   दर्ता गर्नुहोस',
        headerStyle: {
          
              backgroundColor: '#388E3C',
            
              height: 63,
              
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'ProximaNova-Semibold',
          fontSize: 20,
         // lineHeight: 20,
          fontWeight: '600',
          color: '#fff',
          marginLeft: 100,
          marginRight: 74,
          marginBottom: 23,
          marginTop: 45
        },
       
    },
   
     }
  });
  const DashboardTabNavigator3 = topTabNavigator2
  const DashboardStackNavigator3 = createStackNavigator({
    DashboardTabNavigator2: {
      screen: DashboardTabNavigator3,
      navigationOptions : {
      
        title: 'Login',
        headerStyle: {
          
              backgroundColor: '#388E3C',
            
              height: 63,
              
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'ProximaNova-Semibold',
          fontSize: 20,
         // lineHeight: 20,
          fontWeight: '600',
          color: '#fff',
          marginLeft: 100,
          marginRight: 74,
          marginBottom: 23,
          marginTop: 45
        },
       
    },
   
     }
  });

  
  const DashboardTabNavigator = bottomTabNavigator
  const DashboardStackNavigator = createStackNavigator({
    DashboardTabNavigator: {
      screen: DashboardTabNavigator,
      navigationOptions: {
        header: ()=> false
        
  
      }
    }
  });

  const AppSwitchNavigator = createSwitchNavigator({
    Logo: { screen: Logo },
    Intro1:{screen:Intro1},
    Intro2:{screen:Intro2},
    Intro3:{screen:Intro3},
    cropinfo:{screen:cropinfo},
    juteinfo:{screen:juteinfo},
    Register:{screen:Register},
    Login:{screen:Login},
    Dashboard:{screen:DashboardStackNavigator},
    Dashboard2:{screen:DashboardStackNavigator2},
    Dashboard3:{screen:DashboardStackNavigator3}

    })

const App = createAppContainer(AppSwitchNavigator);
export default App;