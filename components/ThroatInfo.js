import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import assets from '../assets.js';
import NavButton from './NavButton';
import LinearGradient from 'react-native-linear-gradient';
import ThroatSwiper from './ThroatSwiper';


class ThroatInfo extends Component{
	constructor(props){
		super(props);
		this.state = {}
	}
	render(){
		const data = assets.chakraData.throat;
		const {titleViewStyle, askSelfStyle, navStyle, nameStyle, infoHeader, scrollStyle, scrollText, navView, imgStyle,
		linearGradient} = styles;
		const {previousView} = this.props
		
		return(
			<LinearGradient 
				colors={["rgb(113,191, 228)","rgb(153, 207, 235)"]} 
				 style ={linearGradient}
				 >
				<View style = {navStyle} >
				 	<View style = {navView}>
						<NavButton handleAction={()=>this.props.alterCurrentView(previousView)} />	
					</View>
					
					<Text style ={nameStyle}>
						{data.name} Chakra
					</Text>
					<Image
					style = {imgStyle}
					source ={require('../images/locationThroat.png')}
					/>
				</View>
				 <ThroatSwiper />				
				
			</LinearGradient>
			)
	}
}

export default ThroatInfo;

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