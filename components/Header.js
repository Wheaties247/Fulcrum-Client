//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"
import React, { Component } from "react";
import {Platform, Text, View , StyleSheet, Image, TouchableOpacity} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { TextWithLetterSpacing } from './TextWithLetterSpacing';
import LocalImageHeader from "./LocalImageHeader";
//Import all components, assests, and packages used on this file


const Header = (props) =>{
	// create function that returns components 

		const { viewStyle, textStyle } = styles;
		const {handlePress } = props
    //deconstructs respective values from variables
	return(
		<TouchableOpacity
		onPress = {handlePress}
		>
			<LinearGradient 
				colors={[ 'rgb(164, 99, 17)','rgb(232, 180, 83)', 'rgb(199, 141, 61)' ]} 
				style={viewStyle}
				>
    		<LocalImageHeader 
    		source={require('../images/FULCRUM_BASIC_LOGO.png')} 
    		originalWidth={6574}
					originalHeight={3211}/>
					{/* 
    create TouchableOpacity, LocalImageHeader component with respective prop values;
     when TouchableOpacity is clicked, handlePress prop is called from App component
    */}
			</LinearGradient>
		</TouchableOpacity>
		)
};

export default Header;
//exports component to be used outside this file

const styles = StyleSheet.create({
	viewStyle:{
		alignItems:'center',
		// padding : 28,
		paddingTop: Platform.OS === 'ios'? 45: 1,
		paddingBottom:15,
		borderBottomWidth : .3,
		borderBottomColor : 'rgb(47, 157, 234)',
		elevation: 1,
		shadowOpacity : 1,
		shadowColor: 'white',
		backgroundColor: 'rgb(76, 76, 76)'
	},
	textStyle:{
		textAlign: 'center',
		fontSize: 30,
		fontWeight:'800',
		// elevation: 0,
		color : 'white'	
		}
})
//Creates styles variable through StyleSheet.create to reduce the strain on the bridge
