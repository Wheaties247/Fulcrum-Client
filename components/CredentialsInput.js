import { Platform, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import LinearGradient from 'react-native-linear-gradient';
import { TextWithLetterSpacing } from './TextWithLetterSpacing';

class CredentialsInput extends Component{
	constructor(props){
		super(props);
		this.state = {
			username: null,
			password: null,
			passwordConfirm: null
		}
	}

	render(){
		const {buttonViewStyle, viewStyle, inputStyle, inputViewStyle, buttonStyle, buttonTextStyle, linearGradient, touchableStyle} = styles;
		return(
			<View 
			style = {viewStyle}
			>
				<View 
				style = {inputViewStyle}
				>
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
						<Text> 
					{this.props.errorMessage? this.props.errorText: null}
						</Text>
					{!this.props.passwordConfirm ? 
					<TouchableOpacity
					onPress={()=>this.props.forgotCreds()}
					>
						<TextWithLetterSpacing 
								textStyle ={buttonTextStyle}
								spacing={5}
								>
								Forgot credentials?
						</TextWithLetterSpacing>
					</TouchableOpacity>
					 : null}
				</View>
				
				{this.props.passwordConfirm ? this.props.children : null}
				<View 
				style = {buttonViewStyle}
				>
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
								</TextWithLetterSpacing>
						</LinearGradient>
					</TouchableOpacity>
				</View>
			</View>
			);
	}
}

export default CredentialsInput;

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