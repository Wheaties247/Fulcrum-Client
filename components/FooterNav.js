//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"
import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { TextWithLetterSpacing } from "./TextWithLetterSpacing";
//Import all components, assests, and packages used on this file

const FooterNav = props => {
	// create function that returns components 

	const {
		viewStyle,
		buttonStyle,
		linearGradient,
		textStyle,
		touchableStyle
	} = styles;

	const { toResult, toSelection, toStats } = props;
    //deconstructs respective values from props

	return (
		<View style={viewStyle}>
		{/*
			create View Component with respective style prop to contain following components
		*/}
			<LinearGradient
				colors={["rgb(245, 187, 84)", "rgb(239, 157, 16)"]}
				style={linearGradient}
			>
			{/* 
    LinearGradient component takes an array of rgb values to create a gradient from one color to the next with respective style prop passed in
    */}
				<TouchableOpacity
					onPress={toSelection}
					activeOpacity={0.2}
					style={buttonStyle}
				>
					<TextWithLetterSpacing spacing={2} textStyle={textStyle}>
						Selection
					</TextWithLetterSpacing>
					{/* 
    create TouchableOpacity and TextWithLetterSpacing component with respective prop values;
     when TouchableOpacity is clicked, toSelection prop is called from Home component
    */}
				</TouchableOpacity>
			</LinearGradient>

			<LinearGradient
				colors={["rgb( 238, 140, 12)", "rgb(154,  88, 19)"]}
				style={linearGradient}
			>
			{/* 
    LinearGradient component takes an array of rgb values to create a gradient from one color to the next with respective style prop passed in
    */}
				<TouchableOpacity
					onPress={toResult}
					activeOpacity={0.2}
					style={buttonStyle}
				>
					<TextWithLetterSpacing spacing={3} textStyle={textStyle}>
						Results
					</TextWithLetterSpacing>
					{/* 
    create TouchableOpacity and TextWithLetterSpacing component with respective prop values;
     when TouchableOpacity is clicked, toResult prop is called from Home component
    */}
				</TouchableOpacity>
			</LinearGradient>

			<LinearGradient
				colors={["rgb(159, 92, 20)", "rgb(113, 65, 14)"]}
				style={linearGradient}
			>
			{/* 
    LinearGradient component takes an array of rgb values to create a gradient from one color to the next with respective style prop passed in
    */}
				<TouchableOpacity
					onPress={toStats}
					activeOpacity={0.2}
					style={buttonStyle}
				>
					<TextWithLetterSpacing spacing={3} textStyle={textStyle}>
						Records
					</TextWithLetterSpacing>
					{/* 
    create TouchableOpacity and TextWithLetterSpacing component with respective prop values;
     when TouchableOpacity is clicked, toStats prop is called from Home component
    */}
				</TouchableOpacity>
			</LinearGradient>
		</View>
	);
};

export default FooterNav;
//exports component to be used outside this file

const styles = StyleSheet.create({
	viewStyle: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "flex-end"
	},
	touchableStyle: {
		width: "30%"
	},
	linearGradient: {
		margin: 5,
		height: 40,
		borderRadius: 15,
		width: "32%"
	},
	textStyle: {
		color: "white",
		fontSize: 14,
		fontWeight: "800"
	},
	buttonStyle: {
		padding: 10,
		borderWidth: 1,
		borderRadius: 15,
		borderColor: "rgb(76, 76, 76)",
		alignItems: "center",
		justifyContent: "center",
		height: 40
	}
});
//Creates styles variable through StyleSheet.create to reduce the strain on the bridge
