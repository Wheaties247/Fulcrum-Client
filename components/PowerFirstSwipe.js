//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import assets from "../assets.js";
import LocalImageSymbol from "./LocalImageSymbol";
import { TextWithLetterSpacing } from "./TextWithLetterSpacing";
//Import all components, assests, and packages used on this file

const PowerFirstSwipe = () => {
	//create funtional component that returns a component
	const data = assets.chakraData.power;
	//create variable data and set it equal to assets.chakraData.power
	const { imageView, viewStyle, textStyle, labelStyle, labelView } = styles;
	//deconstructs respective values from styles

	return (
		<View style={viewStyle}>
			<View style={labelView}>
				<TextWithLetterSpacing spacing={15} textStyle={labelStyle}>
					Ask
				</TextWithLetterSpacing>
				<TextWithLetterSpacing spacing={15} textStyle={labelStyle}>
					Yourself
				</TextWithLetterSpacing>
				{/*
		create View and TextWithLetterSpacing component to emulate word padding with respective style props
	*/}
			</View>
			<Text style={textStyle}>{data.askSelf}</Text>
			<View style={imageView}>
				<LocalImageSymbol
					originalWidth={5718}
					originalHeight={5974}
					source={require("../images/power.png")}
				/>
				{/*
				create Text, View, and LocalImageSymbol component to label, contain, and display respective chakra symbol
			*/}
			</View>
		</View>
	);
};
export default PowerFirstSwipe;
//exports component to be used outside this file

const styles = StyleSheet.create({
	textStyle: {
		color: "white",
		fontSize: 18,
		fontWeight: "800",
		textAlign: "center"
	},
	labelStyle: {
		fontSize:  28,
		textAlign: "center",
		color: "black",
		fontWeight: "800"
	},
	viewStyle: {
		flex: 1,
		justifyContent: "space-around",
		alignItems: "center"
	},
	imageView: {
		borderRadius: 100,
		paddingBottom: "5%"
	},
	labelView:{
		height: '20%', 
		alignItems:'center'
	}
});
//Creates styles variable through StyleSheet.create to reduce the strain on the bridge
