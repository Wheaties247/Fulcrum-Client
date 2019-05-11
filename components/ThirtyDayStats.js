import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import StackedChart from './StackedChart';

class ThirtyDayStats extends Component{
	constructor(props){
		super(props);
		this.createBar = this.createBar.bind(this);
	}
	createBar(){
		const { allResult, alterCurrentView, passData } = this.props
		console.log(allResult, 'allResult')
		const thirtyResults = allResult.slice((allResult.length-30), (allResult.length))
		console.log('thirtyResults',thirtyResults);
		thirtyResults.reverse()
	return	thirtyResults.map( (entry, i)=>{
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
				dayStyle ='thirty' 
				key = {i}
				entry = {filteredEntries} 
				data ={entry} />
				)
		})
		
	}
render(){
	const { chartStyle} = styles;

		return(
			<ScrollView style = {chartStyle}>
			{this.createBar()}
			</ScrollView>
			) 
	}

}
export default ThirtyDayStats;

const styles = StyleSheet.create({

	chartStyle:{
		padding: 3,
		paddingTop: 15,
	}
});