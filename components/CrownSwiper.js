import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import assets from '../assets.js'
import Swiper from 'react-native-swiper';
import CrownFirstSwipe from './CrownFirstSwipe';
import CrownSecondSwipe from './CrownSecondSwipe';
import CrownThirdSwipe from './CrownThirdSwipe';
import CrownFourthSwipe from './CrownFourthSwipe';


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

class CrownSwiper extends Component {
  render(){

    const {slide1} = styles;
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={slide1}>
          <CrownFirstSwipe />
        </View>
        <View style={slide1}>
          <CrownSecondSwipe />
         
        </View>
        <View style={slide1}>
          <CrownThirdSwipe />
        </View>
         <View style={slide1}>
          <CrownFourthSwipe />
        </View>
      </Swiper>
    );
  }
}

export default CrownSwiper;