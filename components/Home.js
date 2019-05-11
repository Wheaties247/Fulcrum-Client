import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Intro from "./Intro";
import infoTabs from "../assets.js";
import FooterNav from "./FooterNav";
import LinearGradient from "react-native-linear-gradient";
import Spinner from 'react-native-loading-spinner-overlay';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			introTabs: [],
			count: 0,
			spinner: false
		};
		this.toStats = this.toStats.bind(this);
		this.toResult = this.toResult.bind(this);
		this.toSelection = this.toSelection.bind(this);
	}

	componentDidMount() {
		this.props.getAllRecords();
	}

	toStats() {
		console.log("To Stats");
		this.props.alterCurrentView("Stats");
	}
	toSelection() {
		console.log("To Selection");
		this.props.alterCurrentView("Selection");
	}
	toResult() {
		console.log("To Result");
		this.props.alterCurrentView("Results");
	}

	render() {
		const { viewStyle, textStyle, userInfoView, userInfoContainer, loadingScreen } = styles;
		const { userInfo, records } = this.props;
		console.log(records);
		const test = false;
		const { toStats, toSelection, toResult } = this;
		// const {firstRecordDate} = records;
		// console.log(firstRecordDate)
		 const message = 'Loading ';
		 const message2 = "'s Profile...";
		 const loadingMessage =  message.concat(userInfo.username).concat(message2);
		if (records) {
			const date = records.firstRecordDate;
			const year = date.substring(0, 4);
			const month = parseInt(date.substring(5, 7)) - 1;
			const day = date.substring(8);
			console.log("year", year, "month", month, "day", day);
			const longDate = new Date(year, month, day) + "";
			console.log("longDate", longDate);

			const endSlice = longDate.indexOf(year);
			console.log("endSlice", endSlice);
			const editedLongDate = longDate.slice(0, endSlice + 4);
			console.log("editedLongDate", editedLongDate);
			const diagnosedDays = (records.daysMissed === "First day" ? null: "With ".concat(records.daysMissed).concat(" non - diagnosed days"))
			
			return (
				<LinearGradient
					colors={[
						"rgb(247, 198, 97)",
						"rgb(243, 169, 69)",
						"rgb(164, 99, 17)"
					]}
					style={viewStyle}
				>
					<View style={userInfoView}>


							<Text style={textStyle}>
								Welcome {userInfo.username}
							</Text>



							<Text style={textStyle}>You started balencing on {editedLongDate}</Text>




							<Text style={textStyle}> You have balanced for {records.recordsMade} Days
							</Text>
							<Text style={textStyle}>
							{diagnosedDays}
							</Text>

					</View>
					<FooterNav
						toResult={toResult}
						toSelection={toSelection}
						toStats={toStats}
					/>
				</LinearGradient>
			);
		} else {
			
			return (
				<LinearGradient
					colors={["rgb(247, 198, 97)", "rgb(243, 169, 69)","rgb(164, 99, 17)"]}
					style={loadingScreen}>
					<Spinner
			          visible={true}
			          textContent={loadingMessage}
			          textStyle={textStyle}/>
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

export default Home;
