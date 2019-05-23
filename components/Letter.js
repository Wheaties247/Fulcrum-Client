//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"
import React from 'react'
import { Text } from 'react-native'
//Import all components, assests, and packages used on this file

export const Letter = (props) => {
//exports functional component to be used outside this file

  const { children, spacing, textStyle } = props
  //deconstruct variables from props
  const letterStyles = [
    textStyle,
    { paddingRight: spacing }
  ]
  //get props from letterStyles textStyle

  return <Text style={letterStyles}>{children}</Text>
  // set respective props on Text component (applied to each letter)
}