//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import CrownInfo from './CrownInfo';
import ThirdInfo from './ThirdInfo';
import HeartInfo from './HeartInfo';
import ThroatInfo from './ThroatInfo';
import SacralInfo from './SacralInfo';
import RootInfo from './RootInfo';
import PowerInfo from './PowerInfo';
//Import all components, assests, and packages used on this file



class ShowChakra extends Component{
	constructor(props){
		super(props);
    //initialize constructor with props from React.Component

		this.state = {}
		this.alterChakraInfo = this.alterChakraInfo.bind(this);
		this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this);
		/*  Binds above methods so any instances of the word "this" 
    within each method refers to the current component even 
  if it is called by another component*/
	}

	alterChakraInfo(){
		const {currentChakra, previousView} = this.props;
		// deconstruct values from props

		switch(currentChakra){
			case 'crown':
            
			return <CrownInfo previousView={previousView} alterCurrentView={this.props.alterCurrentView}/>
			break;
			case 'third':
			return <ThirdInfo previousView={previousView} alterCurrentView={this.props.alterCurrentView}/>
			break;
			case 'heart':
			return <HeartInfo previousView={previousView} alterCurrentView={this.props.alterCurrentView}/>
			break;
			case 'throat':
			return <ThroatInfo previousView={previousView} alterCurrentView={this.props.alterCurrentView}/>
			break;
			case 'sacral':
			return <SacralInfo previousView={previousView} alterCurrentView={this.props.alterCurrentView}/>
			break;
			case 'root':
			return <RootInfo previousView={previousView} alterCurrentView={this.props.alterCurrentView}/>
			break;
			case 'power':
			return <PowerInfo previousView={previousView} alterCurrentView={this.props.alterCurrentView}/>
			break;
		}

	}
	//alterChakraInfo method when run returns the respective chakra info component depending on what the value of currentChakra from props is
	 capitalizeFirstLetter(string) {
    		return string.charAt(0).toUpperCase() + string.slice(1);
		}
		//capitalizeFirstLetter method takes one string argument and returns that argument with the first letter capitalized UNUSED IN THIS COMPONENT
	render(){
		//styles
		const {viewStyle, titleStyle} = styles;
		
		return(
			<View style = {{flex:1}}>
			
			{this.alterChakraInfo()}
		{/*
		when this component is rendered the alterChakraInfo method is called and returns the respected value depending on the value of this.props.currentChakra
		*/}
			</View>
			)
	}

}

export default ShowChakra;
//exports component to be used outside this file

const styles ={
	viewStyle:{
		flex:1
	},
	titleStyle:{
		marginTop:5,
		textAlign:'center',
		letterSpacing:7,
		fontSize: 20,
	}
}
//Creates styles variable through StyleSheet.create to reduce the strain on the bridge
