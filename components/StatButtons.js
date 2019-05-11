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

const StatButtons = props => {
	const {
		threeDay,
		fiveDay,
		sevenDay,
		fourteenDay,
		thirtyDay,
		allResult,
		state
	} = props;
	const { viewStyle, buttonStyle, textStyle, linearGradient } = styles;
	const resultLength = allResult.length;

	const atLeast5Records = resultLength > 4;
	const atLeast7Records = resultLength > 6;
	const atLeast14Records = resultLength > 13;
	const atLeast30Records = resultLength > 29;
	console.log(state, "state in StatButtons");
	const { five, fourteen, seven, thirty, three } = state;
	return (
		<View style={viewStyle}>
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
		</View>
	);
};
export default StatButtons;

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
