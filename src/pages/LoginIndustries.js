import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    TextInput,
    FlatList
} from 'react-native'
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';


export default class Intro extends Component {
    state={
        text1:"",

    }

    render() {
        return (
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                <View>
                    
                <View >
                     <Image source={require('../assets/img/58116.png')} style={styles.image} /> 
                    
                 
                  
                                                       <TextInput  onChangeText={text2 => this.setState({ text2})}
                            style={{width:335,
                                    height:40,
                                    backgroundColor:"#fff",
                                    borderColor:'gray',
                                    borderWidth:0.5,
                                    marginTop:10,
                                    borderRadius:8,
                                
                                    marginLeft:30}}
                                    placeholder="Enter Industry's Email"
                                    autoCapitalize="none"
                                    ></TextInput>
                                    <TextInput  onChangeText={text2 => this.setState({ text2})}
                            style={{width:335,
                                    height:40,
                                    backgroundColor:"#fff",
                                    borderColor:'gray',
                                    borderWidth:0.5,
                                    marginTop:10,
                                    borderRadius:8,
                                    marginLeft:30}}
                                    placeholder="Enter password"
                                    autoCapitalize="none"
                                    secureTextEntry={true}
                                    ></TextInput>
                                      
                    </View>
                    <TouchableOpacity  style={{marginTop:50,justifyContent:"center",marginLeft:75}}
                        onPress={() => this.props.navigation.navigate('Dashboard2')}>
                       

                        <Text style={{color:"black", fontSize:16}}>
                            New here? Click here to Register
                    </Text>
                    </TouchableOpacity>
                    

                    <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('Dashboard')}>
                        

                        <Text style={styles.buttonText}>
                            Login
                    </Text>
                    </TouchableOpacity>
                
                </View>
            </ScrollView>
        )
    }
}
let ScreenHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    scrollView: {
   backgroundColor: '#C8E6C9',
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
       // height: 88,
        marginTop: 10,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '400',
        color: '#767676',
        lineHeight: 20,
        fontFamily:'ProximaNova-Semibold'

    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'ProximaNova-Regular',
        fontWeight: '700',


    },
    button: {
        backgroundColor: '#388E3C',
        width: 200,
        height: 56,
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: 'center',
        marginVertical: 10,
        borderRadius:50,
        marginTop: 10
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