import React from 'react';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import { ScrollView, View, Text, TextInput, Button,FlatList,Image,TouchableOpacity } from 'react-native';
import Load from './Load';




class Todos extends React.Component {


     render(){
       return(
       

         <ScrollView style={{backgroundColor:"#C8E6C9"}}>
           <View flexDirection="row">
            
          <TouchableOpacity onPress={() => this.props.navigation.navigate('cropinfo')}>
          <Image style={{marginTop:20,marginLeft:5, width:200,height:200}}source={ require('../assets/img/rice.jpg')} ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('juteinfo')}>
            
          <Image style={{marginTop:20,marginLeft:4, width:200,height:200}} source={require('../assets/img/jute.jpg')} ></Image>
          </TouchableOpacity>
          </View>
          <View flexDirection="row">
          <TouchableOpacity onPress={() => this.props.navigation.navigate('wheatinfo')}>
          <Image style={{marginTop:5,marginLeft:5, width:200,height:200}}source={ require('../assets/img/wheat.jpg')} ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('corninfo')}>
            
          <Image style={{marginTop:5,marginLeft:4, width:200,height:200}} source={require('../assets/img/corn.jpg')} ></Image>
          </TouchableOpacity>
         
          </View>
          <View flexDirection="row">
          <TouchableOpacity onPress={() => this.props.navigation.navigate('sunflowerinfo')}>
          <Image style={{marginTop:5,marginLeft:5, width:200,height:200}}source={ require('../assets/img/sunflower.jpg')} ></Image>
          </TouchableOpacity>
          
         
          </View>
        </ScrollView>




     



  
        
        )
     }
    }


export default Todos;