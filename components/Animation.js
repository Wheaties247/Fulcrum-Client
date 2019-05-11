import { Text, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";

const Animation = () =>{
	const { viewStyle } = styles;
	return(
		<View style = {viewStyle}>
		<Text  >This Represents the Animation</Text>
		</View>
		)
}

export default Animation;

const styles = {
	viewStyle:{
		marginTop: 10, 
		height: 300,
		width: 300,
		backgroundColor: 'green',
		borderStyle: 'solid',
		borderWidth: 3,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
		backgroundColor :'rgb(12, 28, 255)'
	}
}