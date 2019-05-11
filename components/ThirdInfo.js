import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import assets from '../assets.js';
import NavButton from './NavButton';
import LinearGradient from 'react-native-linear-gradient';
import ThirdSwiper from './ThirdSwiper';

class ThirdInfo extends Component{
	constructor(props){
		super(props);
		this.state = {}
	}

	render(){
		const thirdData = assets.chakraData.third;

			const {titleViewStyle, askSelfStyle, navStyle, nameStyle, infoHeader, scrollStyle, scrollText, navView, imgStyle,
		linearGradient} = styles;
		const {previousView} = this.props
		
		return(
			<LinearGradient 
				colors={[ "rgb(74, 138, 212)", "rgb(34, 109, 190)"]} 
				 style ={linearGradient}
				 >
				<View style = {navStyle} >
				 	<View style = {navView}>
						<NavButton handleAction={()=>this.props.alterCurrentView(previousView)} />	
					</View>
					
					<Text style ={nameStyle}>
						{thirdData.name} Chakra
					</Text>
					<Image
					style = {imgStyle}
					source ={require('../images/locationThird.png')}
					/>
				</View>
				<ThirdSwiper />
				
			</LinearGradient>
			)
	}
}

export default ThirdInfo;

const styles = StyleSheet.create({
	linearGradient:{
		flex:1, 
		padding:5
	},
	titleViewStyle:{
		padding: 3,
		width: '80%'
	},
	askSelfStyle:{
		fontSize:18
	},
	navView:{
		width:'20%',
		// backgroundColor: 'blue'
	},
	navStyle:{
		// backgroundColor:'red',
		flexDirection:'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	nameStyle:{
		color:'white',
		textAlign:'center',
		fontWeight:'800'
	},
	infoHeader:{
		flexDirection:'row',
		borderWidth: 1,
		margin: 5
	},
	scrollStyle:{
		height: 50,
		borderWidth: 1,
		marginLeft: 5,
		marginRight: 5,
		backgroundColor:'orange'
	},
	scrollText:{
		textAlign: 'center',
		margin: 5
	},
	imgStyle:{
		width: 60,
		height:60
	}
})
