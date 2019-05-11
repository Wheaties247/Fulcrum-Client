import { Platform, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import React, { Component } from "react";


class SubmitRegister extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const {buttonViewStyle, buttonTextStyle} = styles;

		return(
			<View style = {buttonViewStyle}>

				<TouchableOpacity
						onPress={()=>this.props.altButton()}
						>
								<Text style ={buttonTextStyle}>{this.props.title}</Text>
							
				</TouchableOpacity>
				<TouchableOpacity
				onPress={()=>this.props.handleSubmit(this.state)}

				>
						
							<Text style ={buttonTextStyle}>Submit</Text>
						
				</TouchableOpacity>
			</View>
			)
	}
}

export default SubmitRegister;

const styles = {
	buttonViewStyle:{
		flexDirection: 'row',
		marginBottom: 10,
		justifyContent: 'space-around'
	},
	buttonTextStyle:{
		color: 'white',
		fontWeight: '700',
		fontSize: 20
	}
}