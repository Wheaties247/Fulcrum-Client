//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"
import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { TextWithLetterSpacing } from './TextWithLetterSpacing';
//Import all components, assests, and packages used on this file


const ChartIndex = (props) =>{
	// create function that returns components 
	const { entry, gradient } = props;
	const { textStyle, linearGradient, nullStyle } = styles;
    //deconstructs respective values from respective variables

	if(gradient){
		//if gradient has "truthy" value
		return(
			<LinearGradient 
			start={{x: 0.0, y: 0.25}} 
			end={{x: 0.5, y: 1.0}}
			colors={["rgb(167, 21, 188)", "rgb(34, 109, 190)", "rgb(113,191, 228)", "rgb(0, 186, 10)", "rgb(213, 225, 0)", "rgb(253, 156, 53)", "rgb(255, 0, 0)"]}  
			style = {linearGradient}
			>
			{/* 
    LinearGradient component takes an array of rgb values to create a horizontal (start, end props ) gradient from one color to the next with respective style prop passed in
    */}
				<TextWithLetterSpacing
				spacing={1}
				textStyle = {textStyle}
				>
					{entry}
				</TextWithLetterSpacing>
				{/* 
			    create TextWithLetterSpacing component to emulate word padding 
			    with respective style props
			    */}
			</LinearGradient>
		);
	}else{
		//if gradient has "falsey" value

		return(
			<View style = {nullStyle}>
			<TextWithLetterSpacing
			spacing={1}
			textStyle = {textStyle}
			>
			{entry}
			{
			/* 
			    create View 
			    and TextWithLetterSpacing component to emulate word padding 
			    with respective style props
			*/
			}
			</TextWithLetterSpacing>
			</View>
		);
	}
	

}



export default ChartIndex;
//exports component to be used outside this file

const styles = StyleSheet.create({
	textStyle:{
		margin:.5,
        color: 'black',
        fontWeight: '700',
        fontSize: 15
	},
	linearGradient:{
		alignItems:'center',
		width: '40%',
		borderRadius: 2,
        borderWidth: 0.5,
        borderColor: "black"
	},
	nullStyle: {
        backgroundColor: "rgb(156, 157, 154)",
        borderRadius: 2,
        borderWidth: 0.5,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center",
		width: '40%'
    }
});
//Creates styles variable through StyleSheet.create to reduce the strain on the bridge
