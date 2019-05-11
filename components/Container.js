import React, { Component } from "react";
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView
} from "react-native";

const Container = (props) =>{
	const {children} = props
	const {viewStyle} = styles
	return(
		<View style = {viewStyle}>
		{children}
		</View>
		)
}

export default Container;

const styles = StyleSheet.create({
	viewStyle:{
		paddingTop:30,
		paddingBottom:30,
		alignItems:'center'
		// borderBottomWidth: 5,
		// borderBottomColor:'white'
	}
})