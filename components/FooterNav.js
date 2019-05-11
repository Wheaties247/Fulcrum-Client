import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { TextWithLetterSpacing } from "./TextWithLetterSpacing";

const FooterNav = props => {
	const {
		viewStyle,
		buttonStyle,
		linearGradient,
		textStyle,
		touchableStyle
	} = styles;
	const { toResult, toSelection, toStats } = props;
	return (
		<View style={viewStyle}>
			<LinearGradient
				colors={["rgb(245, 187, 84)", "rgb(239, 157, 16)"]}
				style={linearGradient}
			>
				<TouchableOpacity
					onPress={toSelection}
					activeOpacity={0.2}
					style={buttonStyle}
				>
					<TextWithLetterSpacing spacing={2} textStyle={textStyle}>
						Selection
					</TextWithLetterSpacing>
				</TouchableOpacity>
			</LinearGradient>

			<LinearGradient
				colors={["rgb( 238, 140, 12)", "rgb(154,  88, 19)"]}
				style={linearGradient}
			>
				<TouchableOpacity
					onPress={toResult}
					activeOpacity={0.2}
					style={buttonStyle}
				>
					<TextWithLetterSpacing spacing={3} textStyle={textStyle}>
						Results
					</TextWithLetterSpacing>
				</TouchableOpacity>
			</LinearGradient>

			<LinearGradient
				colors={["rgb(159, 92, 20)", "rgb(113, 65, 14)"]}
				style={linearGradient}
			>
				<TouchableOpacity
					onPress={toStats}
					activeOpacity={0.2}
					style={buttonStyle}
				>
					<TextWithLetterSpacing spacing={3} textStyle={textStyle}>
						Records
					</TextWithLetterSpacing>
				</TouchableOpacity>
			</LinearGradient>
		</View>
	);
};

export default FooterNav;

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
