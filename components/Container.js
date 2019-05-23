//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"
import React, { Component } from "react";
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView
} from "react-native";
//Import all components, assests, and packages used on this file

const Container = (props) =>{
	// create function that returns components 

	const {children} = props
	const {viewStyle} = styles
    	//deconstructs respective values from respective variables

	return(
		<View style = {viewStyle}>
		{children}
	{/*
	Create View component with children prop to contain childern with respective styles
	*/}
		</View>
		)
}

export default Container;
//exports component to be used outside this file


const styles = StyleSheet.create({
	viewStyle:{
		paddingTop:30,
		paddingBottom:30,
		alignItems:'center'
		// borderBottomWidth: 5,
		// borderBottomColor:'white'
	}
})
//Creates styles variable through StyleSheet.create to reduce the strain on the bridge
