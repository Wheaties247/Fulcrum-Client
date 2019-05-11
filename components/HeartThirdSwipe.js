import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import assets from "../assets.js";
import LocalImage from "./LocalImage";
import { TextWithLetterSpacing } from "./TextWithLetterSpacing";
import Container from "./Container";

const HeartThirdSwipe = () => {
	const data = assets.chakraData.heart;
	const { imageStyle, scrollStyle, titleViewStyle, nameStyle, sypmStyle, labelStyle, viewStyle } = styles;
	return (
		<ScrollView style={scrollStyle}>
			<View style = {viewStyle}>
			<Container>
					<LocalImage
					source={require("../images/dictionary.png")}
					originalWidth={400}
					originalHeight={400}
					/>
					<TextWithLetterSpacing 
					spacing ={15} 
					textStyle ={labelStyle}>
						Chakra Info
					</TextWithLetterSpacing>
					<Text style ={sypmStyle}>{data.metaInfo}</Text>
				</Container>
			</View>

		</ScrollView>
	);
};
export default HeartThirdSwipe;

const styles = StyleSheet.create({
	
	titleViewStyle: {
		padding: 3,
		width: "80%"
	},
	nameStyle: {
		fontSize: 30,
		textAlign: "center"
	},
	scrollStyle: {
		flex: 1,
		width: "100%"
	},
	viewStyle:{
		alignItems:'center'
	},
	sypmStyle:{
		fontSize: 18,
		fontWeight: "800",
		color: "white",
		textAlign: "center",
		padding: 5
	},
	labelStyle: {
		fontSize: 28,
		textAlign: "center",
		color: "black",
		fontWeight: "800"
	}
});
