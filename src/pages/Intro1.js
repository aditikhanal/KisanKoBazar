import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from 'react-native'

export default class Intro extends Component {

    render() {
        return (
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                <View style={{}} >
                     <Image source={require('../assets/img/intro1.png')} style={styles.image} /> 
                    
                    <Text style={styles.detail}>Selling your products all over the country
                </Text>
                <Text style={styles.detail2}> किसानको परिश्रम हिमाल देखि तराईसम्म पुराउदै।
                </Text>
                    

                    <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('Intro2')}>
                        

                        <Text style={styles.buttonText}>
                            NEXT/अगाडि
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
        height: 88,
        marginTop: 10,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '400',
        color: '#388E3C',
        lineHeight: 20,
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