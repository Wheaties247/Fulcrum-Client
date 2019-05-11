import React, { Component } from "react";
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from "react-native";

const SelectedStatButton = props =>{
	const {label} = props
	const {viewStyle} = styles;
	return(
		<View style = {viewStyle}>
		<Text>{label}</Text>
		</View>
		)
}

export default SelectedStatButton;

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