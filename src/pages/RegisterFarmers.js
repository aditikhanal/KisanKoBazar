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
    Picker

} from 'react-native'
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import {CheckBox} from "react-native-elements"





export default class Intro extends Component {
    constructor() {
        super();
  
        this.state = {
            text1:"",
          checked1: false,
          checked2: false,
          checked3: false,
          checked4: false,
          checked5: false,
          checked6: false,
          checked7: false,
          checked8: false,
          
          checked9: false,
        };
      }
  

    render() {
        return (
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                <View>
                    
                <View >
                    {/* <Image source={require('../images/emergency.png')} style={styles.image} /> */}
                    
                  <TextInput  onChangeText={text1 => this.setState({ text1})}
                            style={{width:335,
                                    height:40,
                                    backgroundColor:"#fff",
                                    borderColor:'gray',
                                    borderWidth:0.5,
                                    marginTop:20,
                                    borderRadius:8,
                                    marginLeft:30}}
                                    placeholder="Enter your Name"></TextInput>
                   <TextInput  onChangeText={text2 => this.setState({ text2})}
                            style={{width:335,
                                    height:40,
                                    backgroundColor:"#fff",
                                    borderColor:'gray',
                                    borderWidth:0.5,
                                    marginTop:10,
                                    borderRadius:8,
                                    marginLeft:30}}
                                    placeholder="Enter your Address"></TextInput>
                                                       <TextInput  onChangeText={text2 => this.setState({ text2})}
                            style={{width:335,
                                    height:40,
                                    backgroundColor:"#fff",
                                    borderColor:'gray',
                                    borderWidth:0.5,
                                    marginTop:10,
                                    borderRadius:8,
                                    marginLeft:30}}
                                    placeholder="Enter your Phone Number"
                                    keyboardType='numeric'></TextInput>
                   
                                                       <TextInput  onChangeText={text2 => this.setState({ text2})}
                            style={{width:335,
                                    height:40,
                                    backgroundColor:"#fff",
                                    borderColor:'gray',
                                    borderWidth:0.5,
                                    marginTop:10,
                                    borderRadius:8,
                                    marginLeft:30}}
                                    placeholder="Enter your Email"
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
                                      <TextInput  onChangeText={text2 => this.setState({ text2})}
                            style={{width:335,
                                    height:40,
                                    backgroundColor:"#fff",
                                    borderColor:'gray',
                                    borderWidth:0.5,
                                    marginTop:10,
                                    borderRadius:8,
                                    marginLeft:30}}
                                    placeholder="Confirm password"
                                    autoCapitalize="none"
                                    secureTextEntry={true}
                                    ></TextInput>
          <Text style={styles.detail}>Select the land capacity of your farm</Text>
        <View flexDirection="row">
        <TextInput style={{backgroundColor:"#fff", width:100,marginLeft:40,borderColor:"black"}}></TextInput>
          <Picker
                  selectedValue={this.state.language}
                  style={{height: 50, width: 150}}
                  onValueChange={(itemValue, itemIndex) =>
                  this.setState({language: itemValue})
  }>
  <Picker.Item label="Bigha (बिघा)" value="Bigha (बिघा)" />
  <Picker.Item label="Ropani (रोपनी)" value="Ropani (रोपनी)" />
  <Picker.Item label="Hectare(हेक्टर)" value="Hectare(हेक्टर)" />
</Picker>
</View>
          <Text style={styles.detail}>Select the crops in your farm</Text>
            <CheckBox containerStyle={{width:200,marginLeft:40}}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            title='Rice चामल'
            checkedColor='green'
            checked={this.state.checked1}
            onPress={() => this.setState({ checked1: !this.state.checked1 })}
          />
          <CheckBox containerStyle={{width:200,marginLeft:40}}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            title='corn मकै'
            checkedColor='green'
            checked={this.state.checked2}
            onPress={() => this.setState({ checked2: !this.state.checked2 })}
          />
          <CheckBox containerStyle={{width:200,marginLeft:40}}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            title='wheat गहुँ '
            checkedColor='green'
            checked={this.state.checked3}
            onPress={() => this.setState({ checked3: !this.state.checked3 })}
          />
            <CheckBox containerStyle={{width:200,marginLeft:40}}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            title='millet बाजरा'
            checkedColor='green'
            checked={this.state.checked4}
            onPress={() => this.setState({ checked4: !this.state.checked4 })}
          />
            <CheckBox containerStyle={{width:200,marginLeft:40}}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            title='barley जौ'
            checkedColor='green'
            checked={this.state.checked5}
            onPress={() => this.setState({ checked5: !this.state.checked5})}
          />
            <CheckBox containerStyle={{width:200,marginLeft:40}}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            title='jute जूट'
            checkedColor='green'
            checked={this.state.checked6}
            onPress={() => this.setState({ checked6: !this.state.checked6 })}
          />
            <CheckBox containerStyle={{width:200,marginLeft:40}}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            title='coffee कफी'
            checkedColor='green'
            checked={this.state.checked7}
            onPress={() => this.setState({ checked7: !this.state.checked7 })}
          />
           <CheckBox containerStyle={{width:200,marginLeft:40}}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            title='sugarcane उखु'
            checkedColor='green'
            checked={this.state.checked8}
            onPress={() => this.setState({ checked8: !this.state.checked8 })}
          />
           <CheckBox containerStyle={{width:200,marginLeft:40}}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            title='tobacco सुर्ती'
            checkedColor='green'
            checked={this.state.checked9}
            onPress={() => this.setState({ checked9: !this.state.checked9 })}
          />
            
              
              
              
              
              
                      
                      

                    </View>
                    <TouchableOpacity  style={{marginTop:50,justifyContent:"center",marginLeft:75}}
                        onPress={() => this.props.navigation.navigate('Dashboard3')}>
                       

                        <Text style={{color:"black", fontSize:16}}>
                            Already Registered? Click here to login
                    </Text>
                    </TouchableOpacity>
                    

                    <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('Dashboard')}>
                        

                        <Text style={styles.buttonText}>
                            Register
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
        //alignSelf: 'center',
        width: 296,
       // height: 88,
        marginTop: 10,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
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