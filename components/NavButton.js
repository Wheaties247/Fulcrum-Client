import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import LocalImage from './LocalImage';

const NavButton = (props) =>{
	const {handleAction, children} = props;
	const {touchableOpacityStyle} = styles;
	return(
		<TouchableOpacity style={touchableOpacityStyle}
		onPress={handleAction}>
			<Image
	         style={{width: 18, height: 30}}
	          source={require('../images/back.png')}
	        />
		</TouchableOpacity>
		)
}

export default NavButton;

const styles = {
	touchableOpacityStyle: {
		flex:1,
    	borderRadius:10,
    	padding: 20,
    	// margin: 10,
    	// width: '18%',
    	alignItems: 'center',
    	justifyContent:'center',
		// backgroundColor: 'blue'

  	}
}