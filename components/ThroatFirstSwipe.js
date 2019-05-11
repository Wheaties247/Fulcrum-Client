import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import assets from "../assets.js";
import LocalImageSymbol from "./LocalImageSymbol";
import { TextWithLetterSpacing } from "./TextWithLetterSpacing";

const ThroatFirstSwipe = () => {
	const data = assets.chakraData.throat;
	const { imageView, viewStyle, textStyle, labelStyle, labelView } = styles;
	return (
		<View style={viewStyle}>
			<View style={labelView}>
				<TextWithLetterSpacing spacing={15} textStyle={labelStyle}>
					Ask
				</TextWithLetterSpacing>
				<TextWithLetterSpacing spacing={15} textStyle={labelStyle}>
					Yourself
				</TextWithLetterSpacing>
			</View>
			<Text style={textStyle}>{data.askSelf}</Text>
			<View style={imageView}>
				<LocalImageSymbol
					originalWidth={5997}
					originalHeight={5993}
					source={require("../images/throat.png")}
				/>
			</View>
		</View>
	);
};
export default ThroatFirstSwipe;

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
