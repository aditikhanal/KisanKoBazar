import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    FlatList
} from 'react-native'
import Load from './Load';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import {Card} from "native-base";


export default class Intro2 extends Component {
    render(){
        return(
            <ScrollView style={{backgroundColor: '#C8E6C9',}}>
                
                <Card style={{width:390,height:200,marginLeft:10,marginTop:20,borderColor:"green"}}>
                    <View flexDirection="row">
                    <Image source={require("../assets/img/annapurna.jpg")} style={{width:210,height:170}}></Image>
                    <View flexDirection="column">
                    <Text style={{alignSelf: 'center',
        color: '#434343',
        fontSize: 22,
        fontWeight: '700',
        fontFamily: 'ProximaNova-Regular',
        marginTop:30}}>Annapurna Foods</Text>
                    <Text style= {{alignSelf: 'center',
        color: '#434343',
        fontSize: 12,
        fontWeight: '700',
        fontFamily: 'ProximaNova-Regular',
        marginTop:30}}>Lahan-3 Siraha Nepal</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('annapurnadetails')}
              style={{backgroundColor:'#388E3C',width:100,height:35,marginTop:10,marginLeft:35,borderRadius:12,justifyContent:"center"}}>
                  <Text style={{
                               // fontFamily: 'ProximaNova-Regular',
                                fontSize: 14,
                               // lineHeight: 20,
                                fontWeight: '700',
                                color: '#C8E6C9',
                                marginLeft:10,
                                marginTop:10,
                               // marginLeft: 115,
                                marginTop: 0,
                                // justifyContent: 'center'
                  }}>View details</Text></TouchableOpacity> 
                    </View>
                    
               
                    </View>
           
                </Card>
                <Card style={{width:390,height:200,marginLeft:10,marginTop:20,borderColor:"green"}}>
                    <View flexDirection="row">
                    <Image source={require("../assets/img/om.jpg")} style={{width:210,height:170}}></Image>
                    <View flexDirection="column">
                    <Text style={{alignSelf: 'center',
        color: '#434343',
        fontSize: 20,
        fontWeight: '700',
        fontFamily: 'ProximaNova-Regular',
        marginTop:30}}>Om Khadya Udyog</Text>
                    <Text style= {{alignSelf: 'center',
        color: '#434343',
        fontSize: 12,
        fontWeight: '700',
        fontFamily: 'ProximaNova-Regular',
        marginTop:30}}>Padam Road,Alau-7,Birgunj</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('omdetails')}
              style={{backgroundColor:'#388E3C',width:100,height:35,marginTop:10,marginLeft:35,borderRadius:12,justifyContent:"center"}}>
                  <Text style={{
                               // fontFamily: 'ProximaNova-Regular',
                                fontSize: 14,
                               // lineHeight: 20,
                                fontWeight: '700',
                                color: '#C8E6C9',
                                marginLeft:10,
                                marginTop:10,
                               // marginLeft: 115,
                                marginTop: 0,
                                // justifyContent: 'center'
                  }}>View details</Text></TouchableOpacity> 
                    </View>
                    
               
                    </View>
           
                </Card>
                <Card style={{width:390,height:200,marginLeft:10,marginTop:20,borderColor:"green"}}>
                    <View flexDirection="row">
                    <Image source={require("../assets/img/gharana.jpg")} style={{width:210,height:150,marginTop:25}}></Image>
                    <View flexDirection="column">
                    <Text style={{alignSelf: 'center',
        color: '#434343',
        fontSize: 20,
        fontWeight: '700',
        marginRight:20,
        width:200,
        fontFamily: 'ProximaNova-Regular',
        marginTop:30}}>Gharana Foods Pvt. Ltd.</Text>
                    <Text style= {{alignSelf: 'center',
        color: '#434343',
        fontSize: 12,
        fontWeight: '700',
        width:200,
        fontFamily: 'ProximaNova-Regular',
        marginTop:30}}>Mayadevi-8, SiddharthaNagar</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('gharanadetails')}
              style={{backgroundColor:'#388E3C',width:100,height:35,marginTop:10,marginLeft:35,borderRadius:12,justifyContent:"center"}}>
                  <Text style={{
                               // fontFamily: 'ProximaNova-Regular',
                                fontSize: 14,
                               // lineHeight: 20,
                                fontWeight: '700',
                                color: '#C8E6C9',
                                marginLeft:10,
                                marginTop:10,
                               // marginLeft: 115,
                                marginTop: 0,
                                // justifyContent: 'center'
                  }}>View details</Text></TouchableOpacity> 
                    </View>
                    
               
                    </View>
           
                </Card>
            
            
            
            </ScrollView>
  
        )
    }
}
let ScreenHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    scrollView: {
    
    height: ScreenHeight,
  },
    image: {
        width: 258,
        height: 258,
        alignSelf: 'center',
        marginTop: 100
    },
    textTitle: {
        alignSelf: 'center',
        color: '#434343',
        fontSize: 22,
        fontWeight: '700',
        fontFamily: 'ProximaNova-Regular',
        marginTop:30
    },
    detail: {
        alignSelf: 'center',
        width: 296,
        height: 88,
        marginTop: 10,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '400',
        color: '#767676',
        lineHeight: 20,
        fontFamily:'ProximaNova-Regular'

    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'ProximaNova-Regular',
        fontWeight: '700',


    },
    button: {
        backgroundColor: '#00b0f2',
        width: 335,
        height: 56,
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: 'center',
        marginVertical: 10,
        borderRadius: 5,
        marginTop: 60
    },
    skip: {
        color: '#00b0f2',
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '400',
        fontFamily: "ProximaNova-Regular",
        marginTop: 25
    }

})