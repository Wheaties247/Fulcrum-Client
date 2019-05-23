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
import LinearGradient from "react-native-linear-gradient";
import SelectedStatButton from "./SelectedStatButton";
//Import all components, assests, and packages used on this file

const StatButtons = props => {
	// create function that returns components 

	const {
		threeDay,
		fiveDay,
		sevenDay,
		fourteenDay,
		thirtyDay,
		allResult,
		state
	} = props;
const { five, fourteen, seven, thirty, three } = state;
	const { viewStyle, buttonStyle, textStyle, linearGradient } = styles;
    //deconstructs respective values from respective variables

	const resultLength = allResult.length;
		//create resultLength variable and set equal allResult.length
	const atLeast5Records = resultLength > 4;
		//create atLeast5Records variable and set equal to resultLength > 4 (true or false)
	const atLeast7Records = resultLength > 6;
		//create atLeast7Records variable and set equal to resultLength > 6 (true or false)

	const atLeast14Records = resultLength > 13;
		//create atLeast14Records variable and set equal to resultLength > 13 (true or false)

	const atLeast30Records = resultLength > 29;
		//create atLeast30Records variable and set equal to resultLength > 29 (true or false)

	console.log(state, "state in StatButtons");
	
	return (
		<View style={viewStyle}>
	{/*
	within a View component
	*/}
			{three ? <SelectedStatButton label="3 Day" /> : (
				<LinearGradient
				colors={["rgb(159, 92, 20)", "rgb(113, 65, 14)"]}
				style={linearGradient}
				>
					<TouchableOpacity style={buttonStyle} onPress={threeDay}>
						<Text style={textStyle}>3 Day</Text>
					</TouchableOpacity>
				</LinearGradient>

			)}

			{atLeast5Records ? (
				five ? <SelectedStatButton label="5 Day" /> : (
				<LinearGradient
				colors={["rgb(159, 92, 20)", "rgb(113, 65, 14)"]}
				style={linearGradient}
				>
					<TouchableOpacity style={buttonStyle} onPress={fiveDay}>
						<Text style={textStyle}>5 Day</Text>
					</TouchableOpacity>
				</LinearGradient>
				)
			) : null}
			{atLeast7Records ? (
				seven ? <SelectedStatButton label="7 Day" /> : (
				<LinearGradient
				colors={["rgb(159, 92, 20)", "rgb(113, 65, 14)"]}
				style={linearGradient}
				>
					<TouchableOpacity style={buttonStyle} onPress={sevenDay}>
						<Text style={textStyle}>7 Day</Text>
					</TouchableOpacity>
				</LinearGradient>

				)
			) : null}
			{atLeast14Records ? (
				fourteen ? <SelectedStatButton label="14 Day" /> : (
				<LinearGradient
				colors={["rgb(159, 92, 20)", "rgb(113, 65, 14)"]}
				style={linearGradient}
				>
					<TouchableOpacity style={buttonStyle} onPress={fourteenDay}>
						<Text style={textStyle}>14 Day</Text>
					</TouchableOpacity>
				</LinearGradient>
				)
			) : null}
			{atLeast30Records ? (
				thirty ? <SelectedStatButton label="30 Day" /> : (
				<LinearGradient
				colors={["rgb(159, 92, 20)", "rgb(113, 65, 14)"]}
				style={linearGradient}
				>
					<TouchableOpacity style={buttonStyle} onPress={thirtyDay}>
						<Text style={textStyle}>30 Day</Text>
					</TouchableOpacity>
				</LinearGradient>
				)
			) : null}
		{/*
		create 5 ternary operators that check the 5 respective boolean values and if they are true create another ternary operator on a value recived from props, if that value is true return the non-touchable placeholder for the stat button (SelectedStatButton component) otherwise render a touchable stat button that can change how many stats are displayed. If the first ternary operator is false return null 
		*/}
		</View>
	);
};
export default StatButtons;
//exports component to be used outside this file

const styles = StyleSheet.create({
	viewStyle: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-around",
		marginTop: 10,
		marginBottom: 10
	},
	linearGradient: {
		margin: 5,
		// height: 40,
		borderRadius: 4,
		width: "19%"
	},
	buttonStyle: {
		padding: 5,
		borderRadius: 4,
		borderWidth: 1.5,
		borderColor: "black",
		backgroundColor: "rgb(177, 92, 2)"
	},
	textStyle: {
		textAlign: "center"
	}
});
//Creates styles variable through StyleSheet.create to reduce the strain on the bridge
