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

const CrownFourthSwipe = () => {
// create function that returns components 
	const crownData = assets.chakraData.crown;
	//create variable crownData equal to assets.chakraData.crown

	const {
		imageStyle,
		viewStyle,
		titleViewStyle,
		nameStyle,
		sypmStyle,
		labelStyle,
		scrollStyle,
		scrollViewStyle
	} = styles;
    	//deconstructs respective values from respective variable

	return (
		<View style={viewStyle}>
		{/*
			create View Component with respective style prop to contain following components
		*/}
			<ScrollView style={scrollStyle}>
			
				<View style={scrollViewStyle}>
					<Container>
				{/*
				create Veiw and Container component to style around inner components  
				*/}
						<LocalImage
							source={require("../images/rebalance.png")}
							originalWidth={464}
							originalHeight={463}
						/>
						<TextWithLetterSpacing spacing={15} textStyle={labelStyle}>
							To Rebalence
						</TextWithLetterSpacing>
					{/*
					create LocalImage and TextWithLetterSpacing component to label and display image for "to reblance" section
					*/}
						{crownData.nutrition.map((entry, i) => (
							<Text style={sypmStyle} key={i}>
								{i + 1}) {entry},
							</Text>
						))}
						{/*
							for each entry in crownData.nutrition array 
							create Text component and places entry between them
						*/}
					</Container>
					<Container>

						<LocalImage
							source={require("../images/yoga.png")}
							originalWidth={820}
							originalHeight={820}
						/>
						{/*
						create LocalImage component to display image label for
						to yoga section
						*/}
						<TextWithLetterSpacing spacing={15} textStyle={labelStyle}>
							Rebalence
						</TextWithLetterSpacing>
						<TextWithLetterSpacing spacing={15} textStyle={labelStyle}>
							With
						</TextWithLetterSpacing>
						<TextWithLetterSpacing spacing={15} textStyle={labelStyle}>
							Yoga:
						</TextWithLetterSpacing>
					{/*
						create TextWithLetterSpacing component to emulate letter spacing for each word in heading
					*/}
						{crownData.yoga.map((obj, i) => {
							const { name, source, width, height } = obj;
	    	//deconstructs respective values from respective variables

							console.log("obj at map", obj);
							return (
								<View key={i}>
									<LocalImage
										originalWidth={width}
										originalHeight={height}
										source={source}
									/>
									<Text style={sypmStyle}>{name}</Text>
								</View>
							);
						})}
						{/*
								for each object in crownData.yoga array 
								create Text, View, and LocalImage component and add respective data into the thier props
							*/}
					</Container>

				</View>
			</ScrollView>
		</View>
	);
};
export default CrownFourthSwipe;
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
	viewStyle: {
		flex: 1,
		justifyContent: "space-around"
	},
	sypmStyle: {
		fontSize: 18,
		fontWeight: "800",
		color: "white",
		textAlign: "center",
		padding: 15
	},
	labelStyle: {
		fontSize: 28,
		textAlign: "center",
		color: "black",
		fontWeight: "800"
	},
	scrollStyle: {
		width: "100%"
	},
	scrollViewStyle: {
		alignItems: "center",
		width: "100%"
	}
});
//Creates styles variable through StyleSheet.create to reduce the strain on the bridge

