
//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import assets from "../assets.js";
import LocalImage from "./LocalImage";
import { TextWithLetterSpacing } from "./TextWithLetterSpacing";
import Container from "./Container";
//Import all components, assests, and packages used on this file

const PowerThirdSwipe = () => {
	// create function that returns components 

	const data = assets.chakraData.power;
	// create variable data with value assets.chakraData.power

	const { imageStyle, scrollStyle, titleViewStyle, nameStyle, sypmStyle, labelStyle, viewStyle } = styles;
    //deconstructs respective values from styles

	return (
		<ScrollView style={scrollStyle}>
		{/*
				create ScrollView Component with respective style prop 
				to scroll through the following components
		*/}
			<View style = {viewStyle}>
				<Container>
				{/*
				create Container component to style around inner components  
				*/}
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
					{/*
					create TextWithLetterSpacing and LocalImage component to label and display image for "Chakra info" section
					*/}
				</Container>
			</View>
			
		</ScrollView>
	);
};
export default PowerThirdSwipe;
//exports component to be used outside this file

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
//Creates styles variable through StyleSheet.create to reduce the strain on the bridge

