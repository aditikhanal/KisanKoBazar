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
                     <Image source={require('../assets/img/annapurna.jpg')} style={styles.image} /> 
                     <Text style={styles.textTitle}>Annapurna Foods</Text>
                    
                    <Text style={styles.detail}>Annapurna Foods is one of the leading producer of rice in Nepal, established in 2005. From the date of our establishment we have been committed towards quality. As quality is our strength within in short span of time we became a popular and trusted name among our valued customers.

We at Annapurna are equipped with state of the art fully automated Paddy Processing Plant with the Paddy processing Capacity of 2.5 tons per hour.

                    
                </Text>
                <Text style={styles.detail2}>Address: Lahan-3 Siraha Nepal</Text>
                <Text style={styles.detail2}>Mobile: phone:9852833024</Text>
                <Text style={styles.detail2}>Website: www.annapurnafoods.com.np</Text>
                
                

                
                    

                    <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('Industries')}>
                        

                        <Text style={styles.buttonText}>
                            Go back
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
        //width: 296,
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
        //alignSelf: 'center',
        //width: 296,
        //height: 88,
        
        marginLeft:40, 
        marginTop: 5,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
        color: 'black',
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