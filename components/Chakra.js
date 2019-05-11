import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';


class Chakra extends Component {
	constructor(props){
		super(props);
		this.getLinearGradient = this.getLinearGradient.bind(this);
	}
	getLinearGradient(chakra){
		switch (chakra) {
			case "crown":
				return [ "rgb(206, 72, 240)","rgb(167, 21, 188)"]
			case "third":
				return ["rgb(74, 138, 212)", "rgb(34, 109, 190)"]
			case "heart":
				return ["rgb(27, 222, 40)",  "rgb(0, 186, 10)"]
			case "throat":
				return [ "rgb(113,191, 228)","rgb(153, 207, 235)"]
			case "sacral":
				return ["rgb(248, 181, 63)", "rgb(245, 187, 88)"]
			case "root":
				return ["rgb(255, 87, 81)", "rgb(249, 64, 59)"]
			case "power":
				return ["rgb(224, 230, 33)", "rgb(213, 225, 0)"]
		}
		//call inside linear gradent color prop passing in children.props.chakra 
	}

	render(){
	const {touchableOpacityStyle, viewStyle} = styles;
	// console.log(props)
	const {showChakra, children , getBackgroundColor} = this.props;
	return(
		<TouchableOpacity 
			onPress={()=>showChakra(children.props.chakra)}>
			<LinearGradient 
				colors={this.getLinearGradient(children.props.chakra)} 
				style = {touchableOpacityStyle} >
					<View style = {viewStyle}>
					{children}
					</View>
			</LinearGradient>
		</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	touchableOpacityStyle:{
		marginTop: 20, 
		marginBottom: 20,
		marginLeft: 10,
		marginRight: 10,
		borderRadius: 175,
		padding:3,
		width:350,
		height: 350,
		justifyContent:'center',
		alignItems:'center',
		borderWidth:.25,
	},
	viewStyle:{
		// width: '100%'
	}
});

export default Chakra;

// <Text style = {textStyle} > Represents Chakra </Text>