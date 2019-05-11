import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import StackedChart from './StackedChart';

class ThreeDayStats extends Component{
	constructor(props){
		super(props);
		this.createBar = this.createBar.bind(this);

	}

	createBar(){
		const { allResult, alterCurrentView, passData } = this.props
		console.log(allResult, 'allResult')
		const threeResults = allResult.slice((allResult.length-3), (allResult.length))
		console.log('threeResults', threeResults)
		threeResults.reverse();
	return	threeResults.map( (entry, i)=>{
		const arrayOfEntries = Object.keys(entry.record)
		const filteredEntries = []
		for(let prop in entry.record){
			if(entry.record[prop]===true){
				filteredEntries.push(prop)
			}
		}
			return(
				<StackedChart 
				dayStyle ='three' 
				key = {i} 
				entry = {filteredEntries} 		
				passData={passData}
				alterCurrentView={alterCurrentView}
				data ={entry} />
				)
		})
		
	}
	render(){
	const { chartStyle} = styles;


		return(
			<ScrollView  style = {chartStyle}>
			{this.createBar()}
			</ScrollView>
			) 
	}

}
export default ThreeDayStats;

const styles = StyleSheet.create({
	chartStyle:{
		padding: 3,
		paddingTop: 15,
	}
});
 