import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import assets from '../assets.js'
import Swiper from 'react-native-swiper';
import PowerFirstSwipe from './PowerFirstSwipe';
import PowerSecondSwipe from './PowerSecondSwipe';
import PowerThirdSwipe from './PowerThirdSwipe';
import PowerFourthSwipe from './PowerFourthSwipe';


const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    padding:20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "rgb(186, 188, 188)"
  }
})

class PowerSwiper extends Component {
  render(){

    const {slide1} = styles;
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={slide1}>
          <PowerFirstSwipe />
        </View>
        <View style={slide1}>
          <PowerSecondSwipe />
        </View>
        <View style={slide1}>
          <PowerThirdSwipe />
        </View>
         <View style={slide1}>
          <PowerFourthSwipe />
        </View>
      </Swiper>
    );
  }
}

export default PowerSwiper;