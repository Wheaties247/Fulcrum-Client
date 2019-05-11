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

const RootFourthSwipe = () => {
	const data = assets.chakraData.root;
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
					<LocalImage
						source={require("../images/rebalance.png")}
						originalWidth={464}
						originalHeight={463}
					/>
					<TextWithLetterSpacing spacing={15} textStyle={labelStyle}>
						To Rebalence
					</TextWithLetterSpacing>
					{data.nutrition.map((entry, i) => (
						<Text style={sypmStyle} key={i}>
							{i + 1}) {entry},
						</Text>
					))}
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
					{data.yoga.map((obj, i) => {
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
				</View>
			</ScrollView>
		</View>
	);
};
export default RootFourthSwipe;

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
		fontSize: 15,
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
		width: "100%"
	},
	scrollViewStyle: {
		alignItems: "center",
		width: "100%"
	}
});
