import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import assets from '../assets.js'
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    padding:20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "rgb(186, 188, 188)"
  },
  slide2: {
    padding:20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "rgb(186, 188, 188)"
  },
  slide3: {
    padding:20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "rgb(186, 188, 188)"
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

class HoldsIntro extends Component {
  render(){


    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <View style={styles.slide1}>
          <Text style={styles.text}>{assets.infoTab1}</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>{assets.infoTab2}</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>{assets.infoTab3}</Text>
        </View>
      </Swiper>
    );
  }
}

export default HoldsIntro;