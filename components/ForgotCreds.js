//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"
import { Platform, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { TextWithLetterSpacing } from './TextWithLetterSpacing';
import LinearGradient from 'react-native-linear-gradient';
//Import all components, assests, and packages used on this file

class ForgotCreds extends Component{
  //initialize component

	constructor(props){
		super(props);
    //initialize constructor with props from React.Component

		this.state = {
			email: null,
			emailConfirm: null
		}
    // creates state for component
	
	}
	render(){
		const  {touchableStyle, linearGradient, buttonTextStyle, viewStyle, buttonViewStyle, inputStyle} = styles 
		const {email, emailConfirm} = this.state;
    //deconstructs respective values from respective variables

		return(
			<LinearGradient colors={['rgb(247, 198, 97)', 'rgb(243, 169, 69)',  'rgb(164, 99, 17)']} style={viewStyle}>
			{/* 
    LinearGradient component takes an array of rgb values to create a gradient from one color to the next with respective style prop passed in
    */}
				<Text>Forgot Creds</Text>

				<TextInput 
					style = {inputStyle}
					placeholder = 'Email' 
					onChangeText={(text) => this.setState({email:text})} 
					/>
					<TextInput 
					style = {inputStyle}
					placeholder = 'Confirm Email' 
					onChangeText={(text) => this.setState({emailConfirm:text})} 
					/>
					{/*
					create TextInput for Email and Confirm Email entry with onChangeText prop to copy the content of the feild into the respective properties in state whenever there is a change made to the feild
				*/}
					{this.props.errorMessage? this.props.errorText: null}
					{/*
						create ternary operator on this.props.errorMessage statement to render this.props.errorText if true and nothing if false
						*/}
				<View 
				style = {buttonViewStyle}
				>
				{/*
						create View Component with respective style prop to contain following components
						*/}
					<TouchableOpacity
					onPress={()=>this.props.forgotCreds()}
					style = {touchableStyle}
					>
						<LinearGradient 
							colors={['#4c669f', '#3b5998', '#192f6a']}  
							style={linearGradient}
							>	
								<TextWithLetterSpacing 
								textStyle ={buttonTextStyle}
								spacing={5}
								>
								Back
								{/*
						create TouchableOpacity and TextWithLetterSpacing component with onPress prop that calls this.props.forgotCreds from UserRegister component to toggle show ForgotCreds component or not
						*/}
								</TextWithLetterSpacing>	
						</LinearGradient>
					</TouchableOpacity>
					<TouchableOpacity
					onPress={()=>this.props.forgotInfo(email, emailConfirm)}
					style = {touchableStyle}
					>
						<LinearGradient 
							colors={['rgb(79, 191, 75)', 'rgb(13, 121, 13)', 'rgb(23, 129, 88)' ]}  
							style={linearGradient}
							>	
								<TextWithLetterSpacing 
								textStyle ={buttonTextStyle}
								spacing={5}
								>
								Submit
								{/*
						create TouchableOpacity component with submit as button text with onPress prop that calls this.props.forgotInfo with email and emailConfirm as arguments (from state) from App component to subimit forgotInfo server request
						*/}
								</TextWithLetterSpacing>
						</LinearGradient>
					</TouchableOpacity>
				</View>
      		</LinearGradient>
			)

	}
}
export default ForgotCreds;
//exports component to be used outside this file

const styles = StyleSheet.create({
	inputStyle:{
		color:'white',
		borderBottomWidth: 3,
		width: '70%',
		height: 50,
		textAlign:'center',
		fontSize: 20,
		fontWeight: '900',
		letterSpacing: 15
	},
	buttonViewStyle:{
		flexDirection: 'row',
		marginBottom: 10,
		justifyContent: 'space-around'
	},
	viewStyle: {
		flex: 1
	},
	buttonTextStyle:{
		color: 'white',
		fontWeight: '700',
		fontSize: 20
	},
	linearGradient:{
		borderWidth: 1,
		borderRadius: 15,
		borderColor: 'rgb(76, 76, 76)',
		padding: 10,
		width: '100%',
		alignItems:'center',
		justifyContent:'center'
	},
	touchableStyle:{
		width: '40%',
	}
})
//Creates styles variable through StyleSheet.create to reduce the strain on the bridge
