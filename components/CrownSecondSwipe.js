//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"

import React, { Component } from "react";
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView
} from "react-native";
import assets from "../assets.js";
import LocalImage from "./LocalImage";
import { TextWithLetterSpacing } from "./TextWithLetterSpacing";
import Container from "./Container";
//Import all components, assests, and packages used on this file

const CrownSecondSwipe = () => {
	// create function that returns components 

	const crownData = assets.chakraData.crown;
	//create variable crownData with value of assets.chakraData.crown;
	const {
		titleViewStyle,
		nameStyle,
		sypmStyle,
		scrollStyle,
		labelStyle
	} = styles;
    	//deconstructs respective values from respective variables

	return (
		<View >
			<ScrollView style={scrollStyle}>
			{/*
				within View component
			create ScrollView Component with respective style prop to scroll through the following components
		*/}
					<Container>
					{/*
				create Container component to style around inner components  
				*/}
						<LocalImage
							source={require("../images/location.png")}
							originalWidth={320}
							originalHeight={380}
						/>
						<TextWithLetterSpacing spacing={15} textStyle={labelStyle}>
							Location:
						</TextWithLetterSpacing>

						<Text style={sypmStyle}>{crownData.location}</Text>
						{/*
					create TextWithLetterSpacing, LocalImage, and Text  component to label display image and discribe info for "Location" section
					*/}
					</Container>
					<Container>

						<LocalImage
							source={require("../images/connection.png")}
							originalWidth={600}
							originalHeight={600}
						/>

						<TextWithLetterSpacing textStyle={labelStyle} spacing={15}>
							Supports:
						</TextWithLetterSpacing>
							{/*
					create TextWithLetterSpacing and LocalImage component to label and display image for "Location" section
					*/}
						{crownData.connections.map((entry, i) => (
							<Text key={i} style={sypmStyle}>
								{i + 1}) {entry}
							</Text>
						))}
	{/*
							for each entry in crownData.connections array 
							create Text component and places entry between them
						*/}
					</Container>
					<Container>
						<LocalImage
							source={require("../images/psycologicSymptoms.png")}
							originalWidth={600}
							originalHeight={600}
						/>

						<TextWithLetterSpacing textStyle={labelStyle} spacing={15}>
							Mental
						</TextWithLetterSpacing>
						<TextWithLetterSpacing textStyle={labelStyle} spacing={15}>
							Imbalance
						</TextWithLetterSpacing>
						<TextWithLetterSpacing textStyle={labelStyle} spacing={15}>
							Traits:
						</TextWithLetterSpacing>
						{/*
					create TextWithLetterSpacing and LocalImage component to label and display image for "Mental Imblance Traits" section
					*/}
						{crownData.mentalSymptoms.map((symp, i) => (
							<Text style={sypmStyle} key={i}>
								{i + 1}) {symp}
							</Text>
						))}
{/*
							for each symp in crownData.mentalSymptoms array 
							create Text component and places symp between them
						*/}
					</Container>
					<Container>
						<LocalImage
							source={require("../images/physicalSymptoms.png")}
							originalWidth={600}
							originalHeight={600}
						/>

						<TextWithLetterSpacing textStyle={labelStyle} spacing={15}>
							Physical
						</TextWithLetterSpacing>
						<TextWithLetterSpacing textStyle={labelStyle} spacing={15}>
							Imbalance
						</TextWithLetterSpacing>
						<TextWithLetterSpacing textStyle={labelStyle} spacing={15}>
							Traits:
						</TextWithLetterSpacing>
						{/*
					create TextWithLetterSpacing and LocalImage component to label and display image for "Physical Imbalance Traits" section
					*/}
						{crownData.physicalSymptoms.map((symp, i) => (
							<Text style={sypmStyle} key={i}>
								{i + 1}) {symp}
							</Text>
						))}
{/*
							for each symp in crownData.physicalSymptoms array 
							create Text component and places symp between them
						*/}
					</Container>
			</ScrollView>
		</View>
	);
};
export default CrownSecondSwipe;
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
	sypmStyle: {
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
	},
	scrollStyle: {
		width: "100%",
		flex: 1
	},
	scrollViewStyle: {
		alignItems: "center",
		width: "100%"
	}
});
//Creates styles variable through StyleSheet.create to reduce the strain on the bridge
