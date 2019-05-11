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

class DailyStats extends Component {
	constructor(props) {
		super(props);
		this.state = {
			three: true,
			five: false,
			seven: false,
			fourteen: false,
			thirty: false
		};
		this.threeDay = this.threeDay.bind(this);
		this.fiveDay = this.fiveDay.bind(this);
		this.sevenDay = this.sevenDay.bind(this);
		this.fourteenDay = this.fourteenDay.bind(this);
		this.thirtyDay = this.thirtyDay.bind(this);
		// this.createBar = this.createBar.bind(this);
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
	render() {
		const { indexView, textStyle, statView } = styles;
		const { three, five, seven, fourteen, thirty } = this.state;
		const { allResult, alterCurrentView, passData } = this.props;
		const { state } = this;
		const results = allResult.results

		return (
			<LinearGradient
				colors={["rgb(159, 92, 20)", "rgb(113, 65, 14)"]}
				style={{ flex: 1 }}
			>
				<StatButtons
					state={state}
					allResult={allResult.results}
					threeDay={this.threeDay}
					fiveDay={this.fiveDay}
					sevenDay={this.sevenDay}
					fourteenDay={this.fourteenDay}
					thirtyDay={this.thirtyDay}
				/>
				<View style={indexView}>
					<Text style={textStyle}>Key :</Text>
					<ChartIndex entry="Imalanced" gradient={false} />
					<ChartIndex entry="Balanced" gradient={true} />
				</View>
				<View style={statView}>
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
				</View>
			</LinearGradient>
		);
	}
}

export default DailyStats;

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
