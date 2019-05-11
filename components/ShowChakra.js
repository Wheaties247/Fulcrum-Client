import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import CrownInfo from './CrownInfo';
import ThirdInfo from './ThirdInfo';
import HeartInfo from './HeartInfo';
import ThroatInfo from './ThroatInfo';
import SacralInfo from './SacralInfo';
import RootInfo from './RootInfo';
import PowerInfo from './PowerInfo';



class ShowChakra extends Component{
	constructor(props){
		super(props);
		this.state = {}
		this.alterChakraInfo = this.alterChakraInfo.bind(this);
		this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this);
	}

	alterChakraInfo(){
		const {currentChakra, previousView} = this.props;

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
	 capitalizeFirstLetter(string) {
    		return string.charAt(0).toUpperCase() + string.slice(1);
		}

	render(){
		//styles
		const {viewStyle, titleStyle} = styles;
		
		return(
			<View style = {{flex:1}}>
			
			{this.alterChakraInfo()}
			</View>
			)
	}

}

export default ShowChakra;

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
