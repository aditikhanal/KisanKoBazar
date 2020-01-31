import RegisterFarmers from "../pages/RegisterFarmers"
import RegisterIndustries from "../pages/RegisterIndustries"
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

  import React, { Component } from 'react';
  import { View, TouchableOpacity, Image, Dimensions } from 'react-native';

const topTabNavigator=createMaterialTopTabNavigator(
    {
      Farmers: {
        screen:RegisterFarmers
        
      },
      Industries:{screen:RegisterIndustries},
      
  },
  {
    initialRouteName: "Farmers",
    /* The header config from HomeScreen is now here */

    
    
    tabBarOptions: {
      activeTintColor: '#388E3C',
      upperCaseLabel: false,
      activeColor:"#388E3C",
      inactiveTintColor: '#9b9b9b',
      labelStyle: {
        fontFamily: 'ProximaNova-Semibold',
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '600',
      
        
        
      },
      indicatorStyle: {
        borderBottomColor: '#388E3C',
        borderBottomWidth: 3,
      },
      style: {
        backgroundColor: '#fff',
        borderRadius:8,
      },
    }
  }
  
  )
  export default topTabNavigator;