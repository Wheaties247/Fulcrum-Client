//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView} from "react-native";
import StackedChart from './StackedChart';
//Import all components, assests, and packages used on this file


class SevenDayStats extends Component{
	constructor(props){
		super(props);
    //initialize constructor with props from React.Component

		this.createBar = this.createBar.bind(this);
	/*  Binds above method so any instances of the word "this" 
    within each method refers to the current component even 
  if it is called by another component*/
	}

	createBar(){
		const { allResult, alterCurrentView, passData } = this.props
		//deconstruct values from props
		console.log(allResult, 'allResult')
		const sevenResults = allResult.slice((allResult.length-7), (allResult.length))
		//create sevenResults variable with value equal to the last seven values of allResult array

		console.log('sevenResults',sevenResults);
		sevenResults.reverse()
		// mutates inital array by reversing it

	return	sevenResults.map( (entry, i)=>{
		// for each item in array

		const arrayOfEntries = Object.keys(entry.record)
		//create arrayOfEntries variable with value of an array of that objects properties

		const filteredEntries = []
		//create filteredEntries variable and set it to empty array

		for(let prop in entry.record){
			// for each property in the object entry.record..

			if(entry.record[prop]===true){
				filteredEntries.push(prop)
				// if the property is equal to true push that property into filteredEntries array

			}
		}
			return(
				<StackedChart 
				passData={passData}
				alterCurrentView = {alterCurrentView}
				dayStyle ='seven' 
				key = {i} 
				entry = {filteredEntries} 
				data ={entry} />

				)
			//for each entry in fiveResults array create StackedChart component with respective prop values

		})
		
	}

render(){
	const { chartStyle} = styles;
    //deconstructs respective value from variable

		return(
			<ScrollView style = {chartStyle}>
			{this.createBar()}
			{/*
				create ScrollView Component with respective style prop 
				to scroll through the returned value of StackedChart components
		*/}
			</ScrollView>
			) 
	}


}
export default SevenDayStats;
//exports component to be used outside this file

const styles = StyleSheet.create({
	chartStyle:{
		padding: 3,
		paddingTop: 15,
	}
});
//Creates styles variable through StyleSheet.create to reduce the strain on the bridge
