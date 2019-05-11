import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView  } from "react-native";
import StackedChart from './StackedChart';

class FiveDayStats extends Component{
	constructor(props){
		super(props);
		this.createBar = this.createBar.bind(this);
	}
	createBar(){
		const { allResult, alterCurrentView, passData } = this.props
		console.log(allResult, 'allResult')
		const fiveResults = allResult.slice((allResult.length-5), (allResult.length))
		console.log('fiveResults',fiveResults);
		fiveResults.reverse();
	return	fiveResults.map( (entry, i)=>{
		const arrayOfEntries = Object.keys(entry.record)
		const filteredEntries = []
		for(let prop in entry.record){
			if(entry.record[prop]===true){
				filteredEntries.push(prop)
			}
		}
			return(
				<StackedChart 
				passData={passData}
				alterCurrentView = {alterCurrentView}
				dayStyle ='five' 
				key = {i} 
				entry = {filteredEntries} 
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
export default FiveDayStats;

const styles = StyleSheet.create({
chartStyle:{
		padding: 3,
		paddingTop: 15,
	}
});
