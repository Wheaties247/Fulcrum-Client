import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import assets from '../assets.js'
import Swiper from 'react-native-swiper';
import HeartFirstSwipe from './HeartFirstSwipe';
import HeartSecondSwipe from './HeartSecondSwipe';
import HeartThirdSwipe from './HeartThirdSwipe';
import HeartFourthSwipe from './HeartFourthSwipe';


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

class HeartSwiper extends Component {
  render(){

    const {slide1} = styles;
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={slide1}>
          <HeartFirstSwipe />
        </View>
        <View style={slide1}>
          <HeartSecondSwipe />
        </View>
        <View style={slide1}>
          <HeartThirdSwipe />
        </View>
         <View style={slide1}>
          <HeartFourthSwipe />
        </View>
      </Swiper>
    );
  }
}

export default HeartSwiper;