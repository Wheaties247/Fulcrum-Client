//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Letter } from './Letter'
//Import all components, assests, and packages used on this file

const spacingForLetterIndex = (letters, index, spacing) => (letters.length - 1 === index) ? 0 : spacing
// create function spacingForLetterIndex with three parameters and returns a value based on if the length of the letter array subtracted by one is equal to the index parameter; if so return 0 otherwise return spacing parameter
export const TextWithLetterSpacing = (props) => {
//exports functional component to be used outside this file

  const { children, spacing, viewStyle, textStyle } = props
  //deconstruct variables from props

  const letters = children.split('')
  //create letters variable and set equal to children of this component split on every letter
  return <View style={[styles.container, viewStyle]}>
{/*within View component*/}
    {letters.map((letter, index) =>
      <Letter key={index} spacing={spacingForLetterIndex(letters, index, spacing)} textStyle={textStyle}>
        {letter}
      
      </Letter>
    )}
    {/*
    map over the letter split and for each letter render them as a child within the letter component with spacing prop equal to the return of 
    spacingForLetterIndex with the respective values passed in 
      */}
  </View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})
//Creates styles variable through StyleSheet.create to reduce the strain on the bridge
