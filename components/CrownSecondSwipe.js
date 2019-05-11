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

const CrownSecondSwipe = () => {
	const crownData = assets.chakraData.crown;
	const {
		titleViewStyle,
		nameStyle,
		sypmStyle,
		scrollStyle,
		labelStyle
	} = styles;
	return (
		<View >
			<ScrollView style={scrollStyle}>
					<Container>
						<LocalImage
							source={require("../images/location.png")}
							originalWidth={320}
							originalHeight={380}
						/>
						<TextWithLetterSpacing spacing={15} textStyle={labelStyle}>
							Location:
						</TextWithLetterSpacing>

						<Text style={sypmStyle}>{crownData.location}</Text>
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
						{crownData.connections.map((entry, i) => (
							<Text key={i} style={sypmStyle}>
								{i + 1}) {entry}
							</Text>
						))}
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
						{crownData.mentalSymptoms.map((symp, i) => (
							<Text style={sypmStyle} key={i}>
								{i + 1}) {symp}
							</Text>
						))}
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
						{crownData.physicalSymptoms.map((symp, i) => (
							<Text style={sypmStyle} key={i}>
								{i + 1}) {symp}
							</Text>
						))}
					</Container>
			</ScrollView>
		</View>
	);
};
export default CrownSecondSwipe;

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
