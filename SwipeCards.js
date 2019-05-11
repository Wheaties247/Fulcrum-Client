'use strict';

import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';


class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>{this.props.query}</Text>
      </View>
    )
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    )
  }
}

export default class extends React.Component {
  constructor(props){
    super(props);
    this.handleYup = this.handleYup.bind(this);
    this.handleNope = this.handleNope.bind(this);
    this.handleMaybe = this.handleMaybe.bind(this);
  }

  handleYup(card){
    this.props.handleTrue(card);
  }

  handleNope(card){
    this.props.handleFalse(card)
  }

  handleMaybe(card){
    console.log('handleMaybe running', card)
    this.props.handleFalse(card); 
  }

  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <SwipeCards
        cards={this.props.cards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        handleMaybe={this.handleMaybe}
        hasMaybeAction 
      />
    )
  }
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
    borderRadius: 300,
    borderWidth: 23,
    borderColor:'rgb(230, 230, 230)',
    padding: 10
  },
  noMoreCardsText: {
    fontSize: 30,
  },
  text:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'700',
    color: 'white'
  }
})