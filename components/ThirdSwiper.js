import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import assets from '../assets.js'
import Swiper from 'react-native-swiper';
import ThirdFirstSwipe from './ThirdFirstSwipe';
import ThirdSecondSwipe from './ThirdSecondSwipe';
import ThirdThirdSwipe from './ThirdThirdSwipe';
import ThirdFourthSwipe from './ThirdFourthSwipe';


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

class ThirdSwiper extends Component {
  render(){

    const {slide1} = styles;
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={slide1}>
          <ThirdFirstSwipe />
        </View>
        <View style={slide1}>
          <ThirdSecondSwipe />
        </View>
        <View style={slide1}>
          <ThirdThirdSwipe />
        </View>
         <View style={slide1}>
          <ThirdFourthSwipe />
        </View>
      </Swiper>
    );
  }
}

export default ThirdSwiper;