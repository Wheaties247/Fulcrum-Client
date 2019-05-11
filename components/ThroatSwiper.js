import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import assets from '../assets.js'
import Swiper from 'react-native-swiper';
import ThroatFirstSwipe from './ThroatFirstSwipe';
import ThroatSecondSwipe from './ThroatSecondSwipe';
import ThroatThirdSwipe from './ThroatThirdSwipe';
import ThroatFourthSwipe from './ThroatFourthSwipe';


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

class ThroatSwiper extends Component {
  render(){

    const {slide1} = styles;
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={slide1}>
          <ThroatFirstSwipe />
        </View>
        <View style={slide1}>
          <ThroatSecondSwipe />
         
        </View>
        <View style={slide1}>
          <ThroatThirdSwipe />

        </View>
         <View style={slide1}>
          <ThroatFourthSwipe />

        </View>
      </Swiper>
    );
  }
}

export default ThroatSwiper;