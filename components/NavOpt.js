//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"
import React, { Component } from "react";
import { Text, View , TouchableOpacity  } from "react-native";
//Import all components, assests, and packages used on this file
const NavOpt = (props) =>{
	//create funtional component that returns a component

	const {textStyle} = styles;
	//deconstructs respective values from style variable

	return (
		<TouchableOpacity  >
		<Text onPress = { () => props.change(props.optNum)} style = {textStyle}>
		{props.opt}
		{/* 
    render TouchableOpacity, and text component that calls handleAction from props when it is clicked
    */}
		</Text>
		</TouchableOpacity>
		);
	}

const styles = {
	textStyle:{
		fontSize: 30,
		fontWeight: '800'
	}
}
//Creates styles variable through StyleSheet.create to reduce the strain on the bridge


export default NavOpt;
//exports component to be used outside this file
