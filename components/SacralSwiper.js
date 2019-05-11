import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import assets from '../assets.js'
import Swiper from 'react-native-swiper';
import SacralFirstSwipe from './SacralFirstSwipe';
import SacralSecondSwipe from './SacralSecondSwipe';
import SacralThirdSwipe from './SacralThirdSwipe';
import SacralFourthSwipe from './SacralFourthSwipe';


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

class SacralSwiper extends Component {
  render(){

    const {slide1} = styles;
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={slide1}>
          <SacralFirstSwipe />
        </View>
        <View style={slide1}>
          <SacralSecondSwipe />
        </View>
        <View style={slide1}>
          <SacralThirdSwipe />
        </View>
         <View style={slide1}>
          <SacralFourthSwipe />
        </View>
      </Swiper>
    );
  }
}

export default SacralSwiper;