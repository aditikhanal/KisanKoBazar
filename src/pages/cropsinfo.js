import React from 'react';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import { ScrollView, View, Text, TextInput, Button,FlatList,Image,TouchableOpacity,StyleSheet,ScreenHeight } from 'react-native';
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
          <Image style={{marginTop:5,marginLeft:5, width:200,height:200}}source={ require('../assets/img/coffee.jpg')} ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('corninfo')}>
            
          <Image style={{marginTop:5,marginLeft:4, width:200,height:200}} source={require('../assets/img/corn.jpg')} ></Image>
          </TouchableOpacity>
         
          </View>
          <View flexDirection="row">
         
          
         
          </View>
          <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('Farmers')}>
                        

                        <Text style={styles.buttonText}>
                            Go back
                    </Text>
                    </TouchableOpacity>
        </ScrollView>




     



  
        
        )
     }
    }


export default Todos;

const styles = StyleSheet.create({
    scrollView: {
   // backgroundColor: '#00B0F2',
    height: ScreenHeight,
    backgroundColor: '#C8E6C9'
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
        //height: 88,
        marginTop: 10,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '400',
        color: '#388E3C',
        //lineHeight: 20,
        fontFamily:'ProximaNova-Regular'

    },
    detail2: {
        alignSelf: 'center',
        width: 296,
        height: 88,
        marginTop: -20,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '400',
        color: '#388E3C',
        //lineHeight: 20,
        fontFamily:'ProximaNova-Regular'

    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'ProximaNova-Regular',
        fontWeight: '700',


    },
    button: {
        backgroundColor: '#388E3C',
        width: 235,
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