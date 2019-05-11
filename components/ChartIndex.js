import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { TextWithLetterSpacing } from './TextWithLetterSpacing';


const ChartIndex = (props) =>{

	// console.log(props)
	const { entry, gradient } = props;
	const { textStyle, linearGradient, nullStyle } = styles;
	if(gradient){
		return(
			<LinearGradient 
			start={{x: 0.0, y: 0.25}} 
			end={{x: 0.5, y: 1.0}}
			colors={["rgb(167, 21, 188)", "rgb(34, 109, 190)", "rgb(113,191, 228)", "rgb(0, 186, 10)", "rgb(213, 225, 0)", "rgb(253, 156, 53)", "rgb(255, 0, 0)"]}  
			style = {linearGradient}
			>
				<TextWithLetterSpacing
				spacing={1}
				textStyle = {textStyle}
				>
					{entry}
				</TextWithLetterSpacing>
			</LinearGradient>
		);
	}else{
		return(
			<View style = {nullStyle}>
			<TextWithLetterSpacing
			spacing={1}
			textStyle = {textStyle}
			>
			{entry}
			</TextWithLetterSpacing>
			</View>
		);
	}
	

}



export default ChartIndex;

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