import { createBottomTabNavigator } from 'react-navigation-tabs';
import Farmers from '../pages/Farmers.js'
import Industries from '../pages/Industries.js'
import Upload from "../pages/Upload.js"
import {
    createAppContainer,
    createSwitchNavigator,
  } from 'react-navigation';
  import React, { Component } from 'react';
  import { View, TouchableOpacity, Image, Dimensions } from 'react-native';
const bottomTabNavigator = createBottomTabNavigator({
    Farmers: {
      screen: Farmers,
      navigationOptions: {
        tabBarLabel: 'Farmers',
        tabBarIcon: ({ tintColor }) => (
          <View>
            {/* <Image source={require('../images/footer_home.png')} style={{ tintColor: tintColor, height: 20, width: 20, marginRight: 5 }} /> */}
          </View>
        )
      }
    },
    Industries: {
      screen: Industries,
      navigationOptions: {
        tabBarLabel: 'Industries',
        tabBarIcon: ({ tintColor }) => (
          <View>
            {/* <Image source={require('../images/footer_emergency.png')} style={{ tintColor: tintColor, height: 20, width: 20, marginRight: 5 }} /> */}
          </View>
        )
      }
    },
Upload: {
      screen: Upload,
      navigationOptions: {
        tabBarLabel: 'Upload',
        tabBarIcon: ({ tintColor }) => (
          <View>
            {/* <Image source={require('../images/footer_support.png')} style={{ tintColor: tintColor, height: 25, width: 25, marginRight: 5 }} /> */}
          </View>
        )
      }
    },
 
    })
    export default bottomTabNavigator;