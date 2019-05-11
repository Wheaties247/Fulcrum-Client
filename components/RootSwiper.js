import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import assets from '../assets.js'
import Swiper from 'react-native-swiper';
import RootFirstSwipe from './RootFirstSwipe';
import RootSecondSwipe from './RootSecondSwipe';
import RootThirdSwipe from './RootThirdSwipe';
import RootFourthSwipe from './RootFourthSwipe';


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

class RootSwiper extends Component {
  render(){

    const {slide1} = styles;
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={slide1}>
          <RootFirstSwipe />
        </View>
        <View style={slide1}>
          <RootSecondSwipe />
         
        </View>
        <View style={slide1}>
          <RootThirdSwipe />

        </View>
         <View style={slide1}>
          <RootFourthSwipe />
        </View>
      </Swiper>
    );
  }
}

export default RootSwiper;