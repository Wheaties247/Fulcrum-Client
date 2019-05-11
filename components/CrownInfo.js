import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView, Image } from "react-native";
import assets from '../assets.js';
import NavButton from './NavButton';
import LinearGradient from 'react-native-linear-gradient';
import CrownSwiper from './CrownSwiper';




class CrownInfo extends Component{
	constructor(props){
		super(props);
		this.state = {}
	}
	render(){
		const data = assets.chakraData.crown;
		const { askSelfStyle, navStyle, nameStyle, infoHeader, scrollStyle, scrollText, navView, imgStyle,
		linearGradient} = styles;
		const {previousView} = this.props
		return(
			<LinearGradient 
				colors={[ "rgb(206, 72, 240)","rgb(167, 21, 188)"]} 
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
					source ={require('../images/locationCrown.png')}
					/>
				</View>
				 <CrownSwiper />				
				
			</LinearGradient>
			)
	}
}

export default CrownInfo;

const styles = StyleSheet.create({
	linearGradient:{
		flex:1, 
		padding:5
	},
	
	askSelfStyle:{
		fontSize:18
	},
	navView:{
		width:'20%',
		// backgroundColor: 'blue'
	},
	navStyle:{
		width: '100%',
		height: '7%',
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

// <Text>Location :{data.location}</Text>
// 				<ScrollView style = {scrollStyle}>
// 					<Text style = {scrollText}>{data.metaInfo}</Text>
// 				</ScrollView>
// 				<ScrollView style = {scrollStyle}>
// 					<Text>Sympotoms of Chakral Imbalance :</Text>
// 					 {data.symptoms.map((symp, i)=> <Text key= {i}>{symp},</Text>)}
// 					<Text>To rebalence this Chakra:</Text>
// 					{data.nutrition.map((symp, i)=> <Text key= {i}>{symp},</Text>)}
// 				</ScrollView>

// <View style = {titleViewStyle}>
// 						<Text style = {nameStyle}>{data.name}</Text>
// 					</View>