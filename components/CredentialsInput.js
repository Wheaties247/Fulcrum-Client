//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"
import { Platform, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import LinearGradient from 'react-native-linear-gradient';
import { TextWithLetterSpacing } from './TextWithLetterSpacing';
//Import all components, assests, and packages used on this file


class CredentialsInput extends Component{
  //initialize component

	constructor(props){
    //initialize constructor with props from React.Component

		super(props);
		this.state = {
			username: null,
			password: null,
			passwordConfirm: null
		}
    // creates state for component

	}

	render(){
		const {buttonViewStyle, viewStyle, inputStyle, inputViewStyle, buttonStyle, buttonTextStyle, linearGradient, touchableStyle} = styles;
    //deconstructs respective values from styles

		return(
			<View 
			style = {viewStyle}
			>
		{/*
			create View Component with respective style prop to contain following components
		*/}
				<View 
				style = {inputViewStyle}
				>
			{/*
				create View Component with respective style prop to contain following components
			*/}
					<TextInput 
					style = {inputStyle}
					placeholder = 'Username' 
					onChangeText={(text) => this.setState({username:text})} 
					/>

					<TextInput 
					style = {inputStyle}
					placeholder = 'Password' 
					secureTextEntry={true} 
					type ='password'
					onChangeText={(text) => this.setState({password:text})}
					/>	
				{/*
					create TextInput for username and password entry with onChangeText prop to copy the content of the feild into the respective properties in state whenever there is a change made to the feild
				*/}
					{this.props.passwordConfirm ? 
						<TextInput 
							style = {inputStyle}
							secureTextEntry={true}
							placeholder = 'Password Confirm' 
							type ='password' 
							onChangeText={(text) => this.setState({passConfirm:text})}
							/> : null}	
					{this.props.passwordConfirm ? 
						<TextInput 
							style = {inputStyle}
							placeholder = 'Recovery E-mail' 
							onChangeText={(text) => this.setState({email:text})}
							/> : null}
					{this.props.passwordConfirm ? 
						<TextInput 
							style = {inputStyle}
							placeholder = 'Confirm E-mail' 
							onChangeText={(text) => this.setState({emailConfirm:text})}
							/> : null}
						{/*
						create ternary operator on this.props.passwordConfirm statement to render three textInput components if true and nothing if false
						*/}
						<Text> 
					{this.props.errorMessage? this.props.errorText: null}
						</Text>
						{/*
						create ternary operator on this.props.errorMessage statement to render this.props.errorText if true and nothing if false
						*/}
					{!this.props.passwordConfirm ? 
					<TouchableOpacity
					onPress={()=>this.props.forgotCreds()}
					>
						<TextWithLetterSpacing 
								textStyle ={buttonTextStyle}
								spacing={5}
								>
								Forgot credentials?
								{/*
						create TouchableOpacity and TextWithLetterSpacing component with onPress prop that calls this.props.forgotCreds from UserRegister component to toggle show ForgotCreds component or not
						*/}
						</TextWithLetterSpacing>
					</TouchableOpacity>
					 : null}
					 {/*
						create ternary operator on this.props.passwordConfirm statement to render TouchableOpacity component (Forgot credentials button) with onPress prop that calls this.props.forgotCreds from UserRegister component if true and nothing if false
						*/}
				</View>
				
				{this.props.passwordConfirm ? this.props.children : null}
				{/*
						create ternary operator on this.props.passwordConfirm statement to render this.props.children (HoldsIntro component) if true and nothing if false
						*/}
				<View 
				style = {buttonViewStyle}
				>
				{/*
						create View Component with respective style prop to contain following components
						*/}
					<TouchableOpacity
						onPress={()=>this.props.altButton()}
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
								{this.props.title}

								{/*
						create TouchableOpacity and TextWithLetterSpacing component with this.props.title as button text with onPress prop that calls this.props.altButton from UserRegister component to toggle login or register
						*/}
								</TextWithLetterSpacing>	
						</LinearGradient>
					</TouchableOpacity>
					<TouchableOpacity
					onPress={()=>this.props.handleSubmit(this.state)}
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
						create TouchableOpacity component with submit as button text with onPress prop that calls this.props.handleSubmit with this.state as argument from UserRegister component to subimit login or register 
						*/}
								</TextWithLetterSpacing>
						</LinearGradient>
					</TouchableOpacity>
				</View>
			</View>
			);
	}
}

export default CredentialsInput;
//exports component to be used outside this file

const styles = StyleSheet.create({
	viewStyle:{
		flex:1,
		justifyContent: 'space-between'
	},
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
	inputViewStyle:{
		alignItems:'center'
	},
	buttonViewStyle:{
		flexDirection: 'row',
		marginBottom: 10,
		justifyContent: 'space-around'
	},
	buttonStyle:{
		color: 'white',
		fontWeight: '700',
		fontSize: 20
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
