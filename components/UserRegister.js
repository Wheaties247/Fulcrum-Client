//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"

import { Platform, StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { Component } from "react";
import CredentialsInput from './CredentialsInput';
import LinearGradient from 'react-native-linear-gradient';
import HoldsIntro from './HoldsIntro';
import { TextWithLetterSpacing } from './TextWithLetterSpacing';
import ForgotCreds from './ForgotCreds';
import Spinner from 'react-native-loading-spinner-overlay';
//Import all components and packages used on this file


class UserRegister extends Component{
  //initialize component

	constructor(props){
		super(props);
    //initialize constructor with props from React.Component

		this.state = {
			showRegister: false,
			showForgotCreds:false
		}
    // creates state for component

		this.showRegister = this.showRegister.bind(this);
		this.showForgotCreds = this.showForgotCreds.bind(this);
    // Binds above methods so any instances of the word "this" within each method refers to the current component even if it is called by another component

	}   
	showRegister(){

		this.setState(prevState=>{
			prevState.showRegister = !prevState.showRegister;
			this.props.clearErrors()
			return prevState
		})

	}
	//showRegister method toggles the value of showRegister on the components state between true and false and calls clearErrors function thru props from app to clear errors after toggling effect
	showForgotCreds(){
		this.setState(prevState=>{
			prevState.showForgotCreds = !prevState.showForgotCreds;
			this.props.clearErrors()
			return prevState
		})
	}
	//showForgotCreds method toggles the value of showForgotCreds on the components state between true and false and calls clearErrors function thru props from app to clear errors after toggling effect

	render(){
      //render method returns components to be displayed by current component

		const {viewStyle, titleStyle, viewTitleStyle, loadingScreen, textStyle} = styles;
		const {loading, loadingMessage} = this.props;
		const {showRegister, showForgotCreds} = this.state;
    //deconstructs respective values from respective variables

		if(loading){
			//if loading is a "truthy" value
			return(
				<LinearGradient
					colors={["rgb(247, 198, 97)", "rgb(243, 169, 69)","rgb(164, 99, 17)"]}
					
					style={loadingScreen}>
					{/* 
    create LinearGradient component with respective rgb values
    */}
					<Spinner
			          visible={true}
			          textContent={loadingMessage}
			          textStyle={textStyle}/>
			          {/* 
			    create Spinner component with respective prop values
			    */}
				</LinearGradient>
				);
		}
		if(showRegister){
			// if showRegister is a "truthy" value
			return(
			<LinearGradient colors={['rgb(247, 198, 97)', 'rgb(243, 169, 69)',  'rgb(164, 99, 17)']} style={viewStyle}>
			{/* 
    create LinearGradient component with respective rgb values and style props
    */}
				<View style = {viewTitleStyle}>
					<TextWithLetterSpacing  
					spacing = {10}
					textStyle = {titleStyle}
					>
					Register
					</TextWithLetterSpacing>
				</View>
				{/* 
			    create View 
			    and TextWithLetterSpacing component to emulate word padding 
			    with respective style props
			    */}

				<CredentialsInput
				handleSubmit= {this.props.register}
				passwordConfirm = {true} 
				errorMessage = {this.props.loginError}
				errorText ={this.props.errorText} 
				altButton = {this.showRegister}
				forgotCreds = {this.showForgotCreds}
				title = "Login"
				>
					<HoldsIntro/>
					{/* 
			    create CredentialsInput component with respective props and pass  HoldsIntro component as its child prop
			    */}
				</CredentialsInput>
      		</LinearGradient>

			
			);
		}
		if(showForgotCreds){
			// showForgotCreds is "truthy"
			return(
				<ForgotCreds
				errorMessage = {this.props.errorMessage}
				errorText = {this.props.errorText} 
				forgotCreds = {this.showForgotCreds}
				forgotInfo= {this.props.forgotInfo}
				 />
				/* 
			    create ForgotCreds component with respective props and pass 
			    */
				)
		}
		else{
			//if all above if statements are false 
			return(
			<LinearGradient colors={['rgb(247, 198, 97)', 'rgb(243, 169, 69)',  'rgb(164, 99, 17)']} style={viewStyle}>
			<View style = {viewTitleStyle}>
					<TextWithLetterSpacing  
					spacing = {10}
					textStyle = {titleStyle}
					>
					Login
					</TextWithLetterSpacing>

				</View>
				{/* 
			    create View 
			    and TextWithLetterSpacing component to emulate word padding 
			    with respective style props
			    */}
				<CredentialsInput
				handleSubmit= {this.props.login}
				passwordConfirm = {false} 
				errorMessage = {this.props.loginError}
				errorText ={this.props.errorText} 
				altButton = {this.showRegister}
				forgotCreds = {this.showForgotCreds}
				title = "Register"
				>
					<HoldsIntro/>
					{/* 
			    create CredentialsInput component with respective props and pass  HoldsIntro component as its child prop
			    */}
				</CredentialsInput>
      		</LinearGradient>

			);
		}
		
	}
}

export default UserRegister;
//exports component to be used outside this file


const styles = StyleSheet.create( {
	viewStyle: {
		flex: 1,
		// backgroundColor: "rgb(186, 188, 188)"
	},
	viewTitleStyle:{
		alignItems: 'center',
		padding: 20
	},
	titleStyle: {
		fontSize: 25,
		fontWeight: '700',
		color: 'white'
	},
	loadingScreen: {
		flex: 1,
		justifyContent: "center",
		alignItems:'center'
	},
	textStyle: {
		fontSize: 20,
		padding: 10,
		textAlign: "center",
		fontWeight: "900",
		color: "white"
	}

})
//Creates styles variable through StyleSheet.create to reduce the strain on the bridge
