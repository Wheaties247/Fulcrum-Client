import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { TextWithLetterSpacing } from './TextWithLetterSpacing';


class ChartEntry extends Component{
constructor(props){
		super(props);
		this.showChakra = this.showChakra.bind(this);
	}

	showChakra(event) {
		console.log("Current Cata", event);
		const currentCatagory = event;
		const { alterCurrentView, passData } = this.props;

		switch (currentCatagory) {
			case "Crown":
				passData("showChakra", "crown"), alterCurrentView("Show");
				break;
			case "Heart":
				passData("showChakra", "heart"), alterCurrentView("Show");
				break;
			case "Throat":
				passData("showChakra", "throat"), alterCurrentView("Show");
				break;
			case "Sacral":
				passData("showChakra", "sacral"), alterCurrentView("Show");
				break;
			case "Root":
				passData("showChakra", "root"), alterCurrentView("Show");
				break;
			case "Power":
				passData("showChakra", "power"), alterCurrentView("Show");
				break;
			case "Third":
				passData("showChakra", "third"), alterCurrentView("Show");
		}
	}
	render(){
	// console.log(props)
	const { entry, style } = this.props;
	const {textStyle} = styles;
	return(
			<TouchableOpacity 
			onPress={()=> this.showChakra(entry)}
			style = {style}>
			<TextWithLetterSpacing
			spacing={1}
			textStyle = {textStyle}
			>
			{entry}
			</TextWithLetterSpacing>
			</TouchableOpacity>
		);
	}
}



export default ChartEntry;

const styles = StyleSheet.create({
	textStyle:{
		margin:.5,
        color: 'white',
        fontWeight: '700',
        fontSize: 11
	}
});