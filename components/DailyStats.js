//component formated with word wrap for compactness
"use strict"
// Defines that JavaScript code should be executed in "strict mode"
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import StackedChart from "./StackedChart";
import StatButtons from "./StatButtons";
import ThreeDayStats from "./ThreeDayStats";
import FiveDayStats from "./FiveDayStats";
import SevenDayStats from "./SevenDayStats";
import FourteenDayStats from "./FourteenDayStats";
import ThirtyDayStats from "./ThirtyDayStats";
import LinearGradient from "react-native-linear-gradient";
import ChartEntry from "./ChartEntry";
import ChartIndex from "./ChartIndex";
//Import all components, assests, and packages used on this file

class DailyStats extends Component {
  //initialize component

	constructor(props) {
		super(props);
    //initialize constructor with props from React.Component

		this.state = {
			three: true,
			five: false,
			seven: false,
			fourteen: false,
			thirty: false
		};
    // creates state for component

		this.threeDay = this.threeDay.bind(this);
		this.fiveDay = this.fiveDay.bind(this);
		this.sevenDay = this.sevenDay.bind(this);
		this.fourteenDay = this.fourteenDay.bind(this);
		this.thirtyDay = this.thirtyDay.bind(this);
		// this.createBar = this.createBar.bind(this);
	/*  Binds above methods so any instances of the word "this" 
		within each method refers to the current component even 
	if it is called by another component*/
	}


	threeDay() {
		console.log("threeDay");
		this.setState({
			three: true,
			five: false,
			seven: false,
			fourteen: false,
			thirty: false
		});
	}
	/*
		threeDay method sets the state of component to resepective property values
	*/
	fiveDay() {
		console.log("fiveDay");
		this.setState({
			three: false,
			five: true,
			seven: false,
			fourteen: false,
			thirty: false
		});
	}
	/*
		fiveDay method sets the state of component to resepective property values
	*/
	sevenDay() {
		console.log("sevenDay");
		this.setState({
			three: false,
			five: false,
			seven: true,
			fourteen: false,
			thirty: false
		});
	}
	/*
		sevenDay method sets the state of component to resepective property values
	*/
	fourteenDay() {
		console.log("fourteenDay");
		this.setState({
			three: false,
			five: false,
			seven: false,
			fourteen: true,
			thirty: false
		});
	}
	/*
		fourteenDay method sets the state of component to resepective property values
	*/
	thirtyDay() {
		console.log("thirtyDay");
		this.setState({
			three: false,
			five: false,
			seven: false,
			fourteen: false,
			thirty: true
		});
	}
	/*
		thirtyDay method sets the state of component to resepective property values
	*/
	render() {
		const { indexView, textStyle, statView } = styles;
		const { three, five, seven, fourteen, thirty } = this.state;
		const { allResult, alterCurrentView, passData } = this.props;
		const { state } = this;
    //deconstructs respective values from respective variables

		const results = allResult.results
		//creates results variable and set value to allResult.results

		return (
			<LinearGradient
				colors={["rgb(159, 92, 20)", "rgb(113, 65, 14)"]}
				style={{ flex: 1 }}
			>
						{/* 
    LinearGradient component takes an array of rgb values  to create a gradient from one color to the next with respective style prop passed in
    */}

				<StatButtons
					state={state}
					allResult={allResult.results}
					threeDay={this.threeDay}
					fiveDay={this.fiveDay}
					sevenDay={this.sevenDay}
					fourteenDay={this.fourteenDay}
					thirtyDay={this.thirtyDay}
				/>
			{/*
			create StatButtons component with respective props passed in to display buttons to change the number of records to be shown
			*/}
				<View style={indexView}>
					<Text style={textStyle}>Key :</Text>
					<ChartIndex entry="Imalanced" gradient={false} />
					<ChartIndex entry="Balanced" gradient={true} />
				{/*
				create View, Text, and ChartIndex component with respective props to display the key for the balenced and unbalenced chakras 
				*/}
				</View>
				<View style={statView}>
				{/*
				create View component with respective props to display respective day Stat component
				*/}
					{three ? (
						<ThreeDayStats 
						passData={passData}
						alterCurrentView={alterCurrentView} 
						allResult={results} />
					) : null}
					{five ? (
						<FiveDayStats 
						passData={passData}
						alterCurrentView={alterCurrentView} 
						allResult={results} />
					) : null}
					{seven ? (
						<SevenDayStats 
						passData={passData}
						alterCurrentView={alterCurrentView} 
						allResult={results} />
					) : null}
					{fourteen ? (
						<FourteenDayStats 
						passData={passData}
						alterCurrentView={alterCurrentView} 
						allResult={results} />
					) : null}
					{thirty ? (
						<ThirtyDayStats 
						passData={passData}
						alterCurrentView={alterCurrentView} 
						allResult={results} />
					) : null}
					{/*
						create ternary operator for each value in components state
						to render respective Stat component if true and nothing if false
						*/}
				</View>
			</LinearGradient>
		);
	}
}

export default DailyStats;
//exports component to be used outside this file


const styles = StyleSheet.create({
	textStyle: {
		color: "white",
		fontWeight: "800"
	},
	indexView: {
		flexDirection: "row",
		justifyContent: "space-around"
	},
	statView:{
		// flex:1,
		// height:'100%',
		marginBottom:50,
		paddingBottom:50
	}
});
//Creates styles variable through StyleSheet.create to reduce the strain on the bridge
