import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';


export default class HomeScreen extends React.Component {
  render() {
    return (
      // <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          
            <View
              style={{
                alignSelf: 'stretch',
                height: ScreenHeight,
                //justifyContent: 'center',
                backgroundColor: '#C8E6C9',
              }}>
            
                <Image
                  style={{marginLeft:65,marginTop:150,width:300,height:300}}
                  
                  source={require('../assets/img/Splash.png')}
                 

                />
               <Text style={{
                               // fontFamily: 'ProximaNova-Regular',
                                fontSize: 20,
                               // lineHeight: 20,
                                fontWeight: '700',
                                color: '#388E3C',
                                marginLeft: 115,
                                marginTop: 0,
                                // justifyContent: 'center'
                  }}>किसान देखि बजार सम्म</Text>
              
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Intro1')}
              style={{backgroundColor:'#388E3C',width:200,height:35,marginTop:100,marginLeft:105,borderRadius:12,justifyContent:"center"}}><Text style={{
                               // fontFamily: 'ProximaNova-Regular',
                                fontSize: 20,
                               // lineHeight: 20,
                                fontWeight: '700',
                                color: '#C8E6C9',
                                marginLeft:45,
                                marginTop:10,
                               // marginLeft: 115,
                                marginTop: 0,
                                // justifyContent: 'center'
                  }}>Get Started!</Text></TouchableOpacity>
            </View>
          
        </ScrollView>
     // {/* </SafeAreaView> */}
    );
  }
}
let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#00B0F2',
    height: ScreenHeight,
  },
});