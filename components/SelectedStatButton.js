
//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"
import React, { Component } from "react";
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from "react-native";
//Import all components, assests, and packages used on this file

const SelectedStatButton = props =>{
	// create function that returns components 

	const {label} = props
	const {viewStyle} = styles;
    //deconstructs respective values from respective variables

	return(
		<View style = {viewStyle}>
		<Text>{label}</Text>
	{/*
	return the value from props within a text component to be used as the text within the Text component
	*/}
		</View>
		)
}

export default SelectedStatButton;
//exports component to be used outside this file

const styles = StyleSheet.create({
	viewStyle:{
		margin: 5,
		width: "19%",
		textAlign:'center',
		// padding: 5,
		borderRadius: 4,
		borderWidth: 1.5,
		borderColor: "black",
		backgroundColor: 'rgb(113, 65, 14)',
		alignItems:'center',
		justifyContent:'center'
	}
})
//Creates styles variable through StyleSheet.create to reduce the strain on the bridge
