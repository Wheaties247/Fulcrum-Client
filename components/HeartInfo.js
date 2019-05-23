//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import assets from '../assets.js';
import NavButton from './NavButton';
import LinearGradient from 'react-native-linear-gradient';

import HeartSwiper from './HeartSwiper';
//Import all components, assests, and packages used on this file

class HeartInfo extends Component{
  //initialize component

	constructor(props){
		super(props);
    //initialize constructor with props from React.Component

		this.state = {}
	}
	render(){
		const data = assets.chakraData.heart;
	// create variable data with value assets.chakraData.heart

		const {titleViewStyle, askSelfStyle, navStyle, nameStyle, infoHeader, scrollStyle, scrollText, navView, imgStyle,
		linearGradient} = styles;
		const {previousView} = this.props
    //deconstructs respective values from respective variables
		
		return(
			<LinearGradient 
				colors={["rgb(27, 222, 40)",  "rgb(0, 186, 10)"]} 
				 style ={linearGradient}
				 >
				  {/* 
		    LinearGradient component takes an array of rgb values to create a gradient from one color to the next with respective style prop passed in
		    */}
				<View style = {navStyle} >
				 	<View style = {navView}>
						<NavButton handleAction={()=>this.props.alterCurrentView(previousView)} />	
					{/*
					within a View component with respective style property
					create a NavButton with handleAction prop that calls
					alterCurrentView method with previousView argument 
					*/}
					</View>
					
					<Text style ={nameStyle}>
						{data.name} Chakra
					</Text>
					<Image
					style = {imgStyle}
					source ={require('../images/locationHeart.png')}
					/>
					{
						/*
						create Text component with data.name as the name for the chakra info
						and an Image component with locationCrown.png as its source
						*/
					}
				</View>
				 <HeartSwiper />				
				{/*create HeartSwiper*/}
				
			</LinearGradient>
			)
	}
}

export default HeartInfo;
//exports component to be used outside this file

const styles = StyleSheet.create({
	linearGradient:{
		flex:1, 
		padding:5
	},
	titleViewStyle:{
		padding: 3,
		width: '80%'
	},
	askSelfStyle:{
		fontSize:18
	},
	navView:{
		width:'20%',
		// backgroundColor: 'blue'
	},
	navStyle:{
		// backgroundColor:'red',
		flexDirection:'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	nameStyle:{
		color:'white',
		textAlign:'center',
		fontWeight:'800'
	},
	infoHeader:{
		flexDirection:'row',
		borderWidth: 1,
		margin: 5
	},
	scrollStyle:{
		height: 50,
		borderWidth: 1,
		marginLeft: 5,
		marginRight: 5,
		backgroundColor:'orange'
	},
	scrollText:{
		textAlign: 'center',
		margin: 5
	},
	imgStyle:{
		width: 60,
		height:60
	}
})
//Creates styles variable through StyleSheet.create to reduce the strain on the bridge
