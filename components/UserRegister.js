import { Platform, StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { Component } from "react";
import CredentialsInput from './CredentialsInput';
import LinearGradient from 'react-native-linear-gradient';
import HoldsIntro from './HoldsIntro';
import { TextWithLetterSpacing } from './TextWithLetterSpacing';
import ForgotCreds from './ForgotCreds';
import Spinner from 'react-native-loading-spinner-overlay';

class UserRegister extends Component{
	constructor(props){
		super(props);
		this.state = {
			showRegister: false,
			showForgotCreds:false
		}
		this.showRegister = this.showRegister.bind(this);
		this.showForgotCreds = this.showForgotCreds.bind(this);
	}   
	showRegister(){
		this.setState(prevState=>{
			prevState.showRegister = !prevState.showRegister;
			this.props.clearErrors()
			return prevState
		})

	}
	showForgotCreds(){
		this.setState(prevState=>{
			prevState.showForgotCreds = !prevState.showForgotCreds;
			this.props.clearErrors()
			return prevState
		})
	}

	render(){

		const {viewStyle, titleStyle, viewTitleStyle, loadingScreen, textStyle} = styles;
		//the styles
		const {loading, loadingMessage} = this.props;
		const {showRegister, showForgotCreds} = this.state;
		// console.log(loadingMessage);
		if(loading){
			return(
				<LinearGradient
					colors={["rgb(247, 198, 97)", "rgb(243, 169, 69)","rgb(164, 99, 17)"]}
					style={loadingScreen}>
					<Spinner
			          visible={true}
			          textContent={loadingMessage}
			          textStyle={textStyle}/>
				</LinearGradient>
				);
		}
		if(showRegister){
			return(
			<LinearGradient colors={['rgb(247, 198, 97)', 'rgb(243, 169, 69)',  'rgb(164, 99, 17)']} style={viewStyle}>
				<View style = {viewTitleStyle}>
					<TextWithLetterSpacing  
					spacing = {10}
					textStyle = {titleStyle}
					>
					Register
					</TextWithLetterSpacing>
				</View>
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
				</CredentialsInput>
      		</LinearGradient>

			
			);
		}
		if(showForgotCreds){
			return(
				<ForgotCreds
				errorMessage = {this.props.errorMessage}
				errorText = {this.props.errorText} 
				forgotCreds = {this.showForgotCreds}
				forgotInfo= {this.props.forgotInfo}
				 />
				
				)
		}
		else{
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
				</CredentialsInput>
      		</LinearGradient>

			);
		}
		
	}
}

export default UserRegister;


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