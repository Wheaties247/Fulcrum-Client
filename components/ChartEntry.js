//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"

import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { TextWithLetterSpacing } from './TextWithLetterSpacing';
//Import all components, assests, and packages used on this file


class ChartEntry extends Component{
  //initialize component

constructor(props){
    //initialize constructor with props from React.Component
	
		super(props);
		this.showChakra = this.showChakra.bind(this);
		  // Binds above method so any instances of the word "this" within  method refers to the current component even if it is called by another component
	}

	showChakra(event) {
		//showChakra method takes one argument
		console.log("Current Cata", event);
		const currentCatagory = event;
		const { alterCurrentView, passData } = this.props;
    	//deconstructs respective values from respective variables
		switch (currentCatagory) {
      // switch statement takes currentCatagory as Parameter
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
				break;

				/*
				for possible values of currentCatagory call the respective methods from the App component to change top level switch statement
				*/
		}

	}
	render(){
	// console.log(props)
	const { entry, style } = this.props;
	const {textStyle} = styles;
    //deconstructs respective values from respective variables

	return(
			<TouchableOpacity 
			onPress={()=> this.showChakra(entry)}
			style = {style}>
			<TextWithLetterSpacing
			spacing={1}
			textStyle = {textStyle}
			>
			{entry}
			{/* 
    render TouchableOpacity component that calls showChakra method with entry as arguement when component is clicked and TextWithLetterSpacing component to emulate word padding 
			    with respective style props
    */}
			</TextWithLetterSpacing>
			</TouchableOpacity>
		);
	}
}



export default ChartEntry;
//exports component to be used outside this file

const styles = StyleSheet.create({
	textStyle:{
		margin:.5,
        color: 'white',
        fontWeight: '700',
        fontSize: 11
	}
});
//Creates styles variable through StyleSheet.create to reduce the strain on the bridge
