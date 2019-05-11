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

const CrownFourthSwipe = () => {
	const crownData = assets.chakraData.crown;
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
	return (
		<View style={viewStyle}>
			<ScrollView style={scrollStyle}>
				<View style={scrollViewStyle}>
					<Container>

						<LocalImage
							source={require("../images/rebalance.png")}
							originalWidth={464}
							originalHeight={463}
						/>
						<TextWithLetterSpacing spacing={15} textStyle={labelStyle}>
							To Rebalence
						</TextWithLetterSpacing>
						{crownData.nutrition.map((entry, i) => (
							<Text style={sypmStyle} key={i}>
								{i + 1}) {entry},
							</Text>
						))}
					</Container>
				<Container>

					<LocalImage
						source={require("../images/yoga.png")}
						originalWidth={820}
						originalHeight={820}
					/>

					<TextWithLetterSpacing spacing={15} textStyle={labelStyle}>
						Rebalence
					</TextWithLetterSpacing>
					<TextWithLetterSpacing spacing={15} textStyle={labelStyle}>
						With
					</TextWithLetterSpacing>
					<TextWithLetterSpacing spacing={15} textStyle={labelStyle}>
						Yoga:
					</TextWithLetterSpacing>
					{crownData.yoga.map((obj, i) => {
						const { name, source, width, height } = obj;
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
				</Container>

				</View>
			</ScrollView>
		</View>
	);
};
export default CrownFourthSwipe;

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
