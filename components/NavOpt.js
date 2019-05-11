
import React, { Component } from "react";
import { Text, View , TouchableOpacity  } from "react-native";

const NavOpt = (props) =>{
	const {textStyle} = styles;
	return (
		<TouchableOpacity  >
		<Text onPress = { () => props.change(props.optNum)} style = {textStyle}>
		{props.opt}
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

export default NavOpt;
