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


export default class Intro2 extends Component {
    updateTextInput(value) {
        this.setState({ textInput: value });
    }
    addTodo() {
        this.ref.add({
          title: this.state.textInput,
          
          complete: false,
        });
      
        this.setState({
          textInput: '',
          
        });
      }
      state = {
        textInput: '',
        
    };
    
    constructor() {
        super();
        this.ref = firebase.firestore().collection('todos');
        this.unsubscribe = null;
    
        this.state = {
            textInput: '',
            loading: true,
            todos: [],
        };
    }
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate) 
    }
    
    componentWillUnmount() {
        this.unsubscribe();
    }
    onCollectionUpdate = (querySnapshot) => {
        const todos = [];
        querySnapshot.forEach((doc) => {
          const { title, complete } = doc.data();
          
          todos.push({
            key: doc.id,
            doc, // DocumentSnapshot
            title,
            complete,
          });
        });
      
        this.setState({ 
          todos,
          loading: false,
       });
      }

    render() {
        return (
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
               {/* <FlatList
          data={this.state.todos}
          renderItem={({ item }) => <Load {...item} />}
        /> */}
            </ScrollView>
        )
    }
}
let ScreenHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    scrollView: {
   // backgroundColor: '#00B0F2',
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