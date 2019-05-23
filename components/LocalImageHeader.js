//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"
import React, { Component } from 'react'

import {
  Image,
  Dimensions
} from 'react-native'
//Import all components, assests, and packages used on this file

const LocalImageHeader = ({source, originalWidth, originalHeight}) => {
	//create funtional component that returns a component

  let windowWidth = Dimensions.get('window').width
  /*
create variable windowWidth and set equal to
 the return value of Dimensions.get('window').width( the widit)
*/
  let widthChange = (windowWidth-285)/originalWidth
    /*
create variable widthChange and set equal to
 (windowWidth-16)/originalWidth 
*/
  let newWidth = originalWidth * widthChange
    /*
	create variable newWidth and set equal to
   originalWidth * widthChange
  */
  let newHeight = originalHeight * widthChange
 /*
	create variable newHeight and set equal to
  originalHeight * widthChange
  */
  return (
    <Image source={source} style={{width: newWidth, height: newHeight}}/>
    //create image component with respective prop values

  )
}

export default LocalImageHeader
//exports component to be used outside this file
