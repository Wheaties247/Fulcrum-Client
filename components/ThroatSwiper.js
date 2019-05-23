//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"
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
//Import all components, assests, and packages used on this file


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
//Creates styles variable through StyleSheet.create to reduce the strain on the bridge

class ThroatSwiper extends Component {
  //initialize component

  render(){
    //Within render

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
 {/*
        create Swiper and respective crown components to finger swipe
        through each component
        */}
        </View>
      </Swiper>
    );
  }
}

export default ThroatSwiper;
//exports component to be used outside this file
