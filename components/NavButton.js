//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"
import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import LocalImage from './LocalImage';
//Import all components, assests, and packages used on this file
const NavButton = (props) =>{
	//create funtional component that returns a component

	const {handleAction, children} = props;

	const {touchableOpacityStyle} = styles;
	//deconstructs respective values from respective variables
	return(
		<TouchableOpacity style={touchableOpacityStyle}
		onPress={handleAction}>
		{/* 
    render TouchableOpacity component that calls handleAction from props is clicked
    */}
			<Image
	         style={{width: 18, height: 30}}
	          source={require('../images/back.png')}
	        />
	    {/*
			create Image component showing the less
			than symbol to show back action 
	    */}
		</TouchableOpacity>
		)
}

export default NavButton;
//exports component to be used outside this file

const styles = {
	touchableOpacityStyle: {
		flex:1,
    	borderRadius:10,
    	padding: 20,
    	// margin: 10,
    	// width: '18%',
    	alignItems: 'center',
    	justifyContent:'center',
		// backgroundColor: 'blue'

  	}
}

//Creates styles variable through StyleSheet.create to reduce the strain on the bridge