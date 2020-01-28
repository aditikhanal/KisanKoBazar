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
                justifyContent: 'center',
                backgroundColor: '#00B0F2',
              }}>
              <TouchableOpacity
               onPress={() => this.props.navigation.navigate('Intro1')}
                >
                <Image
                  style={{width:385,
                  height:812}}
                  
                  source={require('../assets/img/Splash.png')}
                 
                />
              </TouchableOpacity>
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