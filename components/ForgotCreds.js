import { Platform, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { TextWithLetterSpacing } from './TextWithLetterSpacing';
import LinearGradient from 'react-native-linear-gradient';

class ForgotCreds extends Component{
	constructor(props){
		super(props);
		this.state = {
			email: null,
			emailConfirm: null
		}
	}
	render(){
		const  {touchableStyle, linearGradient, buttonTextStyle, viewStyle, buttonViewStyle, inputStyle} = styles 
		const {email, emailConfirm} = this.state;
		return(
			<LinearGradient colors={['rgb(247, 198, 97)', 'rgb(243, 169, 69)',  'rgb(164, 99, 17)']} style={viewStyle}>
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
					{this.props.errorMessage? this.props.errorText: null}
				<View 
				style = {buttonViewStyle}
				>
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
								</TextWithLetterSpacing>
						</LinearGradient>
					</TouchableOpacity>
				</View>
      		</LinearGradient>
			)

	}
}
export default ForgotCreds;

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