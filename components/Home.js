
//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"
import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import infoTabs from "../assets.js";
import FooterNav from "./FooterNav";
import LinearGradient from "react-native-linear-gradient";
import Spinner from 'react-native-loading-spinner-overlay';
//Import all components, assests, and packages used on this file

class Home extends Component {
  //initialize component
	constructor(props) {
    //initialize constructor with props from React.Component

		super(props);
		this.state = {
			introTabs: [],
			count: 0,
			spinner: false
		};
    // creates state for component

		this.toStats = this.toStats.bind(this);
		this.toResult = this.toResult.bind(this);
		this.toSelection = this.toSelection.bind(this);
		/*  Binds above methods so any instances of the word "this" 
    within each method refers to the current component even 
  if it is called by another component*/
	}

	componentDidMount() {
		this.props.getAllRecords();
	}
	//componentDidMount lifecycle method calls getAllRecords from the App component before the render method of this component

	toStats() {
		console.log("To Stats");
		this.props.alterCurrentView("Stats");
	}
	// toStats method calls alterCurrentView from App component to change view Stats component
	toSelection() {
		console.log("To Selection");
		this.props.alterCurrentView("Selection");
	}
	// toSelection method calls alterCurrentView from App component to change view Selection component

	toResult() {
		console.log("To Result");
		this.props.alterCurrentView("Results");
	}
	// toResult method calls alterCurrentView from App component to change view to Results component

	render() {
		const { viewStyle, textStyle, userInfoView, userInfoContainer, loadingScreen } = styles;
		const { userInfo, records } = this.props;
		console.log(records);
		const test = false;
		const { toStats, toSelection, toResult } = this;
    //deconstructs respective values from respective variables

		// const {firstRecordDate} = records;
		// console.log(firstRecordDate)
		 const message = 'Loading ';
		 //create variable message equal to value 'Loading '
		 const message2 = "'s Profile...";
		 //create variable message2 equal to value "'s Profile..."

		 const loadingMessage =  message.concat(userInfo.username).concat(message2);
		 //create variable loadingMessage equal to value of message + userInfo.username + message2

		if (records) {
			// If records is "truthy"
			const date = records.firstRecordDate;
			// create variable date with value equal to records.firstRecordDate
			if (date){
				const year = date.substring(0, 4);
				// create variable year with value equal the substring between index postion 0 and 4

				const month = parseInt(date.substring(5, 7)) - 1;
				// create variable month with value equal the substring between index postion 5 and 7, converted to an integer, then subtract one

				const day = date.substring(8);
				// create variable day with value equal to the substring between index postion 8 to the end of the string

				console.log("year", year, "month", month, "day", day);
				const longDate = new Date(year, month, day) + "";
				// create variable longDate with value equal to new Date(year, month, day) converted to a string

				console.log("longDate", longDate);

				const endSlice = longDate.indexOf(year);
				//create variable endSlice with value equal to the index of the year in longDate
				console.log("endSlice", endSlice);
				const editedLongDate = longDate.slice(0, endSlice + 4);
				//create variable editedLongDate with value equal to longDate substring between indexes  0 and 4 
				console.log("editedLongDate", editedLongDate);
			}
			
			const diagnosedDays = (records.daysMissed === "First day" ? null: "With ".concat(records.daysMissed).concat(" non - diagnosed days"))
			//create variable diagnosedDays with value equal to the return value of the terneray operator with regards to the statement records.daysMissed === "First day"; if true return null if false return "With" + records.daysMissed + " non - diagnosed days"
			return (
				<LinearGradient
					colors={[
						"rgb(247, 198, 97)",
						"rgb(243, 169, 69)",
						"rgb(164, 99, 17)"
					]}
					style={viewStyle}
				>
				 {/* 
		    LinearGradient component takes an array of rgb values to create a gradient from one color to the next with respective style prop passed in
		    */}
					<View style={userInfoView}>
							{/*
				create a View component with respective style property
			*/}

							<Text style={textStyle}>
								Welcome {userInfo.username}
							</Text>



							<Text style={textStyle}>You started balencing on {editedLongDate}</Text>




							<Text style={textStyle}> You have balanced for {records.recordsMade} Days
							</Text>
							<Text style={textStyle}>
							{diagnosedDays}
							</Text>
{/*
 create three Text components with respective style props Welcoming User with ,
 showing how long they have been using the app,
 as well as showing the number of days that records were created for this user
*/}
					</View>
					<FooterNav
						toResult={toResult}
						toSelection={toSelection}
						toStats={toStats}
					/>
				{/*
				create FooterNav component with respective props
				*/}
				</LinearGradient>
			);
		} else {
			//if record is "falsy"
			return (
				<LinearGradient
					colors={["rgb(247, 198, 97)", "rgb(243, 169, 69)","rgb(164, 99, 17)"]}
					style={loadingScreen}>
					{/* 
				    LinearGradient component takes an array of rgb values to create a gradient from one color to the next with respective style prop passed in
				    */}
					<Spinner
			          visible={true}
			          textContent={loadingMessage}
			          textStyle={textStyle}/>
			      {/*
					create Spinner component with the respective props
			      */}
				</LinearGradient>
			);
		}
	}
}

const styles = StyleSheet.create({
	viewStyle: {
		flex: 1,
		justifyContent: "center",
		padding: 20,
		justifyContent: "flex-end"
	},
	loadingScreen: {
		flex: 1,
		justifyContent: "center",
		alignItems:'center'
	},
	userInfoContainer: {
		width: '100%',
		borderWidth: 1,
		margin:3
	},
	userInfoView: {
		alignItems: "center",
		flexGrow: 4,
		flexWrap: 'wrap',
		justifyContent:'space-around'
	},
	textStyle: {
		fontSize: 20,
		padding: 10,
		textAlign: "center",
		fontWeight: "900",
		color: "white"
	}
});
//Creates styles variable through StyleSheet.create to reduce the strain on the bridge

export default Home;
//exports component to be used outside this file

